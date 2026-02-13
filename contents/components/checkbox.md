---
name: Checkbox
description: A checkbox form element represents a boolean option.
related:
  - radio-button
  - toggle
  - select
  - button-group
---

## Examples

### Checkbox states

```html
<!-- live-example -->
<gl-form-checkbox value="option">Option</gl-form-checkbox>
<gl-form-checkbox value="slot-option">
  Slot option
  <template #help>With help text.</template>
</gl-form-checkbox>
<gl-form-checkbox value="checked-option" checked>Checked option</gl-form-checkbox>
<gl-form-checkbox value="checked-disabled-option" checked disabled>Checked disabled option</gl-form-checkbox>
<gl-form-checkbox value="disabled-option" disabled>Disabled option</gl-form-checkbox>
<gl-form-checkbox value="indeterminate-option" indeterminate>Indeterminate option</gl-form-checkbox>
```

[View in Pajamas UI Kit →](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?type=design&node-id=49840-75722&mode=design)

## Structure

<figure-img alt="Numbered diagram of a checkbox structure" label="Checkbox structure" src="/img/checkbox-structure.svg"></figure-img>

1. **Legend** (optional): A title for a group of checkboxes.
1. **Checkbox**: The element that provides the visual affordance for the control.
1. **Label**: Text indicating the option.
1. **Help text** (optional): Used to further clarify an option.

## Guidelines

### When to use

- In a form for a user to indicate a selection of one or more options.

### When not to use

- If only one option in a set can be selected, use [radio buttons](/components/radio-button) instead.
- If you are wanting to have a change immediately applied when an option is selected, consider using a [toggle](/components/toggle) instead.
- If selecting an option from a group would change the state or view of other content, consider using a [button group](/components/button-group) instead.
- If choices exist outside of a form and as a menu of options, use a [combobox](/components/dropdown-combobox) instead.

### Appearance

- Options are stacked vertically, with one checkbox per line.

### States

