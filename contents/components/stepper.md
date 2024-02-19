---
name: Stepper
description: A stepper separates structured workflows into meaningful, ordered steps.
related:
  - progress-bar
  - form
  - path
---

<todo>Add coded example</todo>

<todo>Link to component in Pajamas UI Kit</todo>

## Structure

<figure-img alt="Numbered diagram of a stepper structure" label="Stepper structure" src="/img/stepper-structure.svg"></figure-img>

1. **Stepper**: Complete component.
1. **Indicator**: Shows what step you are on, and general progress information.
1. **Step**: Contains all the content and actions for that task.

## Guidelines

<todo>Finalize navigation guidelines (for example, if using the indicator to go between steps is okay) based on usability testing.</todo>

### When to use

- Segment tasks that are related and linear.

### When not to use

- When there is a small number of fields or if user input can happen in any order, instead use a [form](/patterns/forms).
- When representing the percentage of completion of an activity, process, or task, instead use a [progress bar](/components/progress-bar).
- When there is a process with unique content at each stage, for example, a DevOps lifecycle, instead use a [path](/components/path).

<todo>Add appearance guidelines</todo>

### Behavior

#### Step navigation

- Steps are always linear, guiding the user to complete them in a specific order.
- Any step can be optional.
- A user can return to a previous step through a visible **Back** button or the browser back button.
- A user can progress to the next page through a primary button with descriptive button text.
- Optional steps should additionally have a visible **Skip** button.
- Progress is prevented and clear errors are displayed if any required inputs are invalid.
- A user should easily be able to change their decision during the process. For example, moving to step 2 will not trigger something that is unchangeable if they go back to step 1. If this cannot be done, include a warning that input cannot be changed once submitted.
- All steps should be shown in the **Indicator** if the number of steps is determined from the start. For example, when signing up for a new account, user input does not impact the total number of steps, so all steps can be shown.
- Only one step in the **Indicator** should be populated at a time if the number of steps is undetermined. For example, if user input removes a future step, only one step should be shown at once. This follows [progressive disclosure guidelines](/usability/progressive-disclosure) and ensures that conditional logic can work properly without impacting the user's ability to navigate to previous steps.

#### Usability and feedback

- Avoid _hidden_ items being created or deleted in the background throughout the process, instead [provide feedback](/usability/saving-and-feedback) to the user so they are aware of what happens between steps.
- A confirmation dialog should be triggered if the user leaves the flow before they complete their process. Ideally, the progress would be saved so that when they return, they can pick up where they left off. If that is not possible, be sure to communicate they will lose all data they entered.
- When possible, the last step should contain a summary of all user selections so the user can review before submitting.
- After triggering the process, the user should ideally be sent to the page where that object lives, so they can take action on what they created. If the object cannot be created immediately, still [provide feedback](/usability/saving-and-feedback) to the user by providing an estimated waiting time until the operation completes, if possible.

### Content

- Each step has a title and optional description.
- If a step is optional, the description can state that it is.
- Step titles should be kept as descriptive as possible while remaining concise.
- Content in a step should always relate to the step title. When using steppers to request input from a user, the content within the step should consist of form elements.

<todo>Add accessibility guidelines</todo>
