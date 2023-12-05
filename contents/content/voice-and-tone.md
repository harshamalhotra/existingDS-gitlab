---
name: Voice and tone
---

Copy and messaging are meaningful aspects of the GitLab experience and the conversation with our users.

The copy for GitLab is clear and direct. We strike a balance between professional and friendly. We can empathize with users (such as celebrating completing all items on the To-Do List) while remaining respectful to the importance of their work. We are a trusted, friendly, helpful, and understanding coworker.

For guidance on UI text:

- For specific terms, use the technical writing [word list](https://docs.gitlab.com/ee/development/documentation/styleguide/word_list.html).
- For component-specific guidance, use the Pajamas page for each component.
- For general guidance, use the technical writing [style guide](https://docs.gitlab.com/ee/development/documentation/styleguide/).

If you have questions, ask a technical writer.

## Brevity

Users will skim content, rather than read text carefully. Copy should be concise and short whenever possible. A long message or label is a red flag hinting at a design that needs improvement.

When familiar with a web app, users rely on muscle memory and may read even less when moving quickly. A good experience should quickly orient a user, regardless of their experience, to the purpose of the current screen. Understanding should happen without the user having to consciously read long strings of text.

In general, text is burdensome and adds cognitive load. This load is even more pronounced in a powerful productivity tool such as GitLab. We shouldn’t rely on words as a crutch to explain the purpose of a screen. Instead, the current navigation and composition of on-screen elements should get the user 95% there, with the remaining 5% being specific elements such as text.

Brevity is especially important for:

- Headers
- Button text
- Field labels
- Error messages

For each of these content types, look for ways you might rephrase text that seems too long. Also, eliminate unnecessary phrases like “in order to” and extra articles like “the” when they don’t add clarity.

| Do  | Don’t |
| --- |  ---  |
| To link Sentry to GitLab, enter your Sentry URL and Auth Token. | In order to link Sentry to GitLab, enter your Sentry URL and Auth Token. |
| Use this token to validate received payloads. | Use this token to validate the received payloads. |

## Clear error messages

When something goes wrong, it's important for us to be clear about what happened, why it happened, and what the next steps to take may be. Vague messages frustrate users and can even block them from completing their task.

When writing an error message, leave out extraneous words like "sorry" and "please." This makes errors easier to read and understand.

| Do  | Don’t |
| --- |  ---  |
| Unable to complete your request. Enter a valid email address. | 400 Bad Request |
| Enter your email address to sign up with GitLab. | Please enter your email address to sign up with GitLab. |

## Objective focused

When users engage with our product, they’re focused on getting tasks done, thinking first in terms of the problem they’re trying to solve, and then how to solve it.
Objective-focused content that starts with the task first and then offers the solution can make it easier for users to quickly find and understand the information they need.

| Do | Don’t |
| --- | --- |
| Monitor your errors by integrating with Sentry | Integrate with Sentry to monitor your errors |
| To see what’s changed, choose a branch or enter a commit. | Choose a branch or enter a commit to see what's changed. |

## Verb tenses

### Recent past (instant feedback)

For a status update on something that has just happened in response to a user action or when a user is otherwise watching for an update, use the **present perfect** tense. This is ideal for toast messages and terminal output.

There are two options:

- When brevity is the priority, use only the noun and verb (omitting articles and prepositions); for example, “Pipeline scheduled.”
- When you want to use a full phrase for a human feel, use a complete sentence; for example, “The pipeline has been scheduled.”

### Distant past (earlier than instant feedback)

Use **past tense**.

| Do | Don’t |
| --- | --- |
| The pipeline was last run on October 3. | The pipeline has been run on October 3. |

### State

Use **present tense**.

| Do | Don’t |
| --- | --- |
| The pipeline is scheduled to run on October 3. | The pipeline will be run on October 3. |

### Instructions

Use the **present tense** with an imperative form (also known as a command).

| Do | Don’t |
| --- | --- |
| Click the Designs tab. | You will need to click the Designs tab. |
| To see what’s changed, choose a branch or enter a commit. | Choosing a branch or entering a commit will show you what’s changed. |
