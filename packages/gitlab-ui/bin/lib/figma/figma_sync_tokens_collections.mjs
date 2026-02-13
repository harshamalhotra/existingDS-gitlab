import { resolveValue, getVariableType } from './figma_sync_tokens_utilities.mjs';
import {
  extractExistingOrder,
  mergeVariableOrder,
  generateOrderedVariableIds,
} from './figma_sync_tokens_order.mjs';

/**
 * Reorder variables in a collection if new variables were created
 * @param {Array} creates - Array of created variable objects
 * @param {Array} existingOrder - Existing variable order
 * @param {FigmaClient} client - Figma API client
 * @param {string} collectionId - Collection ID to reorder
 * @returns {Promise<void>}
 */
// eslint-disable-next-line max-params
async function reorderVariablesInExistingOrder(creates, existingOrder, client, collectionId) {
  if (creates.length > 0) {
    const newVariableNames = creates.map((c) => c.name);
    const desiredOrder = mergeVariableOrder(existingOrder, newVariableNames);
    const orderedIds = generateOrderedVariableIds(desiredOrder, client.variables);

    if (orderedIds.length > 0) {
      await client.reorderCollection(collectionId, orderedIds);
    }
  }
}

/**
 * Sync constants collection
 * @param {FigmaClient} client - Figma API client
 * @param {Map} tokens - Flattened tokens
 * @returns {Promise<Object>} Object with variablesCreated count
 */
export async function syncConstants(client, tokens) {
  console.log('\n=== Syncing Constants ===');

  // Refresh to get correct collection/mode IDs
  await client.fetchVariables();

  const collection = client.getCollection('Constants');
  const mode = collection.modes[0];

  if (!mode) {
    throw new Error('No modes in Constants collection');
  }

  // Extract existing order before creating new variables
  const existingOrder = extractExistingOrder(collection, client.variables);

  const creates = [];
  const modeValues = [];

  // Create variables
  tokens.forEach((token, name) => {
    const existing = client.getVariable(name);

    if (!existing) {
      const type = getVariableType(token.$type);
      const scopes = token.$extensions?.['com.figma.scopes'];
      const variableChange = {
        action: 'CREATE',
        name,
        type,
        resolvedType: type,
        description: token.$description,
        variableCollectionId: collection.id,
      };

      if (scopes && Array.isArray(scopes)) {
        variableChange.scopes = scopes;
      }

      creates.push(variableChange);
    }
  });

  // Send creates
  if (creates.length > 0) {
    console.log(`Creating ${creates.length} variables...`);
    await client.batchRequest(creates, 'variables');
    await client.fetchVariables();
  }

  // Set values
  tokens.forEach((token, name) => {
    const value = resolveValue(token, tokens, client.variables, name);
    const variable = client.getVariable(name);

    if (variable) {
      // Only sync if variable belongs to this collection
      if (variable.variableCollectionId !== collection.id) {
        console.warn(
          `Skipping ${name}: belongs to different collection (${variable.variableCollectionId} vs ${collection.id})`,
        );
        return;
      }

      modeValues.push({
        variableId: variable.id,
        modeId: mode.modeId,
        value,
      });
    }
  });

  if (modeValues.length > 0) {
    console.log(`Setting ${modeValues.length} variable values...`);
    await client.batchRequest(modeValues, 'variableModeValues');
  }

  // Reorder variables if new ones were created
  await reorderVariablesInExistingOrder(creates, existingOrder, client, collection.id);

  return { variablesCreated: creates.length };
}

/**
 * Sync mode collection (light and dark modes)
 * @param {FigmaClient} client - Figma API client
 * @param {Map} lightTokens - Light mode tokens
 * @param {Map} darkTokens - Dark mode tokens
 * @returns {Promise<Object>} Object with variablesCreated count
 */
export async function syncMode(client, lightTokens, darkTokens) {
  console.log('\n=== Syncing Mode ===');
  const collection = client.getCollection('Mode');

  const lightMode = collection.modes.find(
    (m) => m.name.toLowerCase() === 'default' || m.name.toLowerCase() === 'light',
  );
  const darkMode = collection.modes.find((m) => m.name.toLowerCase() === 'dark');

  if (!lightMode || !darkMode) {
    throw new Error('Mode collection must have "default" and "dark" modes');
  }

  // Extract existing order before creating new variables
  const existingOrder = extractExistingOrder(collection, client.variables);

  const creates = [];
  const modeValues = [];

  // Get union of all token names
  const allTokenNames = new Set([...lightTokens.keys(), ...darkTokens.keys()]);

  // Create variables
  allTokenNames.forEach((name) => {
    const token = lightTokens.get(name) || darkTokens.get(name);
    const existing = client.getVariable(name);

    if (!existing) {
      const type = getVariableType(token.$type);
      const scopes = token.$extensions?.['com.figma.scopes'];
      const variableChange = {
        action: 'CREATE',
        name,
        type,
        resolvedType: type,
        description: token.$description,
        variableCollectionId: collection.id,
      };

      if (scopes && Array.isArray(scopes)) {
        variableChange.scopes = scopes;
      }

      creates.push(variableChange);
    }
  });

  // Send creates
  if (creates.length > 0) {
    console.log(`Creating ${creates.length} variables...`);
    await client.batchRequest(creates, 'variables');
    await client.fetchVariables();
  }

  // Set values
  allTokenNames.forEach((name) => {
    const lightToken = lightTokens.get(name);
    const darkToken = darkTokens.get(name);

    const lightValue = lightToken
      ? resolveValue(lightToken, lightTokens, client.variables, name)
      : null;
    const darkValue = darkToken
      ? resolveValue(darkToken, darkTokens, client.variables, name)
      : lightValue;

    const variable = client.getVariable(name);

    if (variable) {
      // Only sync if variable belongs to this collection
      if (variable.variableCollectionId !== collection.id) {
        console.warn(
          `Skipping ${name}: belongs to different collection (${variable.variableCollectionId} vs ${collection.id})`,
        );
        return;
      }

      if (lightValue !== null) {
        modeValues.push({
          variableId: variable.id,
          modeId: lightMode.modeId,
          value: lightValue,
        });
      }
      if (darkValue !== null) {
        modeValues.push({
          variableId: variable.id,
          modeId: darkMode.modeId,
          value: darkValue,
        });
      }
    }
  });

  if (modeValues.length > 0) {
    console.log(`Setting ${modeValues.length} variable values...`);
    await client.batchRequest(modeValues, 'variableModeValues');
  }

  // Reorder variables if new ones were created
  await reorderVariablesInExistingOrder(creates, existingOrder, client, collection.id);

  return { variablesCreated: creates.length };
}
