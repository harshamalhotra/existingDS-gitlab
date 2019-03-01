---
name: Helping users
---

Help content should be used as a fallback to help users complete and better understand tasks, with the primary method of understanding being the UI itself. Embedding help content directly within the feature it serves is the best way to assist users who have hit a roadblock. Affordance is higher when help content is available in context.

Help comes in the form of various types of content designed to:

* Assist users unable to complete a task.
* Help users to understand a concept in more detail.
* Provide additional technical details not available in the UI.

## Formatting help content

If the most relevant information can be summarized succinctly, put the summary directly in the UI instead of using a Help link. However, you can use a Help link to provide supplemental information.

* **Example:** User cohorts show how active users are in the last 12 months. [More information](#)

Don't use "Learn more about," "Tell me more about," or "Get help with this" phrasing. Phrase help links to indicate assistance and predict the results of the link. Help links should never read like action links, e.g., “Open documentation.” As an exception, you can use "More information" to supplement instructions that are directly in the UI, especially if providing specific information in the Help link leads to unnecessary repetition or makes the link less compelling.

* **Example:** [What are user cohorts?](#)

If there isn't space available for a Help link text, use a circle question mark icon (?) linked to the Help content, with a tooltip phrased in terms of the primary question answered by the help content.

Todo: Add live component block with code example

If the help content is outside of the GitLab instance (e.g. content at about.gitlab.com), make that clear in the link text. Doing so helps make the result of the links predictable. This is often not possible due to space limitations. An external link icon can be added in place of more copy.

* **Example:** For more integrations, go to [GitLab’s website](#).
