---
name: Feature discovery
summary: Introduce and promote new functionality, emphasizing user context, motivation, and value to ensure effective adoption.
related:
  - banner
  - popover
  - /patterns/empty-states
---

<note>Help improve this page's content by giving feedback. [Take a short survey.](https://docs.google.com/forms/d/e/1FAIpQLSfzGq1myYmQRnXmliyMCnf_a7XJMu729kXoG5SD6exzkmsFhQ/viewform?usp=sf_link)</note>

New features can enhance the experience and unlock significant value for users. However, a user’s context plays a significant role in how they engage with new functionality. According to the [FOGG Behavior Model](https://behaviormodel.org/), three factors impact people's behavior with regards to completion of tasks:

1. Their ability to perform the task.
2. Their motivation for the task.
3. The prompt that triggers the behavior.

Prompts to trigger the desired behavior succeed when motivation and ability are high enough. We can improve a user's _ability_ to perform a task by guiding them using discovery patterns and boost their _motivation_ by clearly communicating the value of a task. Keeping these principles in mind helps us to improve both the experience and make it more likely that a user achieves their desired outcome.

## Feature discovery patterns

| Pattern              | Definition                                                                                                     | Examples                                                                                    | Recommendation         |
| -------------------- | -------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ---------------------- |
| Implicit discovery   | Features are discovered naturally as the user interacts with the interface, without overt prompts or guidance. | [Navigation sidebar](/usability/navigation-sidebar), [empty states](/patterns/empty-states) | Preferred              |
| Contextual discovery | Features are highlighted in context, as the user reaches a point where the feature is relevant or useful.      | [Badge](/components/badge)                                                                  | Use with justification |
| Disruptive discovery | Features or information are presented in a way that interrupts the user’s flow.                                | [Modal](/components/modal), [banner](/components/banner)                                    | Use rarely             |

### Implicit discovery

Implicit discovery patterns are the preferred approach to integrate features into the experience. Before you add feature discovery notices, explore solutions where the feature is not actively promoted. When the user can find features within the context of their existing tasks, they remain focused and are not overwhelmed. Ensure that the feature is introduced at the right moment, and that the call-to-action is clear and understood. This approach promotes long-term engagement with new features as the user organically builds an understanding of the product.

### Contextual discovery

Before you consider contextual discovery, you should explore solutions where the feature is not actively promoted (see [implicit discovery](#implicit-discovery)). Contextual notices are subtle UI elements that draw attention or explain a feature, such as additional text, a [badge](/components/badge), or an [icon](/components/icon). These notices should be positioned near the relevant context of the user’s task and avoid disrupting the user's workflow.

<figure-img alt="Under the button to create a project, a static notice shows that it's also possible to create a project with the command line." label="A static notice informs the user of an alternate way to use the feature." src="/img/create-project.svg"></figure-img>

Contextual notices can be helpful when a feature requires more guidance than a call-to-action alone. If needed, allow the user to access more details through progressive disclosure. Ensure the help content is visible but don't overwhelm the user with too much information at first, and offer more details only when they seek it.

<figure-img alt="A badge with the label 'New' is shown next to a button. When the user hovers on the button, a popover appears and explains the feature." label="Popover is shown upon button hover." src="/img/info-on-hover.svg"></figure-img>

Use contextual notices when implicit discovery doesn’t suffice, for example:

- **Complex or novel features:** Features that the user is not familiar with and need additional information to encourage engagement.
- **Limited visibility:** When features are not noticed alongside competing actions and the user's previous mental models.

### Disruptive discovery

Before you consider disruptive discovery, you should explore solutions where the feature is not actively promoted (see [implicit discovery](#implicit-discovery)). Disruptive notices, such as a [banner](/components/banner) or [modal](/components/modal), are more noticeable than contextual notices. When a notice is disruptive and doesn't match the user's current context, it can have limited effectiveness, because it the user feels it's irrelevant and dismisses it.

<figure-img alt="A banner invites a new user to try GitLab CI, with a call-to-action to try a test template." label="A banner helps a new user onboard to an essential feature." src="/img/feature-discovery-banner.svg"></figure-img>

Use disruptive discovery when contextual discovery doesn't suffice, such as:

- **Critical notices:** When engagement is required from the user. For example, to comply with a policy in the organization.
- **User onboarding:** To guide a new user through essential features that they need to understand to use the product effectively.
- **Significant changes:** When functionality changed in a way that could confuse a user or alter their workflows, a prominent notice can clarify the changes.

Be mindful of what notices already exist in the user's workflow. Multiple prominent notices and alerts can overwhelm them and lead to desensitization to important messages.

## Onboarding

A well-designed onboarding process can be an effective way to introduce a user to a new feature, like _CI/CD setup_, or product stages, such as _adopt the Secure DevOps stage_. However, its primary goal is to showcase the value a user gains from these features and stages.

### Guidelines for onboarding experiences

- Identify the value that you're trying to give to the user and work backwards from that. Having a new feature that you want to showcase alone isn't a good reason for onboarding. What is the user-facing value of the new feature? How will they benefit from it?
- Provide a "No, thanks" option that allows users to opt out.

### Think about the user's context

The next step should be to think about the user's context. Where in the app are they? What are they doing? How familiar are they with what you want to show them? Do they have the ability to perform the task? Is their motivation high enough? If not, how will you improve their ability or increase their motivation? Where will you place the prompt so that it’s contextual?

### Patterns for initial prompts

The following patterns can be used as initial prompts to start the onboarding flows. Consult the intrusion level, pattern effectiveness, and recommendations for each one when deciding which to use.

| Pattern name    | Intrusion | Effectiveness | Notes and recommendations                                                                                                                                                                                       |
| --------------- | --------- | ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Popover         | High      | High          | No major changes to the UI required. Use at the beginning or end, not in the middle, of a complex flow or task. Use to guide a user through different pages.                                                    |
| UI modification | Medium    | Medium        | Not a reusable component. Can be used in combination with others but generally requires significant changes to UI. For example, an empty pipeline widget when no pipeline is present on the Merge Request page. |
| Banner          | Low       | Low           | Might require significant changes to the UI. For example, displacement of default elements.                                                                                                                     |
| Empty state     | Low       | High          | Empty states can be used as great starting points for onboarding flows. They’re not intrusive as there’s no content to show; they can give context, explain the value, and provide a CTA.                       |

### Recommendations for writing copy and providing context

Consider the following recommendations to make your initial prompts more effective and contextual.

- Always explain why the initial prompt is shown (for example, _you don’t have a pipeline to check the quality of your code, we can show you how to set it up quickly._)
- What is the value that the user will get from it (for example, _it will make your code more secure and robust._)
- Avoid generic CTA copy like _“Let’s go”_ or _“Show me how”_. Use something that will tell the user what value they’ll get out of it so that even if they only scan through the copy of the prompt, they’ll still have a good idea of what it is they’re doing and what the result will be. Good example: _“Secure your code”_.

### Follow-up prompts

Sometimes, the onboarding flow will span across different pages. When that’s the case, use the [popover](/components/popover) component to keep a user on the right path. The popovers can be animated in with a short delay after the page has loaded to make sure that they’re noticed.

### How many steps?

When an onboarding flow expands across several steps (and possibly pages), try to aim for three steps. Five should be the maximum. If you think you need more, consider breaking it down into multiple and smaller flows. The more steps an onboarding flow has, the less likely it is that a user will complete it.
