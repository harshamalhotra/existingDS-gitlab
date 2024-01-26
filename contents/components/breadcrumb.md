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

- A breadcrumb should exist on every page of the application, except for the register and sign in page, to show the hierarchy in the context of the current page.

### When not to use

- If you need to link to sibling or related pages.

### Appearance

- An avatar can appear to the left of the text for any group or project in the breadcrumb.
- A bottom border may be applied to a parent container to visually distinguish the breadcrumb from the content of the page.

<todo>Update border related appearance notes as a result of [!3262](https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/merge_requests/3263#note_1283440645).</todo>

### Behavior

- The full breadcrumb path should remain visible when there's enough horizontal space to fit on one line.
- When space is limited, use an [ellipsis button](/components/button) to collapse links from left to right.
- Collapsed items are revealed with a flat hierarchy in a [simple disclosure dropdown](/components/dropdown-disclosure) when selecting the ellipsis button.
- All but the last breadcrumb item is truncated to 128px if there isn't enough horizontal space to fit them on one line.

### Content

- Ignore the **GitLab** instance name in the breadcrumb.
- Every item must contain a link to the page it's associated with.
- The breadcrumb should include the name of the context matching the navigation sidebar.
- For a page that presents the details of an individual item (issue, merge request, snippet, pipeline, job, milestone, commit, tag, environment, cluster, pipeline schedule), the last breadcrumb element should include the element's ID. For example, merge request **!1234** is represented as **GitLab.org / GitLab / Merge requests / !1234**.
- For a page that allows a user to create a new item, the last breadcrumb element should include the word _New_ followed by the name of the element. For example, **GitLab.org / GitLab / Issues / New** becomes **GitLab.org / GitLab / Issues / New issue**. Only using the _New_ text may cause confusion when translating GitLab into different languages. 
- [Use sentence case](/content/punctuation#case) for each breadcrumb element.
- Collection titles that group primary navigation sections are not included in the breadcrumb.

#### Special breadcrumbs

Some pages have a special breadcrumb path to make the text intuitive. They are defined as follows:

| Path                                      | Title in breadcrumb                          |
| ----------------------------------------- | -------------------------------------------- |
| Group / Settings / General                | Group / General settings                     |
| Group / Settings / CI/CD                  | Group / CI/CD settings                       |
| Group / Project / Repository / Compare    | Group / Project / Compare revisions          |
| Group / Project / Repository graph        | Group / Project / Graph                      |
| Group / Project / Settings / General      | Group / Project / General settings           |
| Group / Project / Settings / Integrations | Group / Project / Integration settings       |
| Group / Project / Settings / Repository   | Group / Project / Repository settings        |
| Group / Project / Settings / CI/CD        | Group / Project / CI/CD settings             |
| User settings / Profile                   | User settings / Edit profile                 |
| User settings / Password                  | User settings / Edit password                |
| Admin area / System hooks / Edit          | Admin area / System hooks / Edit system hook |
| Admin area / Labels / Edit                | Admin area / Labels / Edit label             |

### Accessibility

- A `nav` element with `aria-label="Breadcrumb"` wraps an ordered list to provide a navigation landmark.
- Ensure the last item in a breadcrumb is a link (rather than plain text) so it's included in the focus order. Added benefits of doing so include making it easy to generate a pristine page link (without a trailing anchor reference to a heading, diff, comment, or other location within the page) or to refresh the page.
- `aria-current="page"` is on the last link to indicate that it's the current page.
- See the [WAI-ARIA Authoring Practices Breadcrumb Example](https://w3c.github.io/aria-practices/examples/breadcrumb/index.html) for more details.
