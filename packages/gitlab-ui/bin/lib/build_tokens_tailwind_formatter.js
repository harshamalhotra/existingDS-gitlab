/**
 * Returns key/value pairs of token scales and CSS custom properties
 * @param {object} tokens
 * @returns {object} { example: 'var(--gl-token-example, #000)' }
 */
const getScalesAndCSSCustomProperties = (tokens = {}) => {
  return Object.entries(tokens).reduce((acc, [scale, token]) => {
    if (token.cssWithValue) {
      acc[scale] = token.cssWithValue;
    } else {
      acc[scale] = getScalesAndCSSCustomProperties(token);
    }
    return acc;
  }, {});
};

/*
 * @param {Object} colorTokens - The token object to process
 * @returns {Object} - Flattened object with path-based keys and CSS values
 */
const generateBaseColors = (colorTokens) => {
  return Object.entries(colorTokens).reduce((acc, [, scales]) => {
    Object.entries(scales).forEach(([, token]) => {
      if (token.path) {
        acc[token.path.join('-')] = token.cssWithValue;
      }
    });
    return acc;
  }, {});
};

/**
 * Generates color objects for a specific set of variants
 * @param {Object} tokens
 * @param {Array} variants - Array of variants (e.g. ['success', 'warning', 'error'])
 * @param {string} parent - The parent category (e.g. 'status', 'feedback')
 * @param {Array} properties - Array of property types to generate
 * @returns {Object} - Object containing all color objects
 */

const generateColorMap = (
  tokens,
  variants,
  parent,
  properties = ['background', 'text', 'fill'],
  // eslint-disable-next-line max-params
) => {
  return properties.reduce((acc, property) => {
    const key = `${parent}${property.charAt(0).toUpperCase() + property.slice(1)}Colors`;

    // Create the mapping of variant names to colors
    acc[key] = Object.fromEntries(
      variants.map((variant) => [
        `${parent}-${variant}`,
        tokens[property][parent][variant].cssWithValue,
      ]),
    );

    return acc;
  }, {});
};

/**
 * Return string CSS custom property for token object
 *
 * @param {object} token
 * @returns {string} CSS custom property
 */
const getTokenCssCustomProperty = (token) => {
  const path = [token.prefix !== false ? 'gl' : false, ...token.path].filter(Boolean);
  return `var(--${path.join('-')})`;
};

module.exports = {
  getScalesAndCSSCustomProperties,
  generateBaseColors,
  generateColorMap,
  getTokenCssCustomProperty,
};
