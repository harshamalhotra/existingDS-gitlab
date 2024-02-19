---
name: Spinner
description: A spinner is an animated element that appears after a user's action to indicate that saving or loading is in progress.
components:
  - base-loading-icon
related:
  - skeleton-loader
  - button
  - search
---

## Examples

<story-viewer component="base-loading-icon" title="Default"></story-viewer>

[View in Pajamas UI Kit →](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?type=design&node-id=425-137&mode=design)

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

- **Dark**: For [neutral](/product-foundations/color#neutral) backgrounds that are `$gray-200` or lighter, or [chromatic](/product-foundations/color#chromatic) backgrounds that are `300` or lighter.
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

- When a change occurs in the UI, it's good to audibly notify assistive technology that a process is happening through the use of `role="status"`, see the [WAI-ARIA `status` documentation](https://www.w3.org/TR/wai-aria-1.1/#status).
- Since the spinner contains no text content, `aria-label` is used to provide a short message, for example, `aria-label="Loading"`.
- The spinner animation is currently not changed by `perfers-reduced-motion` because it can be considered essential to understanding the state of the application. See _Note 4_ in [Understanding WCAG SC 2.2.2 Pause, Stop, Hide](https://www.w3.org/WAI/WCAG21/Understanding/pause-stop-hide.html).
- See the [WAI-ARIA `status` documentation](https://www.w3.org/TR/wai-aria-1.1/#status) for more details.
