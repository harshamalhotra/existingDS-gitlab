---
name: Forms
description: A form is for capturing and submitting user input.
components:
  - base-form-form
  - base-form-form-group
  - base-form-form-input
  - base-form-form-textarea
related:
  - file-uploader
  - date-picker
  - color-picker
  - search
  - button
  - stepper
---

## Examples

<story-viewer component="base-form-form-group" title="Default form group"></story-viewer>

<story-viewer component="base-form-form-group" story="disabled" title="Disabled form group"></story-viewer>

<story-viewer component="base-form-form-group" story="with-validations" title="Form group with validations"></story-viewer>

[View in Pajamas UI Kit →](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?type=design&node-id=49840-75722&mode=design)

## Structure

<figure-img alt="Numbered diagram of a form" label="Form structure" src="/img/form-structure.svg"></figure-img>

1. **Label**: Clearly and concisely identifies an input.
1. **Inputs**: Allows a user to enter content or select options through a variety of inputs.
1. **Placeholder** (optional): Hints at what should be entered into a field.
1. **Description** (optional): Clarifies the purpose or intent of an input.
1. **Validation message**: Appears if the input is invalid, acceptable, or needs awareness.
1. **Help text** (optional): Provides contextual examples, formatting information, details about the input field state.
1. **Actions**: Used to submit or cancel a form.

## Guidelines

### When to use

- Use a form when user input needs to be captured by one or more form controls and manually submitted by the user.

### When not to use

- If user selection or input invokes an immediate change, like a page refresh or setting being applied and submission isn't required, then a form shouldn't be used.

<todo>Make Forms it's own section with subpages for components and concepts.</todo>

### Form elements

Forms may include a variety of elements. By default all information in forms is required unless stated otherwise with "(optional)" added to the label of the corresponding element. However, if your form is entirely optional except for 1-2 fields, you may opt to append "(required)" to the field label instead.

#### Text

- **Label**:
  - Clearly and concisely identifies an input.
  - If a field is optional, add the suffix "(optional)". For example, _Phone number (optional)_
  - Don't use punctuation. Special characters are allowed for formatting (-:;).
- **Description**:
  - Clarifies and explains the purpose or intent of an input. For example, _A phone number is required for security purposes._
  - Avoid repetitive or unnecessary text. For example, _This setting is..._ or _Use this setting to..._
  - Positioned directly below a label.
  - Don't use "allow" unless you're specifically talking about security. For example, _Allows users to fork the repo_ should be _Users can fork the repo_.
- **Help**: Provides contextual examples, formatting information, details about the input state, validation messages, or any combination of these options. Positioned directly below an input. May include a [help link](/usability/contextual-help) when necessary. For example: _Must have 11 digits including the country code. For example, +1-234-567-8901. Learn more._
- **Placeholder**: Only used for extra, non-essential information when the input purpose is still understood in its absence; it's not a replacement for a visible label. An exception is the [search](/components/search) component, which includes a [search](https://gitlab-org.gitlab.io/gitlab-svgs/?q=~search) icon to further clarify its purpose. For example, _Search or go to…_.

#### Field

- **Text input**: The `<input type="text">` element is the default input type,  used for a single line of text.
- **Text area**: The `<textarea>` is used for multi-line text.

#### Checkbox

See the [checkbox](/components/checkbox) component page for details.

#### Radio button

See the [radio button](/components/radio-button) component page for details.

#### Select

The `<select>` element creates a dropdown of options. See the dropdown component documentation for dropdowns that are not part of a form. For example, a [combobox](/components/dropdown-combobox).

#### Buttons

