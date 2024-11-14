---
name: Text input
description: A component for the HTML input type="text" element.
componentLabel: form-text-input
---

## Examples

<story-viewer component="base-form-form-input" title="Text input"></story-viewer>

[View in Pajamas UI Kit →](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?type=design&node-id=49840-75722&mode=design)

## Structure

<todo>Add structure image.</todo>

## Guidelines

<todo>Add guidelines.</todo>

### Appearance

<todo>Add appearance.</todo>

### Behavior

<todo>Add behavior.</todo>

### Accessibility

- When using `GlFormGroup`, the `label` prop alone does not give the input an accessible name.
- The `label-for` prop must also be provided to give the input an accessible name.

#### Text input with label

```html
<gl-form-group :label="__('Issue title')" label-for="issue-title">
  <gl-form-input id="issue-title" v-model="title" />
</gl-form-group>
```

#### Text input with hidden label

```html
<gl-form-group :label="__('Issue title')" label-for="issue-title" label-sr-only>
  <gl-form-input id="issue-title" v-model="title" />
</gl-form-group>
```

Alternatively, you can use a plain `label` element:

#### Text input with label using `label`

```html
<label for="issue-title">{{ __('Issue title') }}</label>
<gl-form-input id="issue-title" v-model="title" />
```

#### Text input with hidden label using `label`

```html
<label for="issue-title" class="gl-sr-only">{{ __('Issue title') }}</label>
<gl-form-input id="issue-title" v-model="title" />
```
