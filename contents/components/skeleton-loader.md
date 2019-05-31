---
name: Skeleton Loader
vueComponents: 
  - GlSkeletonLoading
  - GlDashboardSkeleton
related:
  - spinner
---

A skeleton loader is used to let users know what kind of content is currently loading. The content can be loaded independently and asynchronously, while still adhering to the structure and look of the complete view.

## Usage

A skeleton loader can replace any existing UI elements for the period in which they are being loaded and should aim for maintaining a similar structure visually.

*   A skeleton represents a recognizable organism.
*   [Atom elements](https://gitlab.com/gitlab-org/gitlab-design/blob/master/doc/pattern-library.md) within organisms may be represented in a maximum of 3 repetitions, if applicable.
*   Skeletons are presented in grayscale and never use color.
*   Animate the gray atoms by adding a pulsing [motion](/foundations/motion) to indicate it is loading. The pulse animation transitions color horizontally from left to right, starting with #f2f2f2 to #fafafa.

[[Example:skeleton-loader-basic]]

## Design specifications

Color, spacing, dimension, and layout specific information pertaining to this component can be viewed using the following link:

Todo: Add link to spec preview
