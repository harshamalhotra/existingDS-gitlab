---
name: Affordance
---

## Visibility

If a control or action is critical to a task, and cannot be achieved in another way, then it should be visible by default for all users and modalities (mouse, keyboard, touch, voice). While there may be an option for toggling visibility of such controls and actions, a user should be aware they exist before toggling them off.

It may be possible to hide a control if the ability to access the same information or complete the same task are available nearby elsewhere, and if hiding it by default provides a better overall experience for all users and modalities. For example, hovering or focusing on an item in an email inbox list may reveal controls, like delete, that are also available when viewing the individual email itself. 

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
