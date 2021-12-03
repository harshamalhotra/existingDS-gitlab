---
name: Segmented control
description: A segmented control allows users to choose one out of a range of available options. It is a button group of equal options where only one can be selected and active. There must always be one option active.
vueComponents:
  - GlSegmentedControl
related:
  - button
  - checkbox
  - dropdown
  - radio-button
  - toggle
  - tabs
  - form 
---

## Examples

[[Example:segmented-control-whitespace]]

[View in Pajamas UI Kit →](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/Component-library?node-id=425%3A135)

## Structure

Todo: Add structure image.

## Guidelines

### When to use

- If there are only a few options and enough room to fit within the UI.

### When not to use

Todo: Add when not to use items.

### Appearance

#### Buttons (Options)

- Each button must be equal in width and prominence.
- Button labels should ideally be only one word. 

#### Labels

- Label positioning rules are the same as they are for [forms](/components/form). They can be placed to the left of segmented control when there’s a lack of vertical space. But by default, the label comes above the segmented control.
- The label can be omitted in cases when it’s clear what the segmented control is referring to from the UI (for example, switching between a day, week or month view in a calendar UI).
- Alternatively, icons can be used to replace button labels.

### Behavior

- Results are effective and visible immediately.

### Content

- Contain 2 or 3 options and should not go beyond 5.

### Accessibility

Todo: Add accessibility guidelines.
