---
name: Popover
description: A popover is used to provide supplemental, useful, unique information about an element, including one or multiple actionable elements. It informs the user of additional information within the context of their original view, but without forcing them to act upon it like a modal.
components:
  - base-popover
related:
  - tooltip
  - modal
  - drawer
---

## Examples

<story-viewer component="base-popover" title="Popover"></story-viewer>

<story-viewer component="base-popover" story="with-close-button" args-triggers="click" title="With close"></story-viewer>

[View in Pajamas UI Kit →](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?type=design&node-id=425-131&mode=design)

## Structure

<todo>Add structure image.</todo>

## Guidelines

### When to use

- You don't want the user to lose context, but still want to provide additional useful unique information about referring elements.
- It isn't critical for the user to act upon the information.
- You want to give a user a summary of extended information and the option to learn more if needed.

### When not to use

- Consider if placing the content within a popover is needed at all. In many cases the most helpful, and [boring solution](https://handbook.gitlab.com/handbook/values/#boring-solutions), is to have the content inline and visible by default.
- If you're not providing rich markup or actionable items, consider using a [tooltip](/components/tooltip).
- If you're displaying critical content needed for users to complete a task, consider using a [modal](/components/modal).
- If you're displaying supplemental information to the user about an element or item, consider using a [drawer](/components/drawer).

### Appearance

- By default, a popover is placed above the referring element.
- When there isn't enough space in the viewport, the popover is moved to the side or below as needed.
- If a popover blocks related content, the placement can be manually set to avoid this.
- To optimize for readability, content within a popover uses left-alignment.
- Be mindful of the popover content that could overflow the viewport, and avoid a popover that flexes 100% of the container width.
- A popover has a default width of `280px`, but it can be adapted to have different sizes, depending on the content being wrapped.

### Behavior

- A popover is opened by clicking on an element that has the sole purpose of triggering it.
- When the popover is visible, the <kbd>Tab</kbd> key moves focus through any interactive elements within it.
- A popover can be dismissed by:
  - Clicking on the close button within it.
  - Clicking outside of it.
  - The <kbd>Tab</kbd> key moving focus to another element.
  - The <kbd>Esc</kbd> key being pressed.

### Content

- A popover can contain interactive content such as a [link](/components/link) or [button](/components/button).
- A popover can contain rich content like an [avatar](/components/avatar).
- All copy within a popover should be short, actionable, and use clear language.
- The copy in the header should be shorter and even more concise than the copy in the body of the popover.

### Accessibility

When a popover is visible:

- The focus can move to the next logical interactive element in the DOM and doesn't loop in the popover.
- The content within is next in the reading order from the trigger element and not appended to the DOM.
