---
name: Textarea
description: A component for the HTML textarea element.
---

## Examples

```html
<!-- live-example -->
<gl-form-textarea placeholder="Enter description" />
```

### In form group

```html
<!-- live-example -->
<gl-form-group label="Textarea" label-for="textarea-form-group">
  <gl-form-textarea
    id="textarea-form-group"
    placeholder="Enter description"
  />
</gl-form-group>
```

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

## Code reference

### GlFormTextarea

**Note:** This needs a `v-model` property to work correctly.
See [this issue](https://github.com/bootstrap-vue/bootstrap-vue/issues/1915) on Bootstrap Vue for
more information.

<story-viewer component="base-form-form-textarea" title="GlFormTextarea" view-mode="docs"></story-viewer>
