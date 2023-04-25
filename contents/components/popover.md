---
name: Popover
description: Popovers are used to provide supplemental, useful, unique information about an element, including one or multiple actionable elements. They inform the user of additional information within the context of their original view, but without forcing the user to act upon it like a modal.
components:
  - base-popover
related:
  - tooltip
  - modal
  - drawer
---

## Examples

<story-viewer component="base-popover"></story-viewer>

[View in Pajamas UI Kit →](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/Component-library?node-id=425%3A131)

## Structure

<todo>Add structure image.</todo>

## Guidelines

### When to use

- You don‘t want to let the user lose context, but still want to provide additional useful unique information about referring elements.
- It isn’t critical for the user to act upon the information.
- You want to give a user a summary of extended information and the option to switch context if they want to dive in deeper.

### When not to use

- If you‘re not providing rich markup or actionable items, consider using a [tooltip](/components/tooltip).
- If you‘re displaying critical content needed for users to complete a task, consider using a [modal](/components/modal).
- If you‘re displaying supplemental information to the user about an element or item, consider using a [drawer](/components/drawer).

### Appearance

- By default, popovers are placed above the referring element. 
- When there isn’t enough space in the viewport, the popover is moved to the side or below as needed. 
- If a popover blocks related content, the placement can be manually set to avoid this.
- To optimize for readability, content within popovers uses left-alignment.
- Be mindful of the popover content that could overflow the viewport, and avoid popovers that flex 100% of the container width.
- Popovers have a default width of `280px`, but they can be adapted to have different sizes, depending on the content being wrapped.

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
- The body can contain a link.

### Accessibility

When the popover is visible:
- The focus can move to the next logical interactive element in the DOM and doesn't loop in the popover.
- The content within is next in the reading order from the trigger element and not appended to the DOM.
