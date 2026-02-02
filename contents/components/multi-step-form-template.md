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

1. **Title**: The title of the multi-step form. This should not change from step to step.
1. **Step count and total**: If the current step number is passed, then the current step will be shown at the top of the template, below the title. In English, this is formatted as "Step n" where n is the number. If an optional total number of steps is passed, that will also be displayed, but only if a current page number is passed. The two numbers are formatted together in English as "Step n of x" where n is the current step and x is the total number of steps.
1. **Main step content area**: In code, this is the default slot of the component, and this is where all of the [form field](/components/form-fields) content for the current step is displayed.
1. **Back button**: In code, this is represented by the `back` slot. Show the back button only when there is a previous step the user can navigate back to.
1. **Next button**: In code, this is represented by the `next` slot. Show the next button only when there is a next step the user can navigate to.
1. **Footer**: In code, this is represented by the `footer` slot. This is an optional area at the bottom of the step template where additional inputs and controls related to the form overall but not specific to the current step can be displayed.

## Guidelines

### When to use

Use this component for multi-step forms where users progress sequentially through steps.

### When not to use

Don't use this component for single-step forms or when you need non-linear step progression or significant layout customization.

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
