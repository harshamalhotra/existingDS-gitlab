import { describe, expect, it } from "vitest";
import { screen } from "@testing-library/vue";
import { renderSuspended } from "@nuxt/test-utils/runtime";
import UtilitiesTable from "./UtilitiesTable.vue";

const defaultRoute = {
  path: "/margin",
  name: "margin",
  meta: {
    title: "Margin",
  },
};

const defaultProvide = {
  allUtilities: {
    backgroundColor: {
      supportsNegativeValues: false,
      utilities: {
        "gl-bg-blue-500": {
          "background-color": "var(--blue-500, #1f75cb)",
        },
        "gl-bg-blue-600": {
          "background-color": "var(--blue-600, #1068bf)",
        },
      },
    },
    margin: {
      supportsNegativeValues: true,
      utilities: {
        "gl-mt-3": {
          "margin-top": "0.5rem",
        },
        "gl-mt-5": {
          "margin-top": "1rem",
        },
      },
    },
  },
};

describe("UtilitiesTable", () => {
  it("renders utilities in table", async () => {
    await renderSuspended(UtilitiesTable, {
      route: defaultRoute,
      provide: defaultProvide,
    });

    expect(screen.getByRole("columnheader", { name: "Class" }));
    expect(screen.getByRole("columnheader", { name: "Properties" }));
    expect(
      screen.getByRole("row", {
        name: "gl-mt-3 margin-top: 0.5rem; /* 8px */",
      }),
    );
    expect(
      screen.getByRole("row", {
        name: "gl-mt-5 margin-top: 1rem; /* 16px */",
      }),
    );
  });

  describe("when showColorSwatch prop is true", () => {
    it("shows color swatch", async () => {
      await renderSuspended(UtilitiesTable, {
        route: {
          path: "/background-color",
          name: "background-color",
          meta: {
            title: "Background Color",
          },
        },
        provide: defaultProvide,
        props: {
          showColorSwatch: true,
        },
      });

      expect(screen.getByRole("columnheader", { name: "Color" }));
      expect(screen.getAllByTestId("colorSwatch")[0]).toHaveStyle({
        backgroundColor: "var(--blue-500, #1f75cb)",
      });
      expect(screen.getAllByTestId("colorSwatch")[1]).toHaveStyle({
        backgroundColor: "var(--blue-600, #1068bf)",
      });
    });
  });
});
