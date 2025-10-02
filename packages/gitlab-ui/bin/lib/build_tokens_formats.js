const { fileHeader } = require('style-dictionary/utils');
const {
  getScalesAndCSSCustomProperties,
  generateBaseColors,
  generateColorMap,
  getTokenCssCustomProperty,
} = require('./build_tokens_tailwind_formatter.js');

const STATUS_VARIANTS = ['neutral', 'info', 'success', 'warning', 'danger', 'brand'];
const FEEDBACK_VARIANTS = ['strong', 'neutral', 'info', 'success', 'warning', 'danger'];
const BRAND_VARIANTS = [
  'brand-white',
  'brand-charcoal',
  'brand-orange',
  'brand-purple',
  'brand-gray',
  'brand-pink',
];
const BASE_COLOR_VARIANTS = ['blue', 'gray', 'green', 'orange', 'purple', 'red'];

/**
 * Generates SCSS variables that reference CSS custom properties for all tokens
 *
 * This formatter creates SCSS variables ($gl-design-token-name) that reference their
 * corresponding CSS custom properties (--gl-design-token-name), allowing tokens to be
 * used in SCSS while still respecting runtime theming through CSS variables.
 *
 * @param {Object} options - The formatter options
 * @param {Object} options.dictionary - The Style Dictionary containing all tokens
 * @param {Object} options.file - The file being generated
 * @returns {Promise<string>} The formatted SCSS output with file header
 *
 * @example
 * // Output example:
 * // $gl-design-token-name: var(--gl-design-token-name);
 */
const scssCustomPropertiesFormat = async ({ dictionary, file }) => {
  let output = [];
  dictionary.allTokens.forEach((token) => {
    output = output.concat(`$${token.name}: var(--${token.name});`);
  });
  return `${await fileHeader({ file })}${output.join('\n')}\n`;
};

/**
 * Generates a JSON representation of design tokens formatted for Tailwind documentation
 *
 * This formatter transforms the Style Dictionary tokens into a structured JSON format
 * that can be consumed by documentation tools. It organizes tokens into categories
 * (background, border, fill, text, etc.) and enhances each token with additional
 * properties like CSS custom property representation.
 *
 * The formatter handles nested token structures and applies special formatting for
 * different token types like colors, spacing, and shadows.
 *
 * @param {Object} options - The formatter options
 * @param {Object} options.dictionary - The Style Dictionary containing all tokens
 * @param {Object} options.dictionary.tokens - The tokens object from Style Dictionary
 * @returns {Promise<string>} A JSON string containing the formatted tokens
 *
 * @example
 * // Output example (simplified):
 * // {
 * //   "background": { ... },
 * //   "border": { ... },
 * //   "text": { ... },
 * //   "spacing": { ... }
 * // }
 */
