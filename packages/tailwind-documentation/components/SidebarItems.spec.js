import { describe, expect, it } from "vitest";
import { screen, within } from "@testing-library/vue";
import { renderSuspended } from "@nuxt/test-utils/runtime";
import SidebarItems from "./SidebarItems.vue";
import { CATEGORY_LAYOUT, CATEGORY_FLEXBOX_AND_GRID } from "~/constants";

describe("SidebarItems", () => {
  const defaultProps = {
    pathFromSearch: "",
  };

  it("renders categories and category items", async () => {
    await renderSuspended(SidebarItems, { props: defaultProps });

    const categoryLayout = screen.getByRole("list", { name: CATEGORY_LAYOUT });

    expect(
      within(categoryLayout).getByRole("link", { name: "Aspect Ratio" }),
    ).toHaveAttribute("href", "/aspect-ratio");
    expect(
      within(categoryLayout).getByRole("link", {
        name: "Box Decoration Break",
      }),
    ).toHaveAttribute("href", "/box-decoration-break");

    const categoryFlexboxAndGrid = screen.getByRole("list", { name: CATEGORY_FLEXBOX_AND_GRID });

    expect(
      within(categoryFlexboxAndGrid).getByRole("link", {
        name: "Align Content",
      }),
    ).toHaveAttribute("href", "/align-content");
    expect(
      within(categoryFlexboxAndGrid).getByRole("link", {
        name: "Align Items",
      }),
    ).toHaveAttribute("href", "/align-items");
  });
});
