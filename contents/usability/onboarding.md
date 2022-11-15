---
name: Onboarding
related:
  - banner
  - popover
  - /patterns/empty-states
---

According to the [FOGG Behavior Model](https://behaviormodel.org/), three factors impact people's behavior with regards to completion of tasks: their ability to perform the task, their motivation for it, and the prompt that triggers the behavior. A general principle summarizing this model would be that prompts to trigger the desired behavior succeed when motivation and ability for performing the task are high enough. Keeping this principle in mind helps us to improve both the onboarding experience and our guides for users within our product.

To help users improve their ability to perform a task we can guide them by using certain UI elements, which connect into an onboarding flow. For example, we can show a prompt to suggest that they should set up a CI/CD pipeline. If they opt in, we show visual cues that guide them through different pages until the task is complete.

To increase users' motivation for performing a task, we can clearly communicate the value of the task and provide them with the relevant context for completing it. Clear and value-focused copywriting is the main tool for this. For example: _Setting up a CI/CD pipeline helps increase the quality of your code by showing a code quality report every time someone commits._ Showing the prompt in the right place, in this example on the Merge Request pipeline widget, ensures that the prompt is contextual.

## Start with users’ benefits in mind

Users can be onboarded to features (for example, set up CI/CD) or product stages (for example, adopt the Secure DevOps stage).

Showing the value that users will gain from a feature or stage should always be the main goal of onboarding.

### Guidelines for onboarding experiences

* Identify the value that you're trying to give to the user and work backwards from that. Having a new feature that you want to showcase alone isn't a good reason for onboarding. What is the user-facing value of the new feature? How will they benefit from it?
* Provide a "No, thanks" option that allows users to opt out.

## Think about the users’ context

The next step should be to think about the users’ context. Where in the app are they? What are they doing? How familiar are they with what you want to show them? Do they have the ability to perform the task? Is their motivation high enough? If not, how will you improve their ability or increase their motivation? Where will you place the prompt so that it’s contextual?

## Designing onboarding flows

Onboarding flows generally consist of two different types of prompts:
* **Initial prompt**: shown to explain the value and context, as well as provide the CTA to start the onboarding flow.
* **Follow-up prompts**: shown on subsequent steps of the flow to help keep the user on the right path. Can be shown on the same page or on different pages.

### Patterns for initial prompts

The following patterns can be used as initial prompts to start the onboarding flows. Consult the intrusion level, pattern effectiveness, and recommendations for each one when deciding which to use.

| Pattern name    | Intrusion | Effectiveness | Notes and recommendations                                                                                                                                                                                       |
| --------------- | --------- | ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Popover         | High      | High          | No major changes to the UI required. Use at the beginning or end, not in the middle, of a complex flow or task. Use to guide users through different pages.                                                     |
| UI modification | Medium    | Medium        | Not a reusable component. Can be used in combination with others but generally requires significant changes to UI. For example, an empty pipeline widget when no pipeline is present on the Merge Request page. |
| Banner          | Low       | Low           | Might require significant changes to the UI. For example, displacement of default elements.                                                                                                                     |
| Empty state     | Low       | High          | Empty states can be used as great starting points for onboarding flows. They’re not intrusive as there’s no content to show; they can give context, explain the value, and provide a CTA.                       |

### Recommendations for writing copy and providing context

Consider the following recommendations to make your initial prompts more effective and contextual.

* Always explain why the initial prompt is shown (for example, _you don’t have a pipeline to check the quality of your code, we can show you how to set it up quickly._)
* What is the value that the user will get from it (for example, _it will make your code more secure and robust._)
* Avoid generic CTA copy like “Let’s go” or “Show me how”. Use something that will tell the user what value they’ll get out of it so that even if they only scan through the copy of the prompt, they’ll still have a good idea of what it is they’re doing and what the result will be. Good example: ”Secure your code”.

### Follow-up prompts

Sometimes, the onboarding flow will span across different pages. When that’s the case, use the [popover](/components/popover) component to keep the users on the right path. The popovers can be animated in with a short delay after the page has loaded to make sure that they’re noticed.

### How many steps?

When an onboarding flow expands across several steps (and possibly pages), try to aim for three steps. Five should be the maximum. If you think you need more, consider breaking it down into multiple and smaller flows. The more steps an onboarding flow has, the less likely it is that a user will complete it.
