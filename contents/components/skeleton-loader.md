---
name: Skeleton loader
description: A skeleton loader is a simplified preview of loading content.
stories:
  - base-skeleton-loader--default
related:
  - spinner
---

## Examples

<story-viewer story-name="base-skeleton-loader--default" title="Basic skeleton loader"></story-viewer>

<story-viewer story-name="base-skeleton-loader--with-custom-shapes" title="With custom shapes"></story-viewer>

[View in Pajamas UI Kit →](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/Component-library?node-id=2844%3A0)

## Structure

<figure class="figure" role="figure" aria-label="Skeleton loader structure">
  <img class="figure-img" src="/img/skeleton-loader-structure.svg" alt="Numbered diagram of a skeleton loader structure" role="img" />
</figure>

1. **Shapes**: Simple shapes represent different content types in a single skeleton loader.

## Guidelines

### When to use

- Offer a simplified preview of loading content to help manage user expectations while decreasing perceived load time.
- Avatars, cards, charts, content blocks, lists, and tables are good candidates for a skeleton state.

### When not to use

- Instantly loading content doesn't need a skeleton loader.
- Dynamic content revealed upon user interaction shouldn't be replaced by a skeleton loader, as the content should already be loaded by the time the user is able to interact with it. For example, content within a toast message, dropdown menu, or modal.
- For background processes, a loading state tied to a specific component, or a piece of existing content, use a [spinner](/components/spinner) instead.
- A skeleton loader shouldn’t be used in combination with a [spinner](/components/spinner), choose the one that fits the use case best.

### Appearance

- Comprised of one or more basic, grayscale shapes that have a horizontally pulsing [motion](/product-foundations/motion#skeleton-loading) to indicate they are loading.
- Use rounded corners, even for rectangular shapes. Shapes follow the [standard spacing guidelines](/product-foundations/spacing#standard-spacing-guidelines).
- Each shape should represent content in a recognizable way. For example, a long rectangle for a line of text or a circle for an avatar.

### Custom skeleton loaders

To create a new skeleton loader:

1. Start by designing with the variants in the [Pajamas UI Kit](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/Component-library?node-id=2844%3A27) and use spacing that follows the [geometric progression](/product-foundations/spacing#geometric-progression).
1. Output an SVG of the skeleton loader.
1. Use the `<gl-skeleton-loader>` component and customize the SVG properties.

### Behavior

- Content immediately replaces each skeleton loader when it's available.

### Accessibility

- When a change occurs in the UI, like a loading state, it's good to notify a user what is happening. While a skeleton loader visually indicates that a process is happening, it should also be announced by assistive technology through the use of `aria-live`.
- See the WAI-ARIA `aria-live` [documentation](https://www.w3.org/TR/wai-aria-1.1/#aria-live) for more details.

## Reference

- The [Skeleton Loading](https://gitlab-org.gitlab.io/gitlab-ui/?path=/story/base-skeleton-loading--default) component has been deprecated in favor of the Skeleton Loader.
- Read [Everything you need to know about skeleton screens](https://uxdesign.cc/what-you-should-know-about-skeleton-screens-a820c45a571a), by Bill Chung, for a great research-based overview.
