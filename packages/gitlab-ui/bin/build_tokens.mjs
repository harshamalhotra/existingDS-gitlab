#!/usr/bin/env node

import fs from 'node:fs';
import { join } from 'node:path';
import { globSync } from 'glob';
import { format, resolveConfig } from 'prettier';
import StyleDictionary from 'style-dictionary';
import merge from 'lodash/merge.js';
import {
  scssCustomPropertiesFormat,
  tailwindComponentsFormat,
  tailwindDocsFormat,
  tailwindFormat,
} from './lib/build_tokens_formats.js';
import {
  stripDescriptionsPreprocessor,
  resolveUnitsPreprocessor,
  selectDefaultValuePreprocessor,
  selectDarkValuePreprocessor,
  selectColorValuePreprocessor,
} from './lib/build_tokens_preprocessors.js';

/**
 * Design tokens
 * https://docs.gitlab.com/ee/development/fe_guide/design_tokens.html
 */
const PREFIX = 'gl';
const ROOT = join(import.meta.dirname, '..');
const BUILD_PATH = join(ROOT, 'src', 'tokens', 'build');

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
    preprocessors: [
      'gitlab/select-default-value',
      'gitlab/select-color-value',
      'gitlab/resolve-units',
    ],
    hooks: {
      filters: {
        isTypographyDesignToken: (token) => {
          return token.$type === 'typography';
        },
      },
    },
    platforms: {
      css: {
        prefix: PREFIX,
        buildPath: `${buildPath}/css/`,
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
        transformGroup: 'gitlab/js',
        preprocessors: ['gitlab/stripDescriptions'],
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
    preprocessors: [
      'gitlab/select-dark-value',
      'gitlab/select-color-value',
      'gitlab/resolve-units',
    ],
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
    },
  });
};

/**
 * Add extension(s) to the tokens
 * See https://tr.designtokens.org/format/#extensions
 */
function addExtension(tokens, extension, extensionValue = true) {
  Object.values(tokens).forEach((value) => {
    value.$extensions ||= {};
    value.$extensions[extension] = extensionValue;
  });

  return tokens;
}

/**
 * Load and concatenate token files from the tokens directory,
 * categorized into four groups by subdirectory.
 *
 * @param {string} outputDir Directory where to write the output files (will be created if it does not exist)
 */
async function buildFigmaTokens(buildPath) {
  const combineTokenFiles = (category) => {
    const files = globSync(`./src/tokens/${category}/**/*.tokens.json`)
      // Naive attempt to keep JSON output stable across builds. A more robust
      // solution would be to use safe-stable-stringify or similar when writing
      // the files.
      .sort();

    return files.reduce((acc, file) => {
      const fileTokens = JSON.parse(fs.readFileSync(file, 'utf-8'));
      return merge(acc, fileTokens);
    }, {});
  };

  const tokenCategories = [
    {
      name: 'semantic.tokens.json',
      tokens: combineTokenFiles('semantic'),
    },
    {
      name: 'constants.tokens.json',
      tokens: combineTokenFiles('constant'),
    },
    {
      name: 'contextual.tokens.json',
      tokens: addExtension(combineTokenFiles('contextual'), 'com.gitlab.locked'),
    },
    {
      name: 'deprecated.tokens.json',
      tokens: addExtension(combineTokenFiles('deprecated'), 'com.gitlab.deprecated'),
    },
  ];

  const outputDir = join(buildPath, 'figma');
  fs.mkdirSync(outputDir, { recursive: true });

  for (const { name, tokens } of tokenCategories) {
    fs.writeFileSync(join(outputDir, name), JSON.stringify(tokens, null, 2));
  }

  console.log('✔︎ Figma tokens built successfully');
}

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

    // Build tokens for Figma
    await buildFigmaTokens(BUILD_PATH);
  } catch (error) {
    console.error('🚨 Error building tokens:', error);
    process.exit(1);
  }
}

main();
