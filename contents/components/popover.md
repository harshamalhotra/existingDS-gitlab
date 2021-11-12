---
name: Popover
description: Popovers are used to provide supplemental, useful, unique information about an element, including one or multiple actionable elements. They inform the user of additional information within the context of their original view, but without forcing the user to act upon it like a modal.
figma: https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/Pajamas-UI-Kit?node-id=425%3A131
docs: complete
gitlab_ui: /components/popover/code
vueComponents:
  - GlPopover
related:
  - tooltip
---

Popovers are different from [tooltips](/components/tooltip), which do not provide rich markup and actionable items. Additionally, a popover can contain a header section with a different background color and images if needed.

By default, popovers fade in on hover or focus of its trigger element. They fade out upon interacting with an area or element outside of the popover or its trigger, or on a delay of the cursor moving outside the popover or its trigger element.

## Usage

A popover should be used when:

- You don't want to let the user lose context, but still want to provide additional useful unique information about referring elements.
- It isn’t critical for the user to act upon the information.
- You want to give a user a summary of extended information and the option to switch context if they want to dive in deeper.

Similar to [tooltips](/components/tooltip), popovers have a default delay of `500ms` on `show` to help confirm hover intent and ensure that:

- A user doesn’t accidentally hover an element with a popover, which might cover an adjacent element they intended to select.
- The UI isn't constantly showing popovers when a user is moving their mouse over the page.

## Placement

By default, popovers are placed above the referring element. However, when there isn’t enough space in the viewport, the popover is moved to the side or below as needed. If it blocks related content, the preferred popover placement can be manually set.

## Content

All copy within a popover should be short, actionable, and use clear language. The copy in the header should be shorter and even more concise than the copy in the body of the popover. The body can contain a link, for example, a "Learn more" link takes the user to the Docs page for more info. 

## Content alignment

To optimize for readability content within popovers uses left-alignment.

## Sizing

Popovers have a default width of `280px`, but they can be adapted to have different sizes, depending on the content being wrapped.

Be mindful of the popover content that could overflow the viewport, and avoid popovers that flex 100% of the container width.

## Demo

[[Example:popover-basic]]

## Design specifications

Color, spacing, dimension, and layout specific information pertaining to this component can be viewed using the following link:

[View design in Pajamas UI Kit →](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/Pajamas-UI-Kit?node-id=439%3A65)
