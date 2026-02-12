---
name: Multi-step form template
description: A multi-step form template is used to format a form with multiple steps.
related:
  - form-fields
extendedNotice:
  contactPreset: ux-designers-and-gitlab-ui
---

## Examples

<story-viewer component="extended-multi-step-form-template" title="GlMultiStepFormTemplate"></story-viewer>

## Structure

<figure-img alt="Multi-step form template structure" label="Multi-step form template structure" src="/img/multi-step-form-template-structure.svg"></figure-img>

1. **Title**: Text that identifies the multi-step form.
1. **Step count and total**: Text showing the current step and total number of steps.
1. **Main step content area**: Container for the [form field](/components/form-fields) content of the current step.
1. **Back button area**: Container for a button to navigate to the previous step.
1. **Next button area**: Container for a button to navigate to the next step.
1. **Footer area** (optional): Container for additional inputs and controls related to the whole form but not the specific step.

## Guidelines

### When to use

- When users need to progress sequentially through multiple steps in a form.

### When not to use

- When a form has only a single step, or when step progression is non-linear, or when you need significant layout customization.

### Behavior

- The title should not change from step to step.
- If the current step number is passed, then the current step will be shown at the top of the template, below the title. In English, this is formatted as "Step n" where n is the number.
- If an optional total number of steps is passed, that will also be displayed, but only if a current page number is passed. The two numbers are formatted together in English as "Step n of x" where n is the current step and x is the total number of steps.
- Show the back button only when there is a previous step the user can navigate back to.
- Show the next button only when there is a next step the user can navigate to.

## Code reference

### Usage

Generally, the `GlMultiStepFormTemplate` component is wrapped in a `<form>` that places submit and cancel buttons outside of/below the templating component. This provides expected form behaviors while focus is on form fields inside a step.

### Slots

| Name      | Description                                                                                                   |
| --------- | ------------------------------------------------------------------------------------------------------------- |
| `default` | Used to render the main content of the current step.                                                          |
| `back`    | Used to render a back button, if the user can navigate back to a previous step.                               |
| `next`    | Used to render a next button, if the user can navigate forward to a next step.                                |
| `footer`  | Used to optionally render additional form input and control content that is not specific to the current step. |

### GlMultiStepFormTemplate

<story-viewer component="extended-multi-step-form-template" title="GlMultiStepFormTemplate" view-mode="docs"></story-viewer>
