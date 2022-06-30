---
name: Toggle
description: A toggle is a visual switch which acts as a boolean.
stories:
  - base-toggle--default
related:
  - checkbox
  - radio-button
  - segmented-control
---

## Examples

<story-viewer story-name="base-toggle--default" title="Default"></story-viewer>

<story-viewer story-name="base-toggle--default" title="Disabled Toggle" :args-disabled="true"></story-viewer>

<story-viewer story-name="base-toggle--default" title="Loading Toggle" :args-is-loading="true"></story-viewer>

[View in Pajamas UI Kit →](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/Pajamas-UI-Kit?node-id=425%3A140)

## Structure

<figure class="figure" role="figure" aria-label="Toggle structure">
  <img class="figure-img" src="/img/toggle-structure.svg" alt="Numbered diagram of a toggle structure" role="img" />
</figure>

1. **Label**: Describes the control when the toggle is on.
1. **Description**: (optional) Provides more context for the label.
1. **Switch**: Visual indication of whether the toggle is on or off. 
1. **Body**: Containing body for the switch to move on and off.
1. **Help text**: Clarifies the outcome of changing the toggle state.

## Guidelines

### When to use

- There's a binary choice for enabling a setting ([ux-research#1215](https://gitlab.com/gitlab-org/ux-research/-/issues/1215#note_492752885)). For examples, choices that follow a boolean relationship like on/off, true/false, enable/disable, or activate/deactivate.
- The item being toggled has a default state. For example, notifications default to off for a merge request you haven't participated in. 
- The result of changing the toggle state is immediately effective and there's **no need** for an additional action to apply or save a change.

### When not to use

- A submit button is needed to apply or save a selection.
- When the setting exists within a form that has other elements, like text inputs or checkboxes, that need to be saved or submitted.
- Two choices don't map to a boolean relationship like on/off.
- There are more than two choices.
- If multiple items can be selected, including nested items, and the result of the selection has to be saved or submitted, consider using a [checkbox](/components/checkbox) instead.
- If only one item can be selected and the result of the selection has to be saved or submitted, consider using a [radio button](/components/radio-button) instead.
- If making a selection from a list of items, consider using a [listbox](/components/dropdown-listbox) instead.
- If changing a content view or preference in the context of that content, consider using a [segmented control](/components/segmented-control) instead.

### Appearance

- Toggle labels are set in bold, positioned above the element by default.
- The label can be positioned to the left if only a single toggle is being used.
- The description sits below the label.

### Behavior

- Consider providing feedback of the toggle state change by using a [toast](/components/toast).

### Content

#### Label

- Concisely describe what the control does when the toggle is on.

#### Description

- Optional: Provides more context for the label.

#### Help text

- Clarifies the outcome of changing the toggle state.
- Only available using a vertical layout.

### Accessibility

- The `gl-toggle` component requires an `id`, which is used in the `aria-labeledby` attribute value.
- Use `aria-describedby` to associate the description and help text with the toggle for a screen reader user.