const tailwindDocsFormat = async ({ dictionary }) => {
  const formatToken = (token) => {
    return {
      ...token,
      cssWithValue: getTokenCssCustomProperty(token),
    };
  };

  const formatTokens = (tokens = {}) => {
    return Object.entries(tokens).reduce((acc, [key, value]) => {
      if (tokens[key].$value) {
        acc[key] = formatToken(value);
      } else {
        acc[key] = formatTokens(value);
      }
      return acc;
    }, {});
  };

  const generateTokenObject = (parent, variants = [], property) =>
    Object.fromEntries(
      variants.map((variant) => [
        `${variant}`,
        formatToken(dictionary.tokens[parent][variant][property].color),
      ]),
    );

  const baseColors = BASE_COLOR_VARIANTS.reduce((acc, color) => {
    acc[color] = dictionary.tokens[color];
    return acc;
  }, {});

  const brandColors = {
    ...BRAND_VARIANTS.reduce((acc, brand) => {
      acc[brand] = dictionary.tokens.color[brand];
      return acc;
    }, {}),
  };

  const colorTokens = {
    alpha: {
      light: formatTokens(dictionary.tokens.color.alpha.light),
      dark: formatTokens(dictionary.tokens.color.alpha.dark),
    },
    ...formatTokens(baseColors),
    ...formatTokens(brandColors),
    theme: formatTokens(dictionary.tokens.theme),
    'data-viz': formatTokens(dictionary.tokens['data-viz']),
    neutral: formatTokens(dictionary.tokens.color.neutral),
    white: formatToken(dictionary.tokens.white),
    black: formatToken(dictionary.tokens.black),
  };

  const backgroundColors = {
    ...colorTokens,
    color: formatTokens(dictionary.tokens.background.color),
    status: generateTokenObject('status', STATUS_VARIANTS, 'background'),
    feedback: generateTokenObject('feedback', FEEDBACK_VARIANTS, 'background'),
    dropdown: formatToken(dictionary.tokens.dropdown.background.color),
    control: {
      default: formatToken(dictionary.tokens.control.background.color.default),
      disabled: formatToken(dictionary.tokens.control.background.color.disabled),
      concatenation: formatToken(dictionary.tokens.control.background.color.concatenation),
      readonly: formatToken(dictionary.tokens.control.background.color.readonly),
    },
  };

  const borderColors = {
    ...colorTokens,
    color: formatTokens(dictionary.tokens.border.color),
    dropdown: formatToken(dictionary.tokens.dropdown.border.color),
    'dropdown-divider': formatToken(dictionary.tokens.dropdown.divider.color),
    control: {
      default: formatToken(dictionary.tokens.control.border.color.default),
      disabled: formatToken(dictionary.tokens.control.border.color.disabled),
      error: formatToken(dictionary.tokens.control.border.color.error),
    },
  };

  const fillColors = {
    ...colorTokens,
    icon: formatTokens(dictionary.tokens.icon.color, 'fill-icon'),
    status: generateTokenObject('status', STATUS_VARIANTS, 'icon'),
    feedback: generateTokenObject('feedback', FEEDBACK_VARIANTS, 'icon'),
  };

  const textColors = {
    ...colorTokens,
    color: formatTokens(dictionary.tokens.text.color),
    status: generateTokenObject('status', STATUS_VARIANTS, 'text'),
    feedback: generateTokenObject('feedback', FEEDBACK_VARIANTS, 'text'),
    primary: formatToken(dictionary.tokens.text.primary),
    secondary: formatToken(dictionary.tokens.text.secondary),
    tertiary: formatToken(dictionary.tokens.text.tertiary),
    control: {
      placeholder: formatToken(dictionary.tokens.control.placeholder.color),
      error: formatToken(dictionary.tokens.control.text.color.error),
      valid: formatToken(dictionary.tokens.control.text.color.valid),
    },
  };

  const outlineColor = {
    focus: formatToken(dictionary.tokens['focus-ring'].outer.color),
  };

  const spacingScale = formatTokens(dictionary.tokens['spacing-scale']);
  const borderRadiuses = {
    ...formatTokens(dictionary.tokens.border.radius),
    action: formatToken(dictionary.tokens.action.border.radius),
    control: formatToken(dictionary.tokens.control.border.radius),
    feedback: formatToken(dictionary.tokens.feedback.border.radius),
  };
  const opacity = formatTokens(dictionary.tokens.opacity);
  const zindexes = formatTokens(dictionary.tokens.zindex);
  const lineHeight = formatTokens(dictionary.tokens['line-height']);
  const fontFamily = formatTokens(dictionary.tokens.font.family);
  const fontSize = formatTokens(dictionary.tokens.font.size);
  const fontWeight = formatTokens(dictionary.tokens.font.weight);

  const boxShadow = {
    sm: formatToken(dictionary.tokens.shadow.sm),
    md: formatToken(dictionary.tokens.shadow.md),
    lg: formatToken(dictionary.tokens.shadow.lg),
  };

  const tokens = {
    background: backgroundColors,
    border: borderColors,
    fill: fillColors,
    text: textColors,
    outline: outlineColor,
    colors: colorTokens,
    spacing: spacingScale,
    borderRadius: borderRadiuses,
    opacity,
    zIndex: zindexes,
    boxShadow,
    lineHeight,
    fontFamily,
    fontSize,
    fontWeight,
  };

  // Format as JSON
  return `${JSON.stringify(tokens, null, 2)}`;
};

