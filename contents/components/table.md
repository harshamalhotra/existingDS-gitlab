---
name: Tables
vueComponents: 
  - GlTable
related:
  - cards
  - lists
  - tree
---

Tables are used to render tabular data in a basic grid, making it easier for people to scan it. Tables are constituted of cells, columns, and rows.

## Usage

Use tables when: 

* Users need to review, enter, or edit uniform sets of data or options. 
* Displaying structured content, where each entry has the same attributes.

### When to use tables

Use tables to:

*   Display large volumes of data.
*   When the data set will continue to grow; for example, a table used to display users, environments, etc.
*   Compare data in a set to in a way that makes each data point distinguishable.
*   Search, filter, or sort by all parameters in a data set.

Todo: Add live component block with code example

### When not to use tables

Do not use tables to:

*   Display a list of continuous, vertical indexes of text or images. Use [Lists](/components/lists) instead.
*   Display contained content and actions on a single topic. Use [Cards](/components/cards) instead.
*   For hierarchical structures. Use the [Tree](/components/tree) view, instead.

## Layout

Tables take up the full width of their container element. However, it is important to note that wide tables make it difficult to read and scan small amounts of content, because the data is widely separated. For legibility, ensure content is laid out and aligned properly.

Don’t simply shrink an entire table to fit the viewport or apply a fixed width to a table to the point that it compromises legibility. The same way stretching tables 100% to the width of the viewport is not recommended, a small, shrunken table view can create a cluttered interface. Use a responsive table view, instead.

Prevent horizontal scrolling to ensure the table doesn't break the layout. Tables work across multiple screen sizes and conform to [responsive guidelines](/components/tables/#responsiveness).

### Empty state

A table's empty state displays when there is no data, yet. [See empty states guidelines](https://design.gitlab.com/regions/empty-states).

### Content alignment

Left align content by importance, based on the information needs of your users. In some circumstances, right aligning data helps with comprehension. For example, numeric data is easier to read when right aligned. To aid scanning on right-aligned data, make sure to use the same number of decimal places for all numeric data. Tables may switch their alignment for right-to-left audiences, as well.

Todo: Add live component block with code example of table alignment -- mixed data

Text in tables tends to end up in narrow columns. Don't justify or center the text; it causes confusion and harms readability.

## Table anatomy

### Cells

A cell’s width and height will change according to its content.

It is possible to hyphenate the text inside table cells, but note that hyphens are language sensitive. The ability to find break opportunities depends on the language, defined in the lang attribute of a parent element, and support depends on the specific browser.

#### Truncation

To fit a long string of text into a table cell, you can shorten the text with an ellipsis (“...”) to show exactly where the text is truncated. On hover, the truncated text should display a tooltip that includes the full text. [See tooltips guidelines](https://design.gitlab.com/components/tooltips)

#### Empty values

If a cell is empty or unavailable, keep the cell empty to reduce noise and help with legibility.

### Columns

Avoid making all the columns an even width. The table columns should be sized according to the data they contain. Columns of small content should be narrow, while columns of paragraphs should be relatively wide. Allow the browser to lay out the tables according to the viewport size.

### Rows

Rows can have a mix of read-only and editable cells with content populated by users. When designing a table, make sure the cells work well together and fit nicely in the rows.

### Header

A table header is the row at the top of the table that helps identify the columns below. The header provides clarity if data is non-descriptive or ambiguous. Labels in a header should be short, descriptive, and relevant. Avoid headers that are too long for the content in the rows below, and use title-case capitalization for table headers and labels.

Always use column or row headers, unless all columns in a table have self-descriptive content, like names, dates, etc. For example, a header in Audit Events is redundant:

Todo: Add live component block with code example of Audit Events table

## Interaction

When including triggers to manipulate the data, such as filters, they should be placed directly above the table.

Additional actions a user can take from an individual table row are displayed in the far right column, and are visible at all times (no on-hover visibility). If there are two or more actions in a table row, consider using a button group or a "more menu" button with a dropdown list option.

It is also possible to use in-line links to provide additional information to other items in the table or route the user to a different page.

## Pagination

Tables can include pagination. Pagination works by presenting a set number of rows in a view, with the ability to navigate to another set. [See pagination guidelines](https://design.gitlab.com/components/pagination)

Tables with more than 20 items require pagination which is always located below the table and takes the form of a button group. Pagination is generally not required on tables with 20 or fewer items.

Todo: Add live component block with code example including pagination

## Styling

Use white space in tables to improve scannability, visually separating data elements so that each can be individually identified and read as separate from the others.

To help with styling, use horizontal lines between rows to visually separate content. Avoid any border or frame surrounding the table. Do not style tables to look like nets, with every number enclosed. 

Do not appply vertical lines between columns. In general, tables without vertical lines look better and are easier to scan and read.

## Responsiveness

Users may view an application on any device, so ensure the table will be usable whether displayed on mobile, tablet, or desktop.

Todo: Add description of how the table behabes on responsive views

## Accessibility

Use proper semantic markup, so that users of screen readers can navigate through the table one cell at a time, hearing column and row headers spoken to them.

* `<th>` should not contain heading elements.
* `<th>` should be descriptive and relevant.
* `<th>` should have a defined `scope` attribute to establish relationships between the table headings and rows/columns; for example, `<th scope="col">`.
* `<caption>` should be used to provide a title for a table.
* `<caption>` should be an immediate child element of `<table>`.

## Demo

Todo: Add live component block with code example

## Design specifications

View the following links to see color, spacing, dimension, and layout-specific information pertaining to this component:

Todo: Add link to spec
