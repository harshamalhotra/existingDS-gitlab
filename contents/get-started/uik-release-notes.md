---
name: Release notes
---

## 16.0

[_Draft: 16.0 release notes_](https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/merge_requests/3356)

## 15.11

<small>Published 2023-04-18</small>

### Additions

- [Link components](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?node-id=81916-116837) are available for all four [link categories](https://design.gitlab.com/components/link#categories). A future update will add instructions for adding style overrides for inline use. Until then, copy the styles from the components, or reach out to a [Foundations designer](https://about.gitlab.com/handbook/product/categories/#foundations-group) for help.
  - **❖&nbsp;Link&nbsp;/&nbsp;Inline&nbsp;text&nbsp;link**
  - **❖&nbsp;Link&nbsp;/&nbsp;UI&nbsp;link**
  - **❖&nbsp;Link&nbsp;/&nbsp;Meta&nbsp;link**
  - **❖&nbsp;Link&nbsp;/&nbsp;Mention**
- Added the [**cloud-terminal**](https://gitlab-org.gitlab.io/gitlab-svgs/?q=~cloud-terminal) icon to represent workspace.
- Added the following illustrations: [**empty-snippets-md**](https://gitlab-org.gitlab.io/gitlab-svgs/illustrations?q=illustrations/empty-state/empty-snippets-md.svg), [**empty-labels-md**](https://gitlab-org.gitlab.io/gitlab-svgs/illustrations?q=illustrations/empty-state/empty-labels-md.svg), [**empty-todos-md**](https://gitlab-org.gitlab.io/gitlab-svgs/illustrations/?q=illustrations/empty-todos-md.svg), [**empty-todos-all-done-md**](https://gitlab-org.gitlab.io/gitlab-svgs/illustrations?q=illustrations/empty-todos-all-done-md.svg), [**empty-embed-panel-md**](https://gitlab-org.gitlab.io/gitlab-svgs/illustrations?q=illustrations/empty-state/empty-embed-panel-md.svg), [**empty-projects-md**](https://gitlab-org.gitlab.io/gitlab-svgs/illustrations?q=illustrations/empty-state/empty-projects-md.svg), [**empty-projects-starred-md**](https://gitlab-org.gitlab.io/gitlab-svgs/illustrations?q=illustrations/empty-state/empty-projects-starred-md.svg), [**empty-projects-deleted-md**](https://gitlab-org.gitlab.io/gitlab-svgs/illustrations?q=illustrations/empty-state/empty-projects-deleted-md.svg).

### Enhancements

- Breaking (medium impact): [**❖&nbsp;Sidebar**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?node-id=3946-112&t=btf6j6JBlWUFtOkp-11) `Type=Admin` now includes CI/CD as an item, matching production. Sidebar color matches production.
  - Take care when updating as this change re-attached some components that had become detached, in some instances badges will appear in the sidebar where they were originally hidden.
- Breaking (medium impact): [**❖&nbsp;Tooltip**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?node-id=425-142&t=btf6j6JBlWUFtOkp-11) now resizes based on the content. Turn on the layout grid to view max-width guides with <kbd>⇧</kbd>&nbsp;+&nbsp;<kbd>G</kbd> or **View&nbsp;>&nbsp;Layout&nbsp;Grids**. Instances are updated to demonstrate max-width.
  - Take care when updating as in some circumstances the tip position might move a few pixels.
  - Also, custom sizing will be lost, but auto layout should resize the tooltip to the correct size.
- Added a `Gray` variant for the [**❖&nbsp;Sticky**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?node-id=86364-117403&t=btf6j6JBlWUFtOkp-4) utility component to match todos on the Pajamas website.
- We’ve started improving component pages by including headings and descriptions. The descriptions match what’s in the component properties description field and the intent is to make them more visible. Sections are also being used to group frames, components, and instances in a way that doesn't impact component naming like a parent frame would (see [Typography](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?node-id=440-0&t=VprsBTE7V7i8edGF-11) or [Links](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?node-id=81916-116837&t=VprsBTE7V7i8edGF-11) for examples).

### Changes

- Breaking (low): Addition and removal content styles have been moved to a new [**❖&nbsp;Inline&nbsp;highlight**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?node-id=84028-117530&t=btf6j6JBlWUFtOkp-11) component. 
  - We expect existing instances to remain unchanged, but you will need to switch to the new component to make updates.
  - Take care when switching the component as text overrides may be lost.
- Breaking (medium impact): [**❖&nbsp;Dropdown**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?node-id=425-14&t=btf6j6JBlWUFtOkp-11) width has been decreased in support of the [navigation updates](https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/issues/1572). Upon updating locally the dropdown width will be 8px narrower and if you've used left or right (not centered or dynamic) tip placement it will reset to a default position. As part of the update several other resizing fixes and improvements have been made that aren't breaking changes.
- Breaking (high impact): [**❖&nbsp;Breadcrumb**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?node-id=425-5&t=btf6j6JBlWUFtOkp-11) current page now uses bold meta link style. The previous breadcrumb component has been deprecated, but will still be available for at least a milestone. In tests, swapping the component to use the new version kept all style and content overrides intact, but take care when swapping.
- [Buttons](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?node-id=425-7) renamed to have a "Button&nbsp;/" prefix. Doing so makes them easier to locate when searching for a component. **❖&nbsp;Button&nbsp;/&nbsp;Link** description also points towards the **❖&nbsp;Link&nbsp;/&nbsp;UI&nbsp;link** components. Take care when choosing between a [link](https://design.gitlab.com/components/link) (`<a>`) and a [button](https://design.gitlab.com/components/button) (`<button>`).
  - **❖&nbsp;Button&nbsp;/&nbsp;Default**
  - **❖&nbsp;Button&nbsp;/&nbsp;Confirm**
  - **❖&nbsp;Button&nbsp;/&nbsp;Danger**
  - **❖&nbsp;Button&nbsp;/&nbsp;Loading**
  - **❖&nbsp;Button&nbsp;/&nbsp;Disabled**
  - **❖&nbsp;Button&nbsp;/&nbsp;Selected**
  - **❖&nbsp;Button&nbsp;/&nbsp;Dashed**
  - **❖&nbsp;Button&nbsp;/&nbsp;Emoji&nbsp;count**
  - **❖&nbsp;Button&nbsp;/&nbsp;Link**
  - **❖&nbsp;Button&nbsp;/&nbsp;Button&nbsp;group**
- Inline highlight component is now [**❖&nbsp;Link&nbsp;/&nbsp;Mention**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?node-id=86229-117442&t=btf6j6JBlWUFtOkp-4). Existing styles have been expanded to support interactive styles, and inline and meta variants.
- Icons page pointing to the [GitLab Product Icons](https://www.figma.com/file/h4YjjttHL5YI0mXZfQ4uuU/GitLab-Product-Icons?t=SDEcXtmjyvSgCogP-7) file has been removed since the icons file has existed separately for over two years and the notice is no longer needed.

### Fixes
- [**❖&nbsp;Button&nbsp;/&nbsp;Link**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?node-id=78884-116292&t=yMRUd34fxKLrjvpL-4) text overrides now persist when changing state.
