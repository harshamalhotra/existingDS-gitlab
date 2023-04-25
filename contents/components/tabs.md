---
name: Tabs
description: Tabs divide content into meaningful, related sections.
components:
  - base-tabs
related:
  - accordion
  - path
---

## Examples

<story-viewer component="base-tabs"></story-viewer>

<story-viewer component="base-tabs" story="justified-tabs"></story-viewer>

<story-viewer component="base-tabs" story="with-counter-badges"></story-viewer>

[View in Pajamas UI Kit →](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/Component-library?node-id=425%3A138)

## Structure

<figure-img alt="Numbered diagram of tabs structure" label="Tabs structure" src="/img/tabs-structure.svg"></figure-img>

1. **Tab group**: Contains all tabs.
1. **Tab**: Contains text label and badge.
1. **Active indicator**: Highlights the active tab.
1. **Label**: Text representing the content of the tab panel.
1. **Badge** (optional): Counts the number of items within the tab panel.
1. **Overflow indicator**: Chevron that dynamically appears on either side of the tab group when the combined tab width is greater than the tab group width. Enables scrolling to view tabs that aren't immediately visible. 
1. **Tab panel**: Contains the content related to the active tab.

## Guidelines

### When to use

-  To show one content section at a time while maintaining a view of related options.

### When not to use

- When presenting a filtered view of content, consider using the [filter](/components/filter) component instead.
- If content from multiple tabs should be viewed at the same time, consider using an [accordion](/components/accordion) instead.
- If content is part of a flow, consider using the [path](/components/path) component instead.
- Avoid confusing tabs with navigation. Tabs help users remain in the same context; use [navigation](/patterns/navigation) for changing context.

### Behavior

- A tab reveals its associated content (tab panel) when activated.
- Only one tab can be active at a given time.
- Tabs may be nested with a maximum nesting of two levels. This pattern should only be considered as a last resort due to the complexity it creates both in code and for the user experience.
- Each tab at the parent level should have its own unique URL. When determining whether to implement unique URLs for child tabs, consider whether or not a user would want to bookmark or link to the tabbed content.

### Content

- A text label should be concise and indicate what is in the related tab panel.
- Text truncation is triggered for longer labels.
- Each tab can include a [badge](/components/badge) with a count of how many items the related tab panel contains.
  - If an “All” tab exists, it should have a badge that is the sum of the other tab badges.
  - A badge that includes a numeric count should be followed by a `<span>` with the `sr-only` class providing a text description of what's being counted.
- The label + badge (if present) determines individual tab width unless justified tabs are used (see [Alignment](#alignment)).

### Alignment

- Tabs are left-aligned by default.
- Justified tabs use a fluid width to fill the entire container. Each tab takes up an equal percentage of the container width. Consider using when:
  - There are only 2–3 tabs.
  - The tabs fit horizontally within a mobile viewport without wrapping.
  - The breakpoint is ≤ MD. The exception is tabs in a modal or other constrained container that isn’t relying on breakpoint to determine the width of nested content.

### Accessibility

- Tabs follow the [WAI-ARIA Authoring Practices 1.1](https://www.w3.org/TR/wai-aria-practices-1.1/#tabpanel) guidelines for functionality.
