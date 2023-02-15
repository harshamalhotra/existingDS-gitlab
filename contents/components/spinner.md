---
name: Spinner
description: A spinner is an animated element that appears after a user's action to indicate that saving or loading is in progress.
stories:
  - base-loading-icon--default
related:
  - skeleton-loader
  - button
  - search
---

## Examples

<story-viewer story-name="base-loading-icon--default" title="Default"></story-viewer>

[View in Pajamas UI Kit →](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/Component-library?node-id=19944%3A0)

## Structure

<figure-img alt="Numbered diagram of a spinner structure" label="Spinner structure" src="/img/spinner-structure.svg"></figure-img>

1. **Track**: Background that the segment travels on during the looped animation. 
1. **Segment**: Animated element of the spinner.

## Guidelines

### When to use

- Use a spinner to signify that something is loading.
- In some instances, the UI will reflect a change before the change is actually saved and the spinner is used to indicate background activity until information is successfully saved.

### When not to use

- Ideally, only one spinner should be used at a time. If a larger section of content is loading, consider using a larger size spinner instead of multiple smaller ones or a [skeleton loader](/components/skeleton-loader) instead.
- In combination with a [skeleton loader](/components/skeleton-loader). Choose one or the other, whichever fits the use case best.
- If user action is required before content can be displayed.

### Appearance

- **Dark**: For [neutral](/product-foundations/color#neutral-palette) backgrounds that are `$gray-200` or lighter, or [chromatic](/product-foundations/color#chromatic-palette) backgrounds that are `300` or lighter.
- **Light**: For [neutral or chromatic](/product-foundations/color) backgrounds that are `400` or darker.

### Sizes

- **Small**: 16px, used with text labels or inside other UI elements, like a [button](/components/button#states).
- **Medium**: 24px, used within larger visual elements, like merge widget status icons.
- **Large**: 32px, indicates larger components are loading, like a [chart](/data-visualization/charts).
- **Extra large**: 64px, indicates a large content area of the UI is loading.

### Content

The default visible `Loading...` text isn't part of the component itself. However, you may consider replacing that message with something more descriptive when the action is dependent on GitLab. For an in-product example, see the updated ['merge active' status message](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/60521).

### Behavior

- A 100ms delay occurs before showing a spinner to mitigate unnecessary spinners showing up at the same time when load times are minimal.

### Accessibility

- When a change occurs in the UI, like a loading state, it's good to notify a user what is happening. While a spinner visually indicates that a process is happening, it should also be announced by assistive technology through the use of `aria-live`.
- See the [WAI-ARIA `aria-live` documentation](https://www.w3.org/TR/wai-aria-1.1/#aria-live) for more details.
