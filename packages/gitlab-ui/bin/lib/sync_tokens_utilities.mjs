/**
 * Converts DTCG (Design Token Community Group) color format to Figma's RGBA format
 *
 * @param {Object} $value - DTCG color value object
 * @param {number[]} $value.components - RGB color components array [r, g, b] (0-255 or 0-1)
 * @param {number} [$value.alpha] - Alpha transparency value (0-1), defaults to 1 if not provided
 * @returns {Object} Figma RGBA color object with properties r, g, b, a
 *
 * @example
 * // Convert RGB with explicit alpha
 * DTCGToFigmaColorFormat({
 *   components: [255, 128, 0],
 *   alpha: 0.8
 * });
 * // Returns: { r: 255, g: 128, b: 0, a: 0.8 }
 *
 * @example
 * // Convert RGB without alpha (defaults to 1)
 * DTCGToFigmaColorFormat({
 *   components: [0, 150, 255]
 * });
 * // Returns: { r: 0, g: 150, b: 255, a: 1 }
 */
export function DTCGToFigmaColorFormat($value) {
  const [r, g, b] = $value.components;
  const a = $value.alpha !== undefined ? $value.alpha : 1;
  return { r, g, b, a };
}

/**
 * Convert token value to Figma format based on token type
 * @param {Object} token - Token with $value and $type
 * @returns {*} Converted value
 */
export function convertValue(token) {
  const { $value, $type } = token;

  // Handle colors
  if ($type === 'color' && typeof $value === 'object' && $value.components) {
    return DTCGToFigmaColorFormat($value);
  }

  // Handle dimensions
  if ($type === 'dimension' && typeof $value === 'object' && $value.value !== undefined) {
    return $value.value;
  }

  // Handle numbers
  if ($type === 'number' && typeof $value === 'number') {
    return $value;
  }

  // Handle strings
  if ($type === 'string' || $type === 'fontWeight') {
    return String($value);
  }

  return $value;
}

/**
 * Get Figma variable type from token type
 * @param {string} tokenType - Token type (e.g., 'color', 'dimension')
 * @returns {string} Figma variable type (e.g., 'COLOR', 'FLOAT')
 */
export function getVariableType(tokenType) {
  const FIGMA_TYPE_MAP = {
    color: 'COLOR',
    dimension: 'FLOAT',
    number: 'FLOAT',
    string: 'STRING',
    fontWeight: 'STRING',
    lineHeight: 'FLOAT',
    letterSpacing: 'FLOAT',
    opacity: 'FLOAT',
  };
  return FIGMA_TYPE_MAP[tokenType] || 'STRING';
}

/**
 * @param {Object} token - Token with $value and $type
 * @param {Map} allTokens - Map of all available tokens
 * @param {Map} variables - Map of existing Figma variables
 * @param {string} variableName - Name of the variable being resolved
 * @returns {*} Resolved value
 */
// eslint-disable-next-line max-params
export function resolveValue(token, allTokens, variables, variableName = null) {
  const { $value } = token;

  // If value is an alias reference, resolve it
  if (typeof $value === 'string' && $value.startsWith('{') && $value.endsWith('}')) {
    const aliasName = $value.slice(1, -1);
    const aliasToken = allTokens.get(aliasName);

    if (aliasToken) {
      // Recursively resolve in case the alias points to another alias
      return resolveValue(aliasToken, allTokens, variables, aliasName);
    }

    // If alias not found, return the variable alias reference
    const variable = variables.get(aliasName);
    if (variable) {
      return { type: 'VARIABLE_ALIAS', id: variable.id };
    }

    // Fallback - shouldn't happen
    return $value;
  }

  // Get the actual variable type from Figma
  const variable = variableName ? variables.get(variableName) : null;
  const figmaType = variable?.resolvedType;

  if (figmaType === 'COLOR') {
    if (typeof $value === 'object' && $value.components) {
      return DTCGToFigmaColorFormat($value);
    }
  }

  if (figmaType === 'FLOAT') {
    if (typeof $value === 'object' && $value.value !== undefined) {
      return $value.value;
    }
    if (typeof $value === 'number') {
      return $value;
    }
    return parseFloat($value);
  }

  if (figmaType === 'STRING') {
    return String($value);
  }

  // Fallback to normal conversion
  return convertValue(token);
}
