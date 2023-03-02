---
name: Navigation
---

This page describes the navigation guidelines that apply to the GitLab user interface.

For help with other aspects of GitLab's navigation, refer to the following resources:

- [How to propose a change to navigation](https://about.gitlab.com/handbook/product/ux/navigation/).
- [How to conduct user research of a proposed change to navigation](https://about.gitlab.com/handbook/product/ux/ux-research/evaluating-navigation/).
- [How to use navigational elements for feature discovery](https://about.gitlab.com/handbook/product/product-principles/#navigation).

## Top bar

The top bar refers to the top horizontal navigation. The items in the top bar include a list of pages that allow you to view global content throughout GitLab. For example, you can view your todos, issues, and merge requests across projects and groups. You can also create new groups and projects, as well as search the application.

The top bar navigation items are replaced by exit links during scenarios that have a business impact. This includes signing up, purchasing a subscription, and starting a trial. By doing so, we facilitate task completion and reduce user errors, such as accidentally navigating away.

<todo>Add top bar example</todo>

### Homepage

The homepage is the first page a user sees at the top level of GitLab.com or their instance after logging in. It's also where a user is directed after clicking the GitLab or instance logo in the navigation. This page is meant to help the user orient themself upon logging in. Currently this page is [configurable in User Settings](https://docs.gitlab.com/ee/user/profile/preferences.html#default-dashboard).

### Landing page

A landing page is the page directly tied to a link in the navigation. Typically, a landing page is action-oriented and contains overview and/or summary content, but it can also be a [dashboard](/patterns/dashboards) for analysis-oriented tasks.

### User settings menu
The user settings menu is the rightmost menu which contains items related to the logged-in user.

### Help menu
The help menu is the dropdown with the question mark icon and contains links to docs and support.

## Left sidebar

The left sidebar refers to the navigation that is contextual to each page. These options change depending on if you are looking at a project, a group, or a settings page. The names used for each navigation item should be short and easy to remember, ideally 1-2 words in length.

There are two levels of navigation: [top level](#top-level-menu-items) and a [submenu](#submenu-items).

### Top-level menu items

A top-level menu item is the first anchor that appears within the left sidebar. These items are used to display the most important functionality for that navigation category. A top-level menu item may contain related submenu items.

#### Additions

Proposing new top-level menu items follows the [process outlined in the handbook](https://about.gitlab.com/handbook/engineering/ux/navigation/). New additions are very deliberate and are made to optimize user workflows. Proposals should include data that supports it as key/foundational functionality within our DevOps platform.

We do not add new top-level menu items in order to:

- Improve discoverability of new features. Instead, look for other opportunities to highlight the functionality throughout the product.
- Optimize for the potential future. We should be forward thinking without over optimizing. As features are developed and added, we can look into what changes may need to occur to support a growing feature.

#### Messaging changes to users

Continuously improving the navigation ensures the best possible user experience. To minimize disruption and properly introduce users to changes, follow these guidelines.

Use these approaches based on item usage:

- **None required:** No in-app messaging is required if an item has less than 0.025% of clicks per active user per month.
- **Subsequent:** An in-app [toast](/components/toast) with a confirm action is required after moving a top-level menu item if that item has between 0.026%-0.099% of clicks per active user per month. The toast should appear after first navigating to a screen that includes the sidebar with the navigation change. After dismissal, the toast should not reappear even when navigating to a new group or project with the navigation change.
- **Advanced:** An advanced page-level info [alert](/components/alert) is required if an item has equal to or greater than 0.1% of clicks per active user per month. Advanced notice should be in place for at least one milestone.
- **Temporary opt-in:** If more than 5 top-level navigation items are being changed that have a combined 5% of clicks per active users per month, a temporary opt-in method should be provided for at least 2 milestones. Temporary opt-in provides time to communicate major navigation overhauls while also allowing a user to preview changes.

Consider the following for all top-level menu item changes:

- All changes should be included in the release post.
- A [canary rollout](https://docs.gitlab.com/ee/user/project/canary_deployments.html) may be used to slowly roll out changes to users and get their feedback before releasing to all users.
- Documentation should always be updated in the first release the change is introduced. For canary rollouts, the change may not be available to everyone at the same time and this can be specified in the docs using the following:

> This change is being rolled out incrementally to a subset of the user base. Therefore, this change may not be available to you until it is fully enabled for all users.

### Submenu items

Each submenu should be a self-contained group of functionality, for example:

- Items related to planning and managing issues should be under the `Issues` nav item.
- Viewing and editing pipelines should be under the `CI/CD` nav item.

The default active item should be the first submenu item.

In some cases, items within a submenu may change depending on the context, permissions, and roles. For example, the admin area may include more or less items under a top-level menu item than a group or project.

When this occurs, the top-level menu item should remain consistent, even if there is only one submenu item. The reason for top-level menu consistency is to reduce the cognitive effort needed from users to understand the navigation and task hierarchy. For example, we should not replace **CI/CD** with **Runners** or **Infrastructure** with **Terraform** as the top-level menu item in the sidebar.

### Behavior

- When navigating using the left sidebar, the sidebar always persists in order to maintain the user's context. The only exception to this rule is for integrations that utilize the [external link icon](https://gitlab-org.gitlab.io/gitlab-svgs/?q=~external-link).
- A cookie is set to remember a user's preference between collapsed or expanded.
- For medium and large viewports, the left sidebar is collapsed. When expanded manually, it overlaps the page content. The user's cookie preference is not overridden during this state.
- For small and extra small viewports, the left sidebar is hidden behind a [sidebar icon](https://gitlab-org.gitlab.io/gitlab-svgs/?q=~sidebar). When expanded, the sidebar overlaps the page and a semi-transparent overlay covers the page content. The user's cookie preference is not overridden during this state.

#### Breakpoints

- Extra large viewports: `1200px` and up
- Medium and large viewports: `768px` to `1199px`
- Small and extra small viewports: up to `767px`
