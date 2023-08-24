---
name: Progress bar
description: A progress bar indicates a percentage of completion.
components:
  - base-progress-bar
related:
  - spinner
  - skeleton-loader
  - stepper
---

## Examples

<story-viewer component="base-progress-bar"></story-viewer>

[View in Pajamas UI Kit →](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/Component-library?node-id=425%3A132)

## Structure

<figure-img alt="Numbered diagram of progress bar structure" label="Progress bar structure" src="/img/progress-bar-structure.svg"></figure-img>

1. **Progress indicator**: Solid shape indicating the current percent of completion.
1. **Track**: Background indicating the available space the progress indicator can fill.

## Guidelines

### When to use

- To represent percentage of completion or progress of an activity, process, or task.

### When not to use

- To indicate that content is loading, use a [skeleton loader](/components/skeleton-loader) or [spinner](/components/spinner) instead. 
- To segment tasks that are related and linear, use a [stepper](/components/stepper) instead.

### Sizes

- Extra small
- Small
- Medium

<todo>Add size use cases.</todo>

### Behavior

The progress indicator is a static representation of progress at a given point of time and doesn't animate.

### Content

- The progress bar component should be supported by visible text indicating what the bar is for, and the units of progress represented. See [Reference](#reference) for additional considerations.
- The `aria-label` or `aria-labelledby` content should also clarify the purpose of the progress bar.

### Accessibility

- Progress bars aren't focusable elements, but they can be accessed with a screen reader's read/browse mode.
- Use the HTML `<progress>` element in conjunction with either `aria-label` or `aria-labelledby`.
- The WAI-ARIA [`progressbar`](https://www.w3.org/TR/wai-aria-1.1/#progressbar) role can also be used.

## Reference

Although browser support is good for `<progress>`, screen readers handle them inconsistently. You may want to consider hiding it from screen readers and relying on visible text instead. For more details, read Scott O'Hara's post, [Styles Progress Bar](https://scottaohara.github.io/a11y_styled_form_controls/src/progress-bar/).
