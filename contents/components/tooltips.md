---
name: Tooltips
vueComponents: 
  - GlTooltip
related:
  - popovers
---

Tooltips identify elements or provide additional, useful information about the referring elements. Tooltips are different from ALT-attributes, which are intended primarily for static images.

Tooltips fade in upon hover or touch of its trigger element. They fade out upon interacting with an area or element outside of the tooltip or its trigger, or on a delay of the cursor moving outside the tooltip or its trigger element.

## Usage

Tooltips shouldn’t repeat information that is shown near the referring element. However, they can show the same data in a different format (e.g. date or timestamps). Information provided in a tooltip should be short and concise. If you need to add more than a single line of information, consider using a [popover](/components/popovers) instead. The text will wrap when the content is wider than the max-width.

## Placement

By default, tooltips are placed on top of the referring element. However, when there isn’t enough space in the viewport, the tooltip is moved to the side or below as needed. If it blocks related content, the preferred tooltip placement can be manually set.

Tooltips should have no space (0px) between themselves and their target. They remain in place while the cursor moves within the target. Tooltips should never obscur the target element.

## Demo

[[Example:tooltip-directive]]

## Design specifications

Color, spacing, dimension, and layout specific information pertaining to this component can be viewed using the following link:

[Sketch Measure Preview for tooltips](https://gitlab-org.gitlab.io/gitlab-design/hosted/design-gitlab-specs/tooltips-spec-previews/)
