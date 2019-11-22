---
name: Skeleton Loader
status: built
vueComponents:
  - GlSkeletonLoader
related:
  - spinner
---

A skeleton loader is used to let users know what kind of content is currently loading and to create a perception of decreased waiting time. The actual content should be loaded progressively, while still adhering to the structure and look of the complete view by showing animated placeholders (the so-called “bones” of the skeleton) until replaced.

## Usage

Skeleton loaders are to be used when pages or sections can be progressively populated with content, such as text and images, as they become available. Generally speaking the first batch of content will be the lightest to load and is followed by secondary and tertiary content batches. Each loading step will add in more detail to the page until no skeleton loaders are present anymore. Content should replace skeleton objects immediately when the data is available.

### Presentation

Skeleton objects are presented in grayscale and never use color. They use a pulsing wave effect [motion](/foundations/motion) to indicate they are loading. The animation transitions color horizontally from left to right, starting with `#f2f2f2` to `#fafafa`.

[[Example:issue-card-skeleton-basic]]

### Principles

The skeleton state should always represent the page or section in a recognizable way.

When designing skeleton states not all components on the page need to be replaced. Consider the following components when designing a skeleton state:
* Container-based components (avatars, tiles, structured list, etc.)
* Data-based components which pull in data (e.g., data tables), data indicators (e.g., status icons), and data-based text.

If content can be loaded instantly it is a good indicator that it does not need to be replaced, think of action-based components (e.g. buttons, input fields, checkboxes, toggles, etc.). Secondary dynamic content that is revealed upon user interaction should typically never be replaced by a skeleton state as those items should already be loaded in by the time the user is able to interact with them (e.g. toasts, dropdown menu's, modals, etc.).

Skeleton objects should generally be visualized by simple primitives which mimic the original content in a recognizable way. It is recommended to use a more elaborate form if that is needed to make the component recognizable.

### Creating skeleton states

Designers should provide additional skeleton state designs. Developers can then recreate those by using the `<gl-skeleton-loader>` component. Primitives should follow Pajama's [geometric progression](/layout/spacing#geometric-progression) and examples are available inside the pattern library.

## Design specifications

Color, spacing, dimension, and layout specific information pertaining to this component can be viewed using the following link:

[Sketch Measure Preview for skeleton loaders](https://gitlab-org.gitlab.io/gitlab-design/hosted/design-gitlab-specs/skeleton-loader-spec-previews/)

## Resources

* [UX collective [1]](https://uxdesign.cc/designing-a-skeleton-loader-6de1b4201c4e) [[2]](https://uxdesign.cc/what-you-should-know-about-skeleton-screens-a820c45a571a)
* [Carbon design system loading pattern](https://www.carbondesignsystem.com/patterns/loading/)
