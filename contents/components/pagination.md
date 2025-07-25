---
name: Pagination
description: Pagination breaks up content into multiple pages with controls for navigating those pages.
related:
  - button
  - button-group
  - path
  - infinite-scroll
---

## Examples

<story-viewer component="base-pagination" title="Offset pagination"></story-viewer>

<story-viewer component="base-pagination" title="Offset pagination truncated on both sides" args-page="10"></story-viewer>

<story-viewer component="base-pagination" story="compact" title="Compact offset pagination"></story-viewer>

<story-viewer component="base-keyset-pagination" title="Keyset pagination" args-hasPreviousPage="false"></story-viewer>

<todo>Add or refactor examples to compare offset and keyset pagination.</todo>

[View in Pajamas UI Kit →](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?type=design&node-id=425-130&mode=design)

## Structure

<figure-img alt="Numbered diagram of pagination structure" label="Pagination structure" src="/img/pagination-structure.svg"></figure-img>

1. **Previous icon**: A [chevron-left](https://gitlab-org.gitlab.io/gitlab-svgs/?q=~chevron-left) icon as part of the "previous page" link.
1. **Previous label**: Text that indicates navigating to the previous page.
1. **Page link**: Sequential page number.
1. **Active page link**: Highlights current page.
1. **Truncation**: Indicates more pages exist that can't be listed due to space.
1. **Next label**: Text that indicates navigating to the next page.
1. **Next icon**: A [chevron-right](https://gitlab-org.gitlab.io/gitlab-svgs/?q=~chevron-right) icon as part of the "next page" link.
1. **Help text**: Text that indicates the current page and total number of pages.

## Guidelines

### When to use

- Break up a list or a large content block into multiple pages that can be navigated sequentially or by choosing a specific page within the set.
- Lists with **more than 20** items require pagination at the bottom of a page. Pagination is generally not required on lists with **20 or fewer** items but can be considered depending on the context (that is, the paginated list is embedded within another component).

### When not to use

- If you need to navigate between steps in a flow, consider using the [path](/components/path) component or [buttons](/components/button) instead.

### Appearance

- There is 24px [spacing](/product-foundations/spacing#standard-spacing-guidelines) between pagination and the element it relates to.

### Types of pagination

There are two types of pagination, **offset**, and **keyset** (sometimes called cursor-based). General use is outlined below, but either can be used for any scenario since factors like performance, the number of results returned, user expectations, and how data is queried will ultimately help determine the best approach.

#### Offset pagination

Offset pagination allows a user to navigate page by page within a defined set of pages. The page number is visible and can be directly clicked in the pagination component. This method is good when records aren't added or subtracted to the results as a user navigates through them.

Because page numbers are visible, the first and last page links are not truncated so that a user can quickly navigate to the beginning or end of the contents.

#### Keyset pagination

Keyset pagination only has **Prev** and **Next** options and no page numbers. It's ideal for paginating results that may have dynamic additions or subtractions as a user can only move to the previous or next set of results, regardless of where it is in the set. Keyset pagination is a good alternative to [infinite scroll](/components/infinite-scroll) since it can provide a more predictive and accessible experience.

### States

- **Disabled**: The previous and next controls can be disabled when a user is either on the first or last page and can't navigate back or forward.
- **Active**: Link that indicates the current "active" page.

### Behavior

- Truncation is shown using `…` when the number of pages exceeds the pagination display limit. By default `…` are shown after the **5th page** on large and medium viewports and after the **2nd page** on small and mobile viewports.
- Double truncation occurs when the current page is separated by 5 or more pages from the first and last page on large and medium viewports. On small and mobile viewports, double truncation occurs when 1 or more pages separate the current page from the first and last page.

### Accessibility

- Since pagination is a form of navigation, there are a few helpful considerations:
  - Wrap the list in a `<nav>` element with `aria-label` so it can easily be navigated to as a [landmark](https://w3c.github.io/aria-practices/examples/landmarks/main.html).
  - Use `aria-current="page"` on the active page link.
  - Each link should have `aria-label` to clarify what the page number means. For example, `<a href="/p3" aria-label="Page 3">3</a>`.
- When navigating with pagination, the focus and scroll position should be at the top of the new page content so a user can continue moving through the results.

## Code reference

### GlPagination

#### Current page

The current page's value should be bound using `v-model`, e.g.:

```html
<script>
  export default {
    data: () => ({
      page: 2,
    }),
  };
</script>

<template>
  <gl-pagination v-model="page" :per-page="10" :total-items="100" />
</template>
```

#### Limits

The `limits` prop is used to define pagination link limits based on Bootstrap's breakpoint sizes.
It is strongly recommended you provide a 'default' property, even if you have accounted for all
breakpoint sizes. While unlikely, it is possible breakpoints could change, thus, a default property
ensures a graceful fallback.

Here is `limits` default value:

```js
{
  xs: 0,
  sm: 3,
  md: 9,
  default: 9,
}
```

<note>The component will not render any UI if the total items available for display is less than the max items per page.</note>

<story-viewer component="base-pagination" title="GlPagination" view-mode="docs"></story-viewer>

### GlKeysetPagination

The simplest way to use `GlKeysetPagination` with a paginated GraphQL response
is to `v-bind` to the
[`PageInfo`](https://docs.gitlab.com/ee/api/graphql/reference/#pageinfo) type
returned by the endpoint:

```html
<gl-keyset-pagination v-bind="pageInfo" />
```

This is possible because the default field names of the `PageInfo` type align
with the `props` of this component.

#### Translatable strings

<do>Provide the `prevText` and `nextText` props with translatable strings.
The default strings ("Prev" and "Next") are hardcoded in this component and
can't be translated.</do>

Example:

```html
<gl-keyset-pagination v-bind="pageInfo" :prev-text="__('Prev')" :next-text="__('Next')" />
```

#### GraphQL

<grid>
<do>Use this component for paginating GraphQL requests (or any
endpoint that uses keyset pagination).</do>
<dont>Use this component for paginating REST requests (or any
endpoint that uses offset pagination).</dont>
</grid>

There's no intrinsic reason why GraphQL endpoints can't support offset pagination (in fact, [the official documentation](https://graphql.org/learn/pagination/#pagination-and-edges) shows an example offset pagination implementation) or why REST endpoints can't support keyset pagination. This is simply how we've chosen to implement our REST and GraphQL endpoints at GitLab.

For offset pagination, use the [`GlPagination` component](#glpagination) instead.

For more information on the difference between offset and keyset pagination see
[our documentation on GraphQL pagination](https://docs.gitlab.com/ee/development/graphql_guide/pagination.html).

<story-viewer component="base-keyset-pagination" title="GlKeysetPagination" view-mode="docs"></story-viewer>

## Reference

<todo>Add reference for the "more than 20" pagination item count requirements.</todo>
