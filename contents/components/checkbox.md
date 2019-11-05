---
name: Checkbox
vueComponents:
  - GlFormCheckbox
related:
  - dropdowns
  - radio-button
  - segmented-control
  - toggle
---

A checkbox represents a single boolean option that can be checked, unchecked, or indeterminate. The indeterminate state occurs when sub-options are grouped under a parent option, and sub-options are in both selected and unselected states.

## Usage

* Use multiple checkboxes when a user can select one or more options, including all or none of the available options.
* Use a single checkbox when the result of a checked/unchecked state is **not** effective or noticeable immediately, and the user needs a confirmation of it being saved. (Use a toggle when a state change has an immediate effect.)
* Use a single checkbox when there is a choice between two options. For example, checking an "Accept terms and agreements" checkbox means a user accepts, where unchecked indicates the user does not accept.
* Checkboxes may replace toggles, segmented controls, or radio buttons (when multiple can be selected). For help with choosing the right solution, follow the table below.
* An indeterminate state can’t be achieved within the markup alone and must be done programmatically.

Todo: Add replacement-comparison-table

### Legends, Labels, and Help Text

* Checkbox labels are set in regular font weight, positioned to the right of the element, and should be as short as possible.
* Use a `fieldset` with `legend` (set in bold font weight and positioned above the group of checkboxes) to group a set of checkboxes. Some screen readers will announce the contents of the legend before each nested input to maintain context for a user.
* [Help text](/components/forms#help-text) can be added below the checkbox label or as a paragraph below the group.

### Visual Design

* Checkboxes use high-contrast colors for labels and default browser UI to indicate selected, unselected, and indeterminate states.
* A vertical (stacked) layout is preferred, with one checkbox per line. For sets of two with short labels where wrapping or width constraints are not an issue the inline (horizontal) layout is acceptable.
* Avoid mixing stacked and inline checkbox groups within the same form or context.

### Interaction

* Users are able to select an option with click/tap on the checkbox or its label.
* Checking one checkbox does not change the state of others, unless the parent was indeterminant and all children have the same state.

## Demo

[[Example:form-checkbox-checked]]

[[Example:form-checkbox-group-options-array]]

[[Example:form-checkbox-group-stacked]]

## Design specifications

Color, spacing, dimension, and layout specific information pertaining to this component can be viewed using the following link:

[Sketch Measure Preview for checkboxes](https://gitlab-org.gitlab.io/gitlab-design/hosted/design-gitlab-specs/checkboxes-spec-previews/)
