---
name: Infinite scroll
description: Infinite scroll helps users parse a large number of items by breaking up lists and distributing the results.
docs: complete
gitlab_ui: /components/infinite-scroll/code
vueComponents:
  - GlInfiniteScroll
related:
  - list
  - pagination
  - spinner
---

## Usage

Use infinite scroll to:

- Present lists with content that updates frequently. For example, Activity and Commits.
- Navigate lists when there is no sort/filter functionality. Lists that only have a search function should use infinite scroll.

We use both infinite scroll and pagination to segment results depending on the user’s task. Compare these guidelines with the [pagination usage guidelines](/components/pagination#usage) if you are unsure of which to use.

### Behavior

Infinite scroll is triggered once the user has reached the 20th item of a list and there are more items to load. A [loading spinner](/components/spinner) appears at the bottom of the list for the duration of the load time.

#### List count

Always display a counter that details how many items have already loaded and how many items remain. This gives the user an indication of where they are relative to the list. The examples below show how to display different variations of list counts:

[[Example:infinite-scroll-with-finite-total-items]]

[[Example:infinite-scroll-small-fetched-items]]

[[Example:infinite-scroll-large-fetched-items]]

[[Example:infinite-scroll-all-items]]

#### Returning to a list

When a user returns to a list from a list entry using the back button in the browser, they should be returned to the same place in the list where they left off.

## Demo

[[Example:infinite-scroll-basic]]

## Design specification

Color, spacing, dimension, and layout specific information pertaining to this component can be viewed using the following link:

[Sketch Measure Preview for infinite scroll](https://gitlab-org.gitlab.io/gitlab-design/hosted/andy/ce%23133-Infinite-Scroll-components-spec-previews/)
