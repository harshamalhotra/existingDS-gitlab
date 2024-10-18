import { describe, expect, it } from "vitest";
import { screen } from "@testing-library/vue";
import { renderSuspended } from "@nuxt/test-utils/runtime";
import PageTitle from "./PageTitle.vue";

const defaultRoute = {
  path: "/flex",
  name: "flex",
  meta: {
    title: "Flex",
  },
};

const defaultProvide = {
  allUtilities: {
    flex: {
      supportsNegativeValues: false,
      utilities: {
        "gl-flex": {
          display: "flex",
        },
      },
    },
    gridColumnEnd: {
      supportsNegativeValues: false,
      utilities: {
        "gl-col-end-1": {
          "grid-column-end": 1,
        },
      },
    },
    margin: {
      supportsNegativeValues: true,
      utilities: {
        "gl-mt-5": {
          "margin-top": "1rem",
        },
      },
    },
  },
};

describe("PageTitle", () => {
  it("renders the page title", async () => {
    await renderSuspended(PageTitle, {
      route: defaultRoute,
      provide: defaultProvide,
    });

    expect(screen.getByRole("heading", { name: "Flex" })).toBeInTheDocument();
  });

  describe("when utilities support negative values", () => {
    it("renders message and links to docs", async () => {
      await renderSuspended(PageTitle, {
        route: {
          path: "/margin",
          name: "margin",
          meta: {
            title: "Margin",
          },
        },
        provide: defaultProvide,
      });

      expect(screen.getByText("Supports negative values.")).toBeInTheDocument();
      expect(screen.getByRole("link", { name: "Learn more." })).toHaveAttribute(
        "href",
        "https://tailwindcss.com/docs/margin#using-negative-values",
      );
    });
  });

  describe("when meta.tailwindDocsLink is not defined", () => {
    it("uses route path for tailwind docs link", async () => {
      await renderSuspended(PageTitle, {
        route: defaultRoute,
        provide: defaultProvide,
      });

      expect(
        screen.getByRole("link", { name: "Official Tailwind Documentation" }),
      ).toHaveAttribute("href", "https://tailwindcss.com/docs/flex");
    });
  });

  describe("when meta.tailwindDocsLink is defined", () => {
    it("uses meta.tailwindDocsLink", async () => {
      await renderSuspended(PageTitle, {
        route: {
          meta: {
            title: "Grid Column End",
            tailwindDocsLink: "/grid-column",
          },
          name: "grid-column-end",
          path: "/grid-column-end",
        },
        provide: defaultProvide,
      });

      expect(
        screen.getByRole("link", { name: "Official Tailwind Documentation" }),
      ).toHaveAttribute("href", "https://tailwindcss.com/docs/grid-column");
    });
  });
});
