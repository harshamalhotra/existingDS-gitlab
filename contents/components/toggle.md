---
name: Toggle
figma: https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/Pajamas-UI-Kit?node-id=425%3A140
docs: complete
vueComponents:
  - GlToggle
related:
  - checkbox
  - radio-button
  - segmented-control
---

A toggle is a visual switch which acts as a boolean.

## Usage

### Use a toggle when:

- There's a binary choice for enabling a setting ([ux-research#1215](https://gitlab.com/gitlab-org/ux-research/-/issues/1215#note_492752885)). For examples, choices that follow a pattern of on/off, true/false, enable/disable, or activate/deactivate.
- The item being toggled has a default state. For example, notifications default to off for a merge request you haven't participated in. 
- The result of changing the toggle state is immediately effective and there's **no need** for an additional action to apply or save a change.

Consider providing feedback of the toggle state change by using a [toast](/components/toast).

### Do not use a toggle when:

- A submit button is needed to apply or save a selection.
- When the setting exists within a form that has other elements, like text inputs or checkboxes, that need to be saved or submitted.
- Two choices don't map to a boolean relationship like on/off.
- There are more than two choices.

If the scenario doesn't align with the usage outlined above, consider using a:

- [Checkbox](/components/checkbox) when multiple items can be selected, including nested items, and the result of the selection has to be saved or submitted.
- [Radio button](/components/radio-button) when only one item can be selected and the result of the selection has to be saved or submitted.
- [Dropdown](/components/dropdown) to make a selection from a list of items.
- [Segmented control](/components/segmented-control) to change a content view or preference in the context of that content.

### Labels

Toggle labels are set in bold, positioned above the element by default, and should concisely describe what the control does when the toggle is on.

In rare cases and exceptions, the label can be placed to the left of the toggle. Examples include non-inline (block) positioned elements. Don’t use help text if you are placing the label to the left of the toggle. Use the default layout if you are using both a label and help text. 

### Visual Design

Toggles should use high-contrast colors to indicate the states - On and Off.

## Demo

[[Example:toggle-default]]

[[Example:toggle-disabled]]

[[Example:toggle-loading]]

## Design specifications

Color, spacing, dimension, and layout specific information pertaining to this component can be viewed using the following link:

[View design in Pajamas UI Kit →](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/Pajamas-UI-Kit?node-id=425%3A282)

