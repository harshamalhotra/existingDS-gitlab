---
name: Breadcrumb
description: A breadcrumb is a navigational element to help a user understand the current location in the application as well as content structure and hierarchy.
components:
  - base-breadcrumb
related:
  - avatar
  - button
---

## Examples

<story-viewer component="base-breadcrumb" title="Breadcrumb"></story-viewer>

<story-viewer component="base-breadcrumb" story="collapsed-items" title="Collapsed"></story-viewer>

[View in Pajamas UI Kit →](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?type=design&node-id=425-5&mode=dev)

## Structure

<figure-img alt="Numbered diagram of a breadcrumb structure" label="Breadcrumb structure" src="/img/breadcrumb-structure.svg"></figure-img>

1. **Avatar** (optional): Prefixes a group or project link.
1. **Link**: Opens the page in the same window.
1. **Separator**: A forward slash character `/` separates each link.

## Guidelines

### When to use

- A breadcrumb should exist on every page of the application, except for register and profile, to show the hierarchy of parent and child pages in the context of the current page where the current page is the last item in the list.

### When not to use

- If you need to link to sibling or related pages, use a form of [navigation](/patterns/navigation) instead.

### Appearance

- An avatar can appear to the left of the text for any group, project, or user link in the breadcrumb.
- A bottom border may be applied to a parent container to visually distinguish the breadcrumb from the content of the page.

<todo>Update border related appearance notes as a result of [!3262](https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/merge_requests/3263#note_1283440645).</todo>

### Behavior

- Use an [ellipsis button](/components/button) to hide groups when there are three or more subgroups in the path.
- Use an [ellipsis button](/components/button) to hide all Wiki page breadcrumb items except the current page.
- The top-level group and the subgroup closest to the project are never collapsed.
- All breadcrumb items, except the last one, are truncated to 128px if there isn't enough horizontal space to fit them on one line.

### Content

- Ignore the **GitLab** instance name in the breadcrumb.
- For a page that presents the details of an individual item (issue, merge request, snippet, pipeline, job, milestone, commit, tag, environment, cluster, pipeline schedule), the last element of the breadcrumb should include the ID of the element. For example, merge request **!1234** becomes **GitLab.org > GitLab > Merge requests > !1234**.
- For a contextual page within the navigation, the breadcrumb should only include the submenu title. For example, **Overview > Details** becomes just **Details**.
- [Use sentence case](/content/punctuation#case) for each breadcrumb element.

#### Special breadcrumbs

Some pages have a special breadcrumb path to make the text intuitive. They are defined as follows:

| Path                                      | Title in breadcrumb                          |
| ----------------------------------------- | -------------------------------------------- |
| Group > Issues > List                     | Group > Issues                               |
| Group > Issues > Boards                   | Group > Issue boards                         |
| Group > Settings > General                | Group > General settings                     |
| Group > Settings > CI / CD                | Group > CI / CD settings                     |
| Group > Project > Repository > Files      | Group > Project > Repository                 |
| Group > Project > Repository > Compare    | Group > Project > Compare revisions          |
| Group > Project > Repository > Charts     | Group > Project > Contribution charts        |
| Group > Project > Issues > List           | Group > Project > Issues                     |
| Group > Project > Issues > Boards         | Group > Project > Issue boards               |
| Group > Project > CI / CD > Charts        | Group > Project > CI/CD charts               |
| Group > Project > Settings > General      | Group > Project > General settings           |
| Group > Project > Settings > Integrations | Group > Project > Integration settings       |
| Group > Project > Settings > Repository   | Group > Project > Repository settings        |
| Group > Project > Settings > CI / CD      | Group > Project > CI/CD settings             |
| User settings > Profile                   | User settings > Edit profile                 |
| User settings > Password                  | User settings > Edit password                |
| Admin area > System hooks > Edit          | Admin area > System hooks > Edit system hook |
| Admin area > Label > Edit                 | Admin area > Labels > Edit label             |

### Accessibility

- A `nav` element with `aria-label="Breadcrumb"` wraps an ordered list to provide a navigation landmark.
- Ensure the last item in a breadcrumb is a link (rather than plain text) so it's included in the focus order. Added benefits of doing so include making it easy to generate a pristine page link (without a trailing anchor reference to a heading, diff, comment, or other location within the page) or to refresh the page.
- `aria-current="page"` is on the last link to indicate that it's the current page.
- See the [WAI-ARIA Authoring Practices Breadcrumb Example](https://w3c.github.io/aria-practices/examples/breadcrumb/index.html) for more details.