- **Clear**: The [clear](https://gitlab-org.gitlab.io/gitlab-svgs/?q=~clear) icon is positioned on the right side of the field and clears the content. When the content is cleared, the button is removed.
- **Search**: The [search](https://gitlab-org.gitlab.io/gitlab-svgs/?q=~search) icon submits a query. See the [search](/components/search) component page for details.
- **Calendar**: The [calendar](https://gitlab-org.gitlab.io/gitlab-svgs/?q=~calendar) icon toggles a date picker. See the [date picker](/components/date-picker) component page for details.
- **Show/hide**: Switching between the [eye](https://gitlab-org.gitlab.io/gitlab-svgs/?q=~eye) and [eye-slash](https://gitlab-org.gitlab.io/gitlab-svgs/?q=~eye-slash) icons toggles masked and unmasked appearance of content.
- **Submit**: Either `<input type="submit">` or a `<button>` element submits the form data. Both use the [confirm](/components/button#variants) button variant.

### Layout

By default a form flows top to bottom in a single column. Inline inputs in a vertical form are only acceptable when they’re related, for example, name and surname. In a tabular layout, a form can use both columns and rows.

In rare cases, a `<label>` can be placed to the left of the input. For example, in a [filter](/components/filter) section or a [date picker](/components/date-picker).

If the form must be completed in a linear order or has conditional logic, consider segmenting related tasks by using a [stepper](/components/stepper).

Input and selection controls can be any width that uses a [base-8 progression](/product-foundations/spacing). There are also five preset sizes that can be used to normalize the width in any form. When considering responsive behavior, these should be regarded as maximum widths.

  - **Extra small**: 80px wide
  - **Small**: 160px wide
  - **Medium**: 240px
  - **Large**: 320px
  - **Extra large**: 560px

### Behavior

Form components may display the following behaviors:

#### Validation

Validation is shown inline and may happen in real-time or on form submission. Real-time validation should confirm correct content or help prevent users from submitting the form with incorrect information.

A validation message should always be visible and not placed in a tooltip. The message is placed directly below the input and above any help text.

There are two types of validation messages:

  - **Error**: Indicates content that can’t be submitted, or was invalid and in need of correction.
  - **Success**: Indicates content that is valid. In most cases a success message isn't shown.

Consider using a slower [debounce period](/usability/saving-and-feedback#delayed-feedback) during real-time validation to prevent interrupting or frustrating a user while they're entering content.

#### Text limits

Text limits are indicated through a character counter. A user may keep typing when the limit is reached, though that might impact successful form submission.

There are two kinds of character counters:

- **Limited length**: Indicates the total number of characters allowed. When a limit is in place, the counter should be visible by default, and include a scrim (gradient overlay) to prevent collisions with characters in the input. As a user types, the counter shows how many characters remain before reaching the limit.
  - When the number of characters crosses the limit, the counter color changes to `danger`, and its font weight to bold. The counter then displays the number of characters over the limit (for example **-23**) with a `$red-200` background color.
  - Hovering over the counter reveals a tooltip that says, “Characters left”. Once over the limit, the text changes to, “Characters over limit”.
- **Recommended length**: Indicates how close a user is to reaching (or surpassing) a recommended character length for the field. This type of counter is *not* present by default.
  - When the number of characters crosses the recommendation, the counter color changes to `info`. The count displays the number of characters over the limit (for example -23) with a `$blue-100` background color.
  - Hovering over the counter reveals a tooltip that says, “Recommended characters left”. Once over the recommended range, the text changes to, “Over recommended length”.

#### Hiding and disabling elements

Hide an element if a user doesn't need access to it.

Disable an element with the `disabled` attribute if the user lacks permission to interact with it, but still needs to know it exists. If an element is already populated, but the user doesn't have permission to edit it, use the `readonly` attribute.

By default a submit button is enabled. Do not use a disabled submit button to visualize form validation or if a change is incomplete. A disabled submit button can be problematic in a form for a variety of reasons:

- There is no mechanism to attempt to proceed or remediate unknown errors.
- A disabled button can be missed by a screen reader, leaving a user unsure of what to do next.
- Disabled elements typically have lower contrast, which are difficult to distinguish for those with visual impairments.

Consider using a contextual message to indicate if additional action is needed instead. 

There are conditions where it may make sense to use the `disabled` prop on a submit button, such as after a user submits a form to prevent re-submission. Including help text below a field explaining why it's disabled can be useful, but note that a disabled element isn't in the focus order. However, the content will still be discoverable with other screen reader methods.

#### Quick submit

A Form should support the "quick submit" behavior, which allows it to be submitted from any control (including Markdown editors) using <kbd>⌘</kbd> + <kbd>Enter</kbd> (or <kbd>Ctrl</kbd> + <kbd>Enter</kbd>).

Note to developers: the quick submit behavior can be automatically added to a form using the `js-quick-submit` CSS class implemented in [`quick_submit.js`](https://gitlab.com/gitlab-org/gitlab/-/blob/master/app/assets/javascripts/behaviors/quick_submit.js).

### Error messages

Error messages are an indication of system status. They let users know that they have encountered a problem and provide ways to resolve it, teaching them to avoid future impediments. Whenever possible, the system should keep potential errors to a minimum. See [destructive actions](/usability/destructive-actions) guidelines.

Error messages can be persistent, dismissible, or temporary. In order to be effective, error messages should be concise, specific, and consistent.

<todo>Add guidelines on when an error message should be persistent, dismissible, or temporary.</todo>

#### Error message guidelines

##### Concise

An error message should be helpful and clear. Describe the error, inform users about what has happened, and if possible, how to resolve it. The general [UI text](/content/ui-text) guidelines for GitLab’s public communications should apply to all error messages. An overly familiar tone of voice can be perceived as careless in the context of error resolution, especially if the error can't be easily resolved by the user.

Avoid using messages like:

- Whoops, GitLab is currently unavailable.

Instead, use messages like:

- An error occurred while importing the project to GitLab. For more information, see how to [import your project from GitHub to GitLab](https://docs.gitlab.com/ee/user/project/import/github.html).
- The project name must be 40 characters or fewer.
- Your email is required to sign up with GitLab.

##### Specific

Generic error messages are not helpful, and they don't make sense out of context. Try to provide different errors for different messages and scenarios. For example, errors in text fields can be too long, too short, in the wrong format, and so on.

Error messages for specific situations are more helpful to users.

- `Your project title needs to have at least 3 characters` is more specific and direct than `Name is too short`.
- `Display name is required` is more specific than `Field is empty` and more succinct than `Your display name can't be blank`.

##### Consistent

To reduce the cognitive effort needed from users to understand the error, use a contextual error message with the same phrasal structure for error messages. All messages should look, sound, and mean the same, according to the component they're displayed in.

Avoid writing different messages that have the same meaning:

- Your password needs to have at least 8 characters.
- Your password should not have less than 8 characters.
- Your password has fewer than 8 characters.

Instead, use the same phrasal structure for all messages:

- Your project title needs to have at least 3 characters.

#### Error messages and scenarios

Error messages can be used in the following scenarios:

- Errors in forms: see [form validations](#validation).
- Errors in the system or on a page: see [alert](https://design.gitlab.com/components/alert).

### Accessibility

- By default, a `<label>` should use the `for` attribute to associate it with the input ID. Alternately `aria-labelledby` can be used when the label is visible, and `aria-label` can be used in place of a visible label.
- Use `aria-describedby` to programmatically associate a description with an input.
- Use `aria-describedby` to programmatically associate help text with an input.
- The clear button should be implemented as a `<button>`, accessible via keyboard, and its name announced as “Clear” for assistive technology. After content is removed focus is placed back on the input.

#### Keyboarding

- When keyboard focus is inside an input field, pressing the <kbd>Enter</kbd> key should submit the form (provided there are no validation errors). This doesn't apply to mutli-line fields, such as Markdown editors, since these controls need to support the input of new lines.
- There are some cases in which the submit-on-Enter behavior should be disabled. For example, if a form has a dropdown control that includes a search bar, pressing <kbd>Enter</kbd> inside the search bar should **not** submit the form. In general, this behavior should be disabled for input elements that do not directly edit a form’s data.
