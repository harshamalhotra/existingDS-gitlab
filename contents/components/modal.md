---
name: Modal
description: A modal is used to reveal critical information, show information without losing context, or when the system requires a user response.
figma: https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/Pajamas-UI-Kit?node-id=425%3A129
docs: complete
gitlab_ui: /components/modal/code
components:
  - base-modal
related:
  - accordion
  - button
  - drawer
  - popover
  - toast
  - tooltip
---

## Examples

<story-viewer component="base-modal" title="Opened modal" iframe-padding="120px 0px"></story-viewer>

<story-viewer component="base-modal" story="with-scrolling-content" title="With scrolling content" iframe-padding="240px 0px"></story-viewer>

<story-viewer component="base-modal" story="without-a-footer" title="Without actions" iframe-padding="120px 0px"></story-viewer>

[View in Pajamas UI Kit →](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/Pajamas-UI-Kit?node-id=4263%3A21)

## Structure

<figure-img alt="Numbered diagram of a modal structure" label="Modal structure" src="/img/modal-structure.svg"></figure-img>

1. **Dialog**: Modal dialog container.
1. **Title**: A short question or descriptive phrase that conveys an overview of the purpose.
1. **Dismissal**: Icon to dismiss the modal.
1. **Message**: Text content indicating the purpose and potential next steps.
1. **Actions** (optional): Buttons used to provide explicit action(s) the user can take to either remedy the modal or continue with a task.
1. **Backdrop**: Transparent overlay that covers the page content.

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

- **Small**: A small modal is used for simple tasks with little content.
- **Medium (default)**: A medium modal is used for most use cases.
- **Large**: A large modal is used for wide content that might use tabs or a table or otherwise benefit from a wider container.

### Behavior

- Opens on top of all other content with a transparent backdrop behind to cover it.
- Top-aligned at the extra-small (xs) breakpoint and otherwise vertically centered in the viewport.
- Always center horizontally and scale down responsively when the page is narrower than the modal's max width.
- The height of the modal is determined by the content.
  - When modal content extends below the viewport, the viewport remains scrollable.
  - If modal content exceeds the height of the viewport and impedes a user’s ability to maintain context or see important actions, the content within the modal can be made scrollable. However, this should be avoided, if possible, because doing so impacts the ability for [dropdowns](/components/dropdown-overview) and other popups ([tooltips](/components/tooltip) and [popovers](/components/popover)) to extend outside the boundary of the modal when necessary and to reposition as needed depending on available space.
- On small screens where content requires scrolling, consider opening the content in a new page instead.
- Focus should be placed on the modal title (read the [accessibility](#accessibility) notes for details).
- Keyboard focus is contained in the modal while it remains open.
- A modal can be dismissed by:
    - Clicking on the **Close** button within it.
    - Clicking on a **Cancel** button (or similar) within it. 
    - The <kbd>Esc</kbd> key being pressed.
    - Clicking outside of it.
- When dismissed, focus returns to the referring control.

### Content

- The header is either a question, a descriptive phrase, or title. The header also contains the close icon in every instance.
- The content in the body should never be ambiguous and unclear. Strive to be as concise as possible and provide the user with specific information in regards to their task. Do not ask a vague question or pose a vague statement. Instead, explain what you are asking the user to do in a [voice and tone](/content/voice-and-tone) that's straightforward and easy to understand.
- There should be no more than 3 actions and no fewer than 1. Actions should always be located within an action bar at the bottom of the modal. Button order and positioning should follow our [guidelines for buttons](/components/button).
- When labeling your actions, let the user know what will happen for each possible decision you are affording to them and be specific. For example, when asking the user to set their status, use "Set status" and "Remove status" instead of simply, "Save" and "Delete".
- There should always be multiple ways to close/dismiss this type of modal, including allowing the user to click outside of the modal area or use the escape key. This is important as some modals can be tall and we want to avoid making the user scroll up to close a modal.

### Accessibility

- A modal uses [`role="dialog"`](https://www.w3.org/TR/wai-aria-1.2/#dialog) to indicate that it's a descendant of the main window.
- Focusing on a button or form element within can move a user past important contextual information or even scroll the start of the modal content out of view — it's also inconsistent from modal to modal. Therefore, it's recommended to initially place focus on the modal title and reference it by using the `aria-labelledby` attribute on the dialog. If there's no content before a control, except for the title, then focus can be placed on the control.
- A modal must be labeled with `aria-label` or `aria-labelledby`.
- See the [WAI-ARIA Dialog (Modal) documentation](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/) for more details.

## Reference

- [Making Modal Windows Better For Everyone, again...](https://www.scottohara.me/blog/2016/09/07/revised-modal-window.html)
- [The current state of modal dialog accessibility](https://www.tpgi.com/the-current-state-of-modal-dialog-accessibility/)
- [What we learned from user testing of accessible client-side routing techniques with Fable Tech Labs](https://www.gatsbyjs.com/blog/2019-07-11-user-testing-accessible-client-routing/)
- [Modal & Nonmodal Dialogs: When (& When Not) to Use Them](https://www.nngroup.com/articles/modal-nonmodal-dialog/)
