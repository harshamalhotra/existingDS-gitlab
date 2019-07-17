---
name: Tables
vueComponents: 
  - GlTable
related:
  - cards
  - lists
  - tree
---

Tables are used to render tabular data in a basic grid making it easier for people to scan it. Tables are constituted of cells, columns, and rows.

## Usage

Use tables so that users can review, enter, or edit uniform sets of data or options. Tables are used for structured content, where each entry has the same attributes.

### When to use tables

*   To display large volumes of data.
*   When the data set will continue to grow, e.g. a table used to display users, environments, etc.
*   To compare data in a set to make sure that they are distinguishable.
*   To search, filter, or sort by all parameters in a data set.

Todo: Add live component block with code example

### When not to use tables

*   To display a list of continuous, vertical indexes of text or images. Use [Lists](/components/lists) instead.
*   To display contained content and actions on a single topic. Use [Cards](/components/cards) instead.
*   For hierarchical structures. Use the [Tree](/components/tree) view instead.

## Layout

Tables take up the full width of the container they are in. However, it is important to note that wide tables make it difficult to read and scan small amounts of content as the data will be widely separated. For legibility, ensure content is laid out and aligned properly.

Don’t simply shrink the entire table to fit the viewport, or apply a fixed width to the tables, to the point it compromises legibility. The same way stretching tables 100% to the width of the viewport is not recommended, a small, shrunk table view can create a cluttered interface. Use the responsive view of the tables instead.

Prevent horizontal scrolling to ensure that you don’t let the table break your layout. Tables work across multiple screen sizes and conform to [responsive guidelines](/components/tables/#responsiveness).

### Empty state

A table empty state is shown when there is no data yet. [See empty states guidelines](https://design.gitlab.com/regions/empty-states).

### Content alignment

Left align content by importance, based on the information needs of your users. In some circumstances, right aligning content helps with comprehension. For example, numeric data is easier to read when right aligned. To aid scanning on right-alignment, make sure you use the same number of decimal places for your numeric data. Tables may switch their alignment for right-to-left audiences, as well.

Todo: Add live component block with code example of table alignment -- mixed data

Text in tables tends to end up in narrow columns – don't justify or center the text, it causes confusion and harms readability.

## Table anatomy

### Cells

A cell’s width and height will change according to its content.

It is possible to hyphenate the text inside table cells, but note that hyphening is language-sensitive. Its ability to find break opportunities depends on the language, defined in the lang attribute of a parent element and support depends on the specific browser.

#### Truncation

To fit a long string of text into a table cell, you can shorten the text with an ellipsis (“...”) to show exactly where the text is truncated. The truncated text should display a tooltip on hover with the full text in it. [See tooltips guidelines](https://design.gitlab.com/components/tooltips)

#### Empty values

If a cell is empty or unavailable, keep the cell empty to reduce noise and help with legibility.

### Columns

Avoid making all the columns an even width. The table columns should be sized according to the data they contain. Columns of small content should be narrow, while columns of paragraphs should be relatively wide. Allow the browser to lay out the tables according to the viewport size.

### Rows

Rows can have a mix of read-only and editable cells with content populated by users. When designing a table, make sure the cells work well together and fit nicely in the rows.

### Header

A table header is the row at the top of the table that helps identify the columns below. The header provides clarity if the table is non-descriptive or ambiguous. Labels in a header should be short, descriptive, and relevant. Avoid headers which are too long for the content in the rows below, and use title-case capitalization for table headers and labels.

Column or row headers should always be used, unless all columns in a table have self-descriptive content, like names, dates, etc. For example, a header in Audit Events is redundant:

Todo: Add live component block with code example of Audit Events table

## Interaction

When including triggers to manipulate the data, such as filters, they should be placed directly above the table.

Additional actions a user can take from an individual table row are displayed in the far right column, and are visible at all times (no on-hover visibility). If there are two or more actions in a table row, consider using a button group or a "more menu" button with a dropdown list option.

It is also possible to use in-line links to provide additional information to other items in the table or route the user to a different page.

## Pagination

Tables can include pagination. Pagination works by presenting a set number of rows in a view, with the ability to navigate to another set. [See pagination guidelines](https://design.gitlab.com/components/pagination)

Todo: Add live component block with code example including pagination

## Styling

Apply white space to tables so your reader can make sense of it. It is also important to separate the data so that each element can be individually identified and read as separate from the others.

To help with styling, allow horizontal lines between rows to visualy separate content. Avoid any border or frame surrounding the table. Tables should not be set to look like nets with every number enclosed. 

Do not appply vertical lines between columns. In general, tables without vertical lines look better and are easier to scan and read.

## Responsiveness

Users could be viewing the application on any device, so ensure the table will be usable whether displayed on mobile, tablet or desktop.

Todo: Add description of how the table behabes on responsive views

## Accessibility

Using proper semantic markup is a must so that the users of screen readers can navigate through the table one cell at a time, hearing column and row headers spoken to them.

* `<th>` shouldn’t contain heading elements.
* `<th>` should be descriptive and relevant.
* `<th>` should have the `scope` attribute defined to establish relationships between the table headings and rows/columns. e.g., `<th scope="col">`.
* `<caption>` should be used to provide a title for a table.
* `<caption>` should be an immediate child element of `<table>`.

## Demo

Todo: Add live component block with code example

## Design specifications

Color, spacing, dimension, and layout specific information pertaining to this component can be viewed using the following links:

Todo: Add link to spec