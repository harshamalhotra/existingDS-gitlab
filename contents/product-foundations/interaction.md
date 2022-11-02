---
name: Interactions
---

## Drag and drop

To move and reorder items in a collection or across similar collections, users can press and drag them to a new position.

There is a clear affordance that distinguishes draggable items from non-draggable ones:

- **Draggable** items have rounded corners, a shadow, and a handle should appear to the left of the title of the draggable item.
- **Non-draggable** items look like a plain list.

Use [system cursors](#cursors) to indicate when an element is draggable. The `grab` cursor appears on hover when an element is draggable. Once it’s dragged, the cursor will change to `grabbing`. For areas where an element cannot be dropped, use the `not-allowed` cursor.

<todo>Add visual example of non draggable item</todo>

<todo>Add visual example of draggable item (which includes border radius, shadow, and handle)</todo>

### Usage

#### Draggable items

Items contained in a list can be draggable to help a user manually reorder them. The direction of list items follows only a top to bottom order whereas items in a grid may move left to right as well.

On drag, draggable items should be minimized to only show their title. For example, if you’re dragging an epic swimlane in an issue board, it would only show its title on drag and it would hide the rest of its content until it‘s dropped. This allows more drop areas to be visible and not be blocked by large draggable items.

Draggable items should not impede other functionality, like scrolling on mobile or activating a link within it.

If items can be reordered with a mouse, they should also be able to be reordered by keyboard.

#### On drop

- When dragging an item over a droppable area, a solid blue line should appear to show that an item can be dropped in that area.
- Dropped items will display a short animation to visually indicate the drop of that item has been completed.
- The keyboard shortcut to undo a dropped item is to press `ctrl + z`, much like you would to undo a text change.

<todo>Add visual example of drop zone with blue line</todo>

<todo>Add visual example successful drop animation</todo>

#### Limitations

Drag and drop should be disabled if the collection is sorted by a specific attribute, as the logic of either contradicts the other. Example: you cannot manually reorder issues if they are sorted by popularity.

Be cautious when allowing drag and drop in a large collection with dozens or hundreds of items. It’s mainly intended for quick reordering of items in short collections where the user can comprehend the collection’s size and scope. This is usually possible by being able to view all of the items at the same time. If the user might spend a long time going through, prioritizing, and reordering hundreds of items, consider a different design.

### Demo

<todo>Add live component block with code example</todo>

### Design specifications

<todo>Add design specs link</todo>

### Related patterns

- [Table](/components/table)
- List

## Cursors

The mouse cursor is key in helping users understand how to interact with elements on the screen.

| **CSS value** | **Example**                           | **Description**                                                                                                         |
| ------------- | ------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `default`     | ![image](/img/cursors-default.svg)    | The platform-dependent default cursor. Typically an arrow.                                                              |
| `pointer`     | ![image](/img/cursors-pointer.svg)    | Indicates that you can click on an element to invoke a command or navigate, such as links and buttons.                  |
| `grab`        | ![image](/img/cursors-grab.svg)       | Indicates that you can grab and move an element around the screen.                                                      |
| `grabbing`    | ![image](/img/cursors-grabbing.svg)   | Indicates that you are actively moving an element around the screen.                                                    |
| `text`        | ![image](/img/cursors-text.svg)       | Indicates that this is either text that you can select and copy, or a text field that you can click into to enter text. |
| `not-allowed` | ![image](/img/cursors-notallowed.svg) | Indicates that an item may not be dropped at the current location or that the requested action will not be carried out. |

## Sticky containers

A sticky container is a div that sticks to the top or bottom of it's parent container. It contains actions or links that are relevant to the task someone is performing. Sticky containers are useful for long pages that contain lots of content that would push buttons or actions above or below the viewport. For example, when editing a wiki, the save changes button will always be visible even if the wiki content extends below the viewport.

Use sticky containers with caution as they can easily crowd the interface and make it difficult to navigate the page by shrinking the content area.
