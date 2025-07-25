---
name: Sorting
description: Sorting allows users to quickly re-organize similar content on a long list when the default order may be insufficient for users to scan the data set.
related:
  - dropdown-disclosure
  - dropdown-combobox
  - filter
---

## Examples

<story-viewer component="base-sorting" title="Default" iframe-padding="0 0 100px 0"></story-viewer>

[View in Pajamas UI Kit →](https://www.figma.com/design/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?node-id=123918-16146)

## Structure

<todo>Add structure image.</todo>

## Guidelines

### When to use

- Use the sorting component when the list has pagination and spans multiple pages, as it can make it easier for users to digest and find relevant content.
- A user's sort selections are meant to be persisted. If they make a sort selection and then leave the page, when they return to the page, their previous sort selections will be preserved.
- Sorting can occur in tables and in lists. While sorting in lists relies on the sorting component described on this page, sorting within a table happens in the table header. [See table sorting guidelines](/components/table#ordering-sorting).

### When not to use

- When using the sorting component, make sure the list in the dropdown doesn't contain more than 10 items, otherwise it will create usability problems. [See combobox guidelines](/components/dropdown-combobox).
- If a list is static, easy to search/scan, or where the data set won't grow, the sorting component is unnecessary.

### Appearance

- The sorting component is comprised of two parts: a dropdown, and a sort direction icon button.

### Behavior

- The dropdown allows users to choose their sorting criteria, whether it be by label, date, or popularity.
- As soon as an item in the dropdown is selected, the list content re-sorts automatically.
- The sort dropdown allows for sorting by a single selected item.
- The sort direction icon button allows users to change the direction of the sort, from ascending to descending or vice-versa.
- Avoid using invisible attributes for sorting because it lacks visual reinforcement of the user's action, which can be confusing.
- The default sort order on a list is determined by the designer on a page-by-page basis.

### Accessibility

<todo>Add accessibility guidelines.</todo>

## Code reference

### GlSorting

The sorting component allows the user to select the field on which they would like to sort a list
and whether to sort in ascending or descending order.

Provide a list of sort options via the `sortOptions` prop with this structure:

```typescript
type sortOptionsProp = Array<{
  value: string
  text: string
}>
```

The `value` should be a unique primitive value, and `text` is the user-facing
string for that option.

Set the currently selected sort option by passing a value to the `sortBy` prop.
This should equal one of the `sortOptions` values. The selected sort option is
rendered with a check mark next to it in the dropdown menu.

When the user changes the selected sort option, a `sortByChange` event is
emitted, with the `value` of the option as the only payload.

The text of the dropdown trigger button is the `text` of the selected sort
option. Pass a string to the `text` prop to override this behavior.

When the user clicks on the sort direction button, a `sortDirectionChange`
event is emitted, with a boolean value as its only payload. If the payload is
`true`, the new order is ascending; otherwise it's descending.

A complete implementation example might look like:

```html
<template>
  <gl-sorting
    :sort-options="sortOptions"
    :sort-by="sortBy"
    :is-ascending="isAscending"
    @sortByChange="onSortByChange"
    @sortDirectionChange="onDirectionChange"
  />
</template>

<script>
import { GlSorting } from '@gitlab/ui';

export default {
  components: {
    GlSorting,
  },
  data() {
    const sortOptions = [{
      value: 'name',
      text: 'Name',
    }, {
      value: 'date',
      text: 'Date',
    }];

    return {
      isAscending: false,
      sortBy: sortOptions[0].value,
      sortOptions,
    }
  },
  methods: {
    onSortByChange(value) {
      this.sortBy = value;
      this.sortMyData(this.sortBy, this.isAscending);
    },
    onDirectionChange(isAscending) {
      this.isAscending = isAscending;
      this.sortMyData(this.sortBy, this.isAscending);
    },
    sortMyData(sortBy, isAscending) {
      // Use sortBy and direction to sort your data
    },
  }
}
</script>
```

<story-viewer component="base-sorting" title="GlSorting" view-mode="docs"></story-viewer>
