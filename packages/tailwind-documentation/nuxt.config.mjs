import { defineNuxtConfig } from "nuxt/config";
import camelCase from "lodash/camelCase";
import MiniSearch from "minisearch";
import resolveTailwindUtils from "./resolve-tailwind-utils.mjs";
import fs from "node:fs";
import path from "node:path";

const basePath = process.env.CI_PAGES_URL ? new URL(process.env.CI_PAGES_URL).pathname : '/';

function resolveTailwindUtilsVite() {
  const virtualModuleId = "virtual:tailwind-utils";
  const resolvedVirtualModuleId = "\0" + virtualModuleId;

  return {
    name: "tailwind-utils",
    resolveId(id) {
      if (id === virtualModuleId) {
        return resolvedVirtualModuleId;
      }
    },
    load(id) {
      if (id === resolvedVirtualModuleId) {
        const { resolvedUtilities, resolvedVariants } = resolveTailwindUtils();

        return `
          export const resolvedUtilities = ${JSON.stringify(resolvedUtilities)};
          export const resolvedVariants = ${JSON.stringify(resolvedVariants)};
        `;
      }
    },
  };
}

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: basePath,
    head: {
      bodyAttrs: {
        class: "gl-h-full",
      },
      htmlAttrs: {
        class: "gl-h-full",
      },
      link: [
        {
          rel: "icon",
          type: "image/svg+xml",
          href: path.join(basePath, 'favicon.svg'),
        },
      ],
    },
  },
  runtimeConfig: {
    public: {
      isProduction: ["production", "test"].includes(process.env.NODE_ENV),
    },
  },
  devtools: { enabled: true },
  css: ["~/assets/css/index.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  vite: {
    plugins: [resolveTailwindUtilsVite()],
  },
  modules: [
    "@nuxt/image",
    "nuxt-svgo",
    "@nuxt/eslint",
    "@nuxt/test-utils/module",
  ],
  svgo: {
    defaultImport: "component",
  },
  routeRules: {
    "/": { prerender: true },
  },
  compatibilityDate: "2024-09-04",
  nitro: {
    static: true,
    prerender: {
      ignore: ["/utilities.json", "./search-index.json"],
    },
  },
  hooks: {
    "nitro:build:public-assets"(nitro) {
      const resolvedUtilities = resolveTailwindUtils();
      const outputPath = path.join(__dirname, ".output", "public");

      // Write utilities to JSON file
      const utilitiesForJson = Object.values(resolvedUtilities)
        .flatMap(({ utilities }) => utilities)
        .reduce(
          (accumulator, utilities) => ({ ...accumulator, ...utilities }),
          {},
        );

      fs.writeFileSync(
        path.join(outputPath, "utilities.json"),
        JSON.stringify(utilitiesForJson, null, 2),
      );

      // Create search index
      const searchDocuments = nitro._prerenderedRoutes.flatMap((page) => {
        const pageName = page.route.replace("/", "");
        try {
          const pageAsString = fs.readFileSync(
            path.join(__dirname, "pages", `${pageName}.vue`),
            { encoding: "utf8" },
          );
          const title = pageAsString.match(/title: "(.+)"/)?.[1];
          const utilities = resolvedUtilities[camelCase(pageName)]?.utilities;

          if (!utilities) {
            return [
              {
                id: pageName,
                title,
                path: page.route,
              },
            ];
          }

          const selectors = Object.keys(utilities).map(
            (selectors) => selectors,
          );
          const uniqueSelectors = [...new Set(selectors)];
          const properties = Object.values(utilities).flatMap(
            (propertiesAndValues) => Object.keys(propertiesAndValues),
          );
          const uniqueProperties = [...new Set(properties)];

          return [
            {
              id: pageName,
              title,
              text: [...uniqueSelectors, ...uniqueProperties].join(" "),
              path: page.route,
            },
          ];
        } catch {
          return [];
        }
      });

      const miniSearch = new MiniSearch({
        fields: ["title", "text"],
        storeFields: ["title", "text", "path"],
      });

      miniSearch.addAll(searchDocuments);

      fs.writeFileSync(
        path.join(outputPath, "search-index.json"),
        JSON.stringify(miniSearch),
      );
    },
  },
});
