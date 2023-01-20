---
name: Filter
description: Filters allow a user to narrow down content by taking an existing list and removing items based on criteria that matches or doesn’t.
stories:
  - base-filtered-search--default
related:
  - token
  - search
  - dropdown-disclosure
  - dropdown-combobox
  - dropdown-menu
---

## Examples

<story-viewer story-name="base-filtered-search--default" title="Filtered search"></story-viewer>

<todo>Add Filter to Pajamas UI Kit.</todo>

## Structure

<figure class="figure" role="figure" aria-label="Filter structure">
  <img class="figure-img" src="/img/filter-structure.svg" alt="Numbered diagram of a filter structure" role="img" />
</figure>

1. **Input**: The input field of the filter.
2. **Query**: Consists of three main token parts: key (3), logical operator (4), and value (5).
3. **Key**: acts as the label of the filter value, for example, `assignee`.
4. **Logical operator**: the condition that binds the key to the value, for example, `is` or `is not`.
5. **Value**: the item that the condition will base results on, for example, a `@username`.
6. **Raw text**: Additional raw text can be typed into the filter
7. **Clear button**: Clears the entire input field (all queries and raw text).
8. **Search button**: Triggers the search.

## Guidelines

### When to use

<todo>Add when to use.</todo>

### When not to use

<todo>Add when not to use.</todo>

### Appearance

- Filters utilize the [search component](/components/search/) with three main [token](/components/token/) parts that form a query (see [Structure](#structure)).
- Queries are positioned inline with the text cursor in the input field. The input field scrolls horizontally when the queries overflow the width.
- Queries include a [remove icon](http://gitlab-org.gitlab.io/gitlab-svgs/?q=~close) that removes the whole query from the search box when clicked.

### Behavior

- Clicking on any of the three parts of a query opens a corresponding dropdown for that part of the query. For example, if a user clicks on the value part of the query, the value dropdown appears.
- If the operator is selected, the related dropdown appears and the value part of the query is removed if the operator is changed.
- If the key is selected, the related dropdown appears and the operator and the value of the query are removed if the key is changed.
- The text content of the clicked part (operator or key) becomes editable and the text cursor is immediately placed at the end of that text string so that users can either type or select a suggestion from a dropdown.
- Certain keys are compatible so the operator and value don’t need to be removed in the event of change (for example, changing the key from author to assignee).
- If a user selects a different value from the dropdown when editing a text string, that new value replaces the old one.
- If the user clicks anywhere outside the dropdown or the search box, the string is turned back to a token with whatever its value was at the time of the event.
- If a user tries to edit a key with an invalid value, the token is removed and converted to a plain text string.
- If a user tries to edit an operator with an invalid value, the first option is chosen and the invalid text becomes the value text string.
- After a query is successfully added, a dropdown with suggestions for other keys appears immediately.
- If a query is deleted by interaction through the keyboard, the input should remain focused and a new dropdown should appear.
- Clicking the clear button inside the input clears all filters, keeps the input focused, and shows a dropdown.
- Pressing the <kbd>Esc</kbd> key on the keyboard hides the dropdown. Pressing the <kbd>↓</kbd> key or clicking inside the input shows it again. If there's a string already in the input it can be:
  - Turned into a token if it's a valid match for a value.
  - Turned into raw text on all other occasions.
- The experience of adding a query should be as follows:
  1. The user clicks into a search box and a dropdown with the keys that can be used appears.
  1. The user chooses the key of what they want to filter the list by (for example, `assignee`).
  1. The user chooses the logical operator (`is` or `is not`) from a dropdown.
  1. The user chooses an option from the dropdown to define the value part of the query (for example, a `@username`).
  1. The user needs to repeat steps 1–4 for each query they want to add.
  1. Once done, the user needs to confirm the search to trigger it. They do so by clicking on the search button or by using their keyboard.

### Content

- Each part is a variant of a [token](/components/token/).
- Filters are always used in combination with the [“search by confirmation” search box](/components/search/#variants) pattern.
- Each filter can consist of only one value and can’t be repeated. For example, a list of issues can only be narrowed down by specifying one assignee.
- While filter results aren't part of the component itself, the [Empty States](/patterns/empty-states#empty-search-results) page has additional guidance on what to display if there are no matching filters.

### Accessibility

<todo>Add accessibility guidelines.</todo>
