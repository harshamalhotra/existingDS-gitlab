# @gitlab/ui

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
