import { beforeEach, describe, expect, it, vi } from "vitest";
import { flushPromises } from "@vue/test-utils";
import userEvent from "@testing-library/user-event";
import { screen } from "@testing-library/vue";
import { renderSuspended, mockNuxtImport } from "@nuxt/test-utils/runtime";
import MiniSearch from "minisearch";
import hotkeys from "hotkeys-js";
import SearchPalette from "./SearchPalette.vue";
import { MOCK_SEARCH_RESULTS_FOR_DEVELOPMENT } from "../constants";

vi.mock("minisearch", () => ({
  default: {
    loadJSAsync: vi.fn(),
  },
}));

vi.mock("hotkeys-js", () => ({
  default: vi.fn(),
}));

const { useRouterMock } = vi.hoisted(() => {
  return {
    useRouterMock: vi.fn(),
  };
});

mockNuxtImport("useRouter", () => {
  return useRouterMock;
});

const push = vi.fn();

const mockSearchIndex = {
  documentCount: 176,
  nextId: 176,
  documentIds: {
    0: "aspect-ratio",
    1: "animation",
    2: "align-items",
  },
};

describe("SearchPalette", () => {
  beforeEach(() => {
    global.fetch = vi.fn().mockResolvedValue({
      json: vi.fn().mockResolvedValue(mockSearchIndex),
      ok: true,
    });
    useRouterMock.mockReturnValue({ push, replace: vi.fn() });
  });

  describe("when component is mounted", () => {
    it("fetches search index and initializes minisearch", async () => {
      await renderSuspended(SearchPalette, {
        props: { open: false },
      });

      expect(MiniSearch.loadJSAsync).toHaveBeenCalledWith(mockSearchIndex, {
        fields: ["title", "text"],
        searchOptions: {
          boost: { title: 2 },
          fuzzy: expect.any(Function),
          prefix: true,
        },
      });
    });

    it("emits ready event", async () => {
      const { emitted } = await renderSuspended(SearchPalette, {
        props: { open: false },
      });

      await flushPromises();

      expect(emitted().ready).toEqual([[]]);
    });

    it("sets up hotkeys", async () => {
      await renderSuspended(SearchPalette, {
        props: { open: false },
      });

      await flushPromises();

      expect(hotkeys).toHaveBeenCalledWith(
        "command+k,command+p",
        expect.any(Function),
      );
    });

    describe("when keyboard shortcut are pressed", () => {
      it("calls prevent default and emits open event", async () => {
        const { emitted } = await renderSuspended(SearchPalette, {
          props: { open: false },
        });

        await flushPromises();

        const [, callback] = hotkeys.mock.calls[0];

        const event = { preventDefault: vi.fn() };
        callback(event);

        expect(emitted().open).toEqual([[]]);
        expect(event.preventDefault).toHaveBeenCalled();
      });
    });
  });

  describe("when search is open", () => {
    it("it renders comobobox", async () => {
      await renderSuspended(SearchPalette, {
        props: { open: true },
      });

      expect(
        screen.getByRole("combobox", { name: "Search..." }),
      ).toBeInTheDocument();
    });

    describe("when search is typed in", () => {
      describe("when there are search results", () => {
        beforeEach(() => {
          MiniSearch.loadJSAsync.mockResolvedValue({
            search: vi
              .fn()
              .mockReturnValue(MOCK_SEARCH_RESULTS_FOR_DEVELOPMENT),
          });
        });

        it("shows search results", async () => {
          const user = userEvent.setup();
          await renderSuspended(SearchPalette, {
            props: { open: true },
          });

          await flushPromises();

          await user.type(
            screen.getByRole("combobox", { name: "Search..." }),
            "foo",
          );

          expect(
            screen.getByRole("option", { name: "Padding" }),
          ).toBeInTheDocument();
          expect(
            screen.getByRole("option", { name: "Border Collapse" }),
          ).toBeInTheDocument();
        });

        describe("when search result is clicked", () => {
          it("goes to that page and closes search", async () => {
            const user = userEvent.setup();
            const { emitted } = await renderSuspended(SearchPalette, {
              props: { open: true },
            });

            await flushPromises();

            await user.type(
              screen.getByRole("combobox", { name: "Search..." }),
              "foo",
            );

            await user.click(screen.getByRole("option", { name: "Padding" }));

            expect(push).toHaveBeenCalledWith("/padding");
            expect(emitted().close).toEqual([[]]);
          });
        });
      });

      describe("when there are no search results", () => {
        beforeEach(() => {
          MiniSearch.loadJSAsync.mockResolvedValue({
            search: vi.fn().mockReturnValue([]),
          });
        });

        it("shows no results message", async () => {
          const user = userEvent.setup();
          await renderSuspended(SearchPalette, {
            props: { open: true },
          });

          await flushPromises();

          await user.type(
            screen.getByRole("combobox", { name: "Search..." }),
            "foo",
          );

          expect(screen.getByText("No results found.")).toBeInTheDocument();
        });
      });
    });

    describe("when search is closed", () => {
      it("emits close event", async () => {
        const user = userEvent.setup();
        const { emitted } = await renderSuspended(SearchPalette, {
          props: { open: true },
        });

        await user.keyboard("{Escape}");

        expect(emitted().close).toEqual([[]]);
      });
    });
  });
});
