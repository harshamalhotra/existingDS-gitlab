---
name: Radio button
description: A radio button typically represents a single option in a group of related choices.
stories:
  - base-form-form-radio--default
related:
  - checkbox
  - segmented-control
  - select
  - toggle
---

## Examples

<story-viewer story-name="base-form-form-radio--default" title="Radio button"></story-viewer>

[View in Pajamas UI Kit →](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/Pajamas-UI-Kit?node-id=3947%3A4)

## Structure

<todo>Add structure image.</todo>

## Guidelines

### When to use

- Use radio buttons to present a set of options, where only one option can be selected at a time.

### When not to use

<todo>Add when not to use.</todo>

### Appearance

- Radio buttons use high-contrast colors for labels and custom styles (based on [Bootstrap](https://getbootstrap.com/docs/5.1/forms/checks-radios)) instead of browser defaults for the radio control.
- Radio buttons are vertically stacked, with one radio button per line.

### Behavior

- One radio button should be selected as the default choice by using the `checked` attribute.
- Users are able to select an option with click/tap on the radio button or its label.
- Selecting one option unselects all others.

### Content

#### Label

- Radio button labels are set in regular font weight, positioned to the right of the element, and should be as short as possible.

#### Legend

- Use a `fieldset` with `legend` (set in bold font weight and positioned above the group of radio buttons) to group a set of radio buttons. Some screen readers will announce the contents of the legend before each nested input to maintain context for a user.

#### Help text

- [Help text](/patterns/forms#text) can be added below the radio button label or as a paragraph below the group.

### Accessibility

<todo>Add accessibility specifications.</todo>
