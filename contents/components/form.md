---
name: Form
description: Forms allow for user input by mimicking paper forms where users fill in information into particular fields and submit it to the system.
figma: https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/Pajamas-UI-Kit?node-id=425%3A10
docs: in-progress
vueComponents:
  - GlFormGroup
  - GlFormInput
  - GlFormTextarea
related:
  - button
  - dropdown
  - date-picker
  - color-picker
---

## Usage

### Layout

Form elements should move in a single direction so they should only be distributed through one column when the progression of the form is vertical and through one row when the progression is horizontal. Horizontally stacking input fields in a vertically moving form is only acceptable when they’re related, for example, name and surname.

Todo: Add live component block with code example (Vertical form with stacked input fields)

Todo: Add live component block with code example (Horizontal form)

### Labels

Input field and text area labels are set in bold and positioned above the form element by default. Labels must use the **for** attribute for accessibility reasons. Labels for [checkboxes and radio buttons](#checkbox) are set in regular font weight.

In rare cases and exceptions, the label can be placed to the left of the input field. Examples include single input fields, for example "Sort by" dropdowns, and horizontally distributed forms.

Todo: Add live component block with code example (sort by dropdown)

Todo: Add live component block with code example (horizontally distributed form)

### Description

A 1–2 sentence description can go underneath the label to describe the purpose or intent of the input. The description is different from [help text](#help-text) in that help text provides examples or formatting information, while the description provides an explanation or instructions.

Consider using a description when it may be unclear how or where the user input will be used, or to provide an explanation beyond what a label or help text infers.

Use `aria-describedby` to associate the description with the input for screen reader users.

### Input fields

[[Example:form-group]]

Disabled input fields need an explanation on why they’re disabled and that comes as [help text](#help-text) below.

[[Example:form-group-disabled]]

The width of an input field should reflect the expected content, for example postcode should be smaller than address.

Todo: Add live component block with code example (inputs of different widths)

#### Predefined widths

To encourage the usage of different input field widths, we use a set of predefined widths based on the 8 pixels grid. It’s okay to use a width that isn’t on this list but it should be based on the 8 pixels grid.

Todo: Add live component block with code example (predefined widths from specs + 100% width)

#### Clear button

A clear button can appear on the right side of an input field when it has content, to help a user clear the content with a single click. After removing the content, it disappears and the focus is placed on the input field. The clear button should be implemented as a button, accessible via keyboard, and its name announced as “Clear” for assistive technology.

The clear button can be useful for input fields that satisfy both of the following criteria:

- The input field is filled-in repeatedly by the same user
- The data to be entered differs significantly from one use of the input field to the next

In practice, only certain input fields should have a clear button. For example, [search boxes](/components/search) tend to satisfy both of the criteria mentioned above, so using a clear button for them is desirable.

### Text area

Text areas should be used when expected content is long. Predefined widths from the **Input fields** section apply to text area as well.

Todo: Add live component block with code example (text area)

### Character counter

We have two different character counters: one for limited length and one for recommended. The limited length character counter lets users know that the amount of allowed text in an input field or a text area is limited. As users type, the counter lets them know how many characters remain before reaching the limited amount. The recommended length character counter tells users when they reached and surpassed the recommended length in an input field or a text area.

#### Interaction guidelines

Users are allowed to keep typing when the limit or the recommended length is reached. This is to make inputting text more friendly to users and prevents them from losing any information. Some people look at the keyboard when they type so blocking the input would create a poor experience.

##### Limited length

The interaction with a character counter for a limited length should proceed like this:

- The character counter is present by default (whenever there’s a limit) and shows the maximum number of characters available.
- When the number of characters entered is 30 away from the limit, the counter changes its color to the `warning` style. It remains styled like this even when it reaches 0.
- When the number of characters entered crosses the limit, the counter changes its color to `danger`, its font weight to bold, and counts the number of characters that are over the limit (for example **-23**).
- The characters that are over the limit are also marked with a background set in `$red-200`.
- While hovering over the limited length character counter a tooltip with the label “Characters left” must show up. Once over the limit, the label is changed to “Characters over limit”.

##### Recommended length

The interaction with a character counter for a recommended length should proceed like this:

- The character counter is *not* present by default.
- When the number of characters entered is 30 away from the recommendation, the counter appears, styled with the `secondary` style. It remains styled like this even when it reaches 0.
- When the number of characters entered crosses the recommendation, the counter changes its color to `info`, its font weight remains regular, and counts the number of characters that are over the limit (for example -23).
- The characters that are over the recommended length are also marked with a background set in `$blue-100`.
- While hovering over the recommended length character counter a tooltip with a label “Recommended characters left” must show up. Once over the recommended range, it changes to “Over recommended length”.

#### Preventing text overlap

The character counter comes with a white background on an input field with a fade out facing the side of the input text. This is to prevent overlap which would make both unreadable. The counter shouldn’t cover the content when the text is longer than the width of the input field and the cursor is at the end of the text.

Todo: Add live component block with code example (input field character counter)

There’s no white background behind the text area character counter. Instead, add additional padding at the bottom the text area to prevent the overlap of the text and character counter. This way, the character counter is always one line below the content.

Todo: Add live component block with code example (text area character counter)

### Placeholders

Only use a placeholder if there isn't enough space for [help text](#help-text). The [search](/components/search) component is such an example.

When they are used, placeholders should follow the rules of [help text](#help-text). They must not be used as a replacement for labels but as a supplement. If a placeholder can’t be short, but an explanation is needed, a [help text](#help-text) below the input should be used. An easy guideline to find out if the explanatory text is too long for a placeholder: if it resembles a sentence, try to use Help text, if it’s just a few words (ideally up to two or three), it's ok to use a placeholder.

Todo: Add live component block with code example (placeholder)

### Validation

Validation should be shown inline and can happen in real-time or on form submission. Real-time validation should confirm correct content or assist a user to input the correct information to prevent them from attempting to submit the form with possibly incorrect information. Real-time validation might be frontend-only, but a user has no way of knowing that. Validation should always be visible and not placed in a tooltip. See also [submit form buttons](#submit-form-buttons) below.

When present, the validation message is placed directly below the input, and above any help text.

#### Errors

An error indicates content that can’t be submitted or was found to be invalid after submission and needs to be corrected. For example, an email address that doesn’t contain the '@' symbol. The input will have a red border to help visually emphasize what needs to be corrected.

[[Example:form-group-validations]]

#### Warnings

A warning indicates content that may be formatted incorrectly or does not match the expected content. For example, an SSH key where the number of characters does not match the expected length.

Todo: Add live component block with code example (warning)

#### Success

Success indicates content that is valid. For example, a URL that is formatted correctly or has been successfully pinged.

Todo: Add live component block with code example (success)

#### Submit form buttons

We don’t disable the submit buttons as a way of validating forms. We default to active submit buttons in forms and disable them once clicked to avoid the possibility of submitting the form twice.

Disabling buttons by default can still make sense in some cases. Editing existing information within a form is a good example. In such cases, buttons are disabled by default and become enabled once a change has been made by the user. The state change indicates the need for saving the changes and shouldn’t be tied to whether the information in the form is valid or not.

Todo: Add live component block with code example (form button)

#### Required information

We default to all information being required unless stated otherwise with "(optional)" added to the label of the corresponding input field.

Todo: Add live component block with code example (optional)

### Disabling vs. hiding fields

The user goal when interacting with a form should be taken into account when deciding whether a field needs to be disabled or hidden from the interface.

**Disable** a field if a user does not have access grants for an item, but still needs disclosure to it. The field is still displayed in the form, but cannot be edited. If it can become editable to the user (depending on certain conditions, like pressing a button or completing another field), it should stay disabled until then.

Disabled fields give extra thought for the user about why it is not available. The visual distinction between disabled/enabled fields should be very explicit and clear. Be sure to always include a [help text](#help-text) below the field, explaining why it's disabled.

**Hide** a field if a user doesn’t need disclosure or access to an item. This option is relevant specifically for system security measures when some information should not be available in the user interface.

Hiding fields allows for progressive disclosure. For example, as the user enters data in a form or makes a selection, more fields may be displayed or hidden, but the user only has to focus on the necessary fields to complete a task. 

The page layout will need to adapt to display the revealed form fields, but this approach is more consistent, avoids distraction, and lowers the user's cognitive load.

When in doubt, hide a field instead of disabling it.

### Help text

Help text can be used as additional instructions to the user when filling in the form. It should be:

- **Contextual**: An example or an explanation of the field, not a generic "Enter" or a repetition of the label. If it's an example, it must start with "For example,".
- **Helpful**: If it doesn’t add value and make things easier for the user, it shouldn’t be used.
- **Short**: It should be a short sentence or a small paragraph, not a single word or a big paragraph.

It’s styled using the "Secondary" text style and should always be placed below the form element. Additionally, a [help link](/usability/helping-users) can be provided to give supplemental information. If there isn't enough space for help text, consider using a [placeholder](#placeholder).

Todo: Add live component block with code example (help text)

### Icons

An icon can be placed inside input fields for various use cases. For example, date picker input fields come with a calendar icon, and dropdown input fields come with a downward facing chevron icon. Only use a single icon within a field.

Eye icons can also be used within fields to indicate sensitive credentials or keys. When using this pattern to show/hide the content of an input form, use the eye icon for show and eye-slash icon for hide.

The top right corner is the default position for icons and `$grey-700` is the default color.

Todo: Add live component block with code example (input field with an icon)

### Keyboard shortcuts

#### <kbd>Enter</kbd> key

When keyboard focus is inside an input field, pressing the <kbd>Enter</kbd> key should submit the form (provided there are no validation errors).

This does not apply to mutli-line fields, such as Markdown editors, since these controls need to support the input of newlines.

##### Exceptions

There are some cases in which the submit-on-Enter behavior should be disabled. For example, if a form has a dropdown control that includes a search bar, pressing <kbd>Enter</kbd> inside the search bar should **not** submit the form.

In general, this behavior should be disabled for input elements that do not directly edit a form’s data.

##### Quick submit

Forms should support the "quick submit" behavior, which allows forms to be submitted from any control (including Markdown editors) using <kbd>⌘</kbd> + <kbd>Enter</kbd> (or <kbd>Ctrl</kbd> + <kbd>Enter</kbd>).

Note to developers: the quick submit behavior can be automatically added to a form using the `js-quick-submit` CSS class implemented in [`quick_submit.js`](https://gitlab.com/gitlab-org/gitlab/-/blob/master/app/assets/javascripts/behaviors/quick_submit.js).

## Design specification

Color, spacing, dimension, and layout specific information pertaining to this component can be viewed using the following link:

[View design in Pajamas UI Kit →](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/Pajamas-UI-Kit-Beta?node-id=425%3A10)
