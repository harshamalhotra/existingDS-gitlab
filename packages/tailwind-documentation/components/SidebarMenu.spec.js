import { beforeEach, describe, expect, it, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import { flushPromises } from "@vue/test-utils";
import { screen, within, waitFor } from "@testing-library/vue";
import { renderSuspended } from "@nuxt/test-utils/runtime";
import SidebarMenu from "./SidebarMenu.vue";

vi.mock("minisearch", () => ({
  default: {
    loadJSAsync: vi.fn().mockResolvedValue({}),
  },
}));

const mockSearchIndex = {
  documentCount: 176,
  nextId: 176,
  documentIds: {
    0: "aspect-ratio",
    1: "animation",
    2: "align-items",
  },
};

describe("SidebarMenu", () => {
  beforeEach(() => {
    global.fetch = vi.fn().mockResolvedValue({
      json: vi.fn().mockResolvedValue(mockSearchIndex),
      ok: true,
    });
  });

  it("allows mobile sidebar to be opened and closed", async () => {
    const user = userEvent.setup();
    await renderSuspended(SidebarMenu);

    expect(screen.queryByTestId("mobileSidebar")).not.toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "Open sidebar" }));

    expect(screen.getByTestId("mobileSidebar")).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "Close sidebar" }));

    await waitFor(() => {
      expect(screen.queryByTestId("mobileSidebar")).not.toBeInTheDocument();
    });
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

      await waitFor(() => {
        expect(screen.queryByTestId("mobileSidebar")).not.toBeInTheDocument();
      });
    });
  });

  it("allows opening and closing of search", async () => {
    const user = userEvent.setup();
    await renderSuspended(SidebarMenu);

    await flushPromises();

    await user.click(
      screen.getAllByRole("button", { name: "Search Ctrl K" })[0],
    );

    expect(
      screen.getByRole("combobox", { name: "Search..." }),
    ).toBeInTheDocument();

    await user.keyboard("{Escape}");

    await waitFor(() => {
      expect(
        screen.queryByRole("combobox", { name: "Search..." }),
      ).not.toBeInTheDocument();
    });
  });
});
