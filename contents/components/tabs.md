---
name: Tabs
description: Tabs divide content into meaningful, related sections.
related:
  - accordion
  - path
---

## Examples

<story-viewer component="base-tabs"></story-viewer>

<story-viewer component="base-tabs" story="justified-tabs"></story-viewer>

<story-viewer component="base-tabs" story="with-counter-badges"></story-viewer>

[View in Pajamas UI Kit →](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?type=design&node-id=425-138&mode=design)

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

- To show one content section at a time while maintaining a view of related options.

### When not to use

- When presenting a filtered view of content, consider using the [filter](/components/filter) component instead.
- If content from multiple tabs should be viewed at the same time, consider using an [accordion](/components/accordion) instead.
- If content is part of a flow, consider using the [path](/components/path) component instead.
- Avoid confusing tabs with navigation. Tabs help users remain in the same context; use the [navigation-sidebar](/patterns/navigation-sidebar) for changing context.

### Behavior

- A tab reveals its associated content (tab panel) when activated.
- Only one tab can be active at a given time.
- Tabs may be nested with a maximum nesting of two levels. This pattern should only be considered as a last resort due to the complexity it creates both in code and for the user experience.
- Each tab at the parent level should have its own unique URL. When determining whether to implement unique URLs for child tabs, consider whether or not a user would want to bookmark or link to the tabbed content.
- Tabs should ideally scroll horizontally when adapting to the browser size or when a large number of tab buttons are needed.
  - Currently, due to [technical limitations](https://design.gitlab.com/storybook?path=/docs/base-tabs--docs#scrollable-tab-buttons), when adding buttons to the tab group, tabs will wrap when they overflow the container.

### Content

- A text label should be concise and indicate what is in the related tab panel.
- Truncate longer labels, showing the full text in a [tooltip](/components/tooltip).
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

## Code reference

### GlTabs

Tabs are used to divide content into meaningful, related sections. Tabs allow users to focus on one
specific view at a time while maintaining sight of all the relevant content options available. Each
tab, when active, will reveal it’s own unique content.

#### Using the component Vue

```html
<gl-tabs>
  <gl-tab title="Tab 1">
    Tab panel 1
  </gl-tab>
  <gl-tab title="Tab 2">
    Tab panel 2
  </gl-tab>
</gl-tabs>
```

#### Using the component HTML

```html
<div class="tabs gl-tabs">
  <ul role="tablist" class="nav gl-tabs-nav">
    <li role="presentation" class="nav-item">
      <a
        role="tab"
        target="_self"
        href="#"
        class="nav-link gl-tab-nav-item gl-tab-nav-item-active gl-tab-nav-item-active-indigo"
      >Tab 1</a>
    </li>
    <li role="presentation" class="nav-item">
      <a role="tab" target="_self" href="#" class="nav-link gl-tab-nav-item">Tab 2</a>
    </li>
  </ul>
  <div class="tab-content gl-tab-content">
    <div role="tabpanel" class="tab-pane gl-tab-content active">Tab panel 1</div>
    <div role="tabpanel" class="tab-pane gl-tab-content">Tab panel 2</div>
  </div>
</div>
```

#### Adding Action Buttons to the Tabs

Action buttons are rendered in separate toolbar slots (`#toolbar-start` & `#toolbar-end`) and can
be populated via props: `action-primary`, `action-secondary` and
`action-tertiary`. These props allow you to handle how a primary, secondary and tertiary button will
behave and look. The props receive an object as such:

```js
{
  text: 'Save Changes',
  attributes: {
    variant: 'info',
    disabled: this.someState,
    class: 'some-class',
    ...
  }
}
```

<story-viewer component="base-tabs" title="GlTabs" view-mode="docs"></story-viewer>

### GlScrollableTabs

By default, `GlTab` will wrap tab buttons when they overflow the container. To
enable horizontally scrolling for the tab buttons, use the `GlScrollableTabs`
component. This is a separate Vue component because of some limitations:

- The action props (e.g., `action-primary`) are not respected in `GlScrollableTabs`. At the
  moment, BootstrapVue does not provide a reliable way for us to achieve this desired combination.

`GlScrollableTabs` composes `GlTabs` and passes through every listener, slot, or prop (with the above
exceptions).

```html
<gl-scrollable-tabs
  scroll-left-label="Custom scroll left text"
  scroll-right-label="Custom scroll right text"
>
  <gl-tab v-for="tab in tabs" :key="tab.key" :title="tab.title"> {{ tab.content }} </gl-tab>
</gl-scrollable-tabs>
```
