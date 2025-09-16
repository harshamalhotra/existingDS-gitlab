# @gitlab/ui

## 122.8.0

### Minor Changes

- b3b41f4: Remove dropdown border from panel and tip

## 122.7.0

### Minor Changes

- 7037ef8: Enable container queries for stacked and responsive tables

  Stacked and responsive tables now support container queries in consumers
  that have it enabled by adding the `.with-gl-container-queries` class to
  the `<html>` element.

  These changes were done in https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/merge_requests/5077

## 122.6.1

### Patch Changes

- 57fa420: Hide banners' illustrations below `md` breakpoint

  We recently migrated `banner.scss` to our own responsive mixin.
  However, due to how Bootstrap's `media-breakpoint-down` mixin
  targets the _next_ breakpoint, doing a simple search and replace
  like we did results in the wrong breakpoint being targetted.
  This updates the mixin's usage to target the correct breakpoint.

## 122.6.0

### Minor Changes

- 4e0ba3d: Define spacing-scale design tokens

  Adds `spacing-scale` design tokens

- 8712811: This change enhances the dashboard panel component by adding support for custom HTML content to be shown within the title popover.

  Previously, the popover could only display simple text from a configuration property. Now developers can use special slots (template sections) called `info-popover-title` and `info-popover-content` to insert HTML content like formatted text, links, and complex layouts into the popover.

  When these slots are provided, they take priority over the basic text configuration.

## 122.5.0

### Minor Changes

- dc09a77: GlBarChart: Add scoped slots for tooltip customization

  Introduces `tooltip-title`, `tooltip-content` and `tooltip-value` scoped slots to allow consumers to customize the chart's tooltip.

## 122.4.0

### Minor Changes

- 6c35948: Create container queries mixins

  This creates the `gl-container-width-up` and `gl-container-width-down` mixins.
  These mixins generate container queries that only apply when the `html`
  has the `.with-gl-container-queries` class.
  By default, these mixins also generate media queries which only apply
  when the `html` does not have the `.with-gl-container-queries` class.
  This lets us iteratively migrate to container queries while still having
  a way to fall back to media queries.
  The media query fallback can be disabled by disabling the
  `$includeMQFallback` flag.

  Additionally, several internal usages of responsive mixins have been migrated
  to these new mixins so that consumers can switch to container queries if neeeded.

## 122.3.0

### Minor Changes

- e0afad0: Change `checked` type to `undefined`

## 122.2.1

### Patch Changes

- e132332: Fix edge case of @max classes

  Media and container queries generated with the `@max-` prefix (e.g. `@max-sm`)
  should consider sizes up to a given value **without** including that value.

## 122.2.0

### Minor Changes

- 7dbac99: Use filter CSS property for popover, tooltips, and dropdowns drop shadow

  Use `filter: drop-shadow(...)` CSS property instead of `box-shadow` to
  include tip pseudo elements in popovers, tooltips, and dropdowns

## 122.1.2

### Patch Changes

- 380412b: Reverts spacing-scale and border-radius design tokens

  The introduction of spacing-scale and border-radius design tokens broke the assets
  compilation in GitLab. We are reverting these changes for now.

## 122.1.1

### Patch Changes

- 65a7d84: `GlFormCheckbox`: use a unique ID if the provided one is falsey

  This ensures that `GlFormCheckbox` generates a proper ID internally when the consumer provides an
  empty string, or other falsey values as the ID.

## 122.1.0

### Minor Changes

- c81d055: Define spacing-scale and border-radius design tokens

  Adds `spacing-scale` design tokens
  Adds `border.radius` design tokens

## 122.0.0

### Major Changes

- c3c6b62: Drop Bootstrap's jumbotron component

  We don't use the jumbotron component anywhere, so it can be removed
  altogether.

- 008f805: Drop Bootstrap's dropdowns responsive styles

  This removes some of Bootstrap's dropdowns responsive styles which we
  don't use anywhere. This lets us get rid of some media queries which we
  are moving away from.

- f6487be: Drop Bootstrap's horizontal list groups

  Removes styles for Bootstrap's horizontal list groups which we don't
  use.

- cc604a1: Remove support for some of Bootstrap's card styles

  We are dropping support for the following Bootstrap card styles:
  - `card-deck`
  - `card-group`
  - `card-columns`

  We don't use these styles in any of our projects, and they leverage media
  queries which we are moving away from.

