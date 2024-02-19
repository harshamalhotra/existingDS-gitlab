---
name: How to write UI text
---

Copy and messaging are meaningful aspects of the GitLab experience and the conversation with our users.

The copy for GitLab is clear and direct. We strike a balance between professional and friendly. We can empathize with users (such as celebrating completing all items on the To-Do List) while remaining respectful to the importance of their work. We are a trusted, friendly, helpful, and understanding coworker.

When you author UI text, consider the following tenets.

## Consistency is key

If you're deciding between being consistent with other language on the same screen,
or following the latest style guidance, go with consistency.

A page that mixes phrasing is harder for users to parse and looks unprofessional.

If the text on a page doesn't match the latest guidance, or is inconsistent,
create a merge request, open an issue, or [ping the Papercuts team](https://handbook.gitlab.com/handbook/product/ux/product-designer/#suggesting-paper-cuts-to-the-team).

### How to be consistent

To be consistent, follow style guidance in this order:

- For specific terms, use the technical writing [word list](https://docs.gitlab.com/ee/development/documentation/styleguide/word_list.html).
- For component-specific guidance, use the Pajamas page for each component.
- For general guidance, use the technical writing [style guide](https://docs.gitlab.com/ee/development/documentation/styleguide/).

If you have questions, ask a technical writer.

## Terminology

For clear and consistent communication, it’s important to always use correct terminology.

You can find most terms in the [word list](https://docs.gitlab.com/ee/development/documentation/styleguide/word_list.html) that's maintained by the Technical Writing team. If you do not see the term you need, open a merge request to add it, or contact a technical writer for assistance.

In addition:

- Search the product for the term before creating a new term.
- Be extremely cautious when using [jargon](https://examples.yourdictionary.com/examples-of-jargon.html) and [colloquialisms](https://www.quickanddirtytips.com/education/grammar/writing-with-slang). They can confuse new users and cause problems with internationalization.
- Consider [screen readers](https://accessibility.blog.gov.uk/2017/02/08/advice-for-creating-content-that-works-well-with-screen-readers/) and their ability to interpret non-standard terminology.

## Brevity

Users will skim content, rather than read text carefully. Copy should be concise and short whenever possible. A long message or label indicates a design that might need improvement.

When familiar with a web app, users rely on muscle memory and may read even less when moving quickly. A good experience should quickly orient a user, regardless of their experience, to the purpose of the current screen. Understanding should happen without the user having to consciously read long strings of text.

In general, text is burdensome and adds cognitive load. This load is even more pronounced in a powerful productivity tool such as GitLab. We shouldn’t rely on words to explain the purpose of a screen. Instead, the current navigation and composition of on-screen elements should get the user 95% there, with the remaining 5% being specific elements such as text.

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

### When extra words provide clarity

Sometimes an extra word or two are required for clarity.

For example, if the context clearly refers to the object, you can use a verb or adjective by itself.

- **Example:** `Edit` or `Closed`

If the context isn’t clear enough, use an object.

- **Example:** `Edit issue` or `Closed issues`

## Clear error messages

When something goes wrong, it's important for us to be clear about what happened, why it happened, and what the next steps to take may be. Vague messages frustrate users and can even block them from completing their task.

When writing an error message, leave out extraneous words like "sorry" and "please." This makes errors easier to read and understand.

| Do  | Don’t |
| --- |  ---  |
| Unable to complete your request. Enter a valid email address. | 400 Bad Request |
| Enter your email address to sign up with GitLab. | Please enter your email address to sign up with GitLab. |

## Objective-focused

When users engage with our product, they’re focused on getting tasks done, thinking first in terms of the problem they’re trying to solve, and then how to solve it.
Objective-focused content that starts with the task first and then offers the solution can make it easier for users to quickly find and understand the information they need.

| Do | Don’t |
| --- | --- |
| Monitor your errors by integrating with Sentry | Integrate with Sentry to monitor your errors |
| To see what’s changed, choose a branch or enter a commit. | Choose a branch or enter a commit to see what's changed. |

## Other resources

- Capitalization of [feature names](https://docs.gitlab.com/ee/development/documentation/styleguide/#feature-names) and [other terms](https://docs.gitlab.com/ee/development/documentation/styleguide/#other-terms)
- [Punctuation](punctuation)
- [Lists](https://docs.gitlab.com/ee/development/documentation/styleguide/#lists)
- [Active voice](https://docs.gitlab.com/ee/development/documentation/styleguide/#active-voice)
- [Customer perspective](https://docs.gitlab.com/ee/development/documentation/styleguide/#customer-perspective)
- [Building trust](https://docs.gitlab.com/ee/development/documentation/styleguide/#building-trust)
