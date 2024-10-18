import { describe, expect, it } from "vitest";
import userEvent from "@testing-library/user-event";
import { screen, within } from "@testing-library/vue";
import { renderSuspended } from "@nuxt/test-utils/runtime";
import SidebarMenu from "./SidebarMenu.vue";

describe("SidebarMenu", () => {
  it("allows mobile sidebar to be opened and closed", async () => {
    const user = userEvent.setup();
    await renderSuspended(SidebarMenu);

    expect(screen.queryByTestId("mobileSidebar")).not.toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "Open sidebar" }));

    expect(screen.getByTestId("mobileSidebar")).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "Close sidebar" }));

    expect(screen.queryByTestId("mobileSidebar")).not.toBeInTheDocument();
  });

  describe("when sidebar item is clicked", () => {
    it("closes mobile sidebar", async () => {
      const user = userEvent.setup();
      await renderSuspended(SidebarMenu);

      await user.click(screen.getByRole("button", { name: "Open sidebar" }));

      await user.click(
        within(screen.getByTestId("mobileSidebar")).getByRole("link", {
          name: "Flex",
        }),
      );

      expect(screen.queryByTestId("mobileSidebar")).not.toBeInTheDocument();
    });
  });
});
