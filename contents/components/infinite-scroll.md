---
name: Infinite scroll
description: Infinite scroll helps users parse a large number of items by breaking up lists and distributing the results.
deprecated: true
related:
  - pagination
  - spinner
---

## Examples

<story-viewer component="base-infinite-scroll" title="Default"></story-viewer>

<todo>Add infinite scroll to Pajamas UI Kit</todo>

## Structure

<figure-img alt="Numbered diagram of an infinite scroll structure" label="Infinite scroll structure" src="/img/infinite-scroll-structure.svg"></figure-img>

1. **Container**: Wraps the content.
1. **Item**: Item within the infinite scroll list.
1. **Scrollbar**: Scrollbar that appears when scrolling the list.
1. **Count**: Text displaying number of shown items out of total number of items in the list.

## Guidelines

Based on an [accessibility evaluation](https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/issues/2726), there are accessibility concerns for infinite scrolling and it should be replaced with a [load more pattern](/patterns/loading#loading-more) or [pagination](/components/pagination).

### When to use

- A list with content that updates frequently.
- A list when there is no sort/filter functionality.

### When not to use

- If a list is **more than 20** items long, consider using [pagination](/components/pagination).

### Behavior

- Infinite scroll is triggered once the user has reached the 20th item of a list and there are more items to load.
- A [loading spinner](/components/spinner) appears at the bottom of the list for the duration of the load time.
- When a user returns to a list from a list entry using the back button in the browser, they should be returned to the same place in the list where they left off.

### Content

#### List count

Always display a counter that details how many items have already loaded and how many items remain. This gives the user an indication of where they are relative to the list.

### Accessibility

<todo>Add accessibility guidelines</todo>

## Code reference

### GlInfiniteScroll

<story-viewer component="base-infinite-scroll" title="GlInfiniteScroll" view-mode="docs"></story-viewer>

#### Usage

The infinite scroll component wraps around a results list and emits a message
(`bottomReached`) when the bottom of the viewport is reached, which should trigger
a re-fetching. The `gl-infinite-scroll` component expects its parent component to
manage the re-fetching.

Additionally it emits a `topReached` message when the top of the viewport is reached, which
can be useful to load items on top of the available data. If only `topReached` is present, the
viewport will be scrolled to the bottom the first time this component is mounted.

#### Public methods

Useful public methods you can call via `$refs`:

- `.scrollUp()`: Scrolls to the top of the container.
- `.scrollDown()`: Scrolls to the bottom of the container.
- `.scrollTo({ top, behavior })`: Scrolls to a number of pixels
  along the Y axis of the container. The scrolling behavior can also be specified,
  as per MDN spec (<https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollTo>)

#### Implementation Example

This is how a full implementation would look like with paginated results from GitLab's
`projects` API.

In the component's state, initialize a `pageInfo` object:

```js
pageInfo: {
  currentPage: 0,
  nextPage: 0,
  totalPages: 0,
  totalResults: 0,
}
```

When fetching for the first time, set the state with the header
information in the mutations:

```html
Vue.set(state.pageInfo, 'currentPage', parseInt(headers['X-Page'], 10));
Vue.set(state.pageInfo, 'nextPage', parseInt(headers['X-Next-Page'], 10));
Vue.set(state.pageInfo, 'totalPages', parseInt(headers['X-Total-Pages'], 10));
Vue.set(state.pageInfo, 'totalResults', parseInt(headers['X-Total'], 10));
```

_Note: There is a function you can use for parsing integers in headers in
GitLab called `parseIntPagination` in `common/utils.js`_

Every time `bottomReached` happens, update the state in your mutations:

```js
state.searchResults = state.searchResults.concat(results.data);
Vue.set(state.pageInfo, 'nextPage', parseInt(headers['X-Next-Page'],10));
Vue.set(state.pageInfo, 'totalPages', parseInt(headers['X-Total-Pages'],10));
```

Use the state to fetch the next page in the actions. In this case, the `Projects`
API allows us to send in a `page` parameter to fetch a certain page from the
list of results.

```js
export const fetchNextPage = ({ state, dispatch }) => {
  if(state.pageInfo.currentPage < state.pageInfo.totalPages) {
    Api.projects(searchQuery, { page: state.pageInfo.nextPage })
      ...
  }
};
```

```html
<script>
exportDefault {
  components: {
    GlInfiniteScroll,
  },
  computed: {
    ...mapState([
      'pageInfo',
      'searchResults',
    ]),
  },
  methods: {
    ...mapActions([
      'fetchNextPage',
    ]),
    bottomReached() {
      this.fetchNextPage();
    },
  },
}
</script>
<template>
  <gl-infinite-scroll
    @bottomReached="bottomReached"
    :max-list-height="400"
    :fetched-items="searchResults.length"
    :total-items="totalResults"
  >
    ...Results in a list, another component, etc ....
  </gl-infinite-scroll>
</template>
```
