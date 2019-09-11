---
name: Forms
vueComponents:
  - GlFormGroup
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

Todo: Add live component block with code example (predefined widths from specs + 100% width)

#### Clear icon

A clear icon can appear in the right corner when the input field isn’t empty. It helps users clear the content with a single click. After removing the content it disappears and focus is placed on the input field. The clear icon isn’t necessary for the majority of input fields but is mandatory for [search boxes](/components/search).

### Text area

Text areas should be used when expected content is long. Predefined widths from the **Input fields** section apply to text area as well.

Todo: Add live component block with code example (text area)

### Character counter

The character counter lets users know that the amount of allowed text in an input field or a text area is limited. As users type, the counter lets them know how many characters remain before reaching the limited amount.

#### Interaction guidelines

The interaction with a character counter should proceed like this:

- The character counter is present by default (whenever there’s a limit) and shows the maximum number of characters available.
- When the number of characters entered is 30 away from the limit, the counter changes its color to the `warning` style. It remains styled like this even when it reaches 0.
- When the number of characters entered crosses the limit, the counter changes its color to `danger`, its font weight to bold, and counts the number of characters that are over the limit (for example **-23**).

Users are allowed to keep typing when the limit is reached. This is to make inputting text more friendly to users and prevents them from losing any information. Some people look at the keyboard when they type so blocking the input would create a poor experience. The characters that are over the limit are also marked with a background set in `$red-200`.

While hovering over the character counter a tooltip with the label “Characters left” must show up.

#### Preventing text overlap

The character counter comes with a white background on an input field with a fade out facing the side of the input text. This is to prevent overlap which would make both unreadable. The counter shouldn’t cover the content when the text is longer than the width of the input field and the cursor is at the end of the text.

Todo: Add live component block with code example (input field character counter)

There’s no white background behind the text area character counter. Instead, add additional padding at the bottom the text area to prevent the overlap of the text and character counter. This way, the character counter is always one line below the content.

Todo: Add live component block with code example (text area character counter)

### Placeholders

Only use a placeholder if there isn't enough space for [Help text](#help-text). The [Search](/components/search) component is such an example.

When they are used, placeholders should follow the rules of [Help text](#help-text). They must not be used as a replacement for labels but as a supplement. If a placeholder can’t be short, but an explanation is needed, a [Help text](#help-text) below the input should be used. An easy guideline to find out if the explanatory text is too long for a placeholder: if it resembles a sentence, try to use Help text, if it’s just a few words (ideally up to two or three), it's ok to use a placeholder.

Todo: Add live component block with code example (placeholder)

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

### Disabling vs. hiding fields

The user goal when interacting with a form should be taken into account when deciding whether a field needs to be disabled or hidden from the interface.

**Disable** a field if a user does not have access grants for an item, but still needs disclosure to it. The field is still displayed in the form, but cannot be edited. If it can become editable to the user (depending on certain conditions, like pressing a button or completing another field), it should stay disabled until then.

Disabled fields give extra thought for the user about why it is not available. The visual distinction between disabled/enabled fields should be very explicit and clear. Be sure to always include a [Help text](#help-text) below the field, explaining why it's disabled.

**Hide** a field if a user doesn’t need disclosure or access to an item. This option is relevant specifically for system security measures when some information should not be available in the user interface.

Hiding fields allows for progressive disclosure. For example, as the user enters data in a form or makes a selection, more fields may be displayed or hidden, but the user only has to focus on the necessary fields to complete a task.

The page layout will need to adapt to display the revealed form fields, but this approach is more consistent, avoids distraction, and lowers the user's cognitive load.

When in doubt, hide a field instead of disabling it.

### Help text

Help text can be used as additional instructions to the user when filling in the form. It should be: 

* **Contextual**: An example or an explanation of the field, not a generic "Enter" or a repetition of the label. If it's an example, it must start with "e.g.".
* **Helpful**: If it doesn’t add value and make things easier for the user, it shouldn’t be used.
* **Short**: It should be a short sentence or a small paragraph, not a single word or a big paragraph.

It’s styled using the "Secondary" text style and should always be placed below the form element. Additionally, a [help link](/usability/helping-users) can be provided to give supplemental information. If there isn't enough space for help text, consider using a [placeholder](#placeholder).

Todo: Add live component block with code example (help text)

### Icons

Icons can be placed inside input fields for various use cases. For example, date picker input fields come with a calendar icon, and dropdown input fields come with a downward facing chevron icon. The top right corner is the default position where icons should be placed and the `$grey-700` is the default color.

Todo: Add live component block with code example (input field with an icon)

## Design specification

Color, spacing, dimension, and layout specific information pertaining to this component can be viewed using the following link:

[Sketch Measure Preview for forms](https://gitlab-org.gitlab.io/gitlab-design/hosted/design-gitlab-specs/forms-spec-previews/)
