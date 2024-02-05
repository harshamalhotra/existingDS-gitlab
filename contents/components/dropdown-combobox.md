---
name: Combobox
description: A combobox is a panel of options typically opened by a button or text input.
related:
  - dropdown-disclosure
  - button
  - accordion
components:
  - base-dropdown-collapsible-listbox
---

## Examples

<story-viewer component="base-dropdown-collapsible-listbox" title="Simple listbox"></story-viewer>

<story-viewer component="base-dropdown-collapsible-listbox" story="header-and-footer" args-block="false" title="Listbox with header and footer actions"></story-viewer>

<story-viewer component="base-dropdown-collapsible-listbox" story="header-actions" args-block="false" title="Listbox with header action"></story-viewer>

<story-viewer component="base-dropdown-collapsible-listbox" story="groups" args-block="false" title="Listbox with groups"></story-viewer>

<story-viewer component="base-dropdown-collapsible-listbox" story="searchable" title="Listbox with search"></story-viewer>

<story-viewer component="base-dropdown-collapsible-listbox" story="searchable-groups" title="Listbox with searchable groups"></story-viewer>

<story-viewer component="base-dropdown-collapsible-listbox" story="custom-list-item" title="Listbox with custom list option"></story-viewer>

<note>Listbox styles will be updated to match the UI kit.</note>

[View in Pajamas UI Kit →](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?type=design&node-id=425-14&mode=design)

## Structure

<figure-img alt="Numbered diagram of a combobox widget structure" label="Combobox widget structure" src="/img/dropdown-combobox-structure.svg"></figure-img>

