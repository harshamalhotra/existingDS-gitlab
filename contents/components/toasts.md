---
name: Toasts
vueComponents: 
  - GlToast
related: 
  - modals
  - motion
  - popovers
  - tooltips
---

Toasts are used to display system messages. The messages are short and straightforward. It may contain a dismiss button, and an action button depending on the situation.

## Usage

Toasts appear with an ease-in animation from the bottom of the screen and stay fixed at its bottom-left corner. Users can exit the toast by clicking the “Dismiss” button. If left alone, toasts without actions will automatically disappear after five seconds. Hovering over a toast message will cause it to remain until the cursor is moved. Toasts with action buttons are only dismissed when the user performs the action, clicks the dismiss button, or navigates to another page.

|Type|Purpose|
|--- |--- |
|Default toast|These toasts are used to display simple non-interactive messages.|
|Action toasts|These toasts are used to display message with an optional user action (e.g. "Undo").|


### Content

While the content within a toast should be concise, it should also be specific. Because toasts have the ability to stack, ambiguous copy could lead to confusion. Ensure every toast specifies the object the action was related to.


### Dos and Dont's

|Do|Don't|
|--- |--- |
|Stack toasts if more than one are on the screen at once.|Dismiss a toast prematurely if another toast is introduced.|
|Add an additional action button if appropriate.|Add more than one extra button in addition to the "Dismiss" button.|
|Always show a dismiss button.|Remove a user's ability to manually dismiss the message.|
|Avoid using for irreversible actions.|Use for actions that will result in permanent deletion.|
|Avoid using more than 2 lines of text for the toast message.|Use toast messages for messages that are longer than 3 lines of text.|

### Mobile toasts

There are some adjustments necessary for toasts displayed on smaller screens.

Todo: Add an example of a live component related to mobile guidelines

*   The width of the toast is full (100%).
*   If the message has only one line and the only action is to dismiss, the toasts retain the dismiss icon.
*   If the message wraps onto another line, place the action buttons below the message, aligned to the right, with the “Dismiss” action first.

## Demo

Todo: Add live component block with code example

## Design specifications

Color, spacing, dimension, and layout specific information pertaining to this component can be viewed using the following link:

[Sketch Measure Preview for toasts](https://gitlab-org.gitlab.io/gitlab-design/hosted/design-gitlab-specs/toasts-spec-previews/)

## Animation Specifications

Specs: Ease-in(Show up) / Ease-out (Disappear) Time: 200 milliseconds Direction: Comes up from the bottom-left side of the screen.

Todo: Add link to animation example
