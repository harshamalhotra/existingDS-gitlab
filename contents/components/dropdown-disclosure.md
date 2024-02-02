---
name: Disclosure
description: A disclosure widget includes a button that opens a panel of links or actions.
related:
  - dropdown-combobox
  - button
  - accordion
components:
  - base-dropdown-disclosure-dropdown
---

## Examples

<story-viewer component="base-dropdown-disclosure-dropdown" title="Simple disclosure"></story-viewer>

<story-viewer component="base-dropdown-disclosure-dropdown" story="custom-list-item" args-placement="left" title="Disclosure with custom list item"></story-viewer>

<story-viewer component="base-dropdown-disclosure-dropdown" story="groups" title="Disclosure with groups"></story-viewer>

<story-viewer component="base-dropdown-disclosure-dropdown" story="custom-groups-items-and-toggle" title="Disclosure with complex content"></story-viewer>

<note>Disclosure styles will be updated to match the UI kit.</note>

[View in Pajamas UI Kit →](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?type=design&node-id=425-14&mode=design)

## Structure

<figure-img alt="Numbered diagram of a disclosure widget structure" label="Disclosure widget structure" src="/img/dropdown-disclosure-structure.svg"></figure-img>

1. **Button**: Triggers the panel to open or close.
1. **Panel**: Wraps the content.
1. **Action**: Button or link styled as an option.
1. **Scrim**: Gradient overlay when items overflow the panel.
1. **Header** (optional): Provides more context for the actions.
1. **Custom content** (optional): Custom content included in a slot.

## Guidelines

### When to use

- Use a disclosure dropdown to toggle a panel of links (`<a>`) or actions (`<button>`) that can be performed in a specific context, including [navigation](/patterns/navigation).
- In the instance where a combination of links and actions are present in the dropdown, a disclosure is preferred over other dropdown options that are more semantically prescriptive.

### When not to use

- If the options within the panel are selectable instead of directly performing an action, refer to the [combobox](/components/dropdown-combobox) component.
- If a user is selecting a single text option from a group of options within a [form](/patterns/forms), consider using a [select](/components/select), [radio group](/components/radio-button), or [checkboxes](/components/checkbox) instead.
- If you need a way for a user to expand or collapse a content section, use an [accordion](/components/accordion) instead.

### Trigger button variants

A [button](/components/button) that triggers a dropdown panel comes in a few variants to fit different situations.

- **Dropdown button**: A dropdown button has a [chevron-down](https://gitlab-org.gitlab.io/gitlab-svgs/?q=~chevron-down) icon to the right of the text label to indicate it will toggle additional content.
- **Split dropdown button**: A split dropdown button is a special button group with two segments. The left text button is for the most common option and an attached dropdown button to the right opens a panel with additional options.
- **Icon dropdown**: An icon button, like one that uses the vertical or horizontal [ellipsis icons](https://gitlab-org.gitlab.io/gitlab-svgs/?q=elli), functions similarly to other trigger buttons with the only difference being only an icon label with no text.

### Size

- **Trigger**: The [button](/components/button) width is determined by its available properties.
- **Panel**: Has a minimum and maximum width and a maximum height to keep content near the trigger button and to keep panels consistent throughout the UI. The height of the panel is initially set to the height of its content (dynamic height) when less than the maximum, but can optionally be set to always use a fixed height.

### Behavior

- By default, the panel opens below and is aligned to the left of the trigger button. However, when there isn't enough space in the viewport, the panel uses edge detection to position it above and/or aligned to the right of the trigger.
- The "tip" of the panel points at the trigger and is center-aligned with it by default.
- If the content within the panel exceeds the maximum height then a scrim (gradient overlay) appears at the bottom of the panel as an overflow affordance. When a user has scrolled to the bottom of the overflowed content the scrim is removed.
- When a link is selected the user is taken to the destination.
- When an action is selected that impacts the current view, the panel is closed and the action performed.
- When an action option is selected that causes a page refresh or other change of context the panel returns to a closed state.
- All panels can be closed by clicking outside of them, using the <kbd>Esc</kbd> key, or by focus moving to an element outside of the component.
- A limited amount of options that don't scroll can be fixed at the bottom of a dropdown panel.

### Content

- Text should be concise and clearly indicate the link destination or action it performs.

### Accessibility

- See the [WAI-ARIA Disclosure (Show/Hide) documentation](https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/) for more details.

## Reference

- [Drop-Down Usability: When You Should (and Shouldn’t) Use Them](https://baymard.com/blog/drop-down-usability), by Baymard Institute
- [Link + Disclosure Widget Navigation](https://adrianroselli.com/2019/06/link-disclosure-widget-navigation.html), by Adrian Roselli
