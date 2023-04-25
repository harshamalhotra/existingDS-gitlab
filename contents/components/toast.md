---
name: Toast
description: A toast displays a short system message as a result of a user's action.
components:
  - base-toast
related:
  - alert
  - modal
  - popover
  - tooltip
---

## Examples

<story-viewer component="base-toast" title="Default Toast" iframe-padding="0 0 100px 0"></story-viewer>

[View in Pajamas UI Kit →](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/Component-library?node-id=425%3A139)

## Structure

<figure-img alt="Numbered diagram of a toast structure" label="Toast structure" src="/img/toast-structure.svg"></figure-img>

1. **Container**: Wraps the content.
1. **Message**: Text content indicating the purpose and potential next steps.
1. **Action** (optional): A single text action a user can take based on the content of the toast.
1. **Dismiss button**: Removes the toast for a user.

## Guidelines

### When to use

- Provide a contextual message based on a user's action in the same view the action took place.

### When not to use

- If you need to communicate an error to a user, consider using a [danger or warning alert](/components/alert#variants) instead.
- If there's a page refresh, or a message needs to be communicated after a user visits a new page, consider using an [alert](/components/alert) instead.
- If the action is irreversible, consider using a [modal](/components/modal) instead.

### Behavior

- A toast appears with an ease-in animation from the bottom of the viewport after a user's action.
- A user can dismiss the toast by clicking the “dismiss” icon button.
- If left alone, a toast without an action will disappear after five seconds.
- Hovering over a toast causes it to remain until the cursor is moved.
- A toast with an action is only dismissed when a user does one of the following:
  - Clicks the action.
  - Clicks the dismiss button.
  - Navigates to another page.

### Content

- The message should be concise, specific, and use clear language.

### Placement

- Centered at the bottom of the viewport for smaller breakpoints and bottom left of the viewport for larger breakpoints.
- Multiple toasts stack vertically from top to bottom with the oldest on top.

### Accessibility

<todo>Add accessibility requirements and considerations.</todo>
