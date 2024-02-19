---
name: Saving and feedback
status: in-progress
---

Giving appropriate and timely feedback for user-made changes is vital to making GitLab user-friendly.

[Saving progress](#saving-progress) can be broken down into two main methods: [manual](#manual) where the user saves changes manually by clicking on a button, and [auto-save](#auto-save) where changes are saved automatically with a short delay after the user’s last action.

[Instant feedback](#instant-feedback), on the other hand, is giving the user immediate positive feedback without waiting for the return of data from the server, expecting that the change they made will be successfully saved. It has a positive effect on the perceived speed of the application.

[Delayed feedback](#delayed-feedback) can help ensure a response reduces interruptions and is appropriate. A slower response is better if it leads to more accurate and useful feedback or suggestions. This helps a user satisfy their query or complete a task with less errors or ambiguity.

## Saving progress

When deciding between the two methods for saving progress, introduce automatic saving of changes if it will improve the user’s experience, else to avoid confusion, default to saving manually. Automatically saving changes can be sensitive and comes with its own set of guidelines. Consider these guidelines when deciding between the two methods.

### Manual

Happens after the user confirms the changes (clicks on a button), ideally without reloading the page, and a [toast](/components/toast) saying “Changes saved” should appear to confirm the changes were saved successfully.

#### Safety measure

As we move towards using both methods for saving changes, it makes sense to add a safety measure when using the manual method. The user might just experience auto-saving on another page but on the current page they need to manually save their changes. The users can’t know which of the two methods is being used as there are no indicators in the UI, so it's possible that they make changes and try to navigate off the page (expecting that the changes were saved automatically). In such cases we should track the changes made and whether they were saved or not. If they weren’t saved, a [modal](/components/modal) should appear asking: “Your changes are not saved. Do you want to save them now?” and offer “Save changes” as the primary option and “Discard changes and leave page” as the secondary one.

### Auto-save

We use auto-saving for two things: auto-saving changes in forms and [saving drafts](#saving-drafts).

Auto-saving in forms usually works best when the form is long and the “Save changes” button isn’t visible (pushed below the fold by the content). Auto-saving changes made by the user removes the need for looking for that button and also the need for the button itself. Auto-saving should be applied to each input individually and not to forms as a whole.

If the change is triggered by a click event, we auto-save immediately after it happens. If it’s triggered by typing, the auto-save should happen on the blur event of that input field but also 3 seconds after the last key is pressed.

To inform the user that the change has been saved, a [toast](/components/toast) appears. The message is “Saving…” while the saving is in progress, “Change saved” if a single change was saved and “x changes saved” when more than one change was saved (instead of stacking messages up). The toast message should always have the option to undo the recent changes.

If a change fails to auto-save, we need to:

1. Keep re-trying until successful.
2. Inform the user with a toast saying “Failed to save x changes. Retrying…” with the option to retry manually. This message should remain visible until the changes are successfully saved.

We also need to warn the user if they try to leave the page before the changes are successfully saved, see the [Safety measure](#safety-measure) section.

<todo>Add live component block with code example (toast on screen as designed in [this issue](https://gitlab.com/gitlab-org/gitlab-design/issues/121#auto-save))</todo>

#### Guidelines

Never apply to whole forms (example: adding a personal access token needs a name, expiration date, and access scope; it doesn’t make sense to auto-save the token name field individually). The auto-save method should ideally be only used for data that affects the user editing it. Auto-saving shouldn’t be applied to data that might have financial, security, or privacy impacts, example: changing password or changing the confidentiality of an issue.

#### Saving drafts

Saving drafts is a form of auto-saving changes. It’s best used for saving progress in cases when users are expected to spend longer time inputting data (example: editing issue description). Automatic saving of progress should be indicated by either of two states, labeled:

- “Saving…”: the user made changes and there’s background activity in progress to save a draft of these changes. Should be combined with a [spinner](/components/spinner) to indicate background activity.
- “Saved”: no recent changes made, all changes are successfully saved as a draft. Should be combined with a timestamp (example: “Saved just now” or “Saved 1 min ago”).

Indicating the current status reassures the users that their progress won’t be lost. In some cases it might be necessary to clearly state that a “Draft” is being saved to avoid confusion (“Draft saved 1 min ago”).

<todo>Add live component block with code example (text area with saving draft indicator as designed in [this issue](https://gitlab.com/gitlab-org/gitlab-design/issues/121#saving-drafts))</todo>

##### Guidelines

Think twice before applying to data that might have financial, security, or privacy impacts (example: we wouldn't save a draft of the user's new password). Think about how helpful saving drafts is in every case individually. Try to limit this approach for cases when expected content is long and losing any progress would really hurt the user's experience.

## Instant feedback

Instant feedback, also known as optimistic UI or eager execution, simply means that we show the expected result of a successfully saved change even before that change has actually been saved—we anticipate that the change will be saved successfully so we show it in the UI immediately. This has a positive impact on the perceived speed of the application. An example of a case when a successful result is expected is changing the assignee on an issue.

The new information should be reflected in the UI immediately but we should also indicate that there's background activity for actually saving the change. To do that, we should combine a change in the new information’s opacity (50% until successfully saved) and the use of a [spinner](/components/spinner).

Once the change is successfully saved, the opacity changes to 100% and the spinner disappears. There is no way of handling errors for such cases, we keep persisting until it gets successfully saved. To avoid loss of progress and changes, this method can be complemented with a [safety measure](#safety-measure) similar to the one described above: if changes aren’t successfully changed when the user tries to close the page, show a warning.

<todo>Add live component block with code example (example of newly added info as designed in [this issue](https://gitlab.com/gitlab-org/gitlab-design/issues/121#round-trip-server-processing-versus-instant-feedback))</todo>

## Delayed feedback

Delayed feedback, or debouncing, can improve performance and the user experience by reducing interruptions during content entry. For example, it could be helpful to wait a short amount of time before validating an email address. Similarly, a small delay before checking the server for a query match benefits a user who has paused typing.

In general, consider using:

- A faster `250ms` debounce period for results that will have low performance impact and where the response can feel more responsive. This could be helpful for [search](/components/search).
- A slower `500ms` debounce period when the performance impact could be high, or the additional delay benefits the user based on the situation and content being entered. This could be helpful for [form validation](/patterns/forms#validation).

These are just suggestions, however, and you may find that you need faster or slower debounce periods in some cases.

## Related patterns

- [Buttons](/components/button)
- [Forms](/patterns/forms)
- [Spinner](/components/spinner)
- [Toast](/components/toast)
