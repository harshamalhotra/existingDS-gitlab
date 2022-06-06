---
name: Listbox
description: A listbox is panel of options typically opened by a button or text input.
stories:
  - base-new-dropdowns-listbox--default
related:
  - dropdown-combobox
  - dropdown-disclosure
  - dropdown-menu
  - button
  - accordion
---

## Examples

<story-viewer story-name="base-new-dropdowns-listbox--default" title="Default listbox"></story-viewer>

<note>Listbox styles will be updated to match the UI kit.</note>

[View in Pajamas UI Kit →](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/Component-library?node-id=425%3A14)

## Structure

<todo>Add structure visual and element list.</todo>

## Guidelines

While the term "dropdown" generally refers to an element that reveals a related panel, the dropdown listbox component is specifically a button that opens a `listbox` panel of options.

### When to use

- Use a listbox when a list of single or multiselect options ([`role="option"`](https://www.w3.org/TR/wai-aria-1.2/#option)) is needed.
- Use a listbox for sorting (see [reference](#reference)).
- A listbox is also part of a [combobox](/components/dropdown-combobox) composite widget when the trigger is a text input.

### When not to use

- If the options within the panel are links or perform app-like JavaScript actions, consider using a [disclosure](/components/dropdown-disclosure) or [menu](/components/dropdown-menu) instead.
- If the panel of options is revealed when the focus is on a text input, or a button related to a text input, instead of a standalone dropdown button, then the listbox should be part of a [combobox](/components/dropdown-combobox).
- If a user is selecting a single text option from a group of options within a [form](/components/form), consider using a `<select>` element, [radio group](/components/radio-button), or [checkboxes](/components/checkbox) instead.
- If you need a way for a user to expand or collapse a content section, use an [accordion](/components/accordion) instead.

### Trigger button variants

A [button](/components/button) that triggers a listbox comes in a few variants to fit different situations.

- **Dropdown button**: A dropdown button has a [chevron-down](https://gitlab-org.gitlab.io/gitlab-svgs/?q=~chevron-down) icon to the right of the text label to indicate it will toggle additional content.
- **Icon dropdown**: An icon button, like one that uses the vertical or horizontal [ellipsis icons](https://gitlab-org.gitlab.io/gitlab-svgs/?q=elli), functions similarly to other trigger buttons with the only difference being only an icon label with no visible text.

### Behavior

-  Toggling the listbox can be done by a button, or a [text input](/components/form#field) when part of a [combobox](/components/dropdown-combobox).
- By default, the dropdown panel that contains the listbox opens below and is aligned to the left of the trigger button or text input. However, when there isn't enough space in the viewport, the panel uses edge detection to position it above and/or aligned to the right of the trigger.
- If the content within the dropdown panel exceeds the maximum height then a scrim (gradient overlay) appears at the bottom of the panel as an overflow affordance. When a user has scrolled to the bottom of the overflowed content the scrim is removed.
- In a single select context, when an option is selected the panel is closed and the control updated.
- In a multiselect context, the panel stays open until the user applies the selection. The panel then closes and the changes are visible in the UI.
- All panels can be closed by clicking outside of them, using the <kbd>esc</kbd> key, or by focus moving to an element outside of the component.

#### Validation

Error validation is shown inline and may happen in real-time or on submission if used in a form. Real-time validation should help a user understand and remedy the error if possible.

A validation message should always be visible and not placed in a tooltip. The message is placed directly below the trigger element, similar to [form validation](/components/form/#validation), and both are presented in an error state, which changes the text and border color of the trigger element to red.

### Content

- A header can provide context for the list of options.
- Section headers can categorize options into meaningful groups.
- Option text should be concise and clearly indicate the choice it represents.

### Accessibility

- See the [WAI-ARIA Listbox documentation](https://www.w3.org/TR/wai-aria-practices/#Listbox) for more details.
- When options in a panel are filtered, a screen reader should announce how many options are now available via `aria-live`.

## Reference

- Why use a listbox for sorting? After much [discussion](https://gitlab.com/gitlab-org/gitlab/-/issues/346804#note_749546915), we determined that this route provides the most consistent implementation while aligning with a user's goal of selecting an option (in this case the option for how they'd like to sort) and having the selected choice reflected in the UI and the control itself.
- [Drop-Down Usability: When You Should (and Shouldn’t) Use Them](https://baymard.com/blog/drop-down-usability), by Baymard Institute
