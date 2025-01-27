import { describe, expect, it } from "vitest";
import userEvent from "@testing-library/user-event";
import { screen } from "@testing-library/vue";
import { renderSuspended } from "@nuxt/test-utils/runtime";
import SidebarLogo from "./SidebarLogo.vue";

describe("SidebarLogo", () => {
  describe("when showSearchButton is true", () => {
    it("shows search button", async () => {
      await renderSuspended(SidebarLogo, { props: { showSearchButton: true } });

      expect(
        screen.getByRole("button", { name: "Search Ctrl K" }),
      ).toBeInTheDocument();
    });

    describe("when button is clicked", () => {
      it("emits openSearch event", async () => {
        const user = userEvent.setup();
        const { emitted } = await renderSuspended(SidebarLogo, {
          props: { showSearchButton: true },
        });

        await user.click(screen.getByRole("button", { name: "Search Ctrl K" }));
        expect(emitted().openSearch).toEqual([[]]);
      });
    });
  });
});
