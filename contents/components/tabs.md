---
name: Tabs
description: Tabs are used to divide content into meaningful, related sections.
figma: https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/Pajamas-UI-Kit?node-id=425%3A138
docs: complete
gitlab_ui: /components/tabs/code
vueComponents:
  - GlTabs
  - GlTab
related:
  - /regions/navigation
---

Tabs allow users to focus on one specific view at a time while maintaining sight of all the relevant content options available. Each tab, when active, will reveal it's own unique content.

## Usage

There can only be one tab active at a given time. Tabs may be nested, with a maximum nesting of two levels. Please note that this should be considered only as a last resort.

### Basic tabs

Basic tabs are the default tab style. Tab width is determined by the tab’s content and they’re aligned left by default. These are used when you simply need to separate content within tabs, without needing to use a `counter badge`. If you need tabs with counter badges, see [tabs with counter badges](#tabs-with-counter-badges).

[[Example:tabs-basic]]

### Tabs with counter badges

Each tab may include a [badge](/components/badge) with a counter of how many items that particular view contains.

If tabs contain such a badge, the “All” tab should have a badge that is the sum of the other tabs. A tab with a badge should not be included if it breaks this pattern.

For example, in the merge request list view, there should not be "Open" and "WIP" tabs. As a merge request can be both "Open" and "WIP," this will cause the sum of all badges not to match the number of "All" merge requests. An alternative would be to have a separate sorting function within the tab's content which filters open merge requests by "WIP."

[[Example:tabs-with-counter-badges]]

### Justified tabs

Justified tabs use a fluid width to fill the entire container instead of remaining left-aligned. Tabs will take up an equal percentage of the container width. Text truncation is triggered for longer labels, but they should be as concise as possible.

**Consider using justified tabs when:**

* There are only 2–3 tabs.
* The tabs fit horizontally within a mobile viewport without wrapping.
* The breakpoint is ≤ MD. The exception is tabs in a modal or other constrained container that isn’t relying on breakpoint to determine the width of nested content.

[[Example:justified-tabs]]

## Specifications

### Design

Color, spacing, dimension, and layout specific information pertaining to this component can be viewed using the following link:

[View design in Pajamas UI Kit →](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/Pajamas-UI-Kit-Beta?node-id=2497%3A25)

### Accessibility

Tabs follow the [WAI-ARIA Authoring Practices 1.1](https://www.w3.org/TR/wai-aria-practices-1.1/#tabpanel) guidelines for functionality.
