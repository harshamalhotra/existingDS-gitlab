---
name: Forms
vueComponents:
  - GlFormInput
  - GlFormTextarea
related:
  - buttons
  - dropdowns
  - date-picker
---

Forms allow for user input by mimicking paper forms where users fill in information into particular fields and submit it to the system. They’re a fundamental but a complex part of interacting with web applications such as GitLab. Getting them right and assisting the users to successfully complete their tasks is essential.

## Usage

### Layout

Form elements should move in a single direction so they should only be distributed through one column when the progression of the form is vertical and through one row when the progression is horizontal. Horizontally stacking input fields in a vertically moving form is only acceptable when they’re related (e.g. Name and Surname).

Todo: Add live component block with code example (Vertical form with stacked input fields)

Todo: Add live component block with code example (Horizontal form)

### Labels

Input field and text area labels are set in bold and positioned above the form element by default. Labels must use the **for** attribute for accessibility reasons. Labels for [checkboxes and radio buttons](#checkbox) are set in regular font weight.

In rare cases and exceptions, the label can be placed to the left of the input field. Examples include single input fields (e.g. "Sort by" dropdowns) and horizontally distributed forms.

Todo: Add live component block with code example (sort by dropdown)

Todo: Add live component block with code example (horizontally distributed form)

### Input fields

Todo: Add live component block with code example (input field types)

Disabled input fields need an explanation on why they’re disabled and that comes as [Help text](#help-text) below.

Todo: Add live component block with code example (disabled input)

The width of an input field should reflect the expected content, for example postcode should be smaller than address.

Todo: Add live component block with code example (inputs of different widths)

#### Predefined widths

To encourage the usage of different input field widths, we use a set of predefined widths based on the 8 pixels grid. It’s okay to use a width that isn’t on this list but it should be based on the 8 pixels grid.

Todo: Add live component block with code example (predefined widths + 100% width)

#### Clear icon

A clear icon can appear in the right corner when the input field isn’t empty. It helps users clear the content with a single click. After removing the content it disappears and focus is placed on the input field. The clear icon isn’t necessary for the majority of input fields but is mandatory for [search boxes](/components/search).

### Text area

Text areas should be used when expected content is long. Predefined widths from the **Input fields** section apply to text area as well.

Todo: Add live component block with code example (text area)

### Placeholders

Placeholders must not be used as a replacement for labels but as a supplement. Their usage should be limited even if used correctly. When they are used, they should be:

*   **Contextual**: Either an example or an explanation of the label, not a generic "Enter" or a repetition of the label.
*   **Helpful**: If a placeholder doesn’t add value and make things easier for the user, it shouldn’t be used.
*   **Short**: If a placeholder can’t be short, it should be turned into a [Help text](#help-text) below the form element.

If the placeholder isn’t all of the above, it shouldn’t be used.

If a placeholder is an example, it must start with "e.g.".

Todo: Add live component block with code example (placeholder)

If a placeholder can’t be shortened but an explanation is needed, a [Help text](#help-text) below the input should be used. An easy guideline to find out if the explanatory text is too long for a placeholder: if it resembles a sentence, use Help text below the input, if it’s just a few words (ideally up to two or three), consider using a placeholder.

Todo: Add live component block with code example (help text)

### Checkboxes and radio buttons

Checkbox and radio button labels are set in regular font weight and should be as short as possible. If more, explanatory text is required, it should be added and styled as [Help text](#help-text) below the label.

Todo: Add live component block with code example (checkbox & radio button: active & disabled)

Todo: Add live component block with code example (checkbox & radio button: with help text below labels)

### Validation

#### Error messages and states

Error messages and validation should be shown inline and can, in general, happen either live or on form submission. Live validation should be seen as assisting the user to input the correct information and not as a way of preventing them from submitting the form with possibly incorrect information (live validation might be frontend-only but the user has no way of knowing that).

The error message shows up below the input field in error state and should be helpful and contextual, not generic. If there’s Help text below the input field, an error pushes it further down as it needs to show up immediately after the input.

Todo: Add live component block with code example (error state + message)

#### Form buttons

We don’t disable buttons as a form of validating forms. We default to active buttons in forms and disable them once clicked to avoid the possibility of submitting the form twice.

Disabling buttons by default can still make sense in some cases. Editing existing information within a form is a good example. In such cases, buttons are disabled by default and become enabled once a change has been made by the user. The state change indicates the need for saving the changes and shouldn’t be tied to whether the information in the form is valid or not.

Todo: Add live component block with code example (form button)

#### Required information

We default to all information being required unless stated otherwise with "(optional)" added to the label of the corresponding input field.

Todo: Add live component block with code example (optional)

### Help text

Help text can be used as additional instructions to the user when filling in the form. It’s styled using the "Secondary" text style and should always be placed below the form element. In most cases, it should be a short sentence, not a paragraph or a single word. Additionally, a [help link](/usability/helping-users) can be provided to give supplemental information.

Todo: Add live component block with code example (help text)

### Icons

Icons can be placed inside input fields for various use cases. For example, date picker input fields come with a calendar icon, and dropdown input fields come with a downward facing chevron icon. The top right corner is the default position where icons should be placed and the `$grey-700` is the default color.

Todo: Add live component block with code example (input field with an icon)

## Design specification

Color, spacing, dimension, and layout specific information pertaining to this component can be viewed using the following link:

[Sketch Measure Preview for forms](https://gitlab-org.gitlab.io/gitlab-design/hosted/design-gitlab-specs/forms-spec-previews/)