- **Unchecked**: The option is unselected.
- **Checked**: The option is selected and the `checked` attribute is applied.
- **Indeterminate**: Occurs when nested checkboxes under a parent checkbox are in both checked and unchecked states. The indeterminate state can only be programmatically set with Javascript ([example](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#indeterminate_state_checkboxes)).
- **Disabled**: Any of the previous states can also be disabled so that the current state can't be changed.

### Behavior

- Selecting an option changes it state to either checked or unchecked.
- Selecting a child checkbox can change the state of a parent checkbox to either checked, unchecked, or indeterminate depending on the state of sibling checkboxes.
- Selecting the parent checkbox to either checked or unchecked, all children checkboxes must match its state.

### Content

- Use a `fieldset` with `legend` to group a set of checkboxes with a clear name and purpose.
- A text label is positioned to the right of the checkbox element (for left-to-right languages), and should be as concise as possible.
- [Help text](/patterns/forms#text) can be added below the checkbox label or as a paragraph below the group.

### Accessibility

- Some screen readers will announce the contents of the legend before each nested input to maintain context for a user.
- When using `GlFormGroup`, the `label` prop alone does not give the input an accessible name.
- The `label-for` prop must also be provided to give the input an accessible name.

#### Single checkbox

##### Single checkbox with label

```html
<gl-form-checkbox v-model="status" value="task-complete">
  {{ __('Task complete') }}
</gl-form-checkbox>
```

##### Single checkbox with hidden label

```html
<gl-form-checkbox v-model="status" value="task-complete">
  <span class="gl-sr-only">{{ __('Task complete') }}</span>
</gl-form-checkbox>
```

#### Multiple checkboxes

##### Multiple labeled checkboxes grouped within a fieldset

```html
<gl-form-group :label="__('Task list')">
  <gl-form-checkbox value="task-1">{{ __('Task 1') }}</gl-form-checkbox>
  <gl-form-checkbox value="task-2">{{ __('Task 2') }}</gl-form-checkbox>
</gl-form-group>
```

Using `GlFormCheckboxGroup`:

```html
<gl-form-group :label="__('Task list')">
  <gl-form-checkbox-group v-model="selected" :options="options" />
</gl-form-group>
```

##### Multiple labeled checkboxes grouped within a fieldset with hidden legend

```html
<gl-form-group :label="__('Task list')" label-sr-only>
  <gl-form-checkbox value="task-1">{{ __('Task 1') }}</gl-form-checkbox>
  <gl-form-checkbox value="task-2">{{ __('Task 2') }}</gl-form-checkbox>
</gl-form-group>
```

Using `GlFormCheckboxGroup`:

```html
<gl-form-group :label="__('Task list')" label-sr-only>
  <gl-form-checkbox-group v-model="selected" :options="options" />
</gl-form-group>
```

## Code reference

`<gl-form-checkbox-group>` and `<gl-form-checkbox>` implement custom checkbox inputs that ensure
consistent appearance across all browsers while maintaining the semantic structure and
accessibility of native elements, making them robust replacements for default browser checkboxes.

### Stacked

By default, the GitLab Design guide mandates the `<gl-form-checkbox-group>` be `stacked` and is
non-changeable at this time.

### Checkbox group options array

`options` can be an array of strings or objects. Available fields:

- `value` The selected value which will be set on `v-model`
- `disabled` Disables item for selection
- `text` Display text, or `html` Display basic inline html

`value` can be a string, number, or simple object. Avoid using complex types in values.

If both `html` and `text` are provided, `html` will take precedence. Only basic/native HTML is
supported in the `html` field (components will not work). Note that not all browsers will render
inline html (i.e. `<i>`, `<strong>`, etc.) inside `<option>` elements of a `<select>`.

> **Note:** Be cautious of placing user supplied content in
> the `html` field, as it may make you vulnerable to XSS
> attacks, if you do not first sanitize user supplied string.

```js
const options = ['A', 'B', 'C', { text: 'D', value: { d: 1 }, disabled: true }, 'E', 'F']
```

If an array entry is a string, it will be used for both the generated `value` and `text` fields.

You can mix using strings and [objects](#options-as-an-array-of-objects) in the array.

#### Options as an array of objects

```js
const options = [
  { text: 'Item 1', value: 'first' },
  { text: 'Item 2', value: 'second' },
  { html: '<b>Item</b> 3', value: 'third', disabled: true },
  { text: 'Item 4' },
  { text: 'Item 5', value: { foo: 'bar', baz: true } }
]
```

If `value` is missing, then `text` will be used as both the `value` and `text` fields. If you use
the `html` property, you must supply a `value` property.

### `<gl-form-checkbox>` as child of `<gl-form-checkbox-group>`

Instead of using the `options` prop, you can also manually place `<gl-form-checkbox>` in
`<gl-form-checkbox-group>`. You can also mix and match both.
Manually placed `<gl-form-checkbox>` inputs will appear _below_ any checkbox inputs generated
by the `options` prop. To have them appear _above_ the inputs generated by `options`,
place them in the named slot `first`.

### Checkbox values and v-model

By default, `<gl-form-checkbox>` value will be `true` when checked and `false` when unchecked.
You can customize the checked and unchecked values by specifying the `value` and
`unchecked-value` properties, respectively.

The `v-model` binds to the `checked` prop. When you have multiple checkboxes that bind to
a single data state variable, you must provide an array reference (`[]`) to your `v-model`.
Do not use the `checked` prop directly.

Note that when `v-model` is bound to multiple checkboxes (i.e an array ref), the
`unchecked-value` is not used. Only the value(s) of the checked checkboxes will be
returned in the `v-model` bound array. You should provide a unique value for each
checkbox's `value` prop (the default of `true` will not work when bound to an array).

To pre-check any checkboxes, set the `v-model` to the value(s) of the checks that you
would like pre-selected.

When placing individual `<gl-form-checkbox>` components within a `<gl-form-checkbox-group>`,
most props and the `v-model` are inherited from the `<gl-form-checkbox-group>`.

Note: the `unchecked-value` prop does not affect the native `<input>`'s `value` attribute,
because browsers don't include unchecked boxes in form submissions.
To guarantee that one of two values is submitted in a native `<form>` submit
(e.g. `'yes'` or `'no'`), use radio inputs instead. This is the same limitation that [Vue
has with native checkbox inputs](https://vuejs.org/guide/essentials/forms.html#checkbox-1).

### Multiple checkboxes and accessibility

When binding multiple checkboxes together, you must set the `name` prop to the same value for
all `<gl-form-checkbox>`s in the group individually or via the `name` prop of `<gl-form-checkbox-group>`.
This will inform users of assistive technologies that the checkboxes are related and enables
native browser keyboard navigation.

Whenever using multiple checkboxes, it is recommended that the checkboxes be placed in a
`<gl-form-group>` component to associate a label with the entire group of checkboxes.

### Contextual states

`<gl-form-checkbox-group>` and `<gl-form-checkbox>` includes validation styles for
valid and invalid states.

Generally speaking, you'll want to use a particular state for specific types of feedback:

- `false` (denotes invalid state) is great for when there's a blocking or required field. A user must fill in this field properly to submit the form.
- `true` (denotes valid state) is ideal for situations when you have per-field validation throughout a form and want to encourage a user through the rest of the fields.
- `null` Displays no validation state (neither valid nor invalid)

To apply one of the contextual state icons on `<gl-form-checkbox>`, set the `state` prop to
`false` (for invalid), `true` (for valid), or `null` (no validation state).

### Required constraint

When using individual `<gl-form-checkbox>` components (not in a `<gl-form-checkbox-group>`),
and you want the checkbox(es) to be `required` in your form, you must provide a `name on each
`<gl-form-checkbox>` in order for the required constraint to work. All `<gl-form-checkbox>`
components tied to the same `v-model` must have the same `name`.

The `name` is required in order for Assistive Technologies (such as screen readers, and keyboard
only users) to know which checkboxes belong to the same form variable (the name also automatically
enables native browser keyboard navigation), hence `required` will only work if `name` is set.
`<gl-form-checkbox-group>` will automatically generate a unique input name if one is not provided on
the group.

### Indeterminate (tri-state) support

Normally a checkbox input can only have two states: checked or unchecked. They can have any value,
but they either submit that value (checked) or don't (unchecked) with a form submission.

Visually, there are actually three states a checkbox can be in: checked, unchecked, or
indeterminate.

The indeterminate state is visual only. The checkbox is still either checked or unchecked as a
value. That means the visual indeterminate state masks the real value of the checkbox.

`<gl-form-checkbox>` supports setting this visual indeterminate state via the `indeterminate` prop
(defaults to `false`). Clicking the checkbox will clear its indeterminate state.

#### Indeterminate state and accessibility

Not all screen readers will convey the indeterminate state to screen reader users. So it is
recommended to provide some form of textual feedback to the user (possibly by via the `.sr-only`
class) if the indeterminate state has special contextual meaning in your application.

### GlFormCheckbox

<story-viewer component="base-form-form-checkbox" title="GlFormCheckbox" view-mode="docs"></story-viewer>
