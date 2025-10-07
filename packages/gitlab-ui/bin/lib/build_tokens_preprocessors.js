/**
 * Removes descriptions from tokens
 *
 * A preprocessor function to remove $description from tokens so they
 * are not included as comments in the generated output files.
 *
 * Usage:
 *
 * ```javascript
 * StyleDictionary.registerPreprocessor({
 *   name: 'stripDescriptions',
 *   preprocessor: stripDescriptionsPreprocessor,
 * });
 * ```
 *
 * @param {Object} dictionary - StyleDictionary's dictionary object
 * @returns {Object} - Modified dictionary object
 */
const stripDescriptionsPreprocessor = (dictionary) => {
  function stripDescription(node) {
    if (node === null || typeof node !== 'object') {
      return node;
    }
    if (Array.isArray(node)) {
      return node.map((el) => stripDescription(el));
    }

    const entries = Object.entries(node)
      // recursively traverse token objects and skip $description attributes
      .filter(([k]) => k !== '$description')
      .map(([k, v]) => [k, stripDescription(v)]);
    return Object.fromEntries(entries);
  }

  return stripDescription(dictionary);
};

/**
 * Resolves unit objects to string values
 *
 * A preprocessor function that converts objects with `value` and `unit` properties
 * to string representations (e.g., { value: 16, unit: 'px' } -> '16px').
 *
 * Usage:
 *
 * ```javascript
 * StyleDictionary.registerPreprocessor({
 *   name: 'gitlab/resolve-units',
 *   preprocessor: resolveUnitsPreprocessor,
 * });
 * ```
 *
 * @param {Object} dictionary - StyleDictionary's dictionary object
 * @returns {Object} - Modified dictionary object
 */
const resolveUnitsPreprocessor = (dictionary) => {
  function traverse(node) {
    if (node === null || typeof node !== 'object') {
      return node;
    }

    // Convert unit objects to strings
    if (
      node.value !== undefined &&
      node.unit !== undefined &&
      (typeof node.value === 'number' || !Number.isNaN(Number(node.value))) &&
      typeof node.unit === 'string' &&
      node.unit.trim().length > 0
    ) {
      return `${node.value}${node.unit}`;
    }

    // Recursively handle arrays and objects
    return Array.isArray(node)
      ? node.map((element) => traverse(element))
      : Object.fromEntries(Object.entries(node).map(([k, v]) => [k, traverse(v)]));
  }

  return traverse(dictionary);
};

/**
 * Selects the "default" value from design tokens
 *
 * A preprocessor function that handles tokens with a structure containing
 * both "default" and "dark" properties, returning only the "default" value.
 *
 * Usage:
 *
 * ```javascript
 * StyleDictionary.registerPreprocessor({
 *   name: 'gitlab/select-default-value',
 *   preprocessor: selectDefaultValuePreprocessor,
 * });
 * ```
 *
 * @param {Object} dictionary - StyleDictionary's dictionary object
 * @returns {Object} - Modified dictionary object with only default values
 */
const selectDefaultValuePreprocessor = (dictionary) => {
  function traverse(node) {
    if (node === null || typeof node !== 'object' || Array.isArray(node)) {
      return node;
    }

    // If object has a "default" property, return its value
    if (node.default != null && node.dark != null && Object.keys(node).length === 2) {
      return node.default;
    }

    // Recursively handle nested objects
    return Object.fromEntries(Object.entries(node).map(([k, v]) => [k, traverse(v)]));
  }

  return traverse(dictionary);
};

/**
 * Selects the "dark" value from design tokens
 *
 * A preprocessor function that handles tokens with a structure containing
 * both "default" and "dark" properties, returning only the "dark" value.
 *
 * Usage:
 *
 * ```javascript
 * StyleDictionary.registerPreprocessor({
 *   name: 'gitlab/select-dark-value',
 *   preprocessor: selectDarkValuePreprocessor,
 * });
 * ```
 *
 * @param {Object} dictionary - StyleDictionary's dictionary object
 * @returns {Object} - Modified dictionary object with only dark values
 */
const selectDarkValuePreprocessor = (dictionary) => {
  function traverse(node) {
    if (node === null || typeof node !== 'object' || Array.isArray(node)) {
      return node;
    }

    // If object has a "dark" property, return its value
    if (node.default != null && node.dark != null && Object.keys(node).length === 2) {
      return node.dark;
    }

    // Recursively handle nested objects
    return Object.fromEntries(Object.entries(node).map(([k, v]) => [k, traverse(v)]));
  }

  return traverse(dictionary);
};

module.exports = {
  stripDescriptionsPreprocessor,
  resolveUnitsPreprocessor,
  selectDefaultValuePreprocessor,
  selectDarkValuePreprocessor,
};
