---
name: Checkbox
figma: https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/Pajamas-UI-Kit?node-id=4347%3A7242
docs: complete
gitlab_ui: /components/checkbox/code
vueComponents:
  - GlFormCheckbox
related:
  - dropdown
  - radio-button
  - segmented-control
  - toggle
---

A checkbox represents a single boolean option that can be checked, unchecked, or indeterminate. The indeterminate state occurs when sub-options are grouped under a parent option, and sub-options are in both selected and unselected states.

## Usage

- Use multiple checkboxes when a user can select one or more options, including all or none of the available options.
- Use a single checkbox when the result of a checked/unchecked state is **not** effective or noticeable immediately, and the user needs a confirmation of it being saved. (Use a [toggle](/components/toggle) when a state change has an immediate effect.)
- Use a single checkbox when there is a choice between two options. For example, checking an "Accept terms and agreements" checkbox means a user accepts, where unchecked indicates the user does not accept.
- Default to a positive state. For example, if the checkbox determines whether users can create widgets or not, use the language, "Users can create widgets."
- An indeterminate state can’t be achieved within the markup alone and must be done programmatically.

Use the following table to see when checkboxes should be used over other alternative components.

|  | [Single checkbox](/components/checkbox) | [Toggle](/components/toggle) | [Single-select dropdown](/components/dropdown) | [Radio buttons](/components/radio-button) | [Segmented control](/components/segmented-control) | [Multiple checkboxes](/components/checkbox) | [Multi-select dropdown](/components/dropdown) |
|---|---|---|---|---|---|---|---|
| Available options | 1 | 1 | >1 or unknown | >1 and <6 | >1 and <6 | >1 and <6 | >1 or unknown |
| Selectable options | 1 | 1 | 1 | 1 | 1 | >1 or even all | >1 or even all |
| Pre-selected options | Possible | Possible | Possible | Yes, 1 | Yes, 1 | Possible | Possible |
| Disabled options | Possible | Possible | Possible | Possible | No | Possible | Possible |
| Option descriptions | Possible | Possible | Possible | Possible | No | Possible | Possible |
| UI space | Little room | Not a problem | Little room | Not a problem | Not a problem | Not a problem | Little room |
| Example | Accepting terms and conditions on sign up | Enabling/disabling project features | “Sort by” dropdowns | Project visibility setting | 7, 30, 90 days timeframe in analytics dashboards | Scopes selection in User settings > Applications | Add/remove labels |

### Legends, Labels, and Help Text

- Checkbox labels are set in regular font weight, positioned to the right of the element, and should be as short as possible.
- Use a `fieldset` with `legend` (set in bold font weight and positioned above the group of checkboxes) to group a set of checkboxes. Some screen readers will announce the contents of the legend before each nested input to maintain context for a user.
- [Help text](/components/form#help-text) can be added below the checkbox label or as a paragraph below the group.

### Interaction

- Users are able to select an option with click/tap on the checkbox or its label.
- Checking one checkbox does not change the state of others, unless the parent was indeterminate and all children have the same state.

## Demo

[[Example:form-checkbox-checked]]

[[Example:form-checkbox-group-options-array]]

## Specifications

### Design

- Checkboxes use high-contrast colors for labels and default browser UI to indicate selected, unselected, and indeterminate states.
- Options are stacked vertically, with one checkbox per line.

Color, spacing, dimension, and layout specific information pertaining to this component can be viewed using the following link:

[View design in Pajamas UI Kit →](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/Pajamas-UI-Kit?node-id=4347%3A7242)

### Accessibility

Todo: Add accessibility specifications
