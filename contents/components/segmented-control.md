---
name: Segmented control
description: A segmented control allows users to choose one out of a range of available options. It is a button group of equal options where only one can be selected and active. There must always be one option active.
deprecated: true
stories:
  - base-segmented-control--default
related:
  - button
  - checkbox
  - dropdown-disclosure
  - dropdown-menu
  - radio-button
  - select
  - toggle
  - tabs
---

## Examples

<story-viewer story-name="base-segmented-control--default"></story-viewer>

[View in Pajamas UI Kit →](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/Component-library?node-id=425%3A135)

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
