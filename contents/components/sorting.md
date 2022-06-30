---
name: Sorting
description: Sorting allows users to quickly re-organize similar content on a long list when the default order may be insufficient for users to scan the data set.
stories:
  - base-sorting--default
related:
  - dropdown
  - filter
---

## Examples

<story-viewer story-name="base-sorting--default" title="Default" iframe-padding="0 0 75px 0"></story-viewer>

<todo>Add to Pajamas UI kit.</todo>

## Structure

<todo>Add structure image.</todo>

## Guidelines

### When to use

- Use the sorting component when the list has pagination and spans multiple pages, as it can make it easier for users to digest and find relevant content.
- A user's sort selections are meant to be persisted. If they make a sort selection and then leave the page, when they return to the page, their previous sort selections will be preserved.
- Sorting can occur in tables and in lists. While sorting in lists relies on the sorting component described on this page, sorting within a table happens in the table header. [See table sorting guidelines](/components/table#ordering-sorting).

### When not to use

- When using the sorting component, make sure the list in the dropdown doesn't contain more than 10 items, otherwise it will create usability problems. [See listbox guidelines](/components/dropdown-listbox).
- If a list is static, easy to search/scan, or where the data set won't grow, the sorting component is unnecessary.

### Appearance 

- The sorting component is comprised of two parts: a dropdown, and a sort direction icon button.

### Behavior

- The dropdown allows users to choose their sorting criteria, whether it be by label, date, or popularity. 
- As soon as an item in the dropdown is selected, the list content re-sorts automatically. 
- The sort dropdown allows for sorting by a single selected item.
- The sort direction icon button allows users to change the direction of the sort, from ascending to descending or vice-versa.
- The default sort order on a list is determined by the designer on a page-by-page basis.

### Accessibility

<todo>Add accessibility guidelines.</todo>
