---
name: Modal
figma: https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/Pajamas-UI-Kit?node-id=425%3A129
docs: complete
gitlab_ui: /components/modal/code
vueComponents:
  - GlModal
related:
  - accordion
  - button
  - drawer
  - popover
  - toast
  - tooltip
---

Modals are used to reveal critical information, show information without losing context, or when the system requires a user response. Modals can also fragment a complex workflow into simpler steps and should serve a single purpose dedicated to completing the user's task.

## Usage

Use modals sparingly because they interrupt the user's workflow. Don’t surprise users by popping up a modal. Let a user’s action, such as a button click, following a link or selecting an option, trigger the modal. Uninvited modals may surprise the user and result in a quick dismissal of the window.

### When to use

Modals should be used when:

- Critical information is being revealed
- The system requires a user response
- A non-revertible destructive action is about to take place and needs confirmation

### Alternatives

When designing an experience that incorporates the need for a modal, but does not match one of the use cases described above, consider one of the following before reverting to a modal:

**Inline content:** Present your content inline to avoid disruption to the user’s flow.

**Inline editing:** Edit your content inline to avoid showing a modal or bringing user’s to a new page. Take this table example:

![Content before edit mode](/img/modal/inline-editing-1.svg)

When clicking the `edit` button, users will be put in an "edit mode" for this row, which will make text fields editable through a form input:

![Inline content in edit mode](/img/modal/inline-editing-2.svg)

Once editing is complete, they can `save` their changes and be brought back to the original state, without leaving the page.

**Expanding elements:** Utilize elements such as [popovers](/components/popover), [accordions](/components/accordion), or [drawers](/components/drawer) to present additional information while allowing the user to maintain focus on the page.

**Toast:** Present your message within a [toast](/components/toast); a brief, auto-expiring element for the user to consume while staying focused on their task.

**New page:** Take the user to a different page so that the interaction may be isolated without losing access to core navigational elements within the application.

**Other non-modal patterns:** Consider alternative patterns such as non-modal dialogs or undo patterns to continue the system-user conversation while keeping the user focused on their task.

## Demo

[[Example:modal-sizes]]

## Specifications

### Sections

There are three main sections of a modal:

#### Header:

The header is either a question, a descriptive phrase, or title. The header also contains the close icon in every instance.

#### Body:

The content in the body should never be ambiguous and unclear. Strive to be as concise as possible and provide the user with specific information in regards to their task. Do not ask a vague question or pose a vague statement. Instead, explain what you are asking the user to do in a [voice and tone](/content/voice-tone) that's straightforward and easy to understand.

#### Actions:

There should be no more than 3 actions and no fewer than 1. Actions should always be located within an action bar at the bottom of the modal. Button order and positioning should follow our [guidelines for buttons](/components/button).

When labeling your actions, let the user know what will happen for each possible decision you are affording to them and be specific. For example, when asking the user to set their status, use "Set status" and "Remove status" instead of simply, "Save" and "Delete".

There should always be multiple ways to close/dismiss this type of modal, including allowing the user to click outside of the modal area or use the escape key. This is important as some modals can be tall and we want to avoid making the user scroll up to close a modal.

### Behavior

**User Focus:** When a user opens a modal, use the lightbox effect combined with an ease-in entry animation. This draws attention to the modal, while also indicating to the user that they cannot interact with the parent page. See guidelines for [motion](foundations/motion) for more information.

**Autofocus:**  The first focusable item should be auto-focused within the modal dialog so that the user can tab in the modal and not become stuck behind the overlay. This behavior follows the [accessibility guidelines](https://www.w3.org/TR/wai-aria-practices/examples/dialog-modal/dialog.html) for modals. Additionally, this aims to allow the user to complete the modal's objective more efficiently.

**Scrolling:** 

By default, the height of the modal is determined by the content. When modal content extends below the viewport, the viewport remains scrollable.

If modal content exceeding the height of the viewport impedes a user’s ability to maintain context or see important actions, make the content within the modal scrollable. This is configurable and ensures that only the modal content is scrollable, not the page itself.

On small screens where content requires scrolling and the user has to scroll more than a few times to consume all the modal content, consider opening the content in a new page instead.

## Design Specifications

Color, spacing, dimension, and layout specific information pertaining to this component can be viewed using the following link:

[View design in Pajamas UI Kit →](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/Pajamas-UI-Kit?node-id=4263%3A21)

## Resources

- [modalzmodalzmodalz](https://modalzmodalzmodalz.com/)
- [Best Practices for Modals / Overlays / Dialog Windows](https://uxplanet.org/best-practices-for-modals-overlays-dialog-windows-c00c66cddd8c)
- [Modal & Nonmodal Dialogs: When (& When Not) to Use Them](https://www.nngroup.com/articles/modal-nonmodal-dialog/)
