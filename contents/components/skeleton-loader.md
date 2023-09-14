---
name: Skeleton loader
description: A skeleton loader is a simplified preview of loading content.
components:
  - base-skeleton-loader
related:
  - spinner
---

## Examples

<story-viewer component="base-skeleton-loader" title="Basic skeleton loader"></story-viewer>

<story-viewer component="base-skeleton-loader" story="with-custom-shapes" title="With custom shapes"></story-viewer>

[View in Pajamas UI Kit →](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?type=design&node-id=2844-0&mode=dev)

## Structure

<figure-img alt="Numbered diagram of a skeleton loader structure" label="Skeleton loader structure" src="/img/skeleton-loader-structure.svg"></figure-img>

1. **Shapes**: Simple shapes represent different content types in a single skeleton loader.

## Guidelines

### When to use

- Use the skeleton loader when loading content and a loading [spinner](/components/spinner) is not prominent enough.
- Use when there is more than a single content element loading at the same time that requires an indicator.
- Offer a simplified preview of loading content to help manage user expectations while decreasing perceived load time.
- Avatars, cards, charts, content blocks, lists, and tables are good candidates for a skeleton state.

### When not to use

- Instantly loading content doesn't need a skeleton loader.
- For an inline action or feedback, like an [alert](/components/alert), consider a [spinner](/components/spinner) or no loading state instead.
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

- When a change occurs in the UI, like a loading state, it's good practice to notify the user what's happening. However, since a skeleton loader should only be present for a short period of time, and during an expected loading period, it does not need to be a live region or communicate that the page is busy.

## Reference

- The [Skeleton Loading](https://gitlab-org.gitlab.io/gitlab-ui/?path=/story/base-skeleton-loading--default) component has been deprecated in favor of the Skeleton Loader.
- [Everything you need to know about skeleton screens](https://uxdesign.cc/what-you-should-know-about-skeleton-screens-a820c45a571a), by Bill Chung.
- [More Accessibile Skeletons](https://adrianroselli.com/2020/11/more-accessible-skeletons.html), by Adrian Roselli.