/**
 * Generates a Tailwind CSS configuration file from design tokens
 *
 * This formatter transforms Style Dictionary tokens into a JavaScript module that exports
 * a Tailwind-compatible configuration object. It processes various token categories
 * (colors, spacing, border radius, etc.) and formats them as CSS custom properties.
 *
 * @param {Object} options - The formatter options
 * @param {Object} options.dictionary - The Style Dictionary containing all tokens
 * @param {Object} options.dictionary.tokens - The tokens object from Style Dictionary
 * @param {Object} options.file - The file being generated
 * @returns {Promise<string>} A JavaScript module string that exports the Tailwind configuration
 *
 * @example
 * // Output example (simplified):
 * // module.exports = {
 * //   colors: { ... },
 * //   backgroundColor: { ... },
 * //   borderColor: { ... },
 * //   spacing: { ... }
 * // }
 */
const tailwindFormat = async ({ dictionary, file }) => {
  const baseColorsTokens = Object.fromEntries(
    BASE_COLOR_VARIANTS.map((color) => [color, dictionary.tokens.colors[color]]),
  );

  const brandColorsTokens = Object.fromEntries(
    BRAND_VARIANTS.map((brand) => [brand, dictionary.tokens.colors[brand]]),
  );

  const neutralColors = Object.fromEntries(
    Object.entries(dictionary.tokens.colors.neutral)
      .filter(([, token]) => token.path)
      .map(([, token]) => [
        token.path.filter((segment) => segment !== 'color').join('-'),
        token.cssWithValue,
      ]),
  );

  const baseColors = generateBaseColors(baseColorsTokens);
  const themeColors = generateBaseColors(dictionary.tokens.colors.theme);
  const dataVizColors = generateBaseColors(dictionary.tokens.colors['data-viz']);

  const textColors = getScalesAndCSSCustomProperties(dictionary.tokens.text.color);
  const backgroundColors = getScalesAndCSSCustomProperties(dictionary.tokens.background.color);
  const iconColors = getScalesAndCSSCustomProperties(dictionary.tokens.fill.icon);
  const alphaDarkColors = getScalesAndCSSCustomProperties(dictionary.tokens.colors.alpha.dark);
  const alphaLightColors = getScalesAndCSSCustomProperties(dictionary.tokens.colors.alpha.light);
  const borderColors = getScalesAndCSSCustomProperties(dictionary.tokens.border.color);
  const brandColors = getScalesAndCSSCustomProperties(brandColorsTokens);
  const spacingScale = getScalesAndCSSCustomProperties(dictionary.tokens.spacing);
  const borderRadius = getScalesAndCSSCustomProperties(dictionary.tokens.borderRadius);
  const opacity = getScalesAndCSSCustomProperties(dictionary.tokens.opacity);
  const zindexes = getScalesAndCSSCustomProperties(dictionary.tokens.zIndex);
  const boxShadow = getScalesAndCSSCustomProperties(dictionary.tokens.boxShadow);
  const lineHeight = getScalesAndCSSCustomProperties(dictionary.tokens.lineHeight);
  const fontFamily = getScalesAndCSSCustomProperties(dictionary.tokens.fontFamily);
  const fontSize = getScalesAndCSSCustomProperties(dictionary.tokens.fontSize);
  const fontWeight = getScalesAndCSSCustomProperties(dictionary.tokens.fontWeight);

  const statusColorObjects = generateColorMap(dictionary.tokens, STATUS_VARIANTS, 'status');
  const feedbackColorObjects = generateColorMap(dictionary.tokens, FEEDBACK_VARIANTS, 'feedback');

  const { statusBackgroundColors, statusTextColors, statusFillColors } = statusColorObjects;

  const { feedbackBackgroundColors, feedbackTextColors, feedbackFillColors } = feedbackColorObjects;

  return `${await fileHeader({ file })}
  const baseColors = ${JSON.stringify(baseColors)};
  const themeColors = ${JSON.stringify(themeColors)};
  const dataVizColors = ${JSON.stringify(dataVizColors)};
  const neutralColors = ${JSON.stringify(neutralColors)};
  const textColors = ${JSON.stringify(textColors)};
  const backgroundColors = ${JSON.stringify(backgroundColors)};
  const borderColors = ${JSON.stringify(borderColors)};
  const iconColors = ${JSON.stringify(iconColors)};
  const alphaDarkColors = ${JSON.stringify(alphaDarkColors)};
  const alphaLightColors = ${JSON.stringify(alphaLightColors)};
  const brandColors = ${JSON.stringify(brandColors)};
  const statusBackgroundColors = ${JSON.stringify(statusBackgroundColors)};
  const statusTextColors = ${JSON.stringify(statusTextColors)};
  const statusIconColors = ${JSON.stringify(statusFillColors)};
  const feedbackBackgroundColors = ${JSON.stringify(feedbackBackgroundColors)};
  const feedbackTextColors = ${JSON.stringify(feedbackTextColors)};
  const feedbackIconColors = ${JSON.stringify(feedbackFillColors)};
  const spacingScale = ${JSON.stringify(spacingScale)};
  const borderRadius = ${JSON.stringify(borderRadius)};
  const opacity = ${JSON.stringify(opacity)};
  const zindexes = ${JSON.stringify(zindexes)};
  const boxShadow = ${JSON.stringify(boxShadow)};
  const lineHeight = ${JSON.stringify(lineHeight)};
  const fontFamily = ${JSON.stringify(fontFamily)};
  const fontSize = ${JSON.stringify(fontSize)};
  const fontWeight = ${JSON.stringify(fontWeight)};

  const colors = {
    inherit: 'inherit',
    current: 'currentColor',
    transparent: 'transparent',
    white: '${dictionary.tokens.colors.white.cssWithValue}',
    black: '${dictionary.tokens.colors.black.cssWithValue}',
    alpha: {
      dark: {...alphaDarkColors},
      light: {...alphaLightColors},
    },
    ...baseColors,
    ...themeColors,
    ...dataVizColors,
    ...neutralColors,
    ...brandColors,
  };

  const backgroundColor = {
    ...colors,
    ...backgroundColors,
    ...statusBackgroundColors,
    ...feedbackBackgroundColors,
    dropdown: '${dictionary.tokens.background.dropdown.cssWithValue}',
    control: {
      default: '${dictionary.tokens.background.control.default.cssWithValue}',
      disabled: '${dictionary.tokens.background.control.disabled.cssWithValue}',
      concatenation: '${dictionary.tokens.background.control.concatenation.cssWithValue}',
      readonly: '${dictionary.tokens.background.control.readonly.cssWithValue}',
    },
  };

  const borderColor  = {
    ...colors,
    ...borderColors,
    dropdown: '${dictionary.tokens.border.dropdown.cssWithValue}',
    'dropdown-divider': '${dictionary.tokens.border['dropdown-divider'].cssWithValue}',
    control: {
      default: '${dictionary.tokens.border.control.default.cssWithValue}',
      disabled: '${dictionary.tokens.border.control.disabled.cssWithValue}',
      error: '${dictionary.tokens.border.control.error.cssWithValue}',
    },
  };

  const outlineColor = {
    focus: '${dictionary.tokens.outline.focus.cssWithValue}',
  };

  const fill = {
    ...colors,
    ...statusIconColors,
    ...feedbackIconColors,
    icon: {
      ...iconColors,
    },
  };

  const textColor = {
    ...colors,
    ...textColors,
    ...statusTextColors,
    ...feedbackTextColors,
    primary: '${dictionary.tokens.text.primary.cssWithValue}',
    secondary: '${dictionary.tokens.text.secondary.cssWithValue}',
    tertiary: '${dictionary.tokens.text.tertiary.cssWithValue}',
    control: {
      placeholder: '${dictionary.tokens.text.control.placeholder.cssWithValue}',
      error: '${dictionary.tokens.text.control.error.cssWithValue}',
      valid: '${dictionary.tokens.text.control.valid.cssWithValue}',
    },
  };

  module.exports = {
    colors,
    backgroundColor,
    borderColor,
    outlineColor,
    textColor,
    fill,
    spacing: spacingScale,
    borderRadius,
    opacity,
    zIndex: zindexes,
    boxShadow,
    lineHeight,
    fontFamily,
    fontSize,
    fontWeight,
  }
  `;
};

// Prevents a warning about collision when building tokens
tailwindFormat.nested = true;

module.exports = {
  scssCustomPropertiesFormat,
  tailwindDocsFormat,
  tailwindFormat,
};
