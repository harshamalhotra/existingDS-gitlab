---
name: Radio button
description: A radio button typically represents a single option in a group of related choices.
componentLabel: form-radio-button
components:
  - base-form-form-radio
related:
  - checkbox
  - segmented-control
  - select
  - toggle
---

## Examples

<story-viewer component="base-form-form-radio" title="Radio button states"></story-viewer>

<story-viewer component="base-form-form-radio-group" title="Radio button group"></story-viewer>

[View in Pajamas UI Kit →](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?type=design&node-id=49840-75722&mode=design)

## Structure

<figure-img alt="Numbered diagram of a radio button structure" label="Radio button structure" src="/img/radio-button-structure.svg"></figure-img>

1. **Legend**: A title for a group of radio buttons.
1. **Radio button**: The input element that provides the visual affordance for the control.
1. **Label**: Text indicating the option.
1. **Help text** (optional): Used to further clarify an option.

## Guidelines

### When to use

- Use a radio button group for a set of options, where only one option can be selected at a time.

### When not to use

<todo>Add when not to use.</todo>

### Appearance

- Radio buttons use high-contrast colors for labels and custom styles (based on [Bootstrap](https://getbootstrap.com/docs/5.1/forms/checks-radios)) instead of browser defaults for the radio control.
- Radio buttons are vertically stacked, with one radio button per line.

### Behavior

- In a radio button group, only one option can be selected at a time and there must be a default selected option.
- To pick an option, the user can select the radio button or its content.

### Content

#### Label

- Radio button labels are set in regular font weight, positioned to the right of the element, and should be as short as possible.

#### Legend

- Use a `fieldset` with `legend` (set in bold font weight and positioned above the group of radio buttons) to group a set of radio buttons. Some screen readers will announce the contents of the legend before each nested input to maintain context for a user.

#### Help text

- [Help text](/patterns/forms#text) can be added below the radio button label or as a paragraph below the group.

### Accessibility

- Do not nest or add other elements within a radio button group. Keep the radio button group as a single cohesive unit to ensure the user can properly traverse the controls.
- When using `GlFormGroup`, the `label` prop alone does not give the input an accessible name.
- The `label-for` prop must also be provided to give the input an accessible name.

#### Single radio button

##### Single radio with a label

```html
<gl-form-radio v-model="status" value="opened">
  {{ __('Opened') }}
</gl-form-radio>
```

##### Single radio with a hidden label

```html
<gl-form-radio v-model="status" value="opened">
  <span class="gl-sr-only">{{ __('Opened') }}</span>
</gl-form-radio>
```

#### Multiple radio buttons

##### Multiple labeled radio buttons grouped within a fieldset

```html
<gl-form-group :label="__('Issue status')">
  <gl-form-radio value="opened">{{ __('Opened') }}</gl-form-radio>
  <gl-form-radio value="closed">{{ __('Closed') }}</gl-form-radio>
</gl-form-group>
```

Using `GlFormRadioGroup`:

```html
<gl-form-group :label="__('Issue status')">
  <gl-form-radio-group v-model="selected" :options="options" />
</gl-form-group>
```

##### Multiple labeled radio buttons grouped within a fieldset with hidden legend

```html
<gl-form-group :label="__('Issue status')" label-sr-only>
  <gl-form-radio value="opened">{{ __('Opened') }}</gl-form-radio>
  <gl-form-radio value="closed">{{ __('Closed') }}</gl-form-radio>
</gl-form-group>
```

Using `GlFormRadioGroup`:

```html
<gl-form-group :label="__('Issue status')" label-sr-only>
  <gl-form-radio-group v-model="selected" :options="options" />
</gl-form-group>
```
