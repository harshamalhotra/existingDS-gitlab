---
name: Pagination
status: built
vueComponents:
  - GlPagination
related:
  - button
  - infinite-scroll
  - list
---

Pagination is used to help users parse a large number of items on a page, whenever there are too many results to show at once. Pagination breaks up results into several pages with controls for navigating forward and backward, or to a specific page. 

## Usage

Use pagination to:

- Present lists that contain specific items a user may need to find in order to complete their task. For example, Issues, Todos, Milestones, and Environments.
- Navigate lists that can be sorted and/or filtered. 

We use both pagination and infinite scroll to segment results depending on the user’s task. Compare these guidelines with the [infitnite scroll usage guidelines](/components/infinite-scroll#usage) if you are unsure of which to use.

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

Color, spacing, dimension, and layout specific information pertaining to this component can be viewed using the following link:

[View design in Pajamas UI Kit →](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/Pajamas-UI-Kit-Beta?node-id=2763%3A236)
