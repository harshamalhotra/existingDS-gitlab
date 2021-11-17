---
name: Dropdown
description: A dropdown is a widget that includes a panel opened by a trigger button.
related:
  - button
  - accordion
---

## Examples

Todo: Add updated examples once complete in GitLab UI.

[View in Pajamas UI Kit →](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/Component-library?node-id=425%3A14)

## Structure

Todo: Add structure visual and element list.

## Guidelines

### When to use

The term "dropdown" generally refers to a component made of a trigger button that opens a panel of options. How the trigger and panel are visually presented doesn't vary much, but the semantic meaning can change significantly; refer to the [variants](#variants) section for the specific implementation.

In general, use a dropdown to:

- Reveal a panel of links or actions that can be performed in a specific context, including [navigation](/regions/navigation).
- Reveal a panel of single or multiselect options that don't require a form submission to take effect.

### When not to use

- If a user is selecting from a group of options within a [form](/components/form), consider using a `<select>` element, [radio group](/components/radio-button), or [checkboxes](/components/checkbox) instead.
- If you need a way for a user to expand or collapse a content section, use an [accordion](/components/accordion) instead.

### Variants

Each variant's accessibility requirements and implementation are linked in the [accessibility](#accessibility) section below.

- **Disclosure**: A disclosure dropdown is a button that toggles a panel containing a list of links or navigational items where each item has its own tab stop. If a dropdown contains both a link and an action, it should be a disclosure with a tab stop for each item.
- **Menu**: A menu dropdown is a button that toggles a panel containing a list of actions or functions, similar to the way a menu works in an operating system or native application. This type of dropdown uses `role="menu"` which puts a screen reader into application mode and uses different keyboarding than regular browse and read mode. For this reason, a menu dropdown isn't suitable for navigation, and should only be used for JavaScript initiated actions.
- **Listbox**: A listbox dropdown is a button that toggles a panel containing a list of options. It can be activated by a button, or an input when part of a combobox.
  - **Single select**: Selecting an option updates the button label or input with the choice.
  - **Multiselect**: Allows a user to select multiple options. Those options should be visible outside of the component (typically as a [label](/components/label) or [token](/components/token)) and not replace the button label. Multiselect is not available in a combobox.
  - **Filtering**: An autocomplete input can be used to filter listbox options, but it shouldn't be confused with the input that's part of a combobox.
- **Combobox**: A combobox dropdown is a text input that triggers a panel containing a list of options (typically a single select listbox). The input can use autocomplete capability that filters the available options. In addition to selecting an option, typing also populates the input with the choice.

### Trigger button variants

A button that triggers a dropdown panel comes in a few variants to fit different situations.

- **Dropdown button**: A dropdown button has a [chevron-down](https://gitlab-org.gitlab.io/gitlab-svgs/?q=~chevron-down) icon to the right of the text label to indicates it will toggle additional content.
- **Split dropdown button**: A split dropdown button is a special button group with two segments. The left text button is for the most common option and an attached dropdown button to the right opens a panel with additional options.
- **Icon dropdown**: An icon button, like one that uses the vertical or horizontal [ellipsis icons](https://gitlab-org.gitlab.io/gitlab-svgs/?q=elli), functions similarly to other trigger buttons with the only difference being only an icon label with no text.

### Behavior

- By default, the dropdown panel opens below and is aligned to the left of the trigger button. However, when there isn't enough space in the viewport, the panel uses edge detection to position it above and/or aligned to the right of the trigger.
- If the content within the dropdown panel exceeds the maximum height then a scrim (gradient overlay) appears at the bottom of the panel as an overflow affordance. When a user has scrolled to the bottom of the overflowed content the scrim is removed.
- When a link is selected the user is taken to the destination.
- When an action is selected that impacts the current view, the panel is closed and the action performed.
- When an action option is selected that causes a page refresh or other change of context the panel returns to a closed state.
- In a single select context when an option is selected, the panel is closed and the control updated.
- In a multiselect context the panel stays open until the user applies the selection. The panel then closes and the changes are visible in the UI.
- All panels can be closed by clicking outside of them or using the <kbd>esc</kbd> key.
- If there are more than 10 elements in the list, it may be necessary to include an autocomplete search box to filter options.
- A limited amount of options that don't scroll can be fixed at the bottom of a dropdown panel.

### Content

- A header provides context for the list of options.
- Section headers categorizes options into meaningful groups.
- An option should be concise and clearly indicate the link destination, action it performs, or choice it represents.

### Accessibility

- See the [WAI-ARIA Disclosure (Show/Hide) documentation](https://www.w3.org/TR/wai-aria-practices/#disclosure) for more details.
- See the [WAI-ARIA Menu documentation](https://www.w3.org/TR/wai-aria-practices/#menu) for more details.
- See the [WAI-ARIA Menu Button documentation](https://www.w3.org/TR/wai-aria-practices/#menubutton) for more details.
- See the [WAI-ARIA Combobox documentation](https://www.w3.org/TR/wai-aria-practices/#combobox) for more details.
- See the [WAI-ARIA Listbox documentation](https://www.w3.org/TR/wai-aria-practices/#Listbox) for more details.
- When options in a panel are filtered, a screen reader should announce how many options are now available via `aria-live`.


## Reference

- [Menus & Menu Buttons](https://inclusive-components.design/menus-menu-buttons/) by Heydon Pickering
- [Drop-Down Usability: When You Should (and Shouldn’t) Use Them](https://baymard.com/blog/drop-down-usability), by Baymard Institute
- [Link + Disclosure Widget Navigation](https://adrianroselli.com/2019/06/link-disclosure-widget-navigation.html), by Adrian Roselli
- [A11y Nav Menus – an in-depth overview of three patterns for accessible navigation](https://www.evinced.com/blog/a11y-nav-menus/), by Illai Zeevi
- [Menu (or not)](https://marcus.io/blog/menu-or-not), by Marcus Herrmann
