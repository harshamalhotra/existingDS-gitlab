---
name: Radio button
figma: https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/Pajamas-UI-Kit?node-id=3947%3A4
docs: complete
gitlab_ui: /components/radio-button/code
vueComponents:
  - GlFormRadio
related:
  - checkbox
  - dropdown
  - segmented-control
  - toggle
---

A radio button typically represents a single option in a group of related choices. Each radio button is boolean and only one can be selected at a time.

## Usage

- Use radio buttons to present a set of options, where only one option can be selected at a time.
- One radio button should be selected as the default choice by using the `checked` attribute.

Use the following table to see when radio buttons should be used over other alternative components.

|                      | [Single checkbox](/components/checkbox) | [Toggle](/components/toggle)        | [Single-select dropdown](/components/dropdown) | [Radio buttons](/components/radio-button) | [Segmented control](/components/segmented-control) | [Multiple checkboxes](/components/checkbox)    | [Multi-select dropdown](/components/dropdown) |
| -------------------- | ----------------------------------------- | ----------------------------------- | ----------------------------------------------- | ----------------------------------------- | -------------------------------------------------- | ------------------------------------------------ | ---------------------------------------------- |
| Available options    | 1                                         | 1                                   | >1 or unknown                                   | >1 and <6                                 | >1 and <6                                          | >1 and <6                                        | >1 or unknown                                  |
| Selectable options   | 1                                         | 1                                   | 1                                               | 1                                         | 1                                                  | >1 or even all                                   | >1 or even all                                 |
| Pre-selected options | Possible                                  | Possible                            | Possible                                        | Yes, 1                                    | Yes, 1                                             | Possible                                         | Possible                                       |
| Disabled options     | Possible                                  | Possible                            | Possible                                        | Possible                                  | No                                                 | Possible                                         | Possible                                       |
| Option descriptions  | Possible                                  | Possible                            | Possible                                        | Possible                                  | No                                                 | Possible                                         | Possible                                       |
| UI space             | Little room                               | Not a problem                       | Little room                                     | Not a problem                             | Not a problem                                      | Not a problem                                    | Little room                                    |
| Example              | Accepting terms and conditions on sign up | Enabling/disabling project features | “Sort by” dropdowns                             | Project visibility setting                | 7, 30, 90 days timeframe in analytics dashboards   | Scopes selection in User settings > Applications | Add/remove labels                              |

### Legends, Labels, and Help text

- Radio button labels are set in regular font weight, positioned to the right of the element, and should be as short as possible.
- Use a `fieldset` with `legend` (set in bold font weight and positioned above the group of radio buttons) to group a set of radio buttons. Some screen readers will announce the contents of the legend before each nested input to maintain context for a user.
- [Help text](/components/form#help-text) can be added below the radio button label or as a paragraph below the group.

### Interaction

- Users are able to select an option with click/tap on the radio button or its label.
- Selecting one option unselects all others.

## Demo

[[Example:form-radio-group-stacked]]

## Specifications

### Design

- Radio buttons use high-contrast colors for labels and custom styles (based on Bootstrap) instead of browser defaults for the radio control.
- Radio buttons are vertically stacked, with one radio button per line.

Color, spacing, dimension, and layout specific information pertaining to this component can be viewed using the following link:

[View design in Pajamas UI Kit →](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/Pajamas-UI-Kit?node-id=3947%3A4)

### Accessibility

Todo: Add accessibility specifications
