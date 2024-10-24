import { describe, expect, it } from "vitest";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/vue";
import OpenSearchButton from "./OpenSearchButton.vue";

describe("OpenSearchButton", () => {
  describe("when button is clicked", () => {
    it("emits openSearch event", async () => {
      const user = userEvent.setup();
      const { emitted } = render(OpenSearchButton);

      await user.click(screen.getByRole("button", { name: "Search ⌘ K" }));
      expect(emitted().openSearch).toEqual([[]]);
    });
  });
});
