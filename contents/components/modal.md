---
name: Modal
description: A modal is used to reveal critical information, show information without losing context, or when the system requires a user response.
figma: https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/Pajamas-UI-Kit?node-id=425%3A129
docs: complete
gitlab_ui: /components/modal/code
stories:
  - base-modal--default
related:
  - accordion
  - button
  - drawer
  - popover
  - toast
  - tooltip
---

## Examples

<story-viewer story-name="base-modal--default" title="Opened modal" iframe-padding="120px 0px"></story-viewer>

[View in Pajamas UI Kit →](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/Pajamas-UI-Kit?node-id=4263%3A21)

## Structure

<figure-img alt="Numbered diagram of a modal structure" label="Modal structure" src="/img/modal-structure.svg"></figure-img>

1. **Backdrop**: Transparent overlay that contains the modal dialog.
1. **Title**: A question or descriptive phrase that conveys an overview of the purpose.
1. **Dialog**: Modal dialog container.
1. **Dismissal**: Icon to dismiss the modal.
1. **Message**: Text content indicating the purpose and potential next steps.
1. **Actions**: Buttons used to provide explicit action(s) the user can take to either remedy the modal or continue with a task.

## Guidelines

### When to use

- Serve as a single purpose dedicated to completing the user's task.
- Reveal critical information without losing context.
- Require a user response from the system.
- Confirm a non-revertible destructive action.

### When not to use

- When content can be displayed inline. Utilize elements such as [popovers](/components/popover), [accordions](/components/accordion), or [drawers](/components/drawer) to present additional information while allowing the user to maintain focus on the page.
- If you need to deliver a brief, auto-expiring element for a user to consume while staying focused on their task, use a [toast](/components/toast) instead.
- For a significant amount of content, take the user to a different page to utilize space a modal can‘t provide.
- Consider alternative patterns such as non-modal dialogs or undo patterns to continue the system-user conversation while keeping the user focused on their task.

#### Inline alternative

For simple edits, consider inline editing:

<figure-img label="Inline editing before editing" src="/img/modal/inline-editing-1.svg"></figure-img>

Clicking the "edit" button places a user in an "edit mode" for this row, which utilizes form inputs to edit text fields:

<figure-img label="Inline editing during editing" src="/img/modal/inline-editing-2.svg"></figure-img>

### Sizes

- **Small**: Small modals are used for simple tasks with little content.
- **Default**: Default modals are used in most use cases.
- **Large**: Large modals are used for lots of content, tabbed content, or content that requires a larger container.

### Behavior

- Utilizes the lightbox effect when opened.
- The first focusable item should be auto-focused within the modal dialog.
- The height of the modal is determined by the content.
  - When modal content extends below the viewport, the viewport remains scrollable.
  - If modal content exceeding the height of the viewport impedes a user’s ability to maintain context or see important actions, the content within the modal is scrollable.
- On small screens where content requires scrolling, consider opening the content in a new page instead.
- Avoid making the modal content area scrollable. This allows dropdowns and similar popups to extend outside the boundary of the modal when necessary and to re-position as needed depending on available space.

### Content

- The header is either a question, a descriptive phrase, or title. The header also contains the close icon in every instance.
- The content in the body should never be ambiguous and unclear. Strive to be as concise as possible and provide the user with specific information in regards to their task. Do not ask a vague question or pose a vague statement. Instead, explain what you are asking the user to do in a [voice and tone](/content/voice-and-tone) that's straightforward and easy to understand.
- There should be no more than 3 actions and no fewer than 1. Actions should always be located within an action bar at the bottom of the modal. Button order and positioning should follow our [guidelines for buttons](/components/button).
- When labeling your actions, let the user know what will happen for each possible decision you are affording to them and be specific. For example, when asking the user to set their status, use "Set status" and "Remove status" instead of simply, "Save" and "Delete".
- There should always be multiple ways to close/dismiss this type of modal, including allowing the user to click outside of the modal area or use the escape key. This is important as some modals can be tall and we want to avoid making the user scroll up to close a modal.

### Accessibility

<todo>Add accessibility docs</todo>

## Reference

- [modalzmodalzmodalz](https://modalzmodalzmodalz.com/)
- [Best Practices for Modals / Overlays / Dialog Windows](https://uxplanet.org/best-practices-for-modals-overlays-dialog-windows-c00c66cddd8c)
- [Accessibility guidelines](https://w3c.github.io/aria-practices/examples/dialog-modal/dialog.html)
- [Modal & Nonmodal Dialogs: When (& When Not) to Use Them](https://www.nngroup.com/articles/modal-nonmodal-dialog/)
