---
name: Spinner
figma: https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/Pajamas-UI-Kit?node-id=425%3A137
docs: complete
vueComponents:
  - GlLoadingIcon
related:
  - buttons
  - form
  - search
  - skeleton-loader
---

A spinner is a simple animated element that tells users that either saving or loading of information/data is in progress and is tied to user-triggered actions. In some cases of saving information the UI will reflect the change before the change is actually saved. In such cases, the spinner should be used to indicate background activity until information is successfully saved.

## Usage

Spinners attract attention because of their animation so they should be used sparingly. Ideally, only one spinner should be used at a time. [Skeleton loader](/components/skeleton-loader) should be used for indicating the loading of whole pages, spinners should be used on a small scale for small changes in the UI.

Spinners shouldn’t be used in combination with the skeleton loader, too much animation at once can be overwhelming. Either one or the other should be used.

Additionally, we add a 100 ms delay before showing the spinner to mitigate lots of unnecessary spinners showing up at the same time.

### Sizes

|Name|Size|Use|
|----|----|---|
|Small|16px|Alongside text labels or inside other UI elements, such as buttons.|
|Medium|24px|Alongside larger visual elements, such as merge widget status icons.|
|Large|32px|To indicate larger components are loading, such as charts.|
|Extra large|64px|To indicate large areas of the UI is loading, such as content areas.|

### Colors

Two colors are available to choose from, depending on the background color:

|Color|Use|
|-----|---|
|Dark| For [neutral](/foundations/colors#neutral-palette) backgrounds that are `$gray-200` or lighter, or [chromatic](/foundations/colors#chromatic-palette) backgrounds that are `300` or lighter.|
|Light|For [neutral or chromatic](/foundations/colors) backgrounds that are `400` or darker.|

[[Example:loading-icon-all-options]]

## Design specification

Color, spacing, dimension, and layout specific information pertaining to this component can be viewed using the following link:

[View design in Pajamas UI Kit →](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/Pajamas-UI-Kit-Beta?node-id=2704%3A2279)
