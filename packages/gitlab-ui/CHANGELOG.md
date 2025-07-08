# @gitlab/ui

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
