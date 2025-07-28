---
name: Character count
description: A character count displays the current and maximum number of characters allowed in a text input or textarea.
---

## Examples

<story-viewer component="base-form-form-character-count" title="GlFormCharacterCount"></story-viewer>

## Structure

<todo>Add structure image.</todo>

## Guidelines

<todo>Add guidelines.</todo>

### Appearance

<todo>Add appearance.</todo>

### Behavior

<todo>Add behavior.</todo>

### Accessibility

<todo>Add accessibility.</todo>

## Code reference

### GlFormCharacterCount

`GlFormCharacterCount` can be used to add a character count to an input.
If you are using `GlFormTextarea` on its own see [with character count example](https://design.gitlab.com/storybook?path=/story/base-form-form-textarea--with-character-count).
If you are wrapping your input, such as in a markdown component, and need the character
count separate from the input, use `GlFormCharacterCount`.

#### Example

```vue
<script>
  import { GlFormCharacterCount, GlFormInput, GlFormGroup } from '@gitlab/ui'

  export default {
    inputId: 'form-input-with-character-count',
    countTextId: 'character-count-text',
    limit: 100,
    components: { GlFormCharacterCount, GlFormInput, GlFormGroup },
    data() {
      return {
        value: '',
      }
    },
    methods: {
      remainingCountText(count) {
        return  n__('%d character remaining.', '%d characters remaining.', count)
      },
      overLimitText(count) {
        return n__('%d character over limit.', '%d characters over limit.', count);
      },
    },
  }
<script>

<template>
  <gl-form-group label="Form input with character count" :label-for="$options.inputId">
    <gl-form-input
      v-model="value"
      :id="$options.inputId"
      :value="value"
      :aria-describedby="$options.countTextId"
    />
    <gl-form-character-count
      :value="value"
      :limit="$options.limit"
      :count-text-id="$options.countTextId"
    >
      <template #remaining-count-text="{ count }">{{ remainingCountText(count) }}</template>
      <template #over-limit-text="{ count }">{{ overLimitText(count) }}</template>
    </gl-form-character-count>
  </gl-form-group>
<template>
```

<story-viewer component="base-form-form-character-count" title="GlFormCharacterCount" view-mode="docs"></story-viewer>
