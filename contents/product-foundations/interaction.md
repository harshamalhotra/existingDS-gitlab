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

| **CSS value** | **Example** | **Description** |
| --- | --- | --- |
| `default` | ![image](/img/cursors-default.svg) | The platform-dependent default cursor. Typically an arrow. |
| `pointer` | ![image](/img/cursors-pointer.svg) | Indicates that you can click on an element to invoke a command or navigate, such as links and buttons. |
| `grab` | ![image](/img/cursors-grab.svg) | Indicates that you can grab and move an element around the screen. |
| `grabbing` | ![image](/img/cursors-grabbing.svg) | Indicates that you are actively moving an element around the screen. |
| `text` | ![image](/img/cursors-text.svg) | Indicates that this is either text that you can select and copy, or a text field that you can click into to enter text. |
| `not-allowed` | ![image](/img/cursors-notallowed.svg) | Indicates that an item may not be dropped at the current location or that the requested action will not be carried out. |

## Sticky containers

A sticky container is a div that sticks to the top or bottom of it's parent container. It contains actions or links that are relevant to the task someone is performing. Sticky containers are useful for long pages that contain lots of content that would push buttons or actions above or below the viewport. For example, when editing a wiki, the save changes button will always be visible even if the wiki content extends below the viewport.

Use sticky containers with caution as they can easily crowd the interface and make it difficult to navigate the page by shrinking the content area.

## Links

- By default, any links that keep the user within GitLab, including GitLab documentation, should open in the same window rather than in a new window. This is the default browser behavior and gives a user more control while still allowing them to open the link in a new window if preferred.
  - Arbitrarily opening links in a new window goes against accessibility recommendations.
    - [Link Targets and 3.2.5](https://adrianroselli.com/2020/02/link-targets-and-3-2-5.html) 
    - [When to use target=”_blank”](https://css-tricks.com/use-target_blank/)
- If a link goes to a resource outside of GitLab and doesn’t specify the destination in text, then show the [external-link icon](http://gitlab-org.gitlab.io/gitlab-svgs/?q=~external-link) at the end of the text.
    - Example:
        - [Open configuration instructions in a new page]() -- indicates the destination and doesn’t require an icon.
        - [View file]() -- doesn’t indicate the destination and should have an icon.
- When using the external link icon, ensure it is always displayed for better accessibility and to account for inline instances. Do not only show it on hover. The icon should use `aria-label="(external link)"`, or similar, to communicate the purpose to screen reader users.
     - Example: 
        <a href="#" class="gl-link">Learn more about Kubernetes 
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" style="vertical-align: text-bottom" role="img" aria-label="(external link)">
        <path fill="#000000" fill-rule="evenodd" d="M5,2 C5.55228,2 6,2.44772 6,3 C6,3.55228 5.55228,4 5,4 L4,4 L4,12 L12,12 L12,11 C12,10.4477 12.4477,10 13,10 C13.5523,10 14,10.4477 14,11 L14,12 C14,13.1046 13.1046,14 12,14 L4,14 C2.89543,14 2,13.1046 2,12 L2,4 C2,2.89543 2.89543,2 4,2 L5,2 Z M15,1 L15,5.99814453 C15,6.55043453 14.5523,6.99814453 14,6.99814453 C13.4477,6.99814453 13,6.55043453 13,5.99814453 L13,4.41419 L8.71571,8.69846 C8.32519,9.08899 7.69202,9.08899 7.3015,8.69846 C6.91097,8.30794 6.91097,7.67477 7.3015,7.28425 L11.5858,3 L9.99619141,3 C9.44391141,3 8.99619141,2.55228 8.99619141,2 C8.99619141,1.44772 9.44391141,1 9.99619141,1 L15,1 Z" style="fill: currentColor;"></path>
        </svg>
        </a>

