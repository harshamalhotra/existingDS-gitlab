---
name: Toast
description: Toasts are used to display system messages.
figma: https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/Pajamas-UI-Kit?node-id=425%3A139
docs: in-progress
vueComponents:
  - GlToast
related:
  - modal
  - motion
  - popovers
  - tooltip
---

## Usage

Toasts appear with an ease-in animation from the bottom of the viewport and stay fixed at its bottom-left corner.

Users can exit the toast by clicking the “Dismiss” button. If left alone, toasts without actions will automatically disappear after five seconds. Hovering over a toast message will cause it to remain until the cursor is moved. Toasts with action buttons are only dismissed when the user performs the action, clicks the dismiss button, or navigates to another page.

|Type|Purpose|
|--- |--- |
|Default toast|These toasts are used to display simple, non-interactive messages.|
|Action toast|These toasts are used to display message with an optional user action (for example, "Undo").|

### Content

While the content within a toast should be concise, it should also be specific. Because toasts have the ability to stack, ambiguous copy could lead to confusion. Ensure every toast specifies the object the action was related to.

### Dos and Dont's

|Do|Don't|
|--- |--- |
|Stack toasts if more than one are displayed on the screen at once.|Dismiss a toast prematurely if another toast is introduced.|
|Add an additional action button if appropriate.|Add more than one extra button in addition to the "Dismiss" button.|
|Always show a dismiss button.|Remove a user's ability to manually dismiss the message.|
|Avoid using for irreversible actions.|Use for actions that will result in permanent deletion.|
|Avoid using more than 2 lines of text for the toast message.|Use toast messages for messages that are longer than 3 lines of text.|
|Avoid using toasts for error messages, use [error alerts](/components/alert) instead|Use toast messages for error reporting|
|Toasts, when positioned in the bottom left corner of the viewport, overlap the sidebar navigation.|Toasts positioning will be relative to other onscreen elements like the sidebar navigation.|

### Mobile toast

There are some adjustments necessary for toasts displayed on smaller screens.

*Note: In order to see what toasts look like on mobile, you can either view the demo section below from a mobile device, or resize your browser to the desired mobile width.*

- The width of the toast is full (100%).
- If the message has only one line and the only action is to dismiss, the toast retains the dismiss icon.
- If the message wraps onto another line, place the action buttons below the message, aligned to the right, with the “Dismiss” action first.

## Demo

Todo: An example of a toast.

Todo: An example of a toast with actions.

## Specifications

- The dimensions of a toast are dependent on its contents with a max-width of `568px`.

### Design

- Action text is underlined when hovered.

Color, spacing, dimension, and layout specific information pertaining to this component can be viewed using the following link:

[View design in Pajamas UI Kit →](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/Pajamas-UI-Kit-Beta?node-id=1602%3A7)

### Animation

- A toast message eases in and out with a speed of 200 milliseconds from the bottom-left side of the screen (centered at smaller breakpoints).
