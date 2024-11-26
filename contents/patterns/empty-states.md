---
name: Empty States
summary: Informative and actionable regions aimed at improving feature adoption and usability when no content exists yet.
components:
  - regions-empty-state
related:
  - banner
  - button
---

## Goals

An empty state serves as a placeholder when there are no results or information to be displayed.
The primary goals of an empty state region should be to:

- Increase feature adoption.
- Improve learnability and feature discovery.
- Improve usability.

## Solutions

While we do provide a [fallback solution](#fallback) for empty state regions, *first* think about how to incorporate unique features in an empty state to achieve the above goals better than we can if we simply used our fallback solution. For example:

- In an epic with 0 related issues, *suggest* a few existing issues through keyword matching or other intelligent methods that could be added with a simple click. In this case, it could make it easier to add related issues without leaving the epic. This may `Increase feature adoption` more than simply telling users that no content exists.

This is just one example. Each case will be unique and should be thought of as a problem to solve while keeping the [3 main goals in mind](#goals).

## Analytics and testing

All empty state solutions should include usage analytics so you and your team can measure and improve the empty state solution you've created over time. It‘s also important to think about this as a *solution*, much like any other solution being developed in your stage group, so continue to follow the [solution validation](https://about.gitlab.com/handbook/product/ux/ux-research/solution-validation-and-methods/) process.

## Considerations

- Be aware of surrounding page elements. Since an empty state includes one or more actions, the rest of the page can likely be more sparse to emphasize the action the user should take.
- If possible, use one primary [button](/components/button) per context to emphasize the main action you'd like a user to take. Some pages include a primary button in the header that may need to be hidden when the empty state is active.
- Use a [text link](https://gitlab-org.gitlab.io/gitlab-ui/?path=/story/regions-empty-state--custom-actions) instead of a button to direct a user to things like documentation and resources that support the main action.
- Avoid duplicating content elsewhere in the page that's already present in the empty state heading and description.

## Content guidelines

Generally, an empty state message consists of a:

- **Title** that describes the problem. Try to limit to 5 words (not counting articles or prepositions). Don't end with a period.
- **Description** that explains in full sentences what actions the user can take.
- (Optional) **Button** that serves as a call to action (CTA) and directs the user to take an action.

An empty state message should:

- **Be simple and clear:** Use concise and easily understandable language. Also consult the [word list](https://docs.gitlab.com/ee/development/documentation/styleguide/word_list.html).
- **Provide guidance and motivation:** Offer clear instructions on how to proceed or resolve the empty state. Encourage users to take action with motivating language.
- **Align with the brand voice and tone:** Keep the tone friendly, supportive, and empathetic.
- **Use visual elements effectively:** Complement the text with appropriate visual elements (for example, [illustrations](../product-foundations/illustration/)). Ensure visual elements enhance the message and don't distract from it.

Furthermore, there are different types of empty states with additional guidelines.

### Blank content

A `Blank content` empty state:

- Appears when no content exists within a configured feature.
- Contains a method for creating content.
- Hides unnecessary UI elements, unless there's content on the page that's hidden, but accessible through the UI (for example, archived content).

#### Content

- **Title:** A CTA that starts with an active verb.
- **Description:** A sentence that starts with an active verb and encourages the user to use a feature.
- (Optional) **Button:** One or more buttons that align with the title's verb and empty state's purpose.

#### Examples

For Issue Analytics:

> **Analyze issues in your project** (or **Get started with issue analytics**)
>
> Create issues for projects in your group to track and see metrics for them.
>
> \[Create issue\]

### Configuration required

A `Configuration required` empty state appears for features that need to be configured before being used.
The empty state message includes a:

- Primary action for configuring a feature.
- Secondary action for inviting a member to configure a feature.
  The secondary action should read as `Invite member to configure` and trigger the invite modal.

Use the following implementation to trigger the invite modal:

- [Initialize from a Vue component](http://gitlab.com/gitlab-org/gitlab/blob/81fc02642a748484af91e45abda84c24a54b7ac9/app/assets/javascripts/vue_shared/components/markdown/toolbar.vue#L70-70).
- [Initialize as a separate button/link using haml](https://gitlab.com/gitlab-org/gitlab/blob/81fc02642a748484af91e45abda84c24a54b7ac9/app/views/projects/_invite_members_empty_project.html.haml#L6-13).

#### Content

- **Title:** A CTA that starts with an active verb.
- **Description:** A CTA sentence that invites the user to start the configuration for a feature.
- (Optional) **Button:** A primary action to start configuration, and optionally a secondary action to delegate configuration to another team member.

#### Example

> **Get started with product analytics**
>
> Configure product analytics to track events within your project applications.
>
> \[Configure\]

### Higher tier feature

A `Higher tier feature` empty state serves as a placeholder when a certain feature isn‘t available under the current tier.
[The Growth team](https://about.gitlab.com/handbook/product/categories/#growth-section) is the DRI for `Higher tier feature` empty state regions. If you have to implement a solution for this empty state region, collaborate with the Growth Product Designer and Product Manager.

<todo>Add specifications for Higher Tier empty state region.</todo>

#### Content

- **Title:** `Feature not available`
- **Description:** `This feature is available only on GitLab <tier>.`

### Empty search results

An `Empty search results` empty state appears when there are no search results after doing a search or filtering results.
This empty state does not contain a CTA.

#### Content

When using the [filter component](/components/filter) or [search component](/components/search), use exactly:

- **Title:** `No results found`
- **Description:** `Edit your search and try again.`

## Fallback

If you're unable to come up with a solution to achieve one of the [3 goals of an empty state region](#goals), you can use the empty state fallback. Using the fallback should still achieve one of the three goals and should include a way to track conversion.

### Example

<story-viewer component="regions-empty-state"></story-viewer>

[View in Pajamas UI Kit →](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?type=design&node-id=48911-75349&mode=design)

## Implementation

Create an issue and [follow the Empty state issue template](https://gitlab.com/gitlab-org/gitlab/-/issues/new?issuable_template=Empty%20state).

## References

- [Invited users are more likely to activate new stages](https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/merge_requests/2526#note_691364062)
