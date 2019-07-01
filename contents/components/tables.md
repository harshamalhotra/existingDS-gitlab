---
name: Tables
vueComponents: 
  - GlTable
---

Tables are used to render tabular data in a basic grid in a way that is easy for people to scan it.

## Usage

Use tables so that users can review, enter or edit uniform sets of data or options. Tables are used for structured content, where each entry has the same attributes.

### When to use tables

*   To display large volumes of data
*   When the data set will grown
*   To compare data in a set to make sure that they are distinguishable
*   To search, filter, or sort by all parameters in a data set

Todo: Add live component block with code example

### When not to use tables

*   To display a list of continuous, vertical indexes of text or images. Use [Lists](/components/lists) instead.
*   To display independent and contained content and actions on a single topic. Use [Cards](/components/cards) instead.
*   For hierarchical structures. Use [Tree](/components/tree) view instead.

## Table Anatomy

### Layout

Tables take up the full width of their container they are in. However, it is important to note that wide tables make it difficult to read and scan small amounts of content as the data will be widely separated. To help with legibility, make sure the content is layed out and aligned properly.

Don’t simply shrink the entire table to fit the viewport, or apply a fixed width to the tables. The same way stretching tables 100% to the widht of the container can injury readability, a small, shrunk table view can create a cluttered interface. Use the responsive view of the tables instead.

Don’t let the table break your layout by preventing horizontal scrolling.

* Don’t compress content to the point it compromises legibility
* A cell’s width and height will change according to its content
* TODO: empty state

### Header

A table header is the row at the top of the table that helps identify the columns below each of the headers. Column headers should always be used. The header provides clarity if the table is non-descriptive or ambiguous.

Todo: Add live component block with code example including table header

On the other hand, row headers are optional, depending on the data. Do not use headers if all columns in a table have sef-descriptive conten, for example names, dates, etc. For example, a header in Audit Events is redundant:

Todo: Add live component block with code example of Audit Events table

Labels in a header should be short, descriptive, and relevant. 

### Rows

* 

### Columns

* Avoid making all the columns an even width. The table columns should be sized according to the daya they contain. Columns of small content should be narrow, while columns of paragraphs should be relatively wide. Allow the browser to lay out the tables according to the viewport size.

### Content alignment

* Don't center text within tables. Left align content unless a different alignment helps with comprehension. For example, numeric data is easier to read when right aligned or is designed to a right-to-left audience, making it easier for the user to visually scan the data. To aid scanning on right-alignment, make sure you use the same number of decimal places for your numeric data.
* Text in tables tends to end up in narrow columns – don't justify the text.
* Always align column headers with column content. Right-align headings of numeric data and left-align headings of columns with text.

Todo: Add live component block with code example of table alignment -- mixed data

* TODO: Hyphenate
* TODO: Truncation

### Interaction

* When including triggers to manipulate the data, they should be placed directly above the table
* TODO: Describe the behaviour of the mouse hover for table rows

### Actions

* TODO

### Pagination

* Tables can include pagination. Pagination works by presenting a set number of rows in a view, with the ability to navigate to another set.

Todo: Add live component block with code example including pagination

### Styling

* Avoid any border or frame surrounding the table. Tables should not be set to look like nets with every number enclosed. 
* Allow horizontal lines between rows to visualy separate content.
* Do not appply vertical lines between columns. Tables without vertical rules look better.
* Apply white space to your table so your reader can make sense of it. Separate the data so that each element can be individually identified and read as separate from the others. 

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

