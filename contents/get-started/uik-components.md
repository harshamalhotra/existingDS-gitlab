---
name: Working with components
---

A component in Figma is a design element that's available in the library.

With Figma, components are organized in the asset library by how they are structured and named in the file. The default hierarchy is **File/Page/Frame/Layer**. There are two methods for organizing components:

1. Using Figma's [Variants](https://help.figma.com/hc/en-us/articles/360056440594-Create-and-use-variants) feature.
2. Using a slash naming convention.

For the rest of this guide, components created with Figma’s variants feature will be referred to as **variant** or **variants**. Here’s our working hierarchy for structure and naming, the file name has been left out for brevity:

- **Page:** `[Component]`
- **Frame:** `[Component]`, `[Category]`, `[Group]`, `[Elements]` or literally “Variants.” “Variants” is the default frame name when components aren’t created with the variants feature.
- **Layer:** `[Property=Value, Property=Value]` as a variant or `[Breakpoint/Item/Size/State]` when manually organized.
  - Optional breakpoints: XS, SM, MD, LG, XL, breakpoints can also use symbols to indicate range, such as ≥MD or ≤SM
  - Optional sizes: XS, SM, MD, LG, XL, XXL

When creating a component as a variant, only a single instance of that component will be listed in the asset library. After adding the component to your design you’ll have the ability to choose the variant needed based on available properties (see [examples](#examples) below).

If a component is not part of a variant container, numerically prefixing the breakpoint and size abbreviations correctly orders them in the asset library in a way that helps a user understand hierarchy (see [examples](#examples) below).

Lastly, when you create a component variant in Figma it automatically adds a border radius and dashed purple border to the frame. Remove both the border radius and border.

### Examples

**Icons**

- **Page:** Icons
- **Frame:** Actions
- **Layer:** Export
- **Result:** Icons/Actions/Export

**Alert**

- **Page:** Alert
- **Frame (container):** Alert
- **Layer:** Variant=Danger, Max-width=False
- **Result:** Alert/Alert

**Pagination**

- **Page:** Pagination
- **Frame:** Pagination
- **Layer:** Variant=Default, Breakpoint=≥MD, Truncation=None
- **Result:** Pagination/Pagination

**Badge**

- **Page:** Badge
- **Frame:** Pipeline badge
- **Layer:** Variant=Running, Size=SM
- **Result:** Badge/Pipeline badge

**Button**

- **Page:** Button
- **Frame:** Default
- **Layer:** Category=Primary, Type=Dropdown split, Size=MD
- **Result:** Button/Default

| **Layers panel** | **Assets panel** |
| ------ | ------ |
| ![Component layer in the layers panel](/img/alert-layer.png) | ![Component listed in the assets panel](/img/alert-asset.png) |

## Building components

### Base components

Some components are built from **base** components. Base components provide foundational configuration, structure, or other settings for components to be built from. They are not published to the library, because we only want the variants created from them to be available for direct use. A base component name is prefixed with "_Base" and the underscore prevents it from being published. A base component can also use variants. A change to a base component should propagate to any components built from it. In other systems you may see them called primitives, or master components. We chose “base” to indicate a starting place.

![Base button component with all configuration options](/img/base-btn.png)

### Elements

With a nod to [atomic design](https://bradfrost.com/blog/post/atomic-web-design/), an **element** is something that cannot be broken down any further, and is primarily used in the construction of other components. In other words, it’s rarely used alone. Since elements can be used and swapped in other components, they’re published to the library. A good example of an element is a checkbox, which could be used in forms with a label, or as part of a multiselect dropdown.

### Variants

A **variant** is the most common form of a component. It is available to use as-is from the asset library, and does not require style overrides, although they may be available. In most cases, the content can be overridden for the context. Variants are often built from a [base component](#base-components), but this isn’t required. A variant often has properties associated with it that can be quickly swapped in the properties panel.

### Using Constraints

Objects within a component will [use constraints](https://help.figma.com/article/54-constraints) when they need to maintain their position relative to the component bounds, or content within. Complex, responsive components can be created by combining frames and [layout grids](https://www.figma.com/blog/everything-you-need-to-know-about-layout-grids-in-figma/). A tooltip is a good candidate for constraints, so that directional tips can always be placed correctly in relation to the component bounds as the content grows.

### Using Auto Layout

Components with [Auto Layout](https://help.figma.com/article/453-auto-layout) dynamically resize based on the content within. This works well for components that need to maintain padding and spacing. A button is a good candidate for auto layout, because it can resize horizontally based on label length, and whether or not icons are included. Complex responsive-like components, like a modal, can be created with auto layout.
