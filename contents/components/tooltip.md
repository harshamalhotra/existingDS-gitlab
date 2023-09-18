---
name: Tooltip
description: Tooltips identify elements or provide additional, useful information about the referring elements.
components:
  - base-tooltip
related:
  - popover
  - button
---

## Examples

<story-viewer component="base-tooltip" story="top-default" title="Top (default)"></story-viewer>

<story-viewer component="base-tooltip" story="right" title="Right"></story-viewer>

<story-viewer component="base-tooltip" story="bottom" title="Bottom"></story-viewer>

<story-viewer component="base-tooltip" story="left" title="Left"></story-viewer>

[View in Pajamas UI Kit →](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?type=design&node-id=425-142&mode=dev)

## Structure

<figure-img alt="Numbered diagram of a tooltip structure" label="Tooltip structure" src="/img/tooltip-structure.svg"></figure-img>

1. **Container**: Wraps the content.
1. **Text**: Concisely describes the referring element or its purpose.
1. **Tip**: Points to the referring element.

## Guidelines

### When to use

- Show the same data in a different format, such as date or timestamps.
- Display a full string of text that is shortened with an ellipsis (`…`).
- Provide context for unlabeled items such as [icon buttons](/components/button), except for [certain cases](#when-not-to-use).

### When not to use

- For [icon buttons](/components/button) that may be universally understood, like a closing action using the [close icon](https://design.gitlab.com/product-foundations/iconography/icons?q=%7Eclose).

Consider using a [popover](/components/popover) for the following scenarios:

- Display information required for task completion, such as password formatting hints.
- Display more than a single line of information or dimensional data, such as user name or status.
- Display a sophisticated layout and formatting.
- Offer simple controls and/or actions that are closely tied to the element or object, such as searchable list, links, or buttons.

### Appearance

- By default, tooltips are placed on top of the referring element.
- When there isn’t enough space in the viewport, the tooltip is moved to the side or below as needed.
- If it blocks related content, the preferred tooltip placement can be manually set.
- Should have no space (0px) between themselves and their target.
- Remain in place while the cursor moves within the target.
- Should never obscure the target element.
- Content within a tooltip uses center-alignment.
- Wraps when the content is wider than the max-width.

### Behavior

- Fades in upon hover or focus on the trigger element.
- Remains open until the cursor moves outside of itself or the trigger, or focus is moved away from the trigger.

#### Tooltip delay

Similar to [popovers](/components/popover), a tooltip has a default delay of `500ms` on `show` to help confirm hover intent and ensure that:

- A user doesn’t accidentally hover an element with a tooltip, which might cover an adjacent element they intended to select.
- The UI isn't constantly showing tooltips when a user is moving their mouse over the page.

Overriding the `show` delay for a tooltip is strongly discouraged for the reasons above, but there are useful circumstances for a tooltip to appear instantly. For example, pipeline icons that are visually the same, but have unique tooltip text that a user relies on to determine the pipeline status. Here, a delay would make it cumbersome to decipher the pipeline while hovering from one icon to the next. To shorten the delay in these cases, utilize `ds###` in the tooltip directive, where `###` is the milliseconds of delay.

Here's an example of a tooltip directive with a `0ms` delay (instant) on `show`:

```vue
<gl-button
  v-gl-tooltip.ds0
  ...
/>
```

### Content

- Should be short and concise.
- Shouldn’t repeat information that is shown near the referring element.

### Accessibility

- Tooltips should not auto-dismiss as it would violate [WCAG 1.4.13 Content on Hover or Focus](https://www.w3.org/TR/WCAG21/#content-on-hover-or-focus).