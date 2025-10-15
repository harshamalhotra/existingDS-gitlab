---
name: Border
---

A border defines an edge. It creates containers for content and boundaries between interface elements. When you strategically use a border, it shapes how users perceive relationships within the interface. This happens even when it's barely visible or only appears in specific contexts. The key is knowing when a border helps organize information and when it adds unnecessary visual noise.

When visually defining content areas:

- Consider white space as an alternative to reduce visual complexity and maintain a clean interface.
- Keep frequently repeated and universal elements borderless to minimize visual noise and improve scanning.
- Use a border to group related information, making content relationships immediately clear.
- Apply border styling consistently within similar contexts to establish predictable visual patterns.
- Avoid placing borders in close proximity to prevent visual clutter and maintain focus on content.
- Avoid nesting bordered containers to prevent the "boxes within boxes" effect that adds unnecessary depth.

## Containing an element

Surrounding content with a visible border creates an explicit boundary for one or more of the following purposes:

- Making a view scannable so users can quickly identify distinct or dissimilar pieces of information.
- Creating a logical association between related content.
- Defining a clickable area for an interactive component or element.
- Drawing attention to important information or a call-to-action.

## Separating elements

Using a border on a single, common edge creates a divider between elements for one or more of the following purposes:

- Separating content sections within the same region or container (horizontal dividers).
- Distinguishing content or actions that are horizontally adjacent (vertical dividers).
- Creating visual breaks when space alone is insufficient.

## Properties

### Color

- A **default** border or divider color provides visual separation without drawing excessive attention. Use the default color in most places where visual separation is needed.
- A **subtle** border or divider color creates minimal visual separation. Use when division needs to be present but minimal.
- A **strong** border or divider color creates pronounced separation and emphasis. Use sparingly to highlight distinct elements.
- A **section** border color should only be used with a [section](/product-foundations/layout/#section) container.
- Some borders are transparent to account for space and provide the ability to have a visible border in high contrast system modes.

The following examples demonstrate how border colors appear on different backgrounds.

<note>Some borders may not be visible on surfaces in both modes, test accordingly.</note>

```html
<!-- live-example -->
<div class="gl-text-base gl-grid gl-grid-cols-3 gl-gap-5">
  <div class="gl-grid gl-gap-5 gl-place-items-center gl-p-5 gl-rounded-lg gl-bg-default">
    on default
    <div class="gl-w-full gl-border-b gl-border-default"></div>
    <div class="gl-w-full gl-border-b gl-border-subtle"></div>
    <div class="gl-w-full gl-border-b gl-border-strong"></div>
    <div class="gl-w-full gl-border-b gl-border-section"></div>
  </div>
  <div class="gl-grid gl-gap-5 gl-place-items-center gl-p-5 gl-rounded-lg gl-bg-subtle">
    on subtle
    <div class="gl-w-full gl-border-b gl-border-default"></div>
    <div class="gl-w-full gl-border-b gl-border-subtle"></div>
    <div class="gl-w-full gl-border-b gl-border-strong"></div>
    <div class="gl-w-full gl-border-b gl-border-section"></div>
  </div>
  <div class="gl-grid gl-gap-5 gl-place-items-center gl-p-5 gl-rounded-lg gl-bg-strong">
    on strong
    <div class="gl-w-full gl-border-b gl-border-default"></div>
    <div class="gl-w-full gl-border-b gl-border-subtle"></div>
    <div class="gl-w-full gl-border-b gl-border-strong"></div>
    <div class="gl-w-full gl-border-b gl-border-section"></div>
  </div>
  <div class="gl-grid gl-gap-5 gl-place-items-center gl-p-5 gl-rounded-lg gl-bg-overlap">
    on overlap
    <div class="gl-w-full gl-border-b gl-border-default"></div>
    <div class="gl-w-full gl-border-b gl-border-subtle"></div>
    <div class="gl-w-full gl-border-b gl-border-strong"></div>
    <div class="gl-w-full gl-border-b gl-border-section"></div>
  </div>
  <div class="gl-grid gl-gap-5 gl-place-items-center gl-p-5 gl-rounded-lg gl-bg-section">
    on section
    <div class="gl-w-full gl-border-b gl-border-default"></div>
    <div class="gl-w-full gl-border-b gl-border-subtle"></div>
    <div class="gl-w-full gl-border-b gl-border-strong"></div>
    <div class="gl-w-full gl-border-b gl-border-section"></div>
  </div>
</div>
```

### Radius

Border radius controls the curvature of element corners, from sharp angles (zero radius) to smooth curves. This curvature helps the eye move more naturally around shapes and makes interfaces feel less rigid. Beyond visual appeal, increasing border radius creates negative space (pockets of empty space at the corners) that make elements appear less cramped without using more screen space. This perceived spacing is especially valuable in dense interfaces where actual space is limited.

<figure-img alt="Example of how increasing border radius give the impression of more space between elements" label="Increasing border radius increases perceived space, even when space remains unchanged." src="/img/border-perceived-space.svg"></figure-img>

When manually choosing what border radius to apply (in the case that is isn't predefined on an element or component), make nested elements with border radius concentric using the following formula:

`outer radius - padding = inner radius`

<grid>
  <do>
    <figure-img class="!gl-my-0" alt="Crisp icon on pixel grid" label="Proportionate concentric radius" src="/img/border-concentric-do.svg"></figure-img>
  </do>
  <dont>
    <figure-img class="!gl-my-0" alt="Blurry icon on pixel grid" label="Disproportionate concentric radius" src="/img/border-concentric-dont.svg"></figure-img>
  </dont>
</grid>

<todo>Add guidance on when to use specific radius values.</todo>

### Width

All borders are `1px` with the exception of some components that use a `2px` width for different states or emphasis.

## Design tokens

<design-tokens-table group="border"></design-tokens-table>

## Code reference

- Use the CSS `border` property (or `outline` only when required) instead of `box-shadow` for boundaries to ensure visibility in high contrast modes.
- A transparent border color may be visible in another mode, like Windows High Contrast Mode, test accordingly to ensure it achieves the desired effect.
