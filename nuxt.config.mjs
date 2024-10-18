import { defineNuxtConfig } from "nuxt/config";
import resolveTailwindUtils from "./resolve-tailwind-utils.mjs";
import fs from "node:fs";
import path from "node:path";

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
        return `export default ${JSON.stringify(resolveTailwindUtils())}`;
      }
    },
  };
}

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      bodyAttrs: {
        class: "h-full",
      },
      htmlAttrs: {
        class: "h-full bg-white",
      },
      link: [{ rel: "icon", type: "image/svg+xml", href: "/favicon.svg" }],
    },
  },
  runtimeConfig: {
    public: {
      isProduction: process.env.NODE_ENV === "production",
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
      ignore: ["/utilities.json"],
    },
  },
  hooks: {
    "nitro:build:public-assets"() {
      const utilities = Object.values(resolveTailwindUtils())
        .flatMap(({ utilities }) => utilities)
        .reduce(
          (accumulator, utilities) => ({ ...accumulator, ...utilities }),
          {},
        );

      fs.writeFileSync(
        path.join(__dirname, ".output", "public", "utilities.json"),
        JSON.stringify(utilities, null, 2),
      );
    },
  },
});
