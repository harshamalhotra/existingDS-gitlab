---
name: Working with components
---

A component in Figma is a design element that's available in the library.

With Figma, components are organized in the asset library by how they are structured and named in the file. The default hierarchy is **File/Page/Frame/Layer**. There are two methods for organizing components:

1. Using Figma's [Variants](https://help.figma.com/hc/en-us/articles/360056440594-Create-and-use-variants) feature.
2. Using a slash naming convention.

For the rest of this guide, components created with Figma's variants feature will be referred to as **variant** or **variants**. Here's our working hierarchy for structure and naming, the file name has been left out for brevity:

- **Page:** `[Component]`
- **Frame:** `[Component]`, `[Category]`, `[Group]`, `[Elements]` or literally "Variants."
- **Layer:** `[Property=Value, Property=Value]` as a variant or `[Breakpoint/Item/Size/State]` when manually organized.
  - Optional breakpoints: xs, sm, md, lg, xl, breakpoints can also use symbols to indicate range, such as ≥md or ≤sm
  - Optional sizes: xs, sm, md, lg, xl, xxl

When creating a component as a variant, only a single instance of that component will be listed in the asset library. After adding the component to your design you'll have the ability to choose the variant needed based on available properties (see [examples](#examples) below).

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
- **Layer:** Variant=danger, Is max width=false
- **Result:** Alert/Alert

**Pagination**

- **Page:** Pagination
- **Frame:** Pagination
- **Layer:** Variant=full (default), Breakpoint=≥md, Has truncation=false
- **Result:** Pagination/Pagination

**Badge**

- **Page:** Badge
- **Frame:** Pipeline badge
- **Layer:** Variant=running, Size=sm
- **Result:** Badge/Pipeline badge

**Button**

- **Page:** Button
- **Frame:** Default
- **Layer:** Category=primary, Type=dropdown split, Size=md
- **Result:** Button/Default

| **Layers panel** | **Assets panel** |
| ------ | ------ |
| ![Component layer in the layers panel](/img/alert-layer.png) | ![Component listed in the assets panel](/img/alert-asset.png) |

## Building components

### Base components

Some components are built from **base** components. Base components provide foundational configuration, structure, or other settings for components to be built from. They are not published to the library, because we only want the variants created from them to be available for direct use. A base component name is prefixed with "_Base" and the underscore prevents it from being published. A base component can also use variants. A change to a base component should propagate to any components built from it. In other systems you may see them called primitives, or master components. We chose "base" to indicate a starting place.

![Base button component with all configuration options](/img/base-btn.png)

### Elements

With a nod to [atomic design](https://bradfrost.com/blog/post/atomic-web-design/), an **element** is something that cannot be broken down any further, and is primarily used in the construction of other components. In other words, it's rarely used alone. Since elements can be used and swapped in other components, they're published to the library. A good example of an element is a checkbox, which could be used in forms with a label, or as part of a multiselect dropdown.

### Variants

A **variant** is the most common form of a component. It is available to use as-is from the asset library, and does not require style overrides, although they may be available. In most cases, the content can be overridden for the context. Variants are often built from a [base component](#base-components), but this isn't required. A variant often has properties associated with it that can be quickly swapped in the properties panel.

### Using Constraints

Objects within a component will [use constraints](https://help.figma.com/article/54-constraints) when they need to maintain their position relative to the component bounds, or content within. Complex, responsive components can be created by combining frames and [layout grids](https://www.figma.com/blog/everything-you-need-to-know-about-layout-grids-in-figma/). A tooltip is a good candidate for constraints, so that directional tips can always be placed correctly in relation to the component bounds as the content grows.

### Using Auto Layout

Components with [Auto Layout](https://help.figma.com/article/453-auto-layout) dynamically resize based on the content within. This works well for components that need to maintain padding and spacing. A button is a good candidate for auto layout, because it can resize horizontally based on label length, and whether or not icons are included. Complex responsive-like components, like a modal, can be created with auto layout.

### Naming properties

Use the following guidelines and principles when naming properties. Consistent naming will make components easier to maintain and use.

- Capitalize first character of the key (property name) and use all lowercase for each value. For example, "State: rest, hover, focus, active".
- Properties should be as abstract as possible to indicate intent over style. For example, "Color: muted, enhanced" instead of "Color: light gray, blue".
- Mark default properties by adding `(default)` after the property name. For example, "Size: sm, md (default), lg".
- Keys can be presented conversationally using 'is' or 'has'. For example, "Has icon: true, false", or "Is checked: unchecked, indeterminate, checked".
- For true/false values, the positive is always first. For example, "Is selected: true, false".
- For size or weight, list least to greatest. For example, "Size: default, sm, md, lg" or "Weight: light, regular, bold".
- Only use a property when an attribute should be explicitly configurable.

<todo issue="https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/issues/1040">Define what 'default' means for components</todo>

Here are the standard properties and value ordering that can be used. If you need a property that isn't on the list, and it could be useful for other components, please create an issue or MR to add it.

- Size: xs, sm, md, lg, xl
- Font: sans-serif, monospace
- Font weight: light, regular, bold
- Position: top, right, bottom, left
- Save state: pristine, saving, dirty
- State: rest, hover, focus, active, disabled
- Is expanded: true, false
- Is read-only: true, false
- Is selected: true, false
- Is checked: unchecked, indeterminate, checked
- Is sticky: true, false

Some properties directly relate to others. They can always be available, or conditionally available based on the value of another property.

- Ensure a related property is directly below the main property and prefix it with `↳`. There can be multiple related properties. For example:  
  ```
  Has label = "true"
  ↳ Text = "Text property"
  ```
