# @gitlab/ui

## 128.15.1

### Patch Changes

- 2690ec2: Increase placeholder contrast in light mode

## 128.15.0

### Minor Changes

- 95374b4: GlCollapsibleListbox: Add support for disabled listbox items.

## 128.14.3

### Patch Changes

- 499393b: Remove reactivity from GlAccordion provide properties

## 128.14.2

### Patch Changes

- 4097025: GlLabel: Update remove button's aria-label to include the label name

## 128.14.1

### Patch Changes

- 83848f1: GlPagination: Clean up window resize listener on component destroy.

## 128.14.0

### Minor Changes

- 910610c: Updates the card component’s design language to a more modern, minimal approach.

## 128.13.3

### Patch Changes

- 1ad2491: GlToast: Fixed toast rendering in Vue 3 compat mode by deferring VNode creation to the render cycle, setting slots on the internal Vue 3 instance, and recovering from stale toaster DOM state.

## 128.13.2

### Patch Changes

- 6b4aca1: Update font family to move GitLab fonts after CSS custom property

## 128.13.1

### Patch Changes

- e9670fa: Figma style-dictionary format use max clamp value

## 128.13.0

### Minor Changes

- e9348cf: Add validation support for GlCollapsibleListbox

## 128.12.0

### Minor Changes

- e31b100: Improve combobox accessible label in form groups

  Comboboxes and listboxes with nested search now announce
  form label and button value when screen readers interact
  with the component.

## 128.11.0

### Minor Changes

- 754b8b3: Create Figma style-dictionary format

  Replace previous directory filtering and file concatenation approach
  with native style-dictionary format to generate Figma structured design
  token JSON.

## 128.10.0

### Minor Changes

- 17b8c3d: Update GlToggle to allow showing help text regardless of layout

## 128.9.1

### Patch Changes

- ebc2e52: GlAttributeList change to column based reading order

## 128.9.0

### Minor Changes

- b12d4f7: Adds icon prop to disclosure dropdown item

## 128.8.3

### Patch Changes

- 33d8009: Datepicker: Adds a border to the current date

## 128.8.2

### Patch Changes

- 4795e16: Export GlAttributeList component from @gitlab/ui package entry point

## 128.8.1

### Patch Changes

- 9c2342f: Add aria-current on current selected step in GlPath component

## 128.8.0

### Minor Changes

- 61050a2: Create GlAttributeList component

## 128.7.0

### Minor Changes

- a778f69: Add GlMultiStepFormTemplate extended layer component

## 128.6.0

### Minor Changes

- 07eb4fc: Add prop to GlCollapsibleListbox to allow panel to match toggle width

## 128.5.1

### Patch Changes

- 63e445d: Drop dependency on `lodash/fp`.

  This makes `@gitlab/ui` more ESM-compatible, e.g., with Vite.

## 128.5.0

### Minor Changes

- ce08768: Make GlButton accessible while loading

## 128.4.0

### Minor Changes

- 4492d45: GlBreadcrumb: truncate the last item if collapsing does not provide enough space

## 128.3.0

### Minor Changes

- 200e65c: `GlFormFields` can now render a fieldsets.
  - Add `fieldset` property to `fields` prop in `GlFormFields` as a
    condition for `label-for` binding on `GlFormGroup`.
  - Update `GlFormFields` logic to only include label when `field.label`
    is provided

### Patch Changes

- 200e65c: `GlFormGroup` no longer renders a `label` or `legend` element if there's
  no `label` prop or slot.

## 128.2.3

### Patch Changes

- 1673e0c: Update button for forced colors mode (WHCM)

## 128.2.2

### Patch Changes

- 297920d: GlDisclosureDropdown: Improve list container tag detection.

  The component was incorrectly wrapping dropdown items in a `DIV` in a few cases instead of in a `UL`.

## 128.2.1

### Patch Changes

- a0a5052: GlDashboardPanel: Fix titlePopover icon with subtitle alignment

## 128.2.0

### Minor Changes

- 44ce524: Add GlColorModeToggle component for toggling between light and dark modes

## 128.1.0

### Minor Changes

- 661c70c: Color design tokens DTCG format conversion script

  The Design Token Community Group (DTCG) Color Module promotes authoring
  color design tokens with `colorSpace`, `components`, `alpha`, and `hex`
  (optional) properties.

  Figma uses decimal RGB color format to import/export design tokens to
  Figma Variables.

  These changes:
  - Add a script to automate updating color string values (hex `#000` and
    rgba `rgba(0,0,0,0)`) to DTCG color module objects with sRGB color
    space
  - Add preprocessor to style-dictionary to select `$value.hex` if present
    or compute CSS `rgba(0,0,0,0)` string from sRGB `$value.components`
    and `$value.alpha` properties.
  - Update documentation to reflect DTCG color module object shape.