## 121.1.0

### Minor Changes

- bbf3e8d: Add labelLinkAttrs prop to GlAvatarLabeled

## 121.0.1

### Patch Changes

- f510582: GlButton: Allow array and object for buttonTextClasses prop

## 121.0.0

### Major Changes

- 16c6f10: Remove BFormCheckbox from GlFormCheckbox

  Part of a larger migration to remove Bootstrap Vue from GitLab UI

  BREAKING CHANGE: support for the following props have been dropped:
  - autofocus
  - button
  - button-variant
  - form
  - switch
  - inline
  - plain
  - size

## 120.1.0

### Minor Changes

- 8e3d8ce: Update GlEmptyState to use GlIllustration

### Patch Changes

- 8003e57: Add role="presentation" to BPopover <h3> element

## 120.0.0

### Major Changes

- 66f437d: GlBadge: removed muted variant and made neutral default

## 119.2.0

### Minor Changes

- 126887b: GlBarChart: Adds new `presentation` prop to control multi-series layout behavior.

## 119.1.0

### Minor Changes

- 44c161e: Create a Tailwind CQs/MQs plugin

  This creates a Tailwind plugin that matches `@<breakpoint` utils. For
  those utils, it generates media queries by default.
  If Tailwind is executed with the `USE_TAILWIND_CONTAINER_QUERIES` flag
  enabled, the plugin generates container queries instead of media
  queries. Normal media query utils, like `md:gl-hidden`, behave as normal either way.
  Consumers of GitLab UI can use this to generate the bundle(s) they need
  depending on whether or not they are built using containers.

## 119.0.0

### Major Changes

- 5676341: GlButton: Removed dashed variant.

  Use the default variant instead.

### Patch Changes

- eb334bf: GlBreadcrumb: Improve resize calculation by measuring the dropdown width

## 118.1.2

### Patch Changes

- 37eed8f: Move gl-action-neutral-colors mixin to Tailwind utility

  Remove `gl-action-neutral-colors` SCSS mixin
  Update `@include` usage to `@apply`

## 118.1.1

### Patch Changes

- d3ede83: Add headerLevel prop to GlEmptyState component

## 118.1.0

### Minor Changes

- 5543fe1: Add GlIllustration component

## 118.0.0

### Major Changes

- f958c0a: Remove feature-button-border feature flag

## 117.1.0

### Minor Changes

- e7cf43f: Update GlSkeletonLoader to inherit class names.

  See https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/merge_requests/4899.

## 117.0.2

### Patch Changes

- 8baa444: Improve `GlTokenSelector` line wrapping of tokens and its input.

## 117.0.1

### Patch Changes

- 7df7f15: Use semantic design color token for `pre` elements.

  The previous color was the static `$gray-900`. Now it's `color.neutral.950`
  (light mode), `color.neutral.0` (dark mode).

## 117.0.0

### Major Changes

- dd766e5: Remove GlNav, GlNavItem, and GlFormCheckboxTree components

  Remove GlNav, GlNavItem, and GlFormCheckboxTree components.

  Use `GlTabs` with `GlTab` components for tabbed navigation.
  Use the `GlFormCheckbox` component in loops for checkboxes.

## 116.0.0

### Major Changes

- 6d33a82: Removes BDropdownItem dependency from GlFilteredSearchSuggestion

  This change migrates the GlFilteredSearchSuggestion so it doesn't
  depend on the deprecated GlDropdownItem component which in turn depends
  on BDropdownItem.

  This change reduces the surface area of the component by keeping only
  a small part of its API: the value that it emits via @suggestion and
  the icon it shows via the iconName prop.

  Additionally, by removing the .native modifier in the listener support for Vue 3 is improved.

  See https://v3-migration.vuejs.org/breaking-changes/v-on-native-modifier-removed

  BREAKING CHANGE: Support for the following inherited props/attributes of GlFilteredSearchSuggestion
  are removed:
  - avatarUrl
  - iconColor
  - iconRightAriaLabel
  - iconRightName
  - isChecked
  - isCheckItem
  - isCheckCentered
  - secondaryText
  - role

  The filtered search suggestions are now rendered in a `<button>` tag, not a link `<a href="#">`,
  so your automated tests may need updates to account for this.

  See: https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/merge_requests/4858

## 115.11.0

