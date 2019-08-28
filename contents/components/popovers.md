---
name: Popovers
vueComponents: 
  - GlPopover
related:
  - tooltip
---

Popovers are used to provide supplemental, useful, unique information about an element, including one or multiple actionable elements. They inform the user of additional information within the context of their original view, but without forcing the user to act upon it like a modal. Popovers are different from [tooltips](/components/tooltip), which do not provide rich markup and actionable items. Additionally, a popover can contain a header section with a different background color and images if needed.

Popovers fade in upon hover or touch of its trigger element. They fade out upon interacting with an area or element outside of the popover or its trigger, or on a delay of the cursor moving outside the popover or its trigger element.

## Usage

A popover should be used:

1.  When you don't want to let the user lose context, but still want to provide additional useful unique information about referring elements.
2.  When it isn’t critical for the user to act upon the information.
3.  When you want to give a user a summary of extended information and the option to switch context if they want to dive in deeper.

## Placement

By default, popovers are placed above the referring element. However, when there isn’t enough space in the viewport, the popover is moved to the side or below as needed. If it blocks related content, the preferred popover placement can be manually set.

## Content alignment

To optimize for readability content within popovers uses left-alignment.

## Demo

Todo: Add live component block with code example

## Design specifications

Color, spacing, dimension, and layout specific information pertaining to this component can be viewed using the following link:

[Sketch Measure Preview for Popovers](https://gitlab-org.gitlab.io/gitlab-design/hosted/design-gitlab-specs/popovers-spec-previews/)
