#!/usr/bin/env node

import fs from 'node:fs';
import { join } from 'node:path';
import { format, resolveConfig } from 'prettier';
import StyleDictionary from 'style-dictionary';
import merge from 'lodash/merge.js';
import {
  scssCustomPropertiesFormat,
  tailwindComponentsFormat,
  tailwindDocsFormat,
  tailwindFormat,
  figmaFormat,
} from './lib/build_tokens_formats.js';
import {
  stripDescriptionsPreprocessor,
  resolveUnitsPreprocessor,
  selectDefaultValuePreprocessor,
  selectDarkValuePreprocessor,
  selectColorValuePreprocessor,
  convertClampStringToDimension,
} from './lib/build_tokens_preprocessors.js';

/**
 * Design tokens
 * https://docs.gitlab.com/ee/development/fe_guide/design_tokens.html
 */
const PREFIX = 'gl';
const ROOT = join(import.meta.dirname, '..');
const BUILD_PATH = join(ROOT, 'src', 'tokens', 'build');
// https://help.figma.com/hc/en-us/articles/15343816063383-Modes-for-variables#h_01KAGZ9T9H4P7RXY11SG4QXFY2
const FIGMA_SUPPORTED_TYPES = [
  'color',
  'dimension',
  'fontWeight',
  'fontFamily',
  'duration',
  'number',
  'string',
];

/**
 * Preprocessors
 * https://styledictionary.com/reference/hooks/preprocessors/
 */
StyleDictionary.registerPreprocessor({
  // Descriptions are added as comments in some formats, remove those comments
  name: 'gitlab/stripDescriptions',
  preprocessor: stripDescriptionsPreprocessor,
});

StyleDictionary.registerPreprocessor({
  name: 'gitlab/resolve-units',
  preprocessor: resolveUnitsPreprocessor,
});

StyleDictionary.registerPreprocessor({
  name: 'gitlab/select-default-value',
  preprocessor: selectDefaultValuePreprocessor,
});

StyleDictionary.registerPreprocessor({
  name: 'gitlab/select-dark-value',
  preprocessor: selectDarkValuePreprocessor,
});

StyleDictionary.registerPreprocessor({
  name: 'gitlab/select-color-value',
  preprocessor: selectColorValuePreprocessor,
});

StyleDictionary.registerPreprocessor({
  name: 'gitlab/convert-clamp-string-to-dimension',
  preprocessor: convertClampStringToDimension,
});

/**
 * Transforms
 * https://styledictionary.com/reference/api/#registertransform
 */
StyleDictionary.registerTransform({
  name: 'gitlab/name/stripPrefix',
  type: 'name',
  filter: (token) => {
    // Prefix is added by `name/*` transform.
    // If token has `prefix` explicitly set to `false` then we remove the prefix.
    return token.prefix === false;
  },
  transform: (token) => {
    return token.name.slice(PREFIX.length + 1);
  },
});

/**
 * Transform Groups
 * https://styledictionary.com/reference/api/#registertransformgroup
 */
StyleDictionary.registerTransformGroup({
  name: 'gitlab/css',
  transforms: ['name/kebab', 'gitlab/name/stripPrefix', 'shadow/css/shorthand'],
});

StyleDictionary.registerTransformGroup({
  name: 'gitlab/js',
  transforms: ['name/constant', 'gitlab/name/stripPrefix'],
});

StyleDictionary.registerTransformGroup({
  name: 'gitlab/tailwind',
  transforms: ['name/kebab'],
});

StyleDictionary.registerTransformGroup({
  name: 'gitlab/figma',
  transforms: ['name/kebab'],
});

/**
 * Formats
 * https://styledictionary.com/reference/api/#registerformat
 */
StyleDictionary.registerFormat({
  name: 'scss/customProperties',
  format: scssCustomPropertiesFormat,
});

StyleDictionary.registerFormat({
  name: 'tailwind/components',
  format: tailwindComponentsFormat,
});

StyleDictionary.registerFormat({
  name: 'docs',
  format: tailwindDocsFormat,
});

StyleDictionary.registerFormat({
  name: 'tailwind',
  format: tailwindFormat,
});

StyleDictionary.registerFormat({
  name: 'figma',
  format: figmaFormat,
});

/**
 * Actions
 * https://styledictionary.com/reference/api/#registeraction
 */
StyleDictionary.registerAction({
  name: 'prettier',
  do(dictionary, config) {
    config.files.forEach(async (file) => {
      const filePath = `${config.buildPath}${file.destination}`;
      const fileContent = fs.readFileSync(filePath, 'utf8');
      const options = await resolveConfig(filePath);
      const formattedOutput = await format(fileContent, { ...options, parser: 'babel' });
      fs.writeFileSync(filePath, formattedOutput);
    });
  },
  undo() {
    // ignore clean function
  },
});

/**
 * Creates style-dictionary config
 * https://styledictionary.com/reference/config/
 *
 * @param {String} buildPath for destination directory
 * @returns {Object} style-dictionary config
 */
