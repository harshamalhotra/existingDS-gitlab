---
name: Select
description: An HTML element, typically used in a form.
componentLabel: form-select
---

## Examples

<story-viewer component="base-form-form-select" title="Select"></story-viewer>

[View in Pajamas UI Kit →](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?type=design&node-id=49840-75722&mode=design)

## Structure

<todo>Add structure image.</todo>

## Guidelines

### When to use

- To indicate a selection of a single item from a list of options.
- To present sort options when the sort order button isn't required (see the [sorting](/components/sorting) component for a comparison).

### When not to use

- If there are five or less options to select from or the user needs to easily see all of options, then consider using [radio buttons](/components/radio-button) instead.
- If more than one option can be selected, consider using [checkboxes](/components/checkbox) instead.
- If the option is a binary decision that takes immediate effect, consider using a [toggle](/components/toggle) instead.
- If selecting from a list of options outside of a [form](/patterns/forms) or for more complex interactions, then a combobox is preferred.

### Appearance

<todo>Add appearance.</todo>

### Behavior

<todo>Add behavior.</todo>

### Accessibility

- When using `GlFormGroup`, the `label` prop alone does not give the input an accessible name.
- The `label-for` prop must also be provided to give the input an accessible name.

#### Select with label

```html
<gl-form-group :label="__('Issue status')" label-for="issue-status">
  <gl-form-select id="issue-status" v-model="status" :options="options" />
</gl-form-group>
```

#### Select with hidden label

```html
<gl-form-group :label="__('Issue status')" label-for="issue-status" label-sr-only>
  <gl-form-select id="issue-status" v-model="status" :options="options" />
</gl-form-group>
```
