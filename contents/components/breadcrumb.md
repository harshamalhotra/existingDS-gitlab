---
name: Breadcrumb
description: A breadcrumb is a navigational element to help a user understand the current location in the application as well as content structure and hierarchy.
stories:
  - base-breadcrumb--default
related:
  - avatar
  - button
---

## Examples

[[Story:base-breadcrumb--default]]

[View in Pajamas UI Kit →](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/Pajamas-UI-Kit-Beta?node-id=2560%3A2230)


## Structure

<figure class="figure" role="figure" aria-label="Breadcrumb structure">
  <img class="figure-img" src="/img/breadcrumb-structure.svg" alt="Numbered diagram of a breadcrumb structure" role="img" />
</figure>

1. **Avatar** (optional): Prefixes a group or project link.
1. **Link**: Opens the page in the same window.
1. **Separator**: The [chevron-right](https://gitlab-org.gitlab.io/gitlab-svgs/?q=~chevron-right) icon is between each link.

## Guidelines

### When to use

- A breadcrumb should exist on every page of the application, except for register and profile, to show the hierarchy of parent and child pages in the context of the current page where the current page is the last item in the list.

### When not to use

- If you need to link to sibling or related pages, use a form of [navigation](/regions/navigation) instead.

### Behavior

- Use an [ellipsis button](/components/button) to hide groups when there are three or more subgroups in the path.
- Use an [ellipsis button](/components/button) to hide all Wiki page breadcrumb items except the current page.
- The top-level group and the subgroup closest to the project are never collapsed.
- All breadcrumb items, except the last one, are truncated to 128px if there isn't enough horizontal space to fit them on one line.

### Content

- Ignore the **GitLab** instance name in the breadcrumb.
- For a page that presents the details of an individual item (issue, merge request, snippet, pipeline, job, milestone, commit, tag, environment, cluster, pipeline schedule), the last element of the breadcrumb should include the ID of the element. For example, merge request **!1234** becomes **GitLab.org > GitLab > Merge Requests > !1234**.
- For a contextual page within the navigation, the breadcrumb should only include the submenu title. For example, **Overview > Details** becomes just **Details**.

#### Special breadcrumbs

Some pages have a special breadcrumb path to make the text intuitive. They are defined as follows:

| Path | Title in breadcrumb |
| ------ | ------ |
| Group > Issues > List                     | Group > Issues                               |
| Group > Issues > Boards                   | Group > Issue Boards                         |
| Group > Settings > General                | Group > General Settings                     |
| Group > Settings > CI / CD                | Group > CI / CD Settings                     |
| Group > Project > Repository > Files      | Group > Project > Repository                 |
| Group > Project > Repository > Compare    | Group > Project > Compare Revisions          |
| Group > Project > Repository > Charts     | Group > Project > Contribution Charts        |
| Group > Project > Issues > List           | Group > Project > Issues                     |
| Group > Project > Issues > Boards         | Group > Project > Issue Boards               |
| Group > Project > CI / CD > Charts        | Group > Project > CI/CD Charts               |
| Group > Project > Settings > General      | Group > Project > General Settings           |
| Group > Project > Settings > Integrations | Group > Project > Integration Settings       |
| Group > Project > Settings > Repository   | Group > Project > Repository Settings        |
| Group > Project > Settings > CI / CD      | Group > Project > CI/CD Settings             |
| User Settings > Profile                   | User settings > Edit Profile                 |
| User Settings > Password                  | User settings > Edit Password                |
| Admin Area > System Hooks > Edit          | Admin Area > System Hooks > Edit System Hook |
| Admin Area > Label > Edit                 | Admin Area > Labels > Edit Label             |

### Accessibility

- A `nav` element with `aria-label="Breadcrumb"` wraps an ordered list to provide a navigation landmark.
- `aria-current="page"` is on the last link to indicate that it's the current page.
- See the [WAI-ARIA Authoring Practices Breadcrumb Example](https://www.w3.org/TR/wai-aria-practices-1.1/examples/breadcrumb/index.html) for more details.