const getStyleDictionaryConfigDefault = (buildPath) => {
  return {
    include: ['src/tokens/**/*.tokens.json'],
    source: ['src/tokens/**/*.tokens.json'],
    preprocessors: ['gitlab/select-default-value'],
    hooks: {
      filters: {
        isTypographyDesignToken: (token) => {
          return token.$type === 'typography';
        },
        isFigmaSupportedTypeAndConstantDesignToken: (token) => {
          return (
            FIGMA_SUPPORTED_TYPES.includes(token.$type) &&
            !token.$deprecated &&
            token.filePath &&
            token.filePath.includes('/constant/')
          );
        },
        isFigmaSupportedTypeAndNotConstantDesignToken: (token) => {
          return (
            FIGMA_SUPPORTED_TYPES.includes(token.$type) &&
            token.filePath &&
            !token.filePath.includes('/constant/')
          );
        },
      },
    },
    platforms: {
      css: {
        prefix: PREFIX,
        buildPath: `${buildPath}/css/`,
        preprocessors: ['gitlab/resolve-units', 'gitlab/select-color-value'],
        transformGroup: 'gitlab/css',
        options: {
          outputReferences: true,
        },
        expand: {
          include: ['typography'],
        },
        files: [
          {
            destination: 'tokens.css',
            format: 'css/variables',
            options: {
              selector: ':root, .gl-light-scope',
            },
          },
        ],
      },
      js: {
        prefix: PREFIX,
        buildPath: `${buildPath}/js/`,
        preprocessors: [
          'gitlab/resolve-units',
          'gitlab/select-color-value',
          'gitlab/stripDescriptions',
        ],
        transformGroup: 'gitlab/js',
        actions: ['prettier'],
        expand: {
          include: ['typography'],
        },
        files: [
          {
            destination: 'tokens.js',
            format: 'javascript/es6',
          },
        ],
      },
      json: {
        buildPath: `${buildPath}/json/`,
        preprocessors: ['gitlab/resolve-units', 'gitlab/select-color-value'],
        transformGroup: 'gitlab/js',
        files: [
          {
            destination: 'tokens.json',
            format: 'json',
          },
        ],
      },
      scss: {
        prefix: PREFIX,
        buildPath: `${buildPath}/scss/`,
        preprocessors: ['gitlab/resolve-units', 'gitlab/select-color-value'],
        transformGroup: 'gitlab/css',
        options: {
          outputReferences: true,
        },
        expand: {
          include: ['typography'],
        },
        files: [
          {
            destination: '_tokens.scss',
            format: 'scss/variables',
          },
          {
            destination: '_tokens_custom_properties.scss',
            format: 'scss/customProperties',
          },
        ],
      },
      docs: {
        buildPath: `${buildPath}/docs/`,
        preprocessors: ['gitlab/resolve-units', 'gitlab/select-color-value'],
        transformGroup: 'gitlab/js',
        files: [
          {
            destination: 'tokens-tailwind-docs.json',
            format: 'docs',
          },
        ],
      },
      tailwind: {
        prefix: PREFIX,
        buildPath: `${buildPath}/tailwind/`,
        preprocessors: ['gitlab/resolve-units', 'gitlab/select-color-value'],
        transformGroup: 'gitlab/tailwind',
        actions: ['prettier'],
        files: [
          {
            destination: 'components.cjs',
            format: 'tailwind/components',
            filter: 'isTypographyDesignToken',
          },
        ],
      },
      figma: {
        buildPath: `${buildPath}/figma/`,
        preprocessors: ['gitlab/convert-clamp-string-to-dimension'],
        transformGroup: 'gitlab/figma',
        files: [
          {
            destination: 'constants.json',
            format: 'figma',
            filter: 'isFigmaSupportedTypeAndConstantDesignToken',
          },
          {
            destination: 'mode.json',
            format: 'figma',
            filter: 'isFigmaSupportedTypeAndNotConstantDesignToken',
          },
        ],
      },
    },
  };
};

const getStyleDictionaryConfigTailwind = (buildPath = 'dist/tokens') => {
  return {
    source: [`${buildPath}/docs/tokens-tailwind-docs.json`],
    platforms: {
      tailwind: {
        buildPath: `${buildPath}/tailwind/`,
        actions: ['prettier'],
        files: [
          {
            destination: 'tokens.cjs',
            format: 'tailwind',
          },
        ],
      },
    },
  };
};

/**
 * Creates style-dictionary config
 * https://styledictionary.com/reference/config/
 *
 * @returns {Object} style-dictionary config
 */
const getStyleDictionaryConfigDarkMode = (buildPath) => {
  return merge(getStyleDictionaryConfigDefault(buildPath), {
    preprocessors: ['gitlab/select-dark-value', 'gitlab/resolve-units'],
    platforms: {
      css: {
        files: [
          {
            destination: 'tokens.dark.css',
            options: {
              selector: ':root.gl-dark, .gl-dark-scope',
            },
          },
        ],
      },
      js: {
        files: [
          {
            destination: 'tokens.dark.js',
          },
        ],
      },
      json: {
        files: [
          {
            destination: 'tokens.dark.json',
          },
        ],
      },
      scss: {
        files: [
          {
            destination: '_tokens.dark.scss',
          },
        ],
      },
      docs: {
        files: [
          {
            destination: 'tokens-tailwind-docs.dark.json',
          },
        ],
      },
      figma: {
        files: [
          {
            destination: 'constants.dark.json',
          },
          {
            destination: 'mode.dark.json',
          },
        ],
      },
    },
  });
};

/**
 * Build tokens from config
 */
async function main() {
  try {
    // Clean build directories first to prevent loose files.
    await fs.promises.rm(BUILD_PATH, { recursive: true, force: true });

    // Build tokens using StyleDictionary
    const defaultMode = new StyleDictionary(getStyleDictionaryConfigDefault(BUILD_PATH));
    await defaultMode.buildAllPlatforms();

    const darkMode = new StyleDictionary(getStyleDictionaryConfigDarkMode(BUILD_PATH));
    await darkMode.buildAllPlatforms();

    const tailwindDictionary = new StyleDictionary(getStyleDictionaryConfigTailwind(BUILD_PATH));
    await tailwindDictionary.buildAllPlatforms();
  } catch (error) {
    console.error('🚨 Error building tokens:', error);
    process.exit(1);
  }
}

main();