### Minor Changes

- 53fbcb7: Fix sr-only elements position inside a drawer

## 115.10.0

### Minor Changes

- 9509832: Added class property to form:textarea that is applied to textarea element when character count is being used

## 115.9.3

### Patch Changes

- 0b20037: Fix accessibility of initials-only avatars

## 115.9.2

### Patch Changes

- 5b58260: Update table hover token to use target highlight

## 115.9.1

### Patch Changes

- acab084: Fix variable for striped table styles

## 115.9.0

### Minor Changes

- ef46b21: Add tooltip click-to-pin feature to line chart

## 115.8.0

### Minor Changes

- a2a4e69: Add control design tokens to tailwind classes

  Add control border color, including states, as gl-border-control class
  Add gl-bg-control class for background color for default, disabled, and
  readonly states.
  The other control design tokens are added as classes in build_tokens.mjs
  to expose them to consumers who explicitly want to set non-stateful
  (static) background, border, and text color.

## 115.7.0

### Minor Changes

- b87f697: Update GlDisclosureItem item.to property type

  Support string | Location for 'item.to' which allows objects such as
  { path: '/my-path' } to be passed as Vue Router Link.

## 115.6.1

### Patch Changes

- 505f949: GlBreadcrumbs: Add medium variant of collapse calculation

## 115.6.0

### Minor Changes

- e44a774: Update GlToast interaction

  Add new toasts to the visual bottom of the list.
  Add smooth animation for progressive enhancement.

## 115.5.0

### Minor Changes

- 105a0f6: Shrink drawer body only when headerSticky prop is present

## 115.4.0

### Minor Changes

- e722d63: Adds an additional prop to allow customizing the classes applied to the panel body.

## 115.3.0

### Minor Changes

- 73ed44e: GlDashboardLayout: Added the new `GlDashboardLayout` component.

  This new component is used for creating dashboards using the unified
  [dashboard pattern](https://design.gitlab.com/patterns/dashboards).

## 115.2.0

### Minor Changes

- 8b3a26a: Use design token $deprecated property from Design Token Format Module

  Replace "deprecated" property with "$deprecated" property as per
  Design Token Format Module spec
  Remove custom com.gitlab deprecated extension property

## 115.1.0

### Minor Changes

- 4d89ab9: Add Figma extension properties to design tokens

## 115.0.1

### Patch Changes

- 6521c20: GlBaseDropdown: Fix to allow esc key press on dropdown toggle when it is closed

## 115.0.0

### Major Changes

- 398785b: Fixing aria roles for GlTabs and moving actions to a new #toolbar slot

## 114.8.1

### Patch Changes

- bb05d85: GlCollapsibleListbox: Use text.color.default on listbox search input

## 114.8.0

### Minor Changes

- 4df8645: GlCollapsibleListbox: give search input an explicit color

## 114.7.1

### Patch Changes

- 879c52a: GlChart: Fix legend averages when String values are used

## 114.7.0

### Minor Changes

- a13fc40: GlLink: Extend variants that can show the external link icon.

## 114.6.0

### Minor Changes

- 8880253: GlSorting: Add visually hidden label to sort toggle

## 114.5.0

### Minor Changes

- 1468779: GlDrawer: Allow content to shrink

## 114.4.0

### Minor Changes

- 050b00b: GlTable: Improve Bootstrap table selector performance

## 114.3.0

### Minor Changes

- 9cc0aa8: GlFilteredSearch: Add 'token-complete' and 'token-destroy' events.

## 114.2.0

### Minor Changes

- a4e4e22: GlTable: allow for using TH elements as row headers with TD-like styling.
- a290099: DesignTokens: Add highlight design tokens

  Introduce two types of highlights: "match" highlighting for search results
  and autocomplete suggestions, and "target" highlighting for referenced
  elements like URL anchors and emphasizing relationships.

  Added in https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/merge_requests/4480

## 114.1.2

### Patch Changes

- 3ee1796: GlBreadcrumb: Overflow problems when size=md and single item

  Fix an issue that causes unexpected overflow handling problems and
  accessibility issues when the size prop is set to `md` and there is a
  single item with no avatarPath defined.

## 114.1.1

### Patch Changes

- 20463b1: No code changes apart from adjusting the link in `package.json` to point to the
  new location in the [design.gitlab.com](https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com)
  repository.
