import resolveConfig from "tailwindcss/resolveConfig.js";
import tailwindDefaultsPreset from "@gitlab/ui/tailwind.defaults.js";
import * as corePlugins from "tailwindcss/lib/corePlugins.js";
import nameClass from "tailwindcss/lib/util/nameClass.js";
import { CUSTOM_UTILS_PAGES, PLUGIN_CUSTOM } from "./constants.js";

const noop = () => {};

const resolveTailwindUtils = () => {
  const resolvedConfig = resolveConfig({
    presets: [tailwindDefaultsPreset],
    corePlugins: {
      container: false,
    },
  });

  const resolvedUtilities = {};
  const resolvedVariants = {};

  const prefixSelector = (selector) => {
    return selector.replace(".", resolvedConfig.prefix);
  };

  function formatProperties(properties) {
    return Object.entries(properties).reduce(
      (accumulator, [property, value]) => {
        if (property.startsWith("@defaults")) {
          return accumulator;
        }

        const normalizedProperty = property
          .replace(/([a-z])([A-Z])/g, "$1-$2")
          .toLowerCase();

        return {
          ...accumulator,
          [normalizedProperty]: value,
        };
      },
      {},
    );
  }

  const addUtilities = (
    pluginName,
    utilities,
    supportsNegativeValues = false,
  ) => {
    Object.entries(utilities).forEach(([selector, properties]) => {
      if (!resolvedUtilities[pluginName]) {
        resolvedUtilities[pluginName] = {
          supportsNegativeValues,
          utilities: {},
        };
      }

      resolvedUtilities[pluginName].utilities[prefixSelector(selector)] =
        formatProperties(properties);
    });
  };

  const addCustomUtilities = (utilities) => {
    Object.entries(utilities).forEach(([selector, properties]) => {
      const pluginName =
        Object.entries(CUSTOM_UTILS_PAGES).find(([, selectors]) =>
          selectors.includes(selector),
        )?.[0] || PLUGIN_CUSTOM;

      if (!resolvedUtilities[pluginName]) {
        resolvedUtilities[pluginName] = {
          supportsNegativeValues: false,
          utilities: {},
        };
      }

      resolvedUtilities[pluginName].utilities[prefixSelector(selector)] =
        formatProperties(properties);
    });
  };

  const matchUtilities = (pluginName, matches, matchConfig) => {
    if (!matchConfig || !matches) return;

    const { values, supportsNegativeValues } = matchConfig;

    if (!values) return;

    const utilities = Object.entries(matches).reduce(
      (accumulator, [name, utilityFunction]) => {
        Object.entries(values).forEach(([modifier, value]) => {
          const declarations = utilityFunction(value, {
            includeRules: noop,
          });

          accumulator[nameClass.default(name, modifier)] = declarations;
        });

        return accumulator;
      },
      {},
    );

    addUtilities(pluginName, utilities, supportsNegativeValues);
  };

  const sharedPluginConfig = {
    theme: (key, defaultValue) => {
      return resolvedConfig.theme[key] || defaultValue;
    },
    config: (option, defaultValue) => {
      return option ? resolvedConfig[option] || defaultValue : { future: {} };
    },
  };

  // Resolve core plugin utilities
  resolvedConfig.corePlugins.forEach((pluginName) => {
    const plugin = corePlugins.corePlugins[pluginName];

    plugin({
      ...sharedPluginConfig,
      addDefaults: noop,
      addComponents: addUtilities.bind(null, pluginName),
      corePlugins: () => true,
      addUtilities: addUtilities.bind(null, pluginName),
      matchUtilities: matchUtilities.bind(null, pluginName),
    });
  });

  // Resolve custom utilities
  tailwindDefaultsPreset.plugins[0].handler({
    addComponents: addCustomUtilities,
    addUtilities: addCustomUtilities,
  });

  // Resolve breakpoints
  corePlugins.variantPlugins.screenVariants({
    ...sharedPluginConfig,
    matchVariant: noop,
    addVariant: (variantName, variantValue) => {
      if (!resolvedVariants.breakpoints) {
        resolvedVariants.breakpoints = {};
      }

      resolvedVariants.breakpoints[variantName] = variantValue;
    },
  });

  return { resolvedUtilities, resolvedVariants };
};

export default resolveTailwindUtils;
