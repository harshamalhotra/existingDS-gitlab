---
name: Skeleton loader
figma: https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/Pajamas-UI-Kit?node-id=2844%3A0
docs: complete
gitlab_ui: /components/skeleton-loader/code
vueComponents:
  - GlSkeletonLoader
related:
  - spinner
---

A skeleton loader is used to let users know what kind of content is currently loading and to create a perception of decreased waiting time. The actual content should be loaded progressively, while still adhering to the structure and look of the complete view by showing animated placeholders (the so-called “bones” of the skeleton) until replaced.

## Usage

Skeleton loaders are to be used when pages or sections can be progressively populated with content, such as text and images, as they become available. Generally speaking the first batch of content will be the lightest to load and is followed by secondary and tertiary content batches. Each loading step will add in more detail to the page until no skeleton loaders are present anymore. Content should replace skeleton objects immediately when the data is available.

### Presentation

Skeleton objects are presented in grayscale and never use color. They use a pulsing wave effect [motion](/foundations/motion) to indicate they are loading. The animation transitions color horizontally from left to right, starting with [$gray-200](/product-foundations/colors#neutral-palette) to [$gray-100](/product-foundations/colors#neutral-palette). Use rounded corners, even for rectangular shapes. Shapes follow our [standard spacing guidelines](/layout/spacing#standard-spacing-guidelines).

[[Example:issue-card-skeleton-basic]]

### Principles

The skeleton state should always represent the page or section in a recognizable way.

When designing skeleton states not all components on the page need to be replaced. Consider the following components when designing a skeleton state:
- Container-based components (avatars, tiles, structured list, and so on)
- Data-based components which pull in data (for example, tables), data indicators (for example, status icons), and data-based text.

If content can be loaded instantly it is a good indicator that it does not need to be replaced, think of action-based components (for example, buttons, input fields, checkboxes, toggles, and so on). Secondary dynamic content that is revealed upon user interaction should typically never be replaced by a skeleton state as those items should already be loaded in by the time the user is able to interact with them (for example, toasts, dropdown menu's, modals, and so on).

Skeleton objects should generally be visualized by simple primitives which mimic the original content in a recognizable way. It is recommended to use a more elaborate form if that is needed to make the component recognizable.

### Creating skeleton states

Designers should provide additional skeleton state designs. Developers can then recreate those by using the `<gl-skeleton-loader>` component. Primitives should follow Pajama's [geometric progression](/layout/spacing#geometric-progression) and examples are available inside the pattern library.

## Design specifications

Color, spacing, dimension, and layout specific information pertaining to this component can be viewed using the following link:

[View design in Pajamas UI Kit →](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/Pajamas-UI-Kit-Beta?node-id=2844%3A27)

## Resources

- [UX collective [1]](https://uxdesign.cc/designing-a-skeleton-loader-6de1b4201c4e) [[2]](https://uxdesign.cc/what-you-should-know-about-skeleton-screens-a820c45a571a)
- [Carbon design system loading pattern](https://www.carbondesignsystem.com/patterns/loading-pattern/)
