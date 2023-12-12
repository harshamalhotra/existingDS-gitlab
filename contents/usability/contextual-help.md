---
name: Contextual help and info
related:
  - tooltip
  - popover
  - drawer
---

The UI should be self-explanatory. If extra help is required, it should be **in the UI itself**,
as either UI text or as text within a [drawer](/components/drawer).

Affordance is higher when help content is available in context.

## When to use a link to documentation

Documentation can change, and links from the UI to the documentation [can become out-of-date or circular](https://youtu.be/L2D_8BuUFNE).
You should avoid links from the UI to the documentation if you can.

However, you can link from the UI to the docs if:

- Users require information that can't be communicated in the available space. (For example, a list of variables that are defined fully in the documentation.)
- To use the feature, users need to understand a concept in more detail.
- The UI is part of a larger workflow.

## Formatting help content

Help links open in a new tab to ensure:

- The result of clicking links is predictable.
- The user does not need to navigate away from their task.

To learn how to link to GitLab documentation in various programming languages, see [Linking to /help](https://docs.gitlab.com/ee/development/documentation/#linking-to-help).

### Link text

In most cases, phrase the link as a question.

- Example: A merge request approval is required. [Who can approve](#)?

If you can't determine a useful question, use `Learn more`. However, be aware that `Learn more` is not descriptive or meaningful, and **should be used sparingly**.

- Example: Approve a merge request. [Learn more](#).

Note: The punctuation is not part of the link.

For screen reader users, add an [aria-label](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA8) with a full-sentence description.

### External links

When linking to the GitLab documentation, don't add the external link icon.
Even though documentation links on GitLab.com take the user to `docs.gitlab.com`, the same links
on self-managed open in the instance's `/help`.

When linking to third-party documentation, outside the GitLab instance, make that clear in the link text and use the external link icon. The icon should use `aria-label="(external link)"`, or similar, to communicate the purpose to screen reader users.

- Example: Learn how to use minikube in the <a href="#" class="gl-link">Kubernetes documentation <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" style="vertical-align: text-bottom" role="img" aria-label="(external link)">
  <path fill="#000000" fill-rule="evenodd" d="M5,2 C5.55228,2 6,2.44772 6,3 C6,3.55228 5.55228,4 5,4 L4,4 L4,12 L12,12 L12,11 C12,10.4477 12.4477,10 13,10 C13.5523,10 14,10.4477 14,11 L14,12 C14,13.1046 13.1046,14 12,14 L4,14 C2.89543,14 2,13.1046 2,12 L2,4 C2,2.89543 2.89543,2 4,2 L5,2 Z M15,1 L15,5.99814453 C15,6.55043453 14.5523,6.99814453 14,6.99814453 C13.4477,6.99814453 13,6.55043453 13,5.99814453 L13,4.41419 L8.71571,8.69846 C8.32519,9.08899 7.69202,9.08899 7.3015,8.69846 C6.91097,8.30794 6.91097,7.67477 7.3015,7.28425 L11.5858,3 L9.99619141,3 C9.44391141,3 8.99619141,2.55228 8.99619141,2 C8.99619141,1.44772 9.44391141,1 9.99619141,1 L15,1 Z" style="fill: currentColor;"></path></svg></a>.

### Help icon

If link text is not possible and space is tight, use the [help icon](http://gitlab-org.gitlab.io/gitlab-svgs/?q=~question-o) that, when hovered or focused on, shows the summary in a [popover](/components/popover). The popover title should be the question that is answered by the summary. A `Learn more` link can be added to the popover to associate additional, relevant information.

|                                                                                                                                                                                        Do                                                                                                                                                                                         |                                                                                                                                                             Don't                                                                                                                                                             |
| :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|                                                                                   <div class="app-styles"><gl-icon name="question-o" class="gl-text-blue-600" /></div>Use the outlined [question-o.svg](http://gitlab-org.gitlab.io/gitlab-svgs/?q=~question-o) icon in `$blue-600` (`#1068bf`)                                                                                   |                                                                     <div class="app-styles"><gl-icon name="question" size="16" /></div>Use the solid icon [question.svg](http://gitlab-org.gitlab.io/gitlab-svgs/?q=~question) or a color other than blue                                                                     |
| <figure-img alt="Popover with link to documentation" label="Show information in the popover with a link to documentation" src="/img/help-popover-with-link.png"  width="280"></figure-img> | <figure-img alt="Popover with link to documentation" label="Use the icon as a link or with a tooltip" src="/img/help-tooltip.png" alt="Popover with link to documentation" width="280"></figure-img> |

### Info icon

There are exceptions when an [info icon](https://gitlab-org.gitlab.io/gitlab-svgs/?q=~information-o) is used instead of the help icon. While the help icon unblocks a user by answering a question, the info icon provides additional details about the current context.

## Providing reference information

In some cases users might need to reference additional information for completing a task in the UI. When the content length allows, we can surface such information using the [drawer](/components/drawer) component.

### When to use a drawer

- When the help information is supplemental and not critical to the completion of a task.
- When we expect the user to reference that information while performing tasks in the UI.
- When the content is too long to show in a tooltip or popover.
- When the content is short enough to comfortably read in the drawer.

### When not to use a drawer

- When help content is a necessary part of the flow for completing a specific task, consider using a [modal](/components/modal) instead.
- When help content is short enough, consider using a [popover](/components/popover).
- When help content is too long to be easily read in a drawer, consider linking to the documentation instead.

### Content guidelines

- Drawer content should always be related to a specific context or task in the UI. The drawer header should reflect the context or task the user is performing.
- Drawer content is stored as Markdown in the [GitLab repository `/doc` directory](https://gitlab.com/gitlab-org/gitlab/-/tree/master/doc), rather than hard-coded in the product code.
- When writing drawer content, use the [documentation topic types guidelines](https://docs.gitlab.com/ee/development/documentation/topic_types/) and general [drawer content guidelines](/components/drawer/#content).
- You should collaborate with a technical writer when defining the content, and a technical writer review is required on related merge requests.

<todo>Add a live example.</todo>

### Linking to documentation in a drawer

Links to the documentation should be used sparingly since our goal is to present the necessary reference information in the UI. If you need to link to additional documentation, add one link at the end of the drawer content so users can learn more if they found the drawer content insufficient.

### Using actions in reference information drawers

It's not recommended to use action buttons in drawers in conjunction with reference information since the page the drawer is on might have its own set of actions that remain accessible when the drawer is open. Drawers with help content should focus on providing reference information that supplements the interactive actions in the UI.

### Localization of drawer content

It's not required to localize the help drawer content.

### Behavior

For general guidelines follow the [drawer behavior documentation](/components/drawer/#behavior).

- The trigger that opens the drawer should be specific to the content it contains. For example, a "Syntax options" link opens a drawer with syntax options documentation.
- Both text and icon buttons can be used as the drawer trigger depending on the context. In either case it should be clear from the visible text or aria-label (for icons) that help will be provided.
