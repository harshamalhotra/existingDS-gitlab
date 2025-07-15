---
name: Segmented control
description: A segmented control allows users to choose one out of a range of available options. It is a button group of equal options where only one can be selected and active. There must always be one option active.
related:
  - button
  - checkbox
  - dropdown-disclosure
  - radio-button
  - select
  - toggle
  - tabs
---

## Examples

<story-viewer component="base-segmented-control"></story-viewer>

## Structure

<todo>Add structure image.</todo>

## Guidelines

### When to use

- If there are only a few options and enough room to fit within the UI.

### When not to use

<todo>Add when not to use items.</todo>

### Appearance

#### Buttons (Options)

- Each button must be equal in width and prominence.
- Button labels should ideally be only one word.

#### Labels

- Label positioning rules are the same as they are for [forms](/patterns/forms). They can be placed to the left of segmented control when there’s a lack of vertical space. But by default, the label comes above the segmented control.
- The label can be omitted in cases when it’s clear what the segmented control is referring to from the UI (for example, switching between a day, week or month view in a calendar UI).
- Alternatively, icons can be used to replace button labels.

### Behavior

- Results are effective and visible immediately.

### Content

- Contain 2 or 3 options and should not go beyond 5.

### Accessibility

<todo>Add accessibility guidelines.</todo>

## Code reference

### GlSegmentedControl

<story-viewer component="base-segmented-control" title="GlSegmentedControl" view-mode="docs"></story-viewer>

A customizable button group that displays a set of equal options, where only one
option can be active at a time. This component includes the ability to disable
specific options and dynamically modify button content using slots.

#### Features

- Displays a group of selectable buttons.
- Allows only one active selection at a time.
- Supports content customization through the button-content slot.
- Options can be disabled individually.

#### Props Validation

The `options` prop is validated against a specific structure to ensure consistent
data. Each option must include:

- `value`: A `string`, `number`, or `boolean` to identify the option.
- `disabled`: A `boolean` (or `undefined`) indicating whether the option is disabled.

Optionally it can include:

- `text`: A `string` which gets displayed in the slot content.

#### Notes

- Ensure each value is unique within the options array for consistent behavior.
