---
name: Textarea
description: A component for the HTML textarea element.
componentLabel: form-textarea
---

## Examples

<story-viewer component="base-form-form-textarea" title="Textarea"></story-viewer>

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

#### Textarea with label

```html
<gl-form-group :label="__('Issue description')" label-for="issue-description">
  <gl-form-textarea id="issue-description" v-model="description" />
</gl-form-group>
```

#### Textarea with hidden label

```html
<gl-form-group :label="__('Issue description')" label-for="issue-description" label-sr-only>
  <gl-form-textarea id="issue-description" v-model="description" />
</gl-form-group>
```
