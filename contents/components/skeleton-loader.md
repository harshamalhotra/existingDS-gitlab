---
name: Skeleton loader
description: A skeleton loader is a simplified preview of loading content.
related:
  - spinner
---

## Examples

<story-viewer component="base-skeleton-loader" title="Basic skeleton loader"></story-viewer>

<story-viewer component="base-skeleton-loader" story="with-custom-shapes" title="With custom shapes"></story-viewer>

[View in Pajamas UI Kit →](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?type=design&node-id=2844-0&mode=design)

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

- Comprised of one or more basic, grayscale shapes that have a horizontally pulsing [motion](/product-foundations/animation-fundamentals#skeleton-loading) to indicate they are loading.
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

- The [Skeleton Loading](https://design.gitlab.com/storybook?path=/story/base-skeleton-loading--default) component has been deprecated in favor of the Skeleton Loader.
- [Everything you need to know about skeleton screens](https://uxdesign.cc/what-you-should-know-about-skeleton-screens-a820c45a571a), by Bill Chung.
- [More Accessibile Skeletons](https://adrianroselli.com/2020/11/more-accessible-skeletons.html), by Adrian Roselli.

## Code reference

### GlSkeletonLoader

<story-viewer component="base-skeleton-loader" title="GlSkeletonLoader" view-mode="docs"></story-viewer>

Skeleton loaders are to be used when pages or sections can be progressively populated with content,
such as text and images, as they become available. Generally speaking the first batch of content
will be the lightest to load and is followed by secondary and tertiary content batches. Each loading
step will add in more detail to the page until no skeleton loaders are present anymore. Content
should replace skeleton objects immediately when the data is available.

The skeleton loader component accepts shapes which in return will create a skeleton state with a
loading animation. Any skeleton state components should be created with
`<gl-skeleton-loader></gl-skeleton-loader>`. If no shape is passed via the slot the default skeleton
will be used. See "Default" and "Default With Custom Props" examples.

#### The `.gl-animate-skeleton-loader` class

Skeleton loaders can also be composed with a `.gl-animate-skeleton-loader`
CSS class. This CSS-based approach is easier to make responsive and match mocked elements.
Feel free to use this approach if it suits your use case and please leave your
feedback in this [Feedback for css-based skeleton loading
indicator](https://gitlab.com/gitlab-org/gitlab-ui/-/issues/2319) issue.
To improve developer experience and simplify matching Pajamas styles we're considering
several improvements in the future, including adding more CSS util classes for
this animation, or creating a dedicated component.  Here is an example of how
you could replicate the default `<gl-skeleton-loader />` behavior with the
CSS-based approach:

```html
<div>
  <div class="gl-animate-skeleton-loader gl-h-4 gl-rounded-base gl-my-3 !gl-max-w-20"></div>
  <div class="gl-animate-skeleton-loader gl-h-4 gl-rounded-base gl-my-3 !gl-max-w-30"></div>
  <div class="gl-animate-skeleton-loader gl-h-4 gl-rounded-base gl-my-3 !gl-max-w-26"></div>
</div>
```

**USAGE NOTES:** if you're using `gl-max-w-xx` you'll need to add
important (e.g. `!gl-max-w-20`). This is because `.gl-animate-skeleton-loader` already
has a `max-width` statement, and we need to override it. You can override it
only with lower numbers. Width rules (`gl-w-xx`) don't need an override, you
can use them as-is. If you want to "synchronize" two elements next to each
other, try adding `animation-delay` to offset elements.

More complex example (with different shapes and an animation delay for offset elements):

```html
<div class="gl-display-flex gl-flex-direction-column gl-gap-2 gl-w-30">
  <div class="gl-animate-skeleton-loader gl-h-8 gl-rounded-base gl-mb-4"></div>
  <div class="gl-display-flex gl-flex-direction-row gl-gap-2">
    <div class="gl-animate-skeleton-loader gl-h-8 gl-w-8 gl-rounded-full"></div>
    <div class="gl-flex-grow-1" style="animation-delay: 100ms">
      <div class="gl-animate-skeleton-loader gl-h-4 gl-rounded-base gl-my-2"></div>
      <div class="gl-animate-skeleton-loader gl-h-4 gl-rounded-base gl-my-2"></div>
      <div class="gl-animate-skeleton-loader gl-display-inline-block gl-h-4 gl-w-10 gl-rounded-base gl-my-2"></div>
      <div
        class="gl-animate-skeleton-loader gl-display-inline-block gl-h-4 gl-w-10 gl-rounded-base gl-my-2"
        style="animation-delay: 250ms"></div>
    </div>
  </div>
</div>
```

#### Progressive Loading

Determine if progressive loading is available, if it is break apart the skeleton to load data as it
becomes readily available. If progessive loading is not available, replace the entire skeleton when
the data is available.

#### Under the hood

Skeleton Loader is a port of [vue-content-loader](https://github.com/egoist/vue-content-loader).
Some changes have been made to the code to better suit our codebase, such as removing props and
refactoring into a SFC. Please take a look at their documentation and a useful [UI tool](http://danilowoz.com/create-vue-content-loader/)
for seeing the code output for `svg` shapes.
