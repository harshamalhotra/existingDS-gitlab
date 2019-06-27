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

### When not to use tables

*   To display a list of continuous, vertical indexes of text or images. Use [Lists](/components/lists) instead.
*   To display independent and contained content and actions on a single topic. Use [Cards](/components/cards) instead.
*   For hierarchical structures. Use [Tree](/components/tree) view instead.

## Table Anatomy

### Layout

* Tables take up the full width of their container
* Don’t simply shrink the entire table to fit the viewport
* Don’t let the table break your layout by preventing horizontal scrolling
* Don’t compress content to the point it compromises legibility
* A cell’s width and height will change according to its content
* TODO: empty state

### Headers

* Column headers should always be used
* Row headers are optional, depending on the data

### Content alignment

* Always align column headers with column content.
* Left align content unless a different alignment helps with comprehension. For example, numeric data is easier to read when right aligned or is designed to a right-to-left audience, making it easier for the user to visually scan the data.

### Interaction

* When including triggers to manipulate the data, they should be placed directly above the table
* TODO: Describe the behaviour of the mouse hover for table rows

### Actions

* TODO

### Pagination

* Tables can include pagination. Pagination works by presenting a set number of rows in a view, with the ability to navigate to another set.

## Responsiveness

* WIP: Table will render in a stacked, block pattern on responsive view

## Accessibility

* Tables should be accessible to all users. Using proper semantic markup is a must so that users of screen readers can navigate through the table one cell at a time, hearing column and row headers spoken to them.
* `<th>` shouldn’t contain heading elements
* `<th>` should be descriptive and relevant
* `<th>` should have the `scope` attribute defined to establish relationships between the table headings and rows/columns. e.g., `<th scope="col">`.
* Table styles should meet WCAG 2 AA contrast guidelines (or even AAA depending on the level of compliance needed)
* `<caption>` should be used to provide a title for a table
* `<caption>` should be an immediate child element of `<table>`

## Design specifications

Color, spacing, dimension, and layout specific information pertaining to this component can be viewed using the following links:

T0-DO: Add link to spec

