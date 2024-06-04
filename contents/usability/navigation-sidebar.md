---
name: Navigation sidebar
---

The navigation namely refers to the persistent left sidebar where a user can access different sections of the application. In order to ensure a familiar user experience, minimize disruption, and properly introduce changes we utilize the following resources to guide any change to this region:

- [How to propose a change to navigation](https://about.gitlab.com/handbook/product/ux/navigation/).
- [How to conduct user research of a proposed change to navigation](https://about.gitlab.com/handbook/product/ux/ux-research/evaluating-navigation/).
- [How to communicate a change in the app](/usability/navigation-sidebar#communicating-changes-to-users).

## Structure

We use a vertical style of navigation for [several key benefits highlighted by Nielsen Norman Group](https://www.nngroup.com/articles/vertical-nav/). The navigation sidebar is designed to be contextually specific:

- The header area is always the same, while the elements in the body of the navigation sidebar will change depending on the user's context.
- The names used for each navigation item should be short and easy to remember, ideally just 1-2 words.
- There are two levels of navigation: [top-level items](#top-level-items) and [sub-level items](#sub-level-items). There is not a third level of depth.

### Top-level items

A top-level item is designated with a unique icon or avatar, and may contain related sub-level items.

### Sub-level items

Each group of sub-level items should reflect its top-level item.

Items within a sub-level group may change depending on the context, permissions, and roles. For example, the admin area may include less or more items under a top-level item than a group or project.

Top-level item naming and positioning should remain consistent across similar contexts like groups and projects, even with only one sub-level item. Top-level consistency reduces the cognitive effort needed to understand the navigation and task hierarchy.

## Behavior

- When navigating using the left sidebar, the sidebar always persists in order to maintain the user's context. The only exception to this rule is for integrations that utilize the [external link icon](https://gitlab-org.gitlab.io/gitlab-svgs/?q=~external-link).
- A cookie is set to remember a user's preference between collapsed or expanded.
- For medium and large viewports, the left sidebar is collapsed. When expanded manually, it overlaps the page content. The user's cookie preference is not overridden during this state.
- For small and extra small viewports, the left sidebar is hidden behind a [sidebar icon](https://gitlab-org.gitlab.io/gitlab-svgs/?q=~sidebar). When expanded, the sidebar overlaps the page and a semi-transparent overlay covers the page content. The user's cookie preference is not overridden during this state.

### Breakpoints

- Extra large viewports: `1200px` and up
- Medium and large viewports: `768px` to `1199px`
- Small and extra small viewports: up to `767px`

### Communicating changes to users

The navigation helps orient users, so we want to avoid users wondering, "[Who moved my cheese?](https://uxmag.com/articles/who-moved-my-virtual-cheese)" Once a change to the navigation has been validated and approved, select one of the following approaches for communicating the change to users based on the assumed level of disruption:

- **None:** No in-app messaging is necessary if a change will likely go unnoticed.
- **Minimal:** Use an informative component like a [toast](/components/toast), [alert](/components/alert), or [popover](/components/popover) for a set duration.
- **Significant:** A temporary opt-in method must be provided for at least two milestones.

<note> All changes impacting the navigation sidebar must be in the release notes. </note>

#### How to evaluate disruption

Determining how impactful a disruption may be depends on the scope of the change and is subjective. Try to use objective measures to balance observations and opinions to make an educated guess.

- Look at user behavior as an indicator. For example, the volume of page visits or clicks within the navigation sidebar can give you an impression of how many will be affected.
- Think about the types of users being affected. For example, a change might not matter to most, but it might require an administrator to make unfamiliar adjustments to their workflow.
- Consider how much is changing in the navigation sidebar. For example, moving multiple items, changing the information architecture, or repositioning key functionality disrupts learned behaviors.
- How accustomed users are to something can influence their sensitivity to change. For example, removing a button that has been in place for years might be controversial.
