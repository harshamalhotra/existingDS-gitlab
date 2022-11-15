---
name: Disclosure
description: A disclosure widget includes a button that opens a panel of links or actions.
related:
  - dropdown-listbox
  - dropdown-combobox
  - dropdown-menu
  - button
  - accordion
---

## Examples

<todo>Add updated examples once complete in GitLab UI.</todo>

[View in Pajamas UI Kit →](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/Component-library?node-id=425%3A14)

## Structure

<todo>Add structure visual and element list.</todo>

## Guidelines


### When to use

- Use a disclosure dropdown to toggle a panel of links (`<a>`) or actions (`<button>`) that can be performed in a specific context, including [navigation](/patterns/navigation).
- In the instance where a combination of links and actions are present in the dropdown, a disclosure is preferred over other dropdown options that are more semantically prescriptive.

### When not to use

- If the options within the panel are selectable, refer to the [listbox](/components/dropdown-listbox) component.
- If the options within the panel _only_ perform app-like JavaScript actions, consider using a [menu](/components/dropdown-menu) instead.
- If a user is selecting a single text option from a group of options within a [form](/patterns/forms), consider using a [select](/components/select), [radio group](/components/radio-button), or [checkboxes](/components/checkbox) instead.
- If you need a way for a user to expand or collapse a content section, use an [accordion](/components/accordion) instead.

### Trigger button variants

A [button](/components/button) that triggers a dropdown panel comes in a few variants to fit different situations.

- **Dropdown button**: A dropdown button has a [chevron-down](https://gitlab-org.gitlab.io/gitlab-svgs/?q=~chevron-down) icon to the right of the text label to indicate it will toggle additional content.
- **Split dropdown button**: A split dropdown button is a special button group with two segments. The left text button is for the most common option and an attached dropdown button to the right opens a panel with additional options.
- **Icon dropdown**: An icon button, like one that uses the vertical or horizontal [ellipsis icons](https://gitlab-org.gitlab.io/gitlab-svgs/?q=elli), functions similarly to other trigger buttons with the only difference being only an icon label with no text.

### Behavior

- By default, the dropdown panel opens below and is aligned to the left of the trigger button. However, when there isn't enough space in the viewport, the panel uses edge detection to position it above and/or aligned to the right of the trigger.
- If the content within the dropdown panel exceeds the maximum height then a scrim (gradient overlay) appears at the bottom of the panel as an overflow affordance. When a user has scrolled to the bottom of the overflowed content the scrim is removed.
- When a link is selected the user is taken to the destination.
- When an action is selected that impacts the current view, the panel is closed and the action performed.
- When an action option is selected that causes a page refresh or other change of context the panel returns to a closed state.
- All panels can be closed by clicking outside of them, using the <kbd>esc</kbd> key, or by focus moving to an element outside of the component.
- A limited amount of options that don't scroll can be fixed at the bottom of a dropdown panel.

### Content

- Link and button text should be concise and clearly indicate the link destination or action it performs.

### Accessibility

- See the [WAI-ARIA Disclosure (Show/Hide) documentation](https://www.w3.org/TR/wai-aria-practices/#disclosure) for more details.
- When options in a panel are filtered, a screen reader should announce how many options are now available via `aria-live`.

## Reference

- [Drop-Down Usability: When You Should (and Shouldn’t) Use Them](https://baymard.com/blog/drop-down-usability), by Baymard Institute
- [Link + Disclosure Widget Navigation](https://adrianroselli.com/2019/06/link-disclosure-widget-navigation.html), by Adrian Roselli
