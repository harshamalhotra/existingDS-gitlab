---
name: Modals
related:
  - accordions
  - buttons
  - Popovers
  - Toasts
  - Tooltips
---

Modals are used to reveal critical information, show information without losing context, or when the system requires a user response. Modals can also fragment a complex workflow into simpler steps and should serve a single purpose dedicated to completing the user's task.

## Usage
Don’t surprise users by popping up a modal. Let a user’s action, such as a button click, following a link or selecting an option, trigger the modal. Uninvited modals may surprise the user and result in a quick dismissal of the window. Use modals sparingly because they interrupt the user's workflow. When designing an experience that incorporates the need for a modal consider one of the following before reverting to a modal:

**Inline content:** Present your content inline to avoid disruption to the user's flow.

**Expanding elements:** Utilize elements such as [accordions](/components/accordions), [tooltips](/components/tooltips), or other expanding non-modal patterns to convey your information.

**Toasts:** Present your content using [toasts](/components/toasts) a brief, auto-expiring message for the user to consume while staying focused on their task.

**New page:** Take the user to a different page so that the interaction may be isolated without losing access to core navigational elements within the application.

**Other non-modal patterns:** Consider alternative patterns such as non-modal dialogs or undo patterns to continue the system-user conversation while keeping the user focused on their task.

## Demo

Todo: Add live component block with code example

## Design specifications

### Positioning

Modals should be pinned **64px** from the top of the viewport

### Sizes

There are 3 max-width sizes for the modals. All should be responsive and scale to full width for mobile viewports.

**Small** 512px wide

Todo: Add live component block with code example

**Medium** 768px wide

Todo: Add live component block with code example

**Large** 990px wide

Todo: Add live component block with code example

### Sections

There are three main sections of a modal:

#### Header:

The header is either a question, descriptive phrase, or title. The header also contains the close icon in every instance.

#### Body:

The content in the body should never be ambiguous and unclear. Strive to be as concise as possible and provide the user with specific information in regards to their task. Do not ask a vague question or pose a vague statement, instead, explain what you are asking the user to do in a [voice and tone](/content/voice-tone) that's straightforward and easy to understand.

#### Actions:

There should be no more than 3 actions and no fewer than 1. Actions should always be located within an action bar at the bottom of the modal. Button order and positioning should follow our [guidelines for buttons](/components/buttons).

When labeling your actions, let the user know what will happen for each possible decision you are affording to them and be specific. For example, when asking the user to set their status, use Set status and Remove status instead of simply, Save and Delete.

There should always be multiple ways to close/dismiss this type of modal, including allowing the user to click outside of the modal area or use the escape key. This is important as some modals can be tall and we want to avoid making the user scroll up to close a modal.

### Behavior

**User Focus:** When a user opens a modal use the lightbox effect combined with an ease-in entry animation. This draws attention to the modal and while also indicating to the user that they cannot interact with the parent page. See more information on [motion and animation](foundations/motion) here.

**Autofocus:**  The first focusable item should be auto-focused within the modal dialog so that the user can tab in the modal and not become stuck behind the overlay. This behavior follows the [accessibility guidelines](https://www.w3.org/TR/wai-aria-practices/examples/dialog-modal/dialog.html) for modals.

**Scrolling:** The height of the modal is determined by the content. Some users have smaller screens, so for these instances where the content requires scrolling, it's best practice to extend the height of the modal below the window to avoid double scrolling. Alternatively, consider taking the user to another page in instances where a tall modal requires the user to scroll more than a few times to consume all the content.

Color, spacing, dimension, and layout specific information pertaining to this component can be viewed using the following link:

[Sketch measure preview for modals](https://gitlab-org.gitlab.io/gitlab-design/hosted/andy/ce%23187-modal-documentation-spec-previews/)

## Resources

[modalzmodalzmodalz](https://modalzmodalzmodalz.com/)

[Best Practices for Modals / Overlays / Dialog Windows](https://uxplanet.org/best-practices-for-modals-overlays-dialog-windows-c00c66cddd8c)

[Modal & Nonmodal Dialogs: When (& When Not) to Use Them](https://www.nngroup.com/articles/modal-nonmodal-dialog/)
