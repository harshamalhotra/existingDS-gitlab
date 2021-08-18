---
name: Navigation
---

Note: For guidance on how to propose a change to navigation menu items, see the [Navigation handbook page](https://about.gitlab.com/handbook/engineering/ux/navigation/).

## Top menu

The top menu refers to the top horizontal navigation. The items in the top menu include a list of pages that allow you to view global content throughout GitLab. For example, you can view your todos, issues, and merge requests across projects and groups. You can also create new groups and projects, as well as search the application. 

The top menu navigation items are replaced by exit links during scenarios that have a business impact. This includes signing up, purchasing a subscription, and starting a trial. By doing so, we facilitate task completion and reduce user errors, such as accidentally navigating away.

Todo: Add top menu example

### GitLab Start Page
The GitLab Start Page is the page users see at the top level of GitLab.com or their instance, and it's where users are directed after logging in. This page is considered navigation, as it is meant to help users orient themselves upon logging in. Currently this page is configurable in User Settings.

### User settings menu
The user settings menu is the rightmost menu which contains items related to the logged-in user.

### Help menu
The help menu is the dropdown with the question mark icon and contains links to docs and support. 

## Left sidebar
The left sidebar refers to the navigation that is contextual to each page. These options change depending on if you are looking at a project, a group, or a settings page. The names used for each nav item should be short and easy to remember, ideally 1-2 words in length. There can be up to two levels of navigation: product landing pages and sub nav group. 

### Product landing pages
Product landing pages are the top level pages in the left sidebar for Projects and Groups. For example, the Issue List page is the landing page for issues. These pages are used to display the most important functionality for that navigation category and when appropriate, facilitate navigation into related functionality.

### Sub nav group

Each sub nav group should be a self-contained group of functionality, for example:

- Items related to planning and managing issues should be under the `Issues` nav item.
- Viewing and editing pipelines should be under the `CI/CD` nav item.

The default active item should be the first sub nav group item.

### Behavior 

- On extra large viewports (`1200px` and up)

The user can choose to have the sidebar always collapsed or expanded. Each time they press the toggle button, a cookie is set to remember their preference.

Todo: Add left sidebar example for extra large viewports (`1200px` and up)

- On medium and large viewports (`768px` to `1199px`)

There isn't enough room for the main page content to fit comfortably, so the sidebar is collapsed by default, regardless of the user's cookie preference. This is especially important when there is a right sidebar as well (for example, issue detail page) or when there is a lot of horizontal content (for example, pipelines table). When the user expands the sidebar, it overlaps the page instead of pushing the content. In these viewports, the toggle doesn't change the user's cookie, so their preference is only saved and used on extra large viewports.

Todo: Add left sidebar example for medium and large viewports (`768px` to `1199px`)

- On small and extra small viewports (up to `767px`)

The sidebar is hidden behind a “hamburger” icon. When pressed, the sidebar is shown expanded, overlapping the page with a semi-transparent overlay. Like the previous point, this behavior is not affected by the user's cookie preference and doesn't change that preference.

Todo: Add left sidebar example for small and extra small viewports (up to `767px`)
