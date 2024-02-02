---
name: Table
description: Tables display tabular data in a basic grid composed of cells, columns, and rows. This format makes it easy for users to scan and compare large amounts of data.
components:
  - base-table-table
related:
  - card
  - tree
  - filter
  - button
  - tooltip
  - pagination
  - /patterns/empty-states
---

## Examples

<story-viewer component="base-table-table"></story-viewer>

<todo>Add column sorting example.</todo>

<todo>Add pagination example.</todo>

<todo>Add responsive table examples.</todo>

[View in Pajamas UI Kit →](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?type=design&node-id=425-11&mode=design)

## Structure

<figure-img alt="Numbered diagram of a table structure" label="Table structure" src="/img/table-structure.svg"></figure-img>

1. **Caption**: Provides a meaningful description for a table. A caption should only be optional when a heading directly precedes the table and provides clear enough context for it.
1. **Header cell**: Can be used to sort table content.
1. **Icon**: Indicates sort direction:
   - [arrow-up](http://gitlab-org.gitlab.io/gitlab-svgs/?q=~arrow-up) icon for sorting ascending.
   - [arrow-down](http://gitlab-org.gitlab.io/gitlab-svgs/?q=~arrow-down) icon for sorting descending.
1. **Body cell**: Supports text, buttons, links, and text accompanied by other common elements like an avatar or icon.

## Guidelines 

### When to use 

- Display tabular data for comparison. 
- Display structured content, where each entry has the same attributes.
- Let users review, enter, edit, or filter granular data sets.
- Display a data set that will continue to grow (e.g. Issues, Environments, and User Profile pages).
 
### When not to use

- Create page layout or design structure.
- Display a list of continuous, vertical indexes of text or images. Use a semantic HTML list instead.
- Display contained content and actions on a single topic. Use [Cards](/components/card) instead.
- For hierarchical structures. Use the [Tree](/components/tree) view instead.

### Variants

- **Basic**: A basic table is the default option for this component, however, additional functionality can be added to enhance the table for different use cases.
- **Striped**: A striped table adds zebra-striping to the entire table, starting with the the header row. The alternating row background colors can be helpful to differentiate row content.
- **Condensed**: A condensed table cuts the body cell padding in half. Use a condensed table when the content presented is data heavy and text only. For example, displaying log files. 

### Appearance 

- Tables work across multiple screen sizes and conform to [responsive guidelines](/components/table/#responsiveness).
- Tables take up the full width of their container element. However, it is important to note that wide tables make it difficult to read and scan small amounts of content, because the data is widely separated. For legibility, ensure content is laid out and aligned properly.
- Don’t simply shrink an entire table to fit the viewport or apply a fixed width to a table to the point that it compromises legibility. The same way stretching tables 100% to the width of the viewport is not recommended, a small, shrunken table view can create a cluttered interface. Use a responsive table view instead.
- Order the table content by importance, based on the information needs of your users.
- Text in tables tends to end up in narrow columns. Left-align text content, rather than justifying or centering it, to avoid confusion or readability issues. 
- The **label** [text styles](/product-foundations/type-fundamentals#type-scales) are used for product tables since the content is more data rich and requires less line height.
- The **paragraph** [text styles](/product-foundations/type-fundamentals#type-scales) are used for Markdown tables in GitLab issues, merge requests, and documentation.
- In some circumstances, right-aligning the text content helps with readability. For example, right-align the numeric data with a consistent number of decimal places to improve scannability.
- Tables may switch their alignment for right-to-left audiences when designing for [internationalization](/content/i18n).
- Use white space in tables to improve [scannability](https://www.nngroup.com/articles/how-users-read-on-the-web/), visually separating data elements so that each can be individually identified and read as separate from the others.
- To help with styling, use horizontal lines between rows to visually separate content, including the last row item. Avoid any border or frame surrounding the table. Do not style tables to look like nets, with every number enclosed.
- Do not apply vertical lines between columns. In general, tables without vertical lines look better and are easier to scan and read.
- By default, row content is vertically `top` aligned. However, in some cases it does makes sense to vertically `center` align content. Use your best judgement on when this is an exception. 
- As general rule, consider that alignment within a table is more important than consistency from table to table. 

|                                                                                                                                                                             **Do**                                                                                                                                                                             |                                                                                                                                                                             **Don’t**                                                                                                                                                                             |
| :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| <figure-img alt="A table row example with multiple lines that wrap with a green line highlighting the top alignment" label="Table row content vertially aligned to top" src="/img/table-valign-top-do.svg"></figure-img> | <figure-img alt="An incorrect table row example with a single line with a red line highlighting the middle alignment" label="Icon not horizontally aligned to the pixel grid" src="/img/table-valign-top-dont.svg"></figure-img> |

### Behavior 

#### Search & filter

Any filtering controls that manipulate the data set should be placed directly above the table with the option to clear all data. [See filter guidelines](/components/filter).

#### New row

When a new row is dynamically added by the system, the background color of the row should be set to `$green-50` in order to highlight the addition.

#### Ordering & sorting

- Sorting is designed as a native functionality of tables. Tables use column sorting rather than [list sorting](/components/sorting).
- The default sort direction of a table is usually ordered by one specific column attribute, such as status, last updated, or priority. Sorting is indicated in the table header using the [arrow down](https://gitlab-org.gitlab.io/gitlab-svgs/?q=arrow-down) and [arrow up](https://gitlab-org.gitlab.io/gitlab-svgs/?q=arrow-up) icons.
- Clicking the icon will sort the rows based on the selected column, in ascending order first, and subsequently toggling between ascending and descending order.
- Sorting can be disabled to prevent users from changing the sorting order of a column. The default order will utilize one specific attribute.
- The sorting icon and functionality should not be visible on responsive tables.
- To enable sorting for a particular table column, add `sortable` as a property in your `fields` data, like so:

```js
fields: [
  {
    key: 'first_name',
    label: 'First name',
    sortable: true,
  },
  ...
]
```

#### Pagination

- Tables displaying data sets with more than 20 items should use pagination. [See pagination guidelines](/components/pagination)
- If a condensed table is used, data sets with more than 40 items should use [pagination](/components/pagination).

#### Additional actions

- A table row can include additional actions in the far-right column.
- These actions should be visible at all times rather than showing on-hover. 
- If there are two or more actions in a table row, consider using a button group or a [“more menu” button](/components/button#ellipsis) with a dropdown list option.

#### Responsiveness

At smaller breakpoints, tables can either maintain a tabular layout and scroll horizontally to view the overflow without breaking the page layout, or each row can be transformed into its own group where header content is present within each group.

- If the data in each row needs to be compared to data in other rows then maintain the tabular layout.
- If the content simply shares headers and can live on its own without comparison, transform each row into its own group.
- If a row has embedded actions that could be missed when overflowing in the default tabular layout, transform each row into its own group so the actions can always be visible.

#### Interactive tables

If table cells needs to be navigable (not just some of the content within), consider extending the table as a [grid](https://www.w3.org/TR/wai-aria-practices-1.2/#grid) composite widget.

#### Selecting rows

<todo>Add behavior guidelines for selectable rows.</todo>

### Content

#### Caption
A `<caption>` provides a meaningful description for a table.

#### Header

- A table header is the row at the top of the table that helps identify the columns below. The header provides clarity if data is non-descriptive or ambiguous.
- Tables should always include table headers. For short tables and for tables whose data are self explanatory, column headers are sufficient. For long tables or tables where data may be confusing, it is best to include row and column headers.
- Headers should be short, descriptive, and relevant. Avoid headers that are too long for the content in the rows below, and use title-case.

#### Columns

Columns should be ordered by priority or in a way that tells a story with the data. Size columns according to the data they contain rather than making them all an even width. For example, columns of small content should be narrow, while columns of paragraphs should be relatively wide. Allow the browser to lay out the tables according to the viewport size.

#### Rows

Rows can have a mix of read-only and editable cells with content populated by users. See [additional actions](#additional-actions) on table rows.

#### Empty state

A table's empty state displays when there is no data, yet. [See empty states guidelines](/patterns/empty-states)

#### Null values

Representing null values should be made on a case-by-case basis. Some ways of addressing this are:

- Keep the cell empty. For example, if no data is returned.
- Use text to indicate what is missing. For example, "Unassigned" if there is no assignee.
- Use a dash ("-"). For example, if there is no data and a text explanation is not applicable.

#### Long content

Lengthy content should be truncated according to the [layout guidelines](/product-foundations/layout#truncation).

### Accessibility

Use proper semantic markup, so that users of screen readers can navigate through the table one cell at a time, hearing column and row headers spoken to them.

- `<th>` should not contain heading elements.
- `<th>` should be descriptive and relevant.
- `<th>` should have a defined `scope` attribute to establish relationships between the table headings and rows/columns; for example, `<th scope="col">`.
- `<caption>` must be used to provide a title for a table.
- `<caption>` must be an immediate child element of `<table>`.

## Reference

- [Code Review Analytics + Table Component: Design evaluation & usability testing](https://gitlab.com/groups/gitlab-org/-/epics/2954)
