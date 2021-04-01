---
name: Table
docs: in-progress
vueComponents:
  - GlTable
related:
  - card
  - list
  - tree
  - filter
  - button
  - tooltip
  - pagination
  - /regions/empty-states
---

Tables display tabular data in a basic grid composed of cells, columns, and rows. This format makes it easy for users to scan and compare large amounts of data.

## Usage

### When to use tables

Use tables to:

- Display structured content, where each entry has the same attributes.
- Let users review, enter, edit, or filter granular data sets.
- Display a data set that will continue to grow (e.g. Issues, Environments, and User Profile pages).

### When not to use tables

Do not use tables to:

- Display a list of continuous, vertical indexes of text or images. Use [Lists](/components/list) instead.
- Display contained content and actions on a single topic. Use [Cards](/components/card) instead.
- For hierarchical structures. Use the [Tree](/components/tree) view instead.

### Basic table

The basic table is the default option for this component. However, additional functionality can be added to enhance the table for different use cases.

[[Example:table-basic]]

## Additional functionality

### Search & filter

Any filtering controls that manipulate the data set should be placed directly above the table with the option to clear all data. [See filter guidelines](/components/filter)

### Ordering & sorting

Sorting is designed as a native functionality of tables. Tables use column sorting rather than [list sorting](/components/sorting).

The default sort direction of a table is usually ordered by one specific column attribute, such as status, last updated, or priority. Sorting is indicated in the table header using the [arrow down](https://gitlab-org.gitlab.io/gitlab-svgs/?q=arrow-down) and [arrow up](https://gitlab-org.gitlab.io/gitlab-svgs/?q=arrow-up) icons.

Clicking the icon will sort the rows based on the selected column, in ascending order first, and subsequently toggling between ascending and descending order.

Sorting can be disabled to prevent users from changing the sorting order of a column. The default order will utilize one specific attribute.

The sorting icon and functionality should not be visible on responsive tables.

To enable sorting for a particular table column, add `sortable` as a property in your `fields` data, like so:

```
fields: [
    {
      key: 'first_name',
      label: 'First name',
      sortable: true,
    },
    ...
]
```

Todo: Add column sorting example

### Pagination

Tables displaying data sets with more than 20 items should use pagination. [See pagination guidelines](/components/pagination)

Todo: Add live component block with code example including pagination

### Additional actions

Table rows can include additional actions located in their far-right column. These actions should be visible at all times rather than showing on-hover. If there are two or more actions in a table row, consider using a button group or a [“more menu” button](/components/button#ellipsis) with a dropdown list option.

Todo: Add demo

## Anatomy

### Header

A table header is the row at the top of the table that helps identify the columns below. The header provides clarity if data is non-descriptive or ambiguous.

Tables should always include table headers. For short tables and for tables whose data are self explanatory, column headers are sufficient. For long tables or tables where data may be confusing, it is best to include row and column headers.

Headers should be short, descriptive, and relevant. Avoid headers that are too long for the content in the rows below, and use title-case.

### Columns

Columns should be ordered by priority or in a way that tells a story with the data. Size columns according to the data they contain rather than making them all an even width. For example, columns of small content should be narrow, while columns of paragraphs should be relatively wide. Allow the browser to lay out the tables according to the viewport size.

### Rows

Rows can have a mix of read-only and editable cells with content populated by users. See [additional actions](#additional-actions) on table rows.

### Layout

Tables take up the full width of their container element. However, it is important to note that wide tables make it difficult to read and scan small amounts of content, because the data is widely separated. For legibility, ensure content is laid out and aligned properly.

Don’t simply shrink an entire table to fit the viewport or apply a fixed width to a table to the point that it compromises legibility. The same way stretching tables 100% to the width of the viewport is not recommended, a small, shrunken table view can create a cluttered interface. Use a responsive table view instead.

Prevent horizontal scrolling to ensure the table doesn't break the layout. Tables work across multiple screen sizes and conform to [responsive guidelines](/components/table/#responsiveness).

## Content

### Empty state

A table's empty state displays when there is no data, yet. [See empty states guidelines](/regions/empty-states)

### Content alignment

Align the table content by importance, based on the information needs of your users.

Left-align text content, rather than justifying or centering it, to avoid confusion or readability issues. Text in tables tends to end up in narrow columns. Don’t justify or center the text; it causes confusion and harms readability.

In some circumstances, right-aligning the text content helps with readability. For example, right-align the numeric data with a consistent number of decimal places to improve scannability.

Tables may switch their alignment for right-to-left audiences when designing for [internationalization](/usability/i18n).

### Null values

Representing null values should be made on a case-by-case basis. Some ways of addressing this are:
- Keep the cell empty. For example, if no data is returned.
- Use text to indicate what is missing. For example, "Unassigned" if there is no assignee.
- Use a dash ("-"). For example, if there is no data and a text explanation is not applicable.

### Truncation

Truncate long text strings with an ellipsis (“…”). On hover, the truncated text should display a tooltip including the full text. [See tooltip guidelines](/components/tooltip)

### Styling

Use white space in tables to improve scannability, visually separating data elements so that each can be individually identified and read as separate from the others.

To help with styling, use horizontal lines between rows to visually separate content. Avoid any border or frame surrounding the table. Do not style tables to look like nets, with every number enclosed.

Do not appply vertical lines between columns. In general, tables without vertical lines look better and are easier to scan and read.

## Responsiveness

Tables work across multiple screen sizes and conform to responsive guidelines. Prevent horizontal scrolling to ensure the table doesn’t break the layout.

Todo: Add description of how the table behaves on responsive views

## Accessibility

Use proper semantic markup, so that users of screen readers can navigate through the table one cell at a time, hearing column and row headers spoken to them.

- `<th>` should not contain heading elements.
- `<th>` should be descriptive and relevant.
- `<th>` should have a defined `scope` attribute to establish relationships between the table headings and rows/columns; for example, `<th scope="col">`.
- `<caption>` should be used to provide a title for a table.
- `<caption>` should be an immediate child element of `<table>`.

## Demo

Todo: Add live component block with code example

## Design specifications

View the following links to see color, spacing, dimension, and layout-specific information pertaining to this component:

[Sketch Measure Preview for Tables](https://gitlab-org.gitlab.io/gitlab-design/hosted/design-gitlab-specs/tables-spec-previews/)

## Links

- [Code Review Analytics + Table Component: Design evaluation & usability testing](https://gitlab.com/groups/gitlab-org/-/epics/2954)
