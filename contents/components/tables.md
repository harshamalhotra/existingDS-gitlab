---
name: Tables
vueComponents: 
  - GlTable
---

Tables are used to render tabular data in a basic grid making it easier for people to scan.

## Usage

Use tables so that users can review, enter or edit uniform sets of data or options. Tables are used for structured content, where each entry has the same attributes.

### When to use tables

*   To display large volumes of data
*   When the data set will grown
*   To compare data in a set to make sure that they are distinguishable
*   To search, filter, or sort by all parameters in a data set

Todo: Add live component block with code example

### When not to use tables

*   To display a list of continuous, vertical indexes of text or images. Use [Lists](/components/lists) instead
*   To display independent and contained content and actions on a single topic. Use [Cards](/components/cards) instead
*   For hierarchical structures. Use [Tree](/components/tree) view instead

## Table Anatomy

### Layout

Tables take up the full width of their container they are in. However, it is important to note that wide tables make it difficult to read and scan small amounts of content as the data will be widely separated. To help with legibility, make sure the content is layed out and aligned properly.

Don’t simply shrink the entire table to fit the viewport, or apply a fixed width to the tables, to the point it compromises legibility. The same way stretching tables 100% to the width of the viewport is not recommended, a small, shrunk table view can create a cluttered interface. Use the responsive view of the tables instead.

* WIP: A cell’s width and height will change according to its content
* WIP: Don’t let the table break your layout by preventing horizontal scrolling

#### Truncation

To fit a long string of text into a table cell, you can shorten the text with an ellipsis ("...") to show exactly where the text is truncated. Truncated text should display a tooltip on hover with the full text on it. [See tooltips guidelines](https://design.gitlab.com/components/tooltips)

### Empty values

If a cell is empty or unavailable, keep the cell empty to reduce noise and help with legibility.

#### Empty state

A table empty state is shown when there is no data yet. [See empty states guidelines](https://design.gitlab.com/regions/empty-states)

### Header

A table header is the row at the top of the table that helps identify the columns below each of the headers. Column or row headers should always be used. The header provides clarity if the table is non-descriptive or ambiguous.

Todo: Add live component block with code example including table header

To avoid redundancy, do not use headers if all columns in a table have sef-descriptive content, for example names, dates, etc. For example, a header in Audit Events is redundant:

Todo: Add live component block with code example of Audit Events table

Labels in a header should be short, descriptive, and relevant. Avoid headers which are too long for the content in the rows below.

Use title-case capitalization for table headers and labels.

### Content alignment

Left align content unless a different alignment helps with comprehension. For example, numeric data is easier to read when right aligned or is designed to a right-to-left audience, making it easier for the user to visually scan the data. To aid scanning on right-alignment, make sure you use the same number of decimal places for your numeric data.

Text in tables tends to end up in narrow columns – don't justify or center the text. 

Always align column headers with column content. Right-align headings of numeric data and left-align headings of columns with text.

Todo: Add live component block with code example of table alignment -- mixed data

* TODO: Hyphenate

### Rows

* TODO

### Columns

Avoid making all the columns an even width. The table columns should be sized according to the data they contain. Columns of small content should be narrow, while columns of paragraphs should be relatively wide. Allow the browser to lay out the tables according to the viewport size.

### Interaction

* When including triggers to manipulate the data, they should be placed directly above the table.
* TODO: Describe the behaviour of the mouse hover for table rows

### Actions

Additional actions a user can take from an individual table row are displayed in the far right column. The actions are visible at all times. If there are two or more actions in a table row, consider using a button group or a "more menu" button with a dropdown list option.

### Pagination

Tables can include pagination. Pagination works by presenting a set number of rows in a view, with the ability to navigate to another set. [See pagination guidelines](https://design.gitlab.com/components/pagination)

Todo: Add live component block with code example including pagination

### Styling

* Apply white space to your table so your reader can make sense of it. Separate the data so that each element can be individually identified and read as separate from the others. 
* Allow horizontal lines between rows to visualy separate content.
* Avoid any border or frame surrounding the table. Tables should not be set to look like nets with every number enclosed. 
* Do not appply vertical lines between columns. Tables without vertical rules look better.

Todo: Add live component block with code example

## Responsiveness

Users could be viewing our application on any device, so we need to ensure our table will be usable whether displayed on mobile, tablet or desktop.

* WIP: Table will render in a stacked, block pattern on responsive view

## Accessibility

* Tables should be accessible to all users. Using proper semantic markup is a must so that users of screen readers can navigate through the table one cell at a time, hearing column and row headers spoken to them.
* `<th>` shouldn’t contain heading elements
* `<th>` should be descriptive and relevant
* `<th>` should have the `scope` attribute defined to establish relationships between the table headings and rows/columns. e.g., `<th scope="col">`.
* Table styles should meet WCAG 2 AA contrast guidelines (or even AAA depending on the level of compliance needed)
* `<caption>` should be used to provide a title for a table
* `<caption>` should be an immediate child element of `<table>`

## Demo

Todo: Add live component block with code example

## Design specifications

Color, spacing, dimension, and layout specific information pertaining to this component can be viewed using the following links:

Todo: Add link to spec

