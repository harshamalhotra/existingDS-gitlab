---
name: Spinner
vueComponents: 
  - GlLoadingIcon
related: 
  - buttons
  - forms
  - search
  - skeleton-loader
---

A spinner is a simple animated element that tells users that either saving or loading of information/data is in progress and is tied to user-triggered actions. In some cases of saving information the UI will reflect the change before the change is actually saved. In such cases, the spinner should be used to indicate background activity until information is successfully saved.

[[Example:loading-icon-basic]]

## Usage

Spinners attract attention because of their animation so they should be used sparingly. Ideally, only one spinner should be used at a time. [Skeleton loader](/components/skeleton-loader) should be used for indicating the loading of whole pages, spinners should be used on a small scale for small changes in the UI.

Spinners shouldn’t be used in combination with the skeleton loader, too much animation at once can be overwhelming. Either one or the other should be used.

Additionally, we add a 100 ms delay before showing the spinner to mitigate lots of unnecessary spinners showing up at the same time.

We use three spinner sizes:

*   **Small**: 16 pixels
*   **Medium**: 32 pixels
*   **Large**: 64 pixels

and three spinner colors:

*   **Orange**: `$orange-600`
*   **Dark**: `$grey-700`
*   **Light**: white

Todo: Add live component block with code example (all spinner sizes and colors — [example](https://codepen.io/matejlatin/full/OoVoMO/))

### Sizes

#### Small

With its size at 16 pixels this spinner size is perfect for placing it alongside text labels. This is also the size that can be used inside other elements such as buttons or input fields.

#### Medium

This size can be used for indicating that loading is in progress for larger components (for example charts and other interactive elements).

#### Large

This size is the largest we allow for our spinners. It can be used for indicating that loading is in progress for content areas and sections of the UI.

### Colors

#### Orange

This is the primary color for the spinner and it should be used in most cases.

#### Dark

This is the secondary color for the spinner. It’s a great alternative for times when the spinner doesn’t need to stand out as much (background activity for example).

#### Light

This color is reserved for spinners on dark background only (buttons for example).

## Design specification

Color, spacing, dimension, and layout specific information pertaining to this component can be viewed using the following link:

[Sketch Measure Preview for search patterns](https://gitlab-org.gitlab.io/gitlab-design/hosted/design-gitlab-specs/spinner-spec-previews/)
