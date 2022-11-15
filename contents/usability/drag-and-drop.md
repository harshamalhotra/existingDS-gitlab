---
name: Drag and drop
---

To move and reorder items in a collection or across similar collections, users can press and drag them to a new position.

There is a clear affordance that distinguishes draggable items from non-draggable ones:

- **Draggable** items have rounded corners, a shadow, and a handle should appear to the left of the title of the draggable item.
- **Non-draggable** items look like a plain list.

Use [system cursors](/usability/affordance#cursors) to indicate when an element is draggable. The `grab` cursor appears on hover when an element is draggable. Once it’s dragged, the cursor will change to `grabbing`. For areas where an element cannot be dropped, use the `not-allowed` cursor.

<todo>Add visual example of non draggable item</todo>

<todo>Add visual example of draggable item (which includes border radius, shadow, and handle)</todo>

## Usage

### Draggable items

Items contained in a list can be draggable to help a user manually reorder them. The direction of list items follows only a top to bottom order whereas items in a grid may move left to right as well.

On drag, draggable items should be minimized to only show their title. For example, if you’re dragging an epic swimlane in an issue board, it would only show its title on drag and it would hide the rest of its content until it‘s dropped. This allows more drop areas to be visible and not be blocked by large draggable items.

Draggable items should not impede other functionality, like scrolling on mobile or activating a link within it.

If items can be reordered with a mouse, they should also be able to be reordered by keyboard.

### On drop

- When dragging an item over a droppable area, a solid blue line should appear to show that an item can be dropped in that area.
- Dropped items will display a short animation to visually indicate the drop of that item has been completed.
- The keyboard shortcut to undo a dropped item is to press `ctrl + z`, much like you would to undo a text change.

<todo>Add visual example of drop zone with blue line</todo>

<todo>Add visual example successful drop animation</todo>

### Limitations

Drag and drop should be disabled if the collection is sorted by a specific attribute, as the logic of either contradicts the other. Example: you cannot manually reorder issues if they are sorted by popularity.

Be cautious when allowing drag and drop in a large collection with dozens or hundreds of items. It’s mainly intended for quick reordering of items in short collections where the user can comprehend the collection’s size and scope. This is usually possible by being able to view all of the items at the same time. If the user might spend a long time going through, prioritizing, and reordering hundreds of items, consider a different design.

## Demo

<todo>Add live component block with code example</todo>

## Design specifications

<todo>Add design specs link</todo>

## Related patterns

- [Table](/components/table)
- List
