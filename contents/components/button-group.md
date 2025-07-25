---
name: Button group
description: A button group visually unites multiple related buttons into a single collection.
figma: https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/Pajamas-UI-Kit?node-id=425%3A7
related:
  - button
  - pagination
  - radio-button
  - checkbox
  - toggle
---

## Examples

<story-viewer component="base-button-group" title="Actions"></story-viewer>

<story-viewer component="base-button-group" story="interactive-selected" title="Options"></story-viewer>

[View in Pajamas UI Kit →](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?node-id=117033-15878)

## Structure

<figure-img alt="Numbered diagram of a button group structure" label="Button group structure" src="/img/button-group-structure.svg"></figure-img>

1. **Button group**: Collection of related buttons (semantic `<button>` or link `<a href="">`).
1. **Selected button** (optional): Indicates current state, view, or location.

## Guidelines

### When to use

- Visually and programmatically emphasize the relationship of a group of two to five buttons that have similar or related actions or options.

### When not to use

- If there isn't enough space to accommodate the width of a button group, consider a different configuration or layout.
- If the related buttons are all links, consider using the [link](/components/link) component for each instead. Related links don't need to be visually grouped in the same way as buttons.
- If a group of options exists in the context of a form, consider using [radio buttons](/components/radio-button) or [checkboxes](/components/checkbox) instead.

## Appearance

- Buttons use the [default button variant](/components/button#variants) and share common borders.
- A border radius is only present on the first and last buttons in the group.
- Buttons should have similar content, like text or icon only, to support the visual uniformity of the group.
- A single item in the group may have a selected (visual and programmatic) state, but it's not required for every use case.

## Types of button groups

There are two types of button groups:

1. A group of related _action_ buttons.
1. A group of related _option_ buttons.

### Related actions

Related action buttons perform background actions, cause a page reload, or redirect.

#### Behavior

- Selecting a button in the group immediately triggers the associated action.
- The clicked button can have a selected state on load if it persists in the UI and it needs to reflect a changed state.

### Related options

Related option buttons toggle between a selected view or change in-page content without a page reload.

#### Behavior

- The clicked button immediately has a selected state; only one button can be selected at a time.

## Content

- Minimum of two buttons and a maximum of five.
- Follow the [button content](/components/button#content) guides for individual buttons.

## Accessibility

Depending on whether a semantic button or link is used, and whether or not the page reloads, there are different considerations that will help ensure the intent and state are correctly communicated for assistive technology users.

- To indicate a selected state of a button and treat it like a toggle, use `aria-pressed="true"`. Only one button should be selected at a time. See [MDN Web Docs aria-pressed](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-pressed) for more details.
- To indicate a selected state of a link, use `aria-current="true"`. Using `true` instead of `page` is to indicate the current selection within the group rather than the current page. See [MDN Web Docs aria-current](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-current) for more details.
- Consider where focus should be placed after triggering an action. In some cases it should remain on the element, and in others it should move to the changed content. This is particularly important for page reloads and redirects.
- A link can be styled like a button and included in a group, however, it can be confusing for some users if both a button (`<button>`) and a link (`<a>`) are in the same group.
- Wrap the group in a `div` with the `role="group"` attribute. Do not use an `aria-label`. See [MDN Web Docs ARIA: group](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/group_role) for more details.

## Reference

- The button group replaces the [deprecated segmented control](https://gitlab.com/groups/gitlab-org/-/epics/7261).

## Code reference

Button groups are an easy way to group a series of buttons together.

```html
<gl-button-group>
  <gl-button>Download</b-button>
  <gl-button>Browse</b-button>
  <gl-button variant="danger">Delete</b-button>
</gl-button-group>
```

### Split dropdowns

Both `GlCollapsibleListbox` and `GlDisclosureDropdown` can be added as the last
child of a button group to produce a "split" dropdown.

For the correct styling, the dropdown component must render a caret _only_.
This means no icon, and no visible text. For accessbility, ensure the
dropdown's `toggle-text` _and_ `text-sr-only` props are set.

```html
<gl-button-group>
  <gl-button>Split listbox</gl-button>

  <gl-collapsible-listbox
    v-model="foo"
    :items="items"
    toggle-text="Choose button action"
    text-sr-only
  />
</gl-button-group>
```

### Vertical variation

Make a set of buttons appear vertically stacked rather than horizontally by setting the `vertical` prop.
Split button dropdowns are not supported here.

```html
<gl-button-group vertical>
  <gl-button>Top</b-button>
  <gl-button>Middle</b-button>
  <gl-button>Bottom</b-button>
</gl-button-group>
```

### GlButtonGroup

<story-viewer component="base-button-group" title="GlButtonGroup" view-mode="docs"></story-viewer>
