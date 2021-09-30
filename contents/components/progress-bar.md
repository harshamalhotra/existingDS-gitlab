---
name: Progress bar
description: A progress bar indicates a percentage of completion.
figma: https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/Pajamas-UI-Kit?node-id=425%3A132
docs: in-progress
related:
  - /data-visualization/charts
  - skeleton-loader
---

### Dos and Dont’s

| Do | Don‘t |
| --- | --- |
| Use a progress bar to display a percentage. | Use a progress bar as a placeholder to indicate content loading, use a [skeleton loader](/components/skeleton-loader) or [spinner](/components/spinner) instead. |
| Include text below the progress bar to indicate total progress and the maximum potential progress |  |

## Demo

<!--
  DEMO, keep this section for all patterns, the code block demo will be added at a later date
-->

Todo: Add live component block with code example

## Specifications

### Design

Color, spacing, dimension, and layout specific information pertaining to this component can be viewed using the following link:

[View design in Pajamas UI Kit →](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/Pajamas-UI-Kit?node-id=4265%3A20)

## Accessibility

* Use the HTML `<progress>` element.
* Use either a `<label>` element or `aria-label` with `<progress>` to identify what the progress is for.

**Example:**

`<label for="time">Time used</label>`
`<progress id="time" value="67" max="100">67%</progress>`

or

`<progress id="time" value="67" max="100" aria-label="Time used">67%</progress>`

The WAI-ARIA [`progressbar`](https://www.w3.org/TR/wai-aria-1.1/#progressbar) role can also be used.
