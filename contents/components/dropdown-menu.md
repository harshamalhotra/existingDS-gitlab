---
name: Menu
description: A menu contains a list of app-like JavaScript actions or functions.
related:
  - dropdown-disclosure
  - dropdown-listbox
  - dropdown-combobox
  - button
  - accordion
---

## Examples

<todo>Add updated examples once complete in GitLab UI.</todo>

[View in Pajamas UI Kit →](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/Component-library?node-id=425%3A14)

## Structure

<todo>Add structure visual and element list.</todo>

## Guidelines

While the term "dropdown" generally refers to an element that reveals a related panel, the dropdown menu component is specifically a button with an `aria-haspopup="menu"` attribute that opens a panel of options with `role="menu"`.

### When to use

- A menu is a particular type of dropdown that should only be used for app-like JavaScript actions or functions, like replicating a desktop application's main menu bar.

### When not to use

- A menu is not for website navigation, use a [disclosure](/components/dropdown-disclosure) widget instead.
- If the options within the panel are selectable, refer to the [listbox](/components/dropdown-listbox) component.
- If a user is selecting a single text option from a group of options within a [form](/patterns/forms), consider using a [select](/components/select), [radio group](/components/radio-button), or [checkboxes](/components/checkbox) instead.
- If you need a way for a user to expand or collapse a content section, use an [accordion](/components/accordion) instead.

### Trigger button variants

A button that triggers a dropdown panel comes in a few variants to fit different situations.

- **Dropdown button**: A dropdown button has a [chevron-down](https://gitlab-org.gitlab.io/gitlab-svgs/?q=~chevron-down) icon to the right of the text label to indicate it will toggle additional content.
- **Split dropdown button**: A split dropdown button is a special button group with two segments. The left text button is for the most common option and an attached dropdown button to the right opens a panel with additional options.
- **Icon dropdown**: An icon button, like one that uses the vertical or horizontal [ellipsis icons](https://gitlab-org.gitlab.io/gitlab-svgs/?q=elli), functions similarly to other trigger buttons with the only difference being only an icon label with no text.

### Behavior

- By default, the dropdown panel opens below and is aligned to the left of the trigger button. However, when there isn't enough space in the viewport, the panel uses edge detection to position it above and/or aligned to the right of the trigger.
- If the content within the dropdown panel exceeds the maximum height then a scrim (gradient overlay) appears at the bottom of the panel as an overflow affordance. When a user has scrolled to the bottom of the overflowed content the scrim is removed.
- When an action is selected that impacts the current view, the panel is closed and the action performed.
- When an action option is selected that causes a page refresh or other change of context the panel returns to a closed state.
- All panels can be closed by clicking outside of them, using the <kbd>esc</kbd> key, or by focus moving to an element outside of the component.
- A limited amount of actions that don't scroll can be fixed at the bottom of a dropdown panel.

### Content

- A header can provide context for the list of actions.
- Section headers can categorize actions into meaningful groups.
- Action text should be concise and clearly indicate the action or function it performs.

### Accessibility

- See the [WAI-ARIA Menu Button documentation](https://www.w3.org/TR/wai-aria-practices/#menubutton) for more details.
- See the [WAI-ARIA Menu documentation](https://www.w3.org/TR/wai-aria-practices/#menu) for more details.

## Reference

- [Menus & Menu Buttons](https://inclusive-components.design/menus-menu-buttons/) by Heydon Pickering
