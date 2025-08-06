---
name: Layout
---

## Responsive-first

We take a [responsive-first](/product-foundations/layout#responsive-ui) approach that considers each component and content block in light of its ability to adapt and function regardless of viewport or layout. Content and functionality are designed to be available and useful independent of page constraints. By default, content should [reflow](#reflow), but [truncation](#truncation) or [visual affordance](#visual-affordance) indicating behavior can also be used to keep the overall experience robust.

### Reflow

When the content on a page reflows to fit the available space, the hierarchy, structure, and relationships should remain intact and clear within any viewport.

- The visual order should match the [DOM order](https://www.w3.org/WAI/WCAG21/Techniques/css/C27).
- Reflow isn't limited to content wrapping. For example, you might consider grouping a list of actions into a single dropdown in smaller viewports.
- Content should not abruptly rearrange as that can be disorienting for users and cause the page to re-load, which may negatively impact the perceived performance of a page.

### Truncation

Content can be truncated when length or wrapping would break a component, negatively impact surrounding content, or cause some content to flow off screen. When content is truncated, there must be a method to easily view and access all of the content for both sighted and unsighted users, as well as those using assistive technology. Use your judgment on how to truncate content in your specific situation, but here are a few methods depending on the content type, usage, and size.

- Show in [tooltip](/components/tooltip): Use when truncated text is non-critical or providing reference information, or when users don't need access to the raw content.
- Show with [ellipsis button](/components/button#ellipsis): Use for longer spans of text, or when users need access to raw content to compare or view critical information.

### Visual affordance

Similar to how an ellipsis provides a visual indicator for text truncation, providing visual affordance for other components and content helps a user understand when there's a behavior that allows them to access additional content or controls. For example, a scrim (gradient overlay) at the bottom of a dropdown panel indicates scrolling. [View scrim in Pajamas UI Kit →](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/Component-library?node-id=12053%3A184)

## Grid

### Responsive UI

GitLab is a responsive experience that works well across all screen sizes, from mobile devices to large monitors. In order to provide a great user experience, the core functionality (browsing files, creating issues, writing comments, and so on) is available at all resolutions. However, due to size limitations, some secondary functionality may be hidden on smaller screens. This functionality is limited to rare actions that aren’t necessary on small devices.

#### Breakpoints

These breakpoints define specifications for different screens, devices, and orientations.

- **`xs`**: <576px
- **`sm`**: ≥576px
- **`md`**: ≥768px
- **`lg`**: ≥992px
- **`xl`**: ≥1200px

### Layout behavior

Users can choose between two kinds of [layout width](https://docs.gitlab.com/ee/user/profile/preferences.html#layout-width) which set the behavior of page containers: **fixed** (default) or **fluid**.

The **fluid** layout does not impose any width restrictions to page containers, so elements expand across the screen to fill all available space.

The **fixed** layout applies the ideal maximum width to page containers according to the elements being displayed so they can be experienced using the most appropriate width.

[Breadcrumbs](/components/breadcrumb) always share the width of the page container that follows it.

#### Fixed layout

In the fixed layout, there are three possible maximum widths for page containers. For each width, you must consider which one is best to consume and interact with the elements on the page. The following widths include a `16px` padding on both sides.

- **`990px`**: By default, all pages use this maximum width. It’s ideal for forms, simple pages, tables with few columns, or pages that focus on written content.
- **`1280px`**: For pages that have a lot of horizontal elements, such as content-heavy tables/lists or tables with a lot of columns.
- **Full-width** (100%): Exception for pages where the interaction benefits from more screen real-estate, such as charts/graphs and other data visualizations, or boards.

We recommend that you first try and use **`990px`** unless another width is more suited. A width can also be chosen based on consistency between similar views in different pages, even if another width would have been more suitable.

## Visually define content areas

A region is the loosest form of visual organization through boundaries formed by white space, typography, backgrounds, borders, and dividers. A container creates more explicit grouping with backgrounds and borders to define clear bounds and aid visual hierarchy. Regions and containers can both be nested to create the desired hierarchy in a given layout.

- Presentational attributes such as `subtle` and `strong` establish visual hierarchy without specific meaning.
- Semantic attributes such as `section`, `overlap`, and `disabled` indicate a container's purpose in the interface.

### Generic (presentational) containers

```html
<!-- live-example -->
<div class="gl-text-base gl-grid gl-grid-cols-3 gl-gap-5">
  <div class="gl-grid gl-place-items-center gl-p-5 gl-rounded-lg gl-bg-default gl-border gl-border-default">default + default</div>
  <div class="gl-grid gl-place-items-center gl-p-5 gl-rounded-lg gl-bg-default gl-border gl-border-subtle">default + subtle</div>
  <div class="gl-grid gl-place-items-center gl-p-5 gl-rounded-lg gl-bg-default gl-border gl-border-strong">default + strong</div>
  <div class="gl-grid gl-place-items-center gl-p-5 gl-rounded-lg gl-bg-subtle gl-border gl-border-subtle">subtle + subtle</div>
  <div class="gl-grid gl-place-items-center gl-p-5 gl-rounded-lg gl-bg-strong gl-border gl-border-strong">strong + strong</div>
</div>
```

A presentational container creates a noticeable difference between its border and background. This makes the container stand out from the page background or other content.

Acceptable background and combinations are:

- Default background with default, subtle, or strong border for varying degrees of visual prominence.
- Subtle background with subtle border for a visually subdued container.
- Strong background with strong border for a visually emphasized container.

### Semantic containers

```html
<!-- live-example -->
<div class="gl-text-base gl-grid gl-grid-cols-3 gl-gap-5">
  <div class="gl-grid gl-place-items-center gl-p-5 gl-rounded-lg gl-bg-section gl-border gl-border-section">section + section</div>
  <div class="gl-grid gl-place-items-center gl-p-5 gl-rounded-lg gl-bg-subtle gl-border gl-border-section">subtle + section</div>
  <div class="gl-grid gl-place-items-center gl-p-5 gl-rounded-lg gl-bg-overlap gl-border gl-border-default">overlap + default</div>
  <div class="gl-grid gl-place-items-center gl-p-5 gl-rounded-lg gl-bg-disabled gl-border gl-border-subtle gl-text-subtle">disabled + subtle</div>
</div>
```

#### Section

```html
<!-- live-example -->
<div class="gl-border gl-border-section gl-rounded-lg gl-overflow-hidden gl-text-base">
  <div class="gl-border-b gl-border-b-section gl-bg-section gl-p-5">
    background.color.section
  </div>
  <div class="gl-bg-subtle gl-p-5">
    background.color.subtle
  </div>
</div>
```

A section is a specific type of container that completely encloses its content and is visually distinct from the default page background only when necessary to maintain affordance and hierarchy in different modes. A section must:

- Be enclosed in a section border.
- Use the section background color.
- Only include section borders within its boundaries.
- Not include nested sections.

Optionally, a section can also:

- Use subtle backgrounds for nested containers when visual hierarchy is needed.
- Use feedback and status backgrounds for feedback and status regions.

#### Overlap

An overlap container is useful for components and content that overlaps other content. For example, a tooltip, drawer, or sticky header. Any generic border can be used in combination.

#### Disabled

A disabled container is visually subdued to infer unavailability or non-interaction. Consider pairing with other disabled styles and a subtle border.

### Borders and dividers

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
</div>
<div class="gl-grid gl-grid-cols-3 gl-gap-5">
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

Borders on one or more edge(s) of an element and dividers between content help define boundaries and separate content areas. They provide visual structure and improve the scanability of information when used with discretion.

- A default border or divider provides visual separation without drawing excessive attention. Use the default in most places where visual separation is needed.
- A subtle border or divider creates minimal visual separation and is best used when division needs to be present but minimal.
- A strong border or divider creates pronounced separation and emphasis. Use sparingly to highlight distinct elements.
- A section border should only be used with a [section](#section) container.

#### Considerations

- Consider using white space as an alternative when possible.
- A horizontal divider separates content sections within the same region or container.
- A vertical divider separates content or actions that are horizontally adjacent to help define groups and relationships.
- Apply borders consistently within similar contexts.
- Avoid using too many borders in close proximity as this can create visual noise.

<note>Some borders may not be visible on surfaces in both modes, test accordingly.</note>

### Sticky

A "sticky" container is visually defined (along with a [shadow](/product-foundations/elevation#medium)) by sticking to the top or bottom of its parent container. It has actions or links that are relevant to the task someone is performing. Sticky containers are useful for long pages that contain lots of content that would push actions out of the viewport. For example, when editing a wiki, the save changes button will always be visible even if the wiki content extends below the viewport.

Use sticky containers with caution as they can easily crowd the interface and make it difficult to navigate the page by shrinking the content area.

## Cascading alignment

For layouts that are tabular or mimic a table row, often a single alignment rule applied to all cells or columns may not produce the most scannable outcome. With cascading alignment, the goal is to optically align content in the way that best supports a linear reading flow while maintaining balance. The alignment "cascades" from one element to the next based on the preceding element. For example, **B** aligns with **A**, and **C** aligns with **B**.

<figma-embed label="Cascading alignment demo 1" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F2XRq1MnIG69iti76Mh9HpJ%2FPajamas-visual-examples%3Ftype%3Ddesign%26node-id%3D22364%253A696%26mode%3Ddesign%26t%3DcBlAHP3Ol5JxVR79-1"></figma-embed>

This type of layout is optional, and you should use your best judgement considering the user's task, the content, and other factors that might impact layout, like reflow and responsive behavior.

In the two column example that follows, vertically centering the content with the avatar works well until the content becomes taller than the avatar, at which point it's more scannable to top align and have content extend below.

The three column example that follows is similar, where vertically centering provides optimal linear scanning between all three columns. However, once the third column's content is taller than the avatar in the second, top alignment is used to anchor the third column to the second.

In both examples the goal is to choose the ideal alignment to the left element in a way that visually anchors the content and limits the eye from bouncing around as much as possible.

<figma-embed label="Cascading alignment demo 2" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F2XRq1MnIG69iti76Mh9HpJ%2FPajamas-visual-examples%3Ftype%3Ddesign%26node-id%3D22364%253A656%26mode%3Ddesign%26t%3DcBlAHP3Ol5JxVR79-1"></figma-embed>

<todo>Add live demo. An example that accomplishes this with CSS grid can be viewed in [Codepen](https://codepen.io/lostsatellites/pen/ZEwVOgz).</todo>
