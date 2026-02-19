---
name: Radio button
description: A radio button typically represents a single option in a group of related choices.
related:
  - checkbox
  - select
  - toggle
  - button-group
---

## Examples

### Radio button states

```html
<!-- live-example -->
<gl-form-radio name="radio-group" value="option">Option</gl-form-radio>
<gl-form-radio name="radio-group" value="slot-option">
  Slot option
  <template #help>With help text.</template>
</gl-form-radio>
<gl-form-radio name="radio-group" value="checked-option" checked>Checked option</gl-form-radio>
<gl-form-radio name="radio-group" value="disabled-option" disabled>Disabled option</gl-form-radio>
<gl-form-radio name="radio-group" value="checked-disabled-option" checked disabled>Checked disabled option</gl-form-radio>
```

### Radio button group

```html
<!-- live-example -->
<gl-form-radio-group
  :options="[
    { value: 'pizza', text: 'Pizza' },
    { value: 'tacos', text: 'Tacos' },
    { value: 'burger', text: 'Burger', disabled: true }
  ]"
  name="radio-button-group"
>
  <template #first>
    <gl-form-radio value="slot-option">
      Slot option with help text
      <template #help>Help text.</template>
    </gl-form-radio>
  </template>
  <gl-form-radio value="last-option">Last option</gl-form-radio>
</gl-form-radio-group>
```

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

- If selecting an option would change the state or view of other content and is not within a form, consider using a [button group](/components/button-group) instead.

### Appearance

- Radio buttons use high-contrast colors for labels and custom styles (based on [Bootstrap](https://getbootstrap.com/docs/5.1/forms/checks-radios)) instead of browser defaults for the radio control.
- Radio buttons are vertically stacked, with one radio button per line.

### Behavior

- Only one option in a radio button group can be selected at a time.
- A common or recommended option is typically preselected, but no option needs to be selected initially.
- An option is selected by clicking the radio button or its label.
- Unlike a [checkbox](/components/checkbox) group, where all options can be unchecked, a radio button group must always have one option selected after a selection has been made.

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

## Code reference

`GlFormRadio` components can be used directly, or via a `GlFormRadioGroup`.

### GlFormRadio

```html
<script>
  export default {
    data() {
      return {
        selected: 'yes',
      };
    },
  };
</script>

<template>
  <div>
    <gl-form-radio v-model="selected" value="yes">Yes</gl-form-radio>
    <gl-form-radio v-model="selected" value="no">No</gl-form-radio>
  </div>
</template>
```

<story-viewer component="base-form-form-radio" title="GlFormRadio" view-mode="docs"></story-viewer>

### GlFormRadioGroup

The `GlFormRadioGroup` component provides an alternative and sometimes more
compact way of setting up a group of `GlFormRadio` components.

`GlFormRadioGroup` can be used in a few ways to build a group of `GlFormRadio`
components: implicitly, explicitly, or a mix of both.

Below is an example which demonstrates all three approaches, written such that
all of them produce the same visual result.

```html
<script>
export default {
  data() {
    return {
      selected: 'one',
      options: [
        {
          value: 'one',
          text: 'One',
        },
        {
          value: 'two',
          text: 'Two',
        },
        {
          value: 'three',
          text: 'Three',
        },
      ],
    };
  },
};
</script>

<template>
  <div>
    <!-- Implicit -->
    <gl-form-radio-group v-model="selected" :options="options" name="implicit" />

    <!-- Explicit -->
    <gl-form-radio-group v-model="selected" name="explicit">
      <gl-form-radio value="one">One</gl-form-radio>
      <gl-form-radio value="two">Two</gl-form-radio>
      <gl-form-radio value="three">Three</gl-form-radio>
    </gl-form-radio-group>

    <!-- Mixed -->
    <gl-form-radio-group v-model="selected" :options="[options[1]]" name="mixed">
      <template #first>
        <gl-form-radio value="one">One</gl-form-radio>
      </template>
      <gl-form-radio value="three">Three</gl-form-radio>
    </gl-form-radio-group>
  </div>
</template>
```

<story-viewer component="base-form-form-radio-group" title="GlFormRadioGroup" view-mode="docs"></story-viewer>