## 128.0.0

### Major Changes

- 6ef5323: Refactor GlCollapsibleListbox button to combobox role

  ## Reason for this change

  The GlCollapsibleListbox component wasn't announcing itself as a
  combobox to screen readers. The component was also missing an
  aria-activdescendant attribute.

  ## Breaking change updates

  There are two breaking changes with this update. Both of these changes
  affect screen reader usability and may cause automated accessibility
  tests to fail in the future if not implemented:
  1. See the [Custom toggle](https://design.gitlab.com/components/dropdown-combobox#custom-toggle-1) docs for details.
  2. See the [Labeling the listbox](https://design.gitlab.com/components/dropdown-combobox#labeling-the-listbox) docs for details.

- 67b1e1f: Remove BFormCheckboxGroup from GlFormCheckboxGroup

  Part of a larger migration to remove Bootstrap Vue from GitLab UI

  BREAKING CHANGE: support for the following props have been dropped:
  - autofocus
  - button-variant
  - buttons
  - disabled-field
  - form
  - html-field
  - plain
  - size
  - stacked
  - switches
  - text-field
  - value-field
  - validated

## 127.1.1

### Patch Changes

- ccfd22d: GlToast: Add animation workaround for Firefox

## 127.1.0

### Minor Changes

- 930c5cd: Add gl-bg-action-neutral Tailwind utility

## 127.0.0

### Major Changes

- 6207f57: Text must now be supplied for all items in a `GlBreadcrumb`.

  Makes `text` a required key on items in the `GlBreadcrumb` component and
  removes now-unnecessary hiding mechanism for textless items.

## 126.5.0

### Minor Changes

- d06f37c: Default header and footer slots of GlModal to use semantic `<div>` and provide props to override this.

## 126.4.0

### Minor Changes

- 99272c2: Add wrapperAttributes prop to GlFormInputGroup and GlSearchBoxByClick to support explicit attribute passing

## 126.3.4

### Patch Changes

- 2541a70: GlStackedColumnChart: Fix tooltip item order for `tiled` presentation

## 126.3.3

### Patch Changes

- b241714: Rename design token com.figma.scope property to com.figma.scopes

  In order to align with updated Figma import/export modes design token
  `$extensions` metadata rename design token `com.figma.scope` property to
  `com.figma.scopes`.

## 126.3.2

### Patch Changes

- ef8cc8a: Create shared logging utility for component development warnings

  Implement centralized `logWarning` utility to standardize development
  warnings across GitLab UI components. This improves debugging with
  component-specific prefixes and simplifies maintenance by centralizing
  logging behavior.

  Key changes:
  - Enhanced `logWarning` function with optional `context` parameter
  - Migrated 5 components to use shared utility (GlTab, GlIcon,
    GlIllustration, GlFilteredSearch, GlCollapsibleListbox)
  - Added test coverage for the utility
  - Removed manual environment checks from components

## 126.3.1

### Patch Changes

- 5191abe: Improve accessibility for icon-only badges by removing fallback to icon names for aria-label and adding developer warnings when aria-label is missing.

## 126.3.0

### Minor Changes

- e646595: Update pagination style and display text
  - Remove "Previous" and "Next" display text from GlPagination component (while maintaining accessible text for those buttons)
  - Use the large chevron variant for Previous and Next buttons in GlPagination and GlKeysetPagination
  - Adjust spacing in GlKeysetPagination buttons to accommodate larger chevron icon

## 126.2.0

### Minor Changes

- b006673: Adds feedback brand design tokens to prepare for status merging with feedback.

## 126.1.1

### Patch Changes

- 765a1cd: Add feedback border color design tokens.

## 126.1.0

### Minor Changes

- d4837bd: GlModal: Updates contextual border design tokens.
- 3cfaa53: GlDrawer: Adds contextual border design tokens.

## 126.0.2

### Patch Changes

- 083eec2: Update deprecated text design tokens to use alias values

  Update text.primary, text.secondary, text.tertiary design tokens to use
  aliases to the design tokens intended to replace them

## 126.0.1

### Patch Changes

- f7b3092: Batch input event in GlFormFields to fix a bug where only the last input is updated if typed in rapid succession (for example when using a password manager).

## 126.0.0

### Major Changes

- 4bb0b2c: Remove `dist/tokens` from package.

  Tokens are still available under `src/tokens/build`.

- 5766067: Remove Tailwind migration script.

  If you need access to this script, use `@gitlab/ui@<126.0.0`.

### Minor Changes

- a118ed5: Add typography composite design tokens
  - Add Tailwind component style-dictionary format to turn composite
    design tokens into Tailwind components with a single class
  - Add `expand` config to css, js, and scss style-dictionary platforms
    to expand composite design token properties into individual property
    output e.g. `--gl-heading-1-font-size`
  - Add `heading.*` composite typography design token
  - Add `font.weight.heading` semantic design token
  - Add `letter-spacing.heading` semantic design token
  - Add `line-height.heading` semantic design token

## 125.0.0

### Major Changes

- f6f3e9e: Remove iconless alert variant

## 124.4.3

### Patch Changes

- 3022633: GlSingleStat use design tokens and fix icon variant colors.
  - Replaced hardcoded color classes (`gl-text-gray-700`, `gl-text-gray-900`) with design token classes (`gl-text-heading`, `gl-text-strong`)
  - Fixed meta icon colors not updating when variant changes by using icon variant prop instead of CSS classes
  - Added `badgeVariantToIconVariantMap` to properly map badge variants to icon variants
  - Updated tests to verify icon variant prop instead of CSS classes

## 124.4.2

### Patch Changes

- 28074ff: GlBreadcrumb: restore bold font for last item

## 124.4.1

### Patch Changes

- 5240acd: Adds "items" prop to table components for easier testing

## 124.4.0

### Minor Changes

- d6e2227: Add `validateOnBlur` prop to `GlFormFields`. Defaults to `true`. When set to `false` validation is only run when submitting the form.

## 124.3.1

### Patch Changes

- a489306: GlBreadcrumb: Include clipboard button in collapse calculation

## 124.3.0

### Minor Changes

- 52e9a8e: Update GlFormCombobox to use latest dropdown and option styles

## 124.2.0

### Minor Changes

- bca6ab3: Add clipboardButton to GlBreadcrumb for copying path

## 124.1.1

### Patch Changes

- 978ab70: Update link underlines for breadcrumb and link components

## 124.1.0

### Minor Changes

- 8f0bab9: Add font size scale design tokens

  Adds `font.size.*` design tokens for `100` to `800` scales
  and `100-fixed` to `800-fixed` scales
  Update `font.size.sm` to use `font.size.100`
  Update `font.size.md` to use `font.size.300`
  Update `font.size.lg` to use `font.size.400`
  Update documentation with design token path references

## 124.0.0

### Major Changes

- 68e7d61: Remove 'disabled' prop on GlPagination

### Patch Changes

- 4d6396a: GlAlert: Move role and aria-live attributes to container element for better accessibility
- 7fa20fe: Fix rendering bug in GlFormFields due to missing key.
  Focus was lost when adding fields. Also the ID associated with
  fields would be incremented when it should stay constant.
  Also make it possible to pass a custom ID attribute.

## 123.12.0

### Minor Changes

- a8c40ad: Add support for href inside toast title

## 123.11.3

### Patch Changes

- 5e1f960: Move border.color.transparent design token to constants

## 123.11.2

### Patch Changes

- ab4727b: Revert https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/merge_requests/5223 to fix layout rendering bug due to adding an extra `div`.

## 123.11.1

### Patch Changes

- 2d1e0f3: Fix rendering bug in GlFormFields due to missing key.
  Focus was lost when adding fields. Also the ID associated with
  fields would be incremented when it should stay constant.

## 123.11.0

### Minor Changes

- f66a7da: Increase token component border radius.

## 123.10.1

### Patch Changes

- 06552bc: Dashboard panel background to default

## 123.10.0

### Minor Changes

- af3a0cf: Update GlTokenSelector to proper combobox

  The GlTokenSelector was not announcing its list of preset tokens
  or user-added tokens to screen readers. This changeset updates the
  component to a WAI-ARIA spec combobox (input plus listbox).

## 123.9.2

### Patch Changes

- cde3dbf: Update Filtered search border radius

## 123.9.1

### Patch Changes

- 775864e: Vertically align loading icon for dashboard panel

  This change resolves an issue with the alignment of the dashboard-panel's loading icon, where the icon would sit on the very top instead of being vertically centered.

## 123.9.0

### Minor Changes

- 8d9cac6: Increase the border radius for some semantic design tokens and a set of components to implement changes based on Project Studio work.

## 123.8.0

### Minor Changes

- 20842cf: Add initial font-family, font-size, font-weight design tokens

  Add `font.family`, `font.size`, and `font.weight` design tokens
  Add `line-height` tokens to Tailwind config

## 123.7.0

### Minor Changes

- 177c05d: GlFilteredSearch: Allow grouping items in suggestions

## 123.6.1

### Patch Changes

- 29671e3: Fix Chrome 142 select rendering by adding default size attribute to GlFormSelect

  Chrome 142 changed how select elements render based on size and multiple attributes. Without an explicit size attribute, some selects were rendering as expanded in-page listboxes instead of collapsed dropdowns.
  GlFormSelect now defaults to size="1", ensuring consistent collapsed dropdown rendering across all Chrome versions and preventing layout issues.

## 123.6.0

### Minor Changes

- b19aae6: Increase the border radius for some semantic design tokens and a set of components to implement changes based on Project Studio work.

## 123.5.0

### Minor Changes

- 63559d3: Add prop to keep GlButton accessible when loading

## 123.4.0

### Minor Changes

- 31dd61d: Update Tailwind config values to remove fallbacks

  Update `tailwind_token_formatter.js` to remove alias resolutions for
  design tokens. Instead resolve the immediate CSS custom property for
  any given design token.

  Build token output to update `/src/tokens/build/tailwind/tokens.cjs`
  generated output with key/value pairs which reflect:
  - Key: design token scale e.g. `default`, `1`, `blue-500`
  - Value: design token CSS custom property e.g. `var(--gl-token-name)`

## 123.3.1

### Patch Changes

- 41c2dac: Guard base dropdown's `containsElement` method

  This ensures that consumers' specs don't fail due to not having access
  to the containsElement method that the BaseDropdown component
  exposes.

## 123.3.0

### Minor Changes

- 53c5bc6: Add count and countSrText prop to GlButton

## 123.2.0

### Minor Changes

- 1127169: Make gl-popover customClasses flexible

  Previously, the `<gl-popover>` `customClasses` prop only accepted arrays.

  This change adds the option to additionaly pass in both Strings and Objects, so the API for adding
  custom classes across all components stays consistent.

## 123.1.0

### Minor Changes

- d68c10e: Define shadow design tokens

  Add box shadow design tokens to Tailwind config
  Update StyleDictionary transform groups with `gitlab/` namespace
  Add `shadow/css/shorthand` transform to CSS/SCSS transform groups
  Add `getTokenCssCustomProperty` utility to Tailwind token formatter

## 123.0.0

### Major Changes

- 81fbcea: Breaking change. Root element of GlAvatarLabeled no longer inherits attributes.
  The attributes are now explicitly defined as props and passed to the GlAvatar component.

## 122.14.0

### Minor Changes

- 677809f: Define zindex design tokens

## 122.13.0

### Minor Changes

- 00ed526: Pass CSS classes to dashboard panel tooltip

  This change adds the ability to customize the styling of dashboard panel popovers.

  It does this by adding a new prop to the panel and passing it on to the title tooltip's css-classes prop.

### Patch Changes

- d7bea48: Reverts GlTokenSelector combobox widget update

## 122.12.1

### Patch Changes

- d4b817e: Portal fixed dropdowns to the root

  Fixed dropdowns can be mispositioned when they are within a container
  context. To circumvent the issue, we can portal them to the root
  (assuming it's not a container), so that Floating UI can properly
  compute their position.

- b46f90e: GlFormGroup: Fix spacing for label description

  Reduces margin-top from gl-mt-3 to gl-mt-2 for better visual alignment.

## 122.12.0

### Minor Changes

- 4d4dc0c: Define opacity design tokens

## 122.11.0

### Minor Changes

- 9f66737: Modals now register their own container

  This makes it possible to write container queries against the `gl-modal`
  container within `GlModal`.

## 122.10.0

### Minor Changes

- 8e659de: Update GlBanner to use GlIllustration
- 07e30c5: Refactor GlTokenSelector to accessible combobox widget

  This non-breaking change refactors the `GlTokenContainer`
  to move ARIA attributes down into the nested text input.
  It also removes the `state` prop from `GlTokenContainer`.
  The `state` prop is already being passed to the parent
  `GlTokenSelector` and was not being used. This was verified
  through automated tests passing without having to refactor
  or remove logic. It was further tested manually in Storybook.

  This change was made to accommodate screen reader users who
  were not hearing the child listbox options be announced.

## 122.9.0

### Minor Changes

- dcc09da: Define border-radius design tokens

  Adds constant border radius design tokens
  Updates Tailwind defaults with constant border radius design tokens
  Adds semantic border radius design for action and control
  Adds control border radius to form inputs and select
  Adds context border radius design tokens for components

### Patch Changes

- 0c2e415: Fix truncated dashboard panel title icon

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
