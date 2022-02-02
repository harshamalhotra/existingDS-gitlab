---
name: Popover
description: Popovers are used to provide supplemental, useful, unique information about an element, including one or multiple actionable elements. They inform the user of additional information within the context of their original view, but without forcing the user to act upon it like a modal.
vueComponents:
  - GlPopover
related:
  - tooltip
  - modal
---

## Examples

[[Example:popover-basic]]

[View in Pajamas UI Kit →](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/Component-library?node-id=425%3A131)

## Structure

Todo: Add structure image.

## Guidelines

### When to use

- You don‘t want to let the user lose context, but still want to provide additional useful unique information about referring elements.
- It isn’t critical for the user to act upon the information.
- You want to give a user a summary of extended information and the option to switch context if they want to dive in deeper.

### When not to use

- If you‘re not providing rich markup or actionable items, consider using a [tooltip](/components/tooltip).
- If you‘re displaying critical content needed for users to complete a task, consider using a [modal](/components/modal).

### Appearance

- By default, popovers are placed above the referring element. 
- When there isn’t enough space in the viewport, the popover is moved to the side or below as needed. 
- If a popover blocks related content, the placement can be manually set to avoid this.
- To optimize for readability, content within popovers uses left-alignment.
- Be mindful of the popover content that could overflow the viewport, and avoid popovers that flex 100% of the container width.
- Popovers have a default width of `280px`, but they can be adapted to have different sizes, depending on the content being wrapped.

### Behavior

- By default, popovers fade in on hover or focus of its trigger element. 
- Occasionally, a popover can fade in on page load. These should be used sparingly (no more than one per page), and always contain a dismiss button. Consider using these popovers to highlight a new feature or area.
- They fade out upon interacting with an area or element outside of the popover or its trigger, or on a delay of the cursor moving outside the popover or its trigger element.
- Similar to [tooltips](/components/tooltip), popovers have a default delay of `500ms` on `show` to help confirm hover intent and ensure that:
  - A user doesn’t accidentally hover an element with a popover, which might cover an adjacent element they intended to select.
  - The UI isn‘t constantly showing popovers when a user is moving their mouse over the page.

### Content

- All copy within a popover should be short, actionable, and use clear language. 
- The copy in the header should be shorter and even more concise than the copy in the body of the popover. 
- The body can contain a link, for example, a "Learn more" link takes the user to the Docs page for more info. 

### Accessibility

Todo: Add accessibility guidelines.
