---
name: Pagination
description: Pagination is used to help users parse a large number of items on a page, whenever there are too many results to show at once. Pagination breaks up results into several pages with controls for navigating forward and backward, or to a specific page.
figma: https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/Pajamas-UI-Kit?node-id=425%3A130
docs: complete
gitlab_ui: /components/pagination/code
vueComponents:
  - GlPagination
related:
  - button
  - infinite-scroll
  - list
---

## Usage

When to use pagination

- Presenting lists that contain specific items a user may need to find in order to complete their task. For example, Issues, Todos, Milestones, and Environments.
- Navigating lists that can be sorted and/or filtered.

There are two types of pagination, **offset**, and **keyset** (sometimes called cursor-based). General use is outlined below, but either can be used for any scenario since factors like performance, number of results returned, user expectations, and how data is queried will ultimately help determine the best approach.

#### Offset pagination

Offset pagination allows a user to navigation page by page within a defined set of pages. The page number is visible and can be directly clicked in the pagination component. This method is good when records aren't added or subtracted to the results as a user navigates through the them.

#### Keyset pagination

Keyset pagination only has **Prev** and **Next** options and no page numbers. It's ideal for paginating results that may have dynamic additions or subtractions as a user can only move to the previous or next set of results, regardless of where it is in the set. Keyset pagination is a good alternative to [infitnite scroll](/components/infinite-scroll#usage) since it can provide a more predictive and accessible experience.

### Behavior

Lists with **more than 20** items require pagination which is always located below the list and takes the form of a [button group](/components/button/#group). Pagination is generally not required on lists with **20 or fewer** items but can be considered depending on the context (that is, the paginated list is embedded within another component).

#### Anchoring

Always anchor to the top of the list when the user interacts with the pagination component. Doing so reduces scrolling on the part of the user while keeping them on task.

#### Truncation

Truncation is shown using `…` when the number of pages exceeds the pagination display limit. By default `…` are shown after the **5th page** on large and medium viewports and after the **2nd page** on small and mobile viewports.

Double truncation occurs when the current page is separated by 5 or more pages from the first and last page on large and medium viewports. On small and mobile viewports, double truncation occurs when 1 or more pages separate the current page from the first and last page.

## Demo

[[Example:pagination-basic]]

[[Example:pagination-double-truncation]]

[[Example:pagination-compact]]

## Design specification

Color, spacing, dimension, and layout information can be viewed in the [Pajamas UI Kit →](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/Pajamas-UI-Kit-Beta?node-id=2763%3A236)
