# @gitlab/ui

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
