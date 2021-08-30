---
name: Sorting
description: Sorting allows users to quickly re-organize similar content on a long list when the default order may be insufficient for users to scan the data set.
figma: https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/Pajamas-UI-Kit?node-id=2956%3A3038
docs: in-progress
related:
  - dropdown
  - filter
  - lists
---

## Usage

### Dos and Dont’s

| Do | Don’t |
| --- | --- |
| Use the sorting component when the list has pagination and spans multiple pages, as it can make it easier for users to digest and find relevant content. | When using the sorting component, make sure the list in the dropdown doesn't contain more than 10 items, otherwise it will create usability problems. [See dropdown guidelines](/components/dropdown). |
| A user's sort selections are meant to be persisted. If they make a sort selection and then leave the page, when they return to the page, their previous sort selections will be preserved. | If a list is static, easy to search/scan, or where the data set won't grow, the sorting component is unnecessary. |
| Sorting can occur in tables and in lists. While sorting in lists relies on the sorting component described on this page, sorting within a table happens in the table header. |   |

### Sorting vs filtering

Sorting and filtering are closely tied. Sorting can be used on its own or can coexist with filtering on the same page. When both sorting and filtering are available, they should be presented as separate interactions and each interaction should take place in the context of its respective component. Sorting would take place within the sorting component, and filtering within the filtering component. The two interactions shouldn't be combined.

Separate the sorting and filtering components visually. Filters are typically displayed on the left of the screen and sorting on the right. The sort component is always placed above the content that is being sorted so the content and the sorting function are cognitively associated. 

Filtering works by hiding part of the data that would otherwise be displayed on the list. Unlike filtering, sorting doesn't hide content, but rather re-orders it based on a specified criteria. Also, in contrast to filtering, sorting never produces zero search results.

### Sorting component

The sorting component is comprised of two parts: a dropdown, and a sort direction icon button.

The dropdown allows users to choose their sorting criteria, whether it be by label, date, or popularity. As soon as an item in the dropdown is selected, the list content re-sorts automatically. The sort dropdown allows for sorting by a single selected item.

The sort direction icon button allows users to change the direction of the sort, from ascending to descending or vice-versa. The default sort order on a list is determined by the designer on a page-by-page basis.

## Demo

Todo: Add in the example sort component.

## Specifications

### Design

Color, spacing, dimension, and layout specific information pertaining to this component can be viewed using the following link:

[View design in Pajamas UI Kit →](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/Pajamas-UI-Kit?node-id=2956%3A3038)
