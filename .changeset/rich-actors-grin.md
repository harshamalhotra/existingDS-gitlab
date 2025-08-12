---
'@gitlab/ui': major
---

Removes BDropdownItem dependency from GlFilteredSearchSuggestion

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
