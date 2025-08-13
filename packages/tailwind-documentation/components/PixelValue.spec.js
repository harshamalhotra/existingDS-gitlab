import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/vue";
import PixelValue from "./PixelValue.vue";

describe("PixelValue", () => {
  describe("when value is a number", () => {
    it("renders nothing", () => {
      const { container } = render(PixelValue, { props: { value: 1 } });

      expect(container).toBeEmptyDOMElement();
    });
  });

  describe("when value is a string without rem units", () => {
    it("renders nothing", () => {
      const { container } = render(PixelValue, { props: { value: "32px" } });

      expect(container).toBeEmptyDOMElement();
    });
  });

  describe("when value is a string with rem units", () => {
    it("renders pixel value", () => {
      render(PixelValue, { props: { value: "2rem" } });

      expect(screen.getByText("/* 32px */")).toBeInTheDocument();
    });
  });
});
