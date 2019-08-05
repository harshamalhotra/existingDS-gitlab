---
name: Sorting
related:
  - dropdowns
  - filters
  - lists
---

Sorting allows users to quickly re-organize similar content on a long list when the default order may be insufficient for users to scan the data set. The sorting component is placed directly on top of the list view. Common use cases for sorting include arranging:

*   Numbers in ascending or descending order.
*   Characters in alphabetical or reverse-alphabetical order.
*   Dates from most to least recent or the reverse.

## Usage

### Sorting "dos"

* Use the sorting component when the list has pagination and spans multiple pages, as it can make it easier for users to digest and find relevant content.
* A user's sort selections are meant to be persisted. If they make a sort selection and then leave the page, when they return to the page, their previous sort selections will be preserved.
* Sorting can occur in tables and in lists. While sorting in lists relies on the sorting component described on this page, sorting within a table happens in the table header.

### Sorting "don'ts"

* When using the sorting component, make sure the list in the dropdown doesn't contain more than twenty items, otherwise it will create usability problems. [See dropdown guidelines](/components/dropdowns). 
* If a list is static, easy to search/scan, or where the data set won't grow, the sorting component is unnecessary.

### Sorting vs filtering

Sorting and filtering are closely tied. Sorting can be used independently or in tandem with filtering.

Filtering works by hiding part of the data that would otherwise be displayed on the list. Unlike filtering, sorting doesn't hide content, but rather re-orders it based on a specified criteria. Also, in contrast to filtering, sorting never produces zero search results. 

### Sorting component

The sorting component is comprised of two parts: a dropdown, and a sort direction icon button.

The dropdown allows users to choose their sorting criteria, whether it be by label, date, or popularity. As soon as an item in the dropdown is selected, the list content re-sorts automatically. The sort dropdown allows for sorting by a single selected item.

The sort direction icon button allows users to change the direction of the sort, from ascending to descending or vice-versa. The default sort order on a list is determined by the designer on a page-by-page basis.

## Demo

TODO: Add in the example sort component.

## Design specifications

Color, spacing, dimension, and layout specific information pertaining to this component can be viewed using the following link:

TODO: Add in a link to the measure spec.
