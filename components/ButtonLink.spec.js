import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/vue";
import ButtonLink from "./ButtonLink.vue";

describe("ButtonLink", () => {
  it("renders the page title", () => {
    render(ButtonLink, {
      props: { href: "https://tailwindcss.com/docs/flex" },
      slots: {
        default: "Official Tailwind Documentation",
      },
    });

    expect(
      screen.getByRole("link", { name: "Official Tailwind Documentation" }),
    ).toHaveAttribute("href", "https://tailwindcss.com/docs/flex");
  });
});
