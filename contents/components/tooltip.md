---
name: Tooltip
figma: https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/Pajamas-UI-Kit?node-id=425%3A142
docs: complete
gitlab_ui: /components/tooltip/code
vueComponents:
  - GlTooltip
related:
  - popover
---

Tooltips identify elements or provide additional, useful information about the referring elements. Tooltips are different from ALT-attributes, which are intended primarily for static images.

A tooltip fades in upon hover or focus on the trigger element. It remains open until the cursor moves outside of itself or the trigger, or focus is moved away from the trigger.

## Usage

Tooltips display unique data, and shouldn’t repeat information that is shown near the referring element. Information provided in a tooltip should be short and concise. The text will wrap when the content is wider than the max-width.

A tooltip has a default delay of `500ms` on `show` to help confirm hover intent and ensure that:

- A user doesn’t accidentally hover an element with a tooltip, which might cover an adjacent element they intended to select.
- The UI isn't constantly showing tooltips when a user is moving their mouse over the page.

Overriding the `show` delay for a tooltip is strongly discouraged for the reasons above, but there are useful circumstances for a tooltip to appear instantly. For example, pipeline icons that are visually the same, but have unique tooltip text that a user relies on to determine the pipeline status. Here, a delay would make it cumbersome to decipher the pipeline while hovering from one icon to the next. To shorten the delay in these cases, utilize `ds###` in the tooltip directive, where `###` is the milliseconds of delay. 

Here's an example of a tooltip directive with a `0ms` delay (instant) on `show`:

```
<gl-button 
  v-gl-tooltip.ds0
  ...
/>
```

### When to use tooltips

Use tooltips to:

- Show the same data in a different format, such as date or timestamps.
- Display a full string of text that is shortened with an ellipsis (`…`).
- Provide context for unlabeled items such as [icon buttons](/components/button#icon).

### When not to use tooltips

Do not use tooltips to:

- Display information required for task completion, such as password formatting hints.
- Display more than a single line of information or dimensional data, such as user name or status.
- Display a sophisticated layout and formatting.
- Offer simple controls and/or actions that are closely tied to the element or object, such as searchable list, links, or buttons.

Consider using a [popover](/components/popover) for the scenarios above.

### Timing

When interacting with an element, the timing for summoning a tooltip might be different depending on the situation. A delay is preferred in situations where the information provided is secondary and not needed to gain an immediate understanding of the content or when it easily obscures essential information in an interaction-heavy context. For example, a tooltip inside of a dropdown that contains additional content might obscure more important information like the row above or below. In these situations, a delay provides a more optimal user experience. Alternatively, the meaning of an icon button should be provided instantly in order to remove friction in understanding the content.

To support this, the component allows for either no delay (default) or a preset delay of 400ms.

## Placement

By default, tooltips are placed on top of the referring element. When there isn’t enough space in the viewport, the tooltip is moved to the side or below as needed. If it blocks related content, the preferred tooltip placement can be manually set.

Tooltips should have no space (0px) between themselves and their target. They remain in place while the cursor moves within the target. Tooltips should never obscure the target element.

## Content alignment

Content within a tooltip uses center-alignment.

## Demo

[[Example:tooltip-directive]]

## Design specifications

Color, spacing, dimension, and layout specific information pertaining to this component can be viewed using the following link:

[View design in Pajamas UI Kit →](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/Pajamas-UI-Kit?node-id=439%3A105)