1. **Text input or button**: Triggers the panel to open or close.
1. **Panel**: Wraps the content.
1. **Header** (optional): Provides more context for the options.
1. **Header action** (optional): Changes the selected state of options.
1. **Listbox**: A group of options.
1. **Option**: Item available for selection.
1. **Scrim**: Gradient overlay when items overflow the panel.
1. **Footer** (optional): Contains 2 or less actions related to the options.
1. **Search within** (optional for [collapsible listbox](#variants)): A nested input can limit the number of available options.
1. **Section title** (optional): Groups options under a shared title.
1. **Selected option**: Option in selected state.

## Guidelines

### When to use

- To select options within a listbox ([`role="listbox"`](https://www.w3.org/TR/wai-aria-1.2/#listbox)) of single or multiselect options ([`role="option"`](https://www.w3.org/TR/wai-aria-1.2/#option)).
- For sorting a list (see [reference](#reference)).
- If an option is more than just text. For example, if an avatar or other graphical elements is included as part of the option.

### When not to use

- If you need to solely display a list of actions (semantic buttons or links, not `role="option"`), then use a [disclosure](/components/dropdown-disclosure) instead.
- If a user is selecting a single text option from a group of options within a [form](/patterns/forms), consider using a [select](/components/select), [radio group](/components/radio-button), or [checkboxes](/components/checkbox) instead.
- If you need a way for a user to expand or collapse a content section, use an [accordion](/components/accordion) instead.

### Variants

There are two combobox variants that vary based on how they are triggered, whether through a button or a text input.
See [diagram](/components/dropdown-overview#which-component-should-you-use) for additional help in choosing between them.

- **Collapsible listbox** (`GlCollapsibleListbox`, most common): A button triggers a panel of single or multiselect options.
- **Combobox** (`GlFormCombobox`): A text input triggers a panel of options. An optional button next to the input can also trigger the panel.

#### Trigger buttons

A [button](/components/button) that triggers a combobox comes in a few variants to fit different situations.

- **Dropdown button**: A dropdown button has a [chevron-down](https://gitlab-org.gitlab.io/gitlab-svgs/?q=~chevron-down) icon to the right of the text label to indicate it will toggle additional content.
- **Icon dropdown**: An icon button, like one that uses the vertical or horizontal [ellipsis icons](https://gitlab-org.gitlab.io/gitlab-svgs/?q=elli), functions similarly to other trigger buttons with the only difference being only an icon label with no visible text.

### Size

- **Trigger**: The [text input](/components/text-input) or [button](/components/button) width is determined by the properties available for each of those components.
- **Panel**: Has a minimum and maximum width and a maximum height to keep content near the trigger and to keep panels consistent throughout the UI. The height of the panel is initially set to the height of its content (dynamic height) when less than the maximum, but can optionally be set to always use a fixed height.

### Behavior

- By default, the panel opens below and is aligned to the left of the text input or button. However, when there isn't enough space in the viewport, the panel uses edge detection to position it above and/or aligned to the right of the text input or button.
- The tip of the panel points at the trigger and is center-aligned with it by default.
- If the content within the panel exceeds the maximum height then a scrim (gradient overlay) appears at the bottom of the panel as an overflow affordance. When a user has scrolled to the bottom of the overflowed content the scrim is removed.
- A panel is closed by clicking outside of it, using the <kbd>Esc</kbd> key, or by focus moving to an element outside of the component.
- Two or less actions that don't scroll can be fixed in a footer at the bottom of a panel. Unlike a header action, a footer action doesn't change the state of the options within the panel.
- Collapsible listbox:
  - An optional text input _within_ the panel can limit available options when a term is entered.
  - For single select:
    - When an option is selected, the panel is closed and the control updated.
    - If **Any** or **All** is included, it should be the first option to indicate that any or all parameters can apply.
  - For multiselect:
    - When one or more options are selected, they can optionally be grouped in a section above unselected options, although they may not be visibly grouped until the selections are applied and the panel is opened again.
    - When one or more options are selected, the panel stays open until the user closes it by one of the available methods. An **Apply** button is not necessary. Depending on the logic, the selection may sync with the database on each selection and update the UI in real-time, or it may sync with the database after the panel is closed and then update the UI.
    - A header action can change per use case. For example, a **Select all** action can change to **Unselect all** after options are selected.
- Combobox:
  - A user can either type a term in the text input or select an available option.
  - The text input can use autocomplete capability based on available options.
  - When an option is selected, the panel is closed and the text input updated with the selection.

#### Validation

- Error validation is shown inline and may happen in real-time or on submission if used in a form.
- Real-time validation should help a user understand and remedy the error if possible.
- A validation message should always be visible and not placed in a tooltip. The message is placed directly below the trigger element, similar to [form validation](/patterns/forms/#validation), and both are presented in an error state, which changes the text and border color of the trigger element to red.

### Content

- Placeholder text in an input should only be used for extra, non-essential information when the input purpose is still understood in its absence; it's not a replacement for a visible label. An exception is the [search](/components/search) input, which includes a [search](https://gitlab-org.gitlab.io/gitlab-svgs/?q=~search) icon to further clarify its purpose.
- A header can provide context for the list of options.
- Within a listbox:
  - Section titles can categorize options into meaningful groups.
  - Option text should be concise and clearly indicate the choice it represents.
  - When possible, the order of options should follow numeric (Option 1, Option 2, Option 3…), alpha (Option A, Option B, Option C…), or natural (Option 1–3, Option 4–7, Option 8–11…) ordering. 
- Actions within a footer should be concise and relate to the options.

### Accessibility

- A text input must be clearly labeled and identified.
- See the [WAI-ARIA Combobox documentation](https://www.w3.org/WAI/ARIA/apg/patterns/combobox/) for more details.
- See the [WAI-ARIA Listbox documentation](https://www.w3.org/WAI/ARIA/apg/patterns/listbox/) for more details.
- When options in a panel are filtered, a screen reader should announce how many options are now available via `aria-live`.
- It should be clear for all modalities whether an option is selected or not.

## Reference

- Why use a listbox for sorting? After much [discussion](https://gitlab.com/gitlab-org/gitlab/-/issues/346804#note_749546915), we determined that this route provides the most consistent implementation while aligning with a user's goal of selecting an option (in this case the option for how they'd like to sort) and having the selected choice reflected in the UI and the control itself.
- [Drop-Down Usability: When You Should (and Shouldn’t) Use Them](https://baymard.com/blog/drop-down-usability), by Baymard Institute
