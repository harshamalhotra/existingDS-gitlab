---
name: Infinite scroll
status: built
vueComponents:
  - GlInfiniteScroll
related:
  - list
  - pagination
  - spinner
---

Breaking up lists and distributing the results either by the use of [pagination](/components/pagination) or by infinite scroll helps the user parse a large number of items whenever there are too many results to show at once. We use both pagination and infinite scroll to segment results depending on the user’s task.

## Definition

Infinite scroll loads the next batch of items in a list once the user has reached the bottom of the page and thus removes the need for pagination.

## Usage

Infinite scroll is similar to pagination, so use the table below as a guide for choosing when to use either component.

| | Pagination | Infinite Scroll |
| ----- | ---------- | --------------- |
| **Description:** | Benefits users who are looking for a specific item in a list to complete their task. | Benefits users who are browsing through lists with content that updates frequently. |
| **When to use:** | To be used on any list that can be sorted and/or filtered. | To be used on lists with no sort/filter functionality. Lists that only have a search function should use infinite scroll and not be considered in the sorted/filtered category. |
| **Examples:** | Issues and Todos dashboards | Activity dashboards and the Commits page |

### Behavior

Infinite scroll is triggered once the user has reached the 20th item of a list and there are more items to load. A [loading spinner](/components/spinner) appears at the bottom of the list for the duration of the load time.

#### List count

Always display a counter that details how many items have already loaded and how many items remain. This gives the user an indication of where they are relative to the list. The examples below show how to display different variations of list counts:

Todo: add infinite scroll example with "Showing 60 of 100 items" in the list count

Todo: add infinite scroll example with "Showing 60 of 1,000+ items" in the list count

Todo: add infinite scroll example with "Showing 1,200 of 1,000+ items"" in the list count

Todo: add infinite scroll example with "Showing all items" in the list count

#### Returning to a list

When a user returns to a list from a list entry using the back button in the browser, they should be returned to the same place in the list where they left off.

## Demo

[[Example:infinite-scroll-basic]]

## Design specification

Color, spacing, dimension, and layout specific information pertaining to this component can be viewed using the following link:

[Sketch Measure Preview for infinite scroll](https://gitlab-org.gitlab.io/gitlab-design/hosted/andy/ce%23133-Infinite-Scroll-components-spec-previews/)
