---
name: Release notes
---

## 16.6

<!-- 🚧 Update MR link before publishing 🚧 -->
[_Draft: 16.6 release notes_](https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/merge_requests/3576)


## 16.5

<!-- 🚧 Update date before publishing 🚧 -->
<small>Published 2023-10-24</small>

### Additions

- Add [**❖&nbsp;_Base/Dividing&nbsp;line**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?type=design&node-id=101961-16255&mode=dev) for use in dropdown dividers. This also enabled removing an old link to a deprecated navigation dividing line component.

### Enhancements

- The following [**❖&nbsp;Empty&nbsp;state**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?type=design&node-id=74155-103184&mode=dev) variants now reflow correctly when changing width:
  - `Type=Full page, Breakpoint=xs-md`
  - `Type=Full page, Breakpoint=lg+`
  - `Type=Inline, Breakpoint=xs-md`
- [**❖&nbsp;Modal**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?type=design&node-id=102241-821&mode=dev) now has a `size` property, enabling fast supported size selection.

### Changes

- Breaking (medium): Update [**❖&nbsp;Empty&nbsp;state**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?type=design&node-id=74155-103184&mode=dev) to have maximum line length. Some instances might now be taller if text wraps.
- Update [**❖&nbsp;Avatar**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?type=design&node-id=19910-0&mode=dev) identicons and text fallbacks to use the [dynamic type scale](https://design.gitlab.com/product-foundations/type-fundamentals#type-scales).
- Update [**❖&nbsp;Popover**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?type=design&node-id=57879-91946&mode=dev) titles to use styles from the heading scale. Component now follows property naming guidelines.
- Update [**Dropdown&nbsp;>&nbsp;❖&nbsp;Divider**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?type=dev&node-id=61256-135451&mode=dev) dropdown element color for consistent borders in dropdowns. Now uses **❖&nbsp;_Base/Dividing&nbsp;line**.
- Update [**Utility&nbsp;>&nbsp;❖&nbsp;Divider**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?type=dev&node-id=72160-103548&mode=dev) documentation utility component, removing an old link to a deprecated navigation dividing line component.
- Refactor [**❖&nbsp;Option**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?type=design&node-id=65765%3A98174&mode=dev) to remove an unnecessary 2px spacing so that it's easier to align lists.

## 16.4

<small>Published 2023-09-18</small>

### Additions

- Add [**❖&nbsp;Deprecated&nbsp;component**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?type=design&node-id=96846-7111&mode=dev&t=II2cG0v81YYjiISQ-4) utility component, to mark variants as deprecated in a non-destructive way.
- Add [**❖&nbsp;Simple&nbsp;action&nbsp;list**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?type=design&node-id=96856-7469&mode=design&t=II2cG0v81YYjiISQ-4) dropdown list example to make it faster to build flat and grouped action lists.

### Changes

- [**❖&nbsp;Option**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?type=design&node-id=60828-98007&mode=dev&t=II2cG0v81YYjiISQ-4) dropdown element has multiple changes:
  - Increase separation between actions and selectable options.
  - Add variants for all 'checked' option state and selected combinations, including prototyping features.
  - Update interactive state styles for checked options.
  - Add destructive and disabled [state documentation](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?type=design&node-id=65182-99449&mode=design&t=QCgwyA33tKeMfCu7-4). These states are not able to be added to the Figma component because of a technical limitation.
  - Property naming updated to match naming guidelines.
- Update [**❖&nbsp;Footer**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?type=design&node-id=61252-96383&mode=design&t=II2cG0v81YYjiISQ-4) dropdown element to make clear the buttons here are actions, not options.
- Update [**❖&nbsp;Checkbox**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?type=design&node-id=49856%3A76501&mode=dev) icons to match production.

### Fixes

- Fixed the [**❖&nbsp;Danger&nbsp;button**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?node-id=21920%3A273&mode=dev) tertiary hover and focus state background colors to use the correct style.

### Deprecations

- Deprecate multiple ❖&nbsp;Option variants when `Is action:true` and `Is selected:true` as this is not a possible combination. Use `Is action:false` and `Is selected:true` (most common), or `Is action:true` and `Is selected:false` instead.

## 16.3

<small>Published 2023-08-22</small>

<note>When possible, links in the release notes will open in Figma's [Dev Mode](https://www.figma.com/dev-mode/) for faster inspection, and to prevent unwanted editing of objects when a user has edit permissions.</note>

### Additions

- Added component-specific heading text styles for alert, banner, drawer, and modal. More details in [#1652](https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/issues/1652) and in the **Changes** section below.

### Enhancements

- Improved instances for the [**alert**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?node-id=95997%3A103802&mode=dev), [**banner**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?node-id=57885%3A91856&mode=dev), [**drawer**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?node-id=48150%3A59211&mode=dev), [**dropdown**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?node-id=65182%3A99209&mode=dev), [**modal**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?node-id=4263%3A5&mode=dev), and [**tooltip**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?node-id=29835%3A71&mode=dev) components to make it easier to understand options, behavior, and usage.
- Updated [**dropdown types**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?type=design&node-id=96234-7530&mode=design&t=LZ783BAyUqhLzr02-4) to include more examples.
- Added extra characters to the [**GitLab Mono font test**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?node-id=455%3A18&mode=dev) to make it easier to see when an old version of the font is loaded.

### Changes

- Breaking (high): The [**❖&nbsp;Alert**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?node-id=95988%3A11501&mode=dev) component title now has a dedicated text style that leverages the latest type scale updates. To accommodate this change, the component has been reworked to allow the title and body text to vertically align with the alert icon. The max-width variants have also been removed as they have low usage and weren't in line with current guidelines. The [previous version of the alert](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?node-id=425%3A1&mode=dev) has been deprecated, but will still be available for at least a milestone.
- [**❖Skeleton&nbsp;loader**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?type=design&node-id=2844-0&mode=dev) variants now reflect current heading and paragraph appearance.
  - Breaking (high): New components created for [headings](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?type=design&node-id=94794-93366&mode=dev). Existing skeleton loader heading variants have been deprecated.
  - Paragraph variants (representing lines of text) updated:
    - Added [**❖&nbsp;Text/Paragraph/1&nbsp;line**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?type=design&node-id=94992-89&mode=dev).
    - Renamed **❖&nbsp;Text/Paragraph/Short** →  [**❖&nbsp;Text/Paragraph/3&nbsp;line**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?type=design&node-id=2844-82&mode=dev).
    - Renamed **❖&nbsp;Text/Paragraph/Long** →  [**❖&nbsp;Text/Paragraph/5&nbsp;line**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?type=design&node-id=2844-86&mode=dev).
    - Breaking (medium): Updated [**❖&nbsp;Text/Paragraph/3&nbsp;line**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?type=design&node-id=2844-82&mode=dev) and [**❖&nbsp;Text/Paragraph/5&nbsp;line**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?type=design&node-id=2844-86&mode=dev) to use paragraph spacing and visual weight.
- Breaking (medium): [**❖&nbsp;Tooltip**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?type=design&node-id=19944-2&mode=dev) updated to use Figma's new max-width auto layout feature — no more manually controlling width using line-breaks or resizing the component! This update changes the position of existing tooltips if they are longer than 1 line.
- Breaking (low): The [**❖&nbsp;Banner**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?node-id=19944%3A6&mode=dev), [**❖&nbsp;Drawer**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?node-id=48150%3A59274&mode=dev), and [**❖&nbsp;Modal**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?node-id=4263%3A22&mode=dev) component titles now have dedicated text styles that leverage the latest type scale updates. As a result of these changes, component instances may change height and design elements may need to be repositioned within your design files. More details for the reason behind the change in [!11014](https://gitlab.com/groups/gitlab-org/-/epics/11014). New styles:
  - `Component / Banner title (h2) / ≥xl breakpoint`
  - `Component / Banner title (h2) / ≥md breakpoint`
  - `Component / Drawer title (h2) / ≥xl breakpoint`
  - `Component / Drawer title (h2) / ≥md breakpoint`
  - `Component / Modal title (h2) / ≥xl breakpoint`
  - `Component / Modal title (h2) / ≥md breakpoint`
- The [**❖&nbsp;Tabs**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?node-id=95175%3A1172&mode=dev) component now uses `$blue-500` for the active state of a tab and box shadows were replaced with strokes. See [#1669](https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/issues/1669) for more details.
- Layout renamed to [**Elevation**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?type=design&node-id=49138-75722&mode=dev) to match documentation. Updated page layout to use recent documentation styles.
- Avatar text style naming updated to match convention established in [#1652](https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/issues/1652).
- Updated UI kit utilities:
  - Differentiated utility styles and components that help organize content within UI kit files from styles and components that are part of the system. Components will also be published as part of the **📙&nbsp;Component&nbsp;library** so they can be used in all UI kit files. More details in [#1657](https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/issues/1657).
  - Updated [**documentation utilities**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?type=design&node-id=96698-362&mode=design&t=KJPSy8hg6NhsjNDF-11) to help make inline documentation (within instances, examples, and documentation pages) more consistent and separate from the elements they address. 
- Separated heading styles from the type scale visual reference in [**Typography**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?type=design&node-id=440-0&mode=design&t=XSJUqpbMl5TmttSz-11) to avoid conflating the two. More details in [#1658](https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/issues/1658).

### Deprecations

- [**❖&nbsp;Alert&nbsp;(⚠️&nbsp;DEPRECATED)**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?type=design&node-id=425-1&mode=dev). Use [**❖&nbsp;Alert**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?node-id=95988%3A11501&mode=dev).
- Skeleton loader [heading variants](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?type=design&node-id=94794-93349&mode=dev). Use latest [**❖Skeleton&nbsp;loader**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?type=design&node-id=2844-0&mode=dev) variants.
- `Tab / Active (⚠️ DEPRECATED)` effect style. Use a bottom stroke instead.
- `Tab / Hover (⚠️ DEPRECATED)` effect style. Use a bottom stroke instead. 

### Removals

- `Tooltip > Max-width` grid style removed. Use max-width auto layout rules built into [**❖&nbsp;Tooltip**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?type=design&node-id=19944-2&mode=dev) instead. (Sorry, this accidentally skipped the deprecation process.)

## 16.2

<small>Published 2023-07-17</small>

<note>Breaking (low): GitLab Figma Organization custom fonts updated to latest version of `@gitlab/fonts` 2023-07-13. Change applied automatically to all files. Investigations found no feasible way to make this change opt in. In some situations, editing text in existing files will require updating to use the latest type styles from the [**📙&nbsp;Component&nbsp;library**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?node-id=440%3A0&mode=dev).</note>

### Additions

- Added the following icons: [**catalog-checkmark**](https://gitlab-org.gitlab.io/gitlab-svgs/?q=~catalog-checkmark), [**check-xs**](https://gitlab-org.gitlab.io/gitlab-svgs/?q=~check-xs), [**close-xs**](https://gitlab-org.gitlab.io/gitlab-svgs/?q=~close-xs)

### Changes

- Breaking (medium): All UI kit files updated to use `@gitlab/fonts` v1.3.0.
  - To use the fonts outside the GitLab organisation in Figma, [download the fonts](https://gitlab-org.gitlab.io/frontend/fonts/).
  - The updated font versions have slightly different spacing between glyphs. When a components size is set by its content there can be a dimension change. The following components have been identified as seeing, in most instances, a ±1–4px width change.
    - [**Badge**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?type=design&node-id=60387-98708&mode=dev)
    - [**❖&nbsp;Breadcrumb**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?type=design&node-id=86530-117981&mode=dev)
    - [**Button**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?type=design&node-id=425-5&mode=dev)
    - [**❖&nbsp;Form&nbsp;group**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?type=design&node-id=49856-76520&mode=dev) when a prefix or suffix is present
    - [**❖&nbsp;Label**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?type=design&node-id=19904-3&mode=dev)
    - [**Link**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?type=design&node-id=81916-116837&mode=dev)
    - [**❖&nbsp;Pagination**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?type=design&node-id=48275-166113&mode=dev)
    - [**❖&nbsp;Severity&nbsp;status**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?type=design&node-id=21336-4&mode=dev)
    - [**❖Tabs**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?type=design&node-id=425-138&mode=dev)
    - [**❖&nbsp;Toast**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?type=design&node-id=20171-225&mode=dev)
    - [**❖&nbsp;Token**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?type=design&node-id=20182-267&mode=dev)
    - [**❖&nbsp;Tooltip**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?type=design&node-id=19944-2&mode=dev)
- Breaking (medium): Type scale for UI heading elements updated. New scale optimized to create visual heirarchy across pages. Read the Pajamas [type fundamentals](/product-foundations/type-fundamentals) and follow progress in the [implementation epic](https://gitlab.com/groups/gitlab-org/gitlab-services/-/epics/19).
  - Updated styles:
    - `UI / Display / ≥xl breakpoint`
    - `UI / Display / ≥md breakpoint`
    - `UI / h1 / ≥xl breakpoint`
    - `UI / h1 / ≥md breakpoint`
    - `UI / h2 / ≥xl breakpoint`
    - `UI / h2 / ≥md breakpoint`
    - `UI / h3 / ≥xl breakpoint`
    - `UI / h3 / ≥md breakpoint`
    - `UI / h4 / ≥xl breakpoint`
    - `UI / h4 / ≥md breakpoint`
    - `UI / h5 / ≥xl breakpoint`
    - `UI / h5 / ≥md breakpoint`
    - `UI / h6 / ≥xl breakpoint`
    - `UI / h6 / ≥md breakpoint`
  - The new heading type scale uses sizes smaller than the sizes used in the UI kit before. When a component size is set by its content there are some dimension changes. The following components have been identified as seeing, in most instances, a 1–8px height reduction.
    - [**❖&nbsp;Banner**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?type=design&node-id=19944-6&mode=dev)
    - [**❖&nbsp;Drawer**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?type=design&node-id=48150-59274&mode=dev)
    - [**❖&nbsp;Modal**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?type=design&node-id=4263-22&mode=dev)
    - [**❖&nbsp;Empty&nbsp;state**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?type=design&node-id=74155-103184&mode=dev)
- Font weight for all text styles updated to use `400`, `600` or `700`.
  - Changed styles:
    - `UI / Paragraph / Bold lg`
    - `UI / Paragraph / Bold`
    - `UI / Paragraph / Bold sm`
    - `Label / Bold`
    - `Label / Bold underlined`
    - `Label / Bold sm`
    - `Label / Bold sm underlined`
    - `Label / Mono bold`
    - `Label / Mono bold underlined`
    - `Label / Mono bold small`
    - `Label / Mono bold sm underlined`
- Optical weight and type settings changed for all text styles. Sans styles have the optical size manually set, and an updated list of enabled font features.

### Fixes

- Fix some dropdown instances using outdated text styles.
- Fix issue where dropdown documentation would break outside its container.
- Fix issue where the new fonts caused **❖&nbsp;_Base&nbsp;Button&nbsp;group** to break outside its container.

### Deprecations

- [**Navigation**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?node-id=3946%3A112&mode=dev) page and all components deprecated.
- [**Documentation markdown type scale**](https://www.figma.com/file/V3HKN83B7rf2T6sseLMrxa/Type-scale---Documentation-Markdown?type=design) file and library since type scales have been updated and will only exist in the [**📙&nbsp;Component&nbsp;library**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?node-id=440%3A0&mode=dev).
- [**Compact markdown type scale**](https://www.figma.com/file/mjAZxHkK95TlQ6L14aNp2M/Type-scale---Compact-Markdown?type=design) file and library since type scales have been updated and will only exist in the [**📙&nbsp;Component&nbsp;library**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?node-id=440%3A0&mode=dev).

## 16.1

<small>Published 2023-06-19</small>


### Additions

- Added the following icons: [**quick-actions**](https://gitlab-org.gitlab.io/gitlab-svgs/?q=~quick-actions), [**markdown-mark**](https://gitlab-org.gitlab.io/gitlab-svgs/?q=~markdown-mark), [**markdown-mark-solid**](https://gitlab-org.gitlab.io/gitlab-svgs/?q=~markdown-mark-solid), [**tanuki-ai**](https://gitlab-org.gitlab.io/gitlab-svgs/?q=~tanuki-ai)

### Enhancements

- Updated the following icons to improve optical sizing in relation to other icons: [**comment**](https://gitlab-org.gitlab.io/gitlab-svgs/?q=~comment), [**comment-dots**](https://gitlab-org.gitlab.io/gitlab-svgs/?q=~comment-dots), [**comment-lines**](https://gitlab-org.gitlab.io/gitlab-svgs/?q=~comment-lines), [**comment-next**](https://gitlab-org.gitlab.io/gitlab-svgs/?q=~comment-next), [**details-block**](https://gitlab-org.gitlab.io/gitlab-svgs/?q=~details-block), [**list-bulleted**](https://gitlab-org.gitlab.io/gitlab-svgs/?q=~list-bulleted), [**list-numbered**](https://gitlab-org.gitlab.io/gitlab-svgs/?q=~list-numbered)

### Changes

- Changed avatar group [**User text inline**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?type=design&node-id=1833-2791&t=I66Ypa7hnKqrP9um-11) instance to include user handle inline too in support of [!3486](https://gitlab.com/gitlab-org/gitlab-ui/-/merge_requests/3486).

### Fixes

- Fixed the pixel alignment of the [**table**](https://gitlab-org.gitlab.io/gitlab-svgs/?q=~table) icon.
- [**❖&nbsp;Menu&nbsp;item**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?type=design&node-id=50570-81619&t=l2mFoV6DmqQb81L1-4), [**❖&nbsp;_Base&nbsp;Sidebar/Flyout&nbsp;menu/Menu&nbsp;items**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?type=design&node-id=43519-45367&t=l2mFoV6DmqQb81L1-4), and [stacked avatar instances](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?type=design&node-id=36196-30381&t=l2mFoV6DmqQb81L1-4) use the correct badge component.
- [**❖&nbsp;_Base/Color&nbsp;swatch**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?type=design&node-id=65858-133015&t=l2mFoV6DmqQb81L1-4) uses the correct checkbox component.

### Removals

- The following have been permanently removed. This will help streamline future updates and limit the scope of upcoming type scale work. All related pages, components, and styles are included in the removal. See [#1622](https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/issues/1622) for details. Please refer to the Figma file history if you need to retrieve an old design artifact.
  - Badge (⚠️ DEPRECATED), use [**❖&nbsp;Badge**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?type=design&node-id=59780%3A92312&t=mhPqIFOuQslBIb44-1)
  - Breadcrumb (⚠️ DEPRECATED), use [**❖&nbsp;Breadcrumb**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?type=design&node-id=425%3A5&t=mhPqIFOuQslBIb44-1)
  - Dropdown (⚠️ DEPRECATED), use [**❖&nbsp;Dropdown**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?type=design&node-id=425-14&t=mhPqIFOuQslBIb44-11)
  - Forms (⚠️ DEPRECATED), use [**Forms**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?type=design&node-id=49840%3A75722&t=mhPqIFOuQslBIb44-1)
  - Segmented control (⚠️ DEPRECATED), use [**❖&nbsp;Button group**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?type=design&node-id=20378-296&t=mhPqIFOuQslBIb44-11)
  - Typography (⚠️ DEPRECATED), use [**Typography**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?type=design&node-id=440-0&t=mhPqIFOuQslBIb44-11)

## 16.0

<small>Published 2023-05-22</small>

### Additions

- Added the following icons: [**cloud-pod**](https://gitlab-org.gitlab.io/gitlab-svgs/?q=~cloud-pod), [**comment-lines**](https://gitlab-org.gitlab.io/gitlab-svgs/?q=~comment-lines), [**reply**](https://gitlab-org.gitlab.io/gitlab-svgs/?q=~reply).
- Added the following illustrations: [**empty-labels-starred-md**](https://gitlab-org.gitlab.io/gitlab-svgs/illustrations/?q=illustrations/empty-state/empty-labels-starred-md.svg), [**empty-friends-md**](https://gitlab-org.gitlab.io/gitlab-svgs/illustrations?q=illustrations/empty-state/empty-friends-md.svg), [**empty-groups-md**](https://gitlab-org.gitlab.io/gitlab-svgs/illustrations?q=illustrations/empty-state/empty-groups-md.svg), [**empty-issues-md**](https://gitlab-org.gitlab.io/gitlab-svgs/illustrations?q=illustrations/empty-state/empty-issues-md.svg), [**empty-merge-requests-md**](https://gitlab-org.gitlab.io/gitlab-svgs/illustrations?q=illustrations/empty-state/empty-merge-requests-md.svg), [**empty-pipeline-md**](https://gitlab-org.gitlab.io/gitlab-svgs/illustrations?q=illustrations/empty-state/empty-pipeline-md.svg), [**search-sm**](https://gitlab-org.gitlab.io/gitlab-svgs/illustrations?q=illustrations/search-sm.svg), [**secure-sm**](https://gitlab-org.gitlab.io/gitlab-svgs/illustrations/?q=illustrations/secure-sm.svg).

### Enhancements
- Added text properties to **❖&nbsp;Link&nbsp;/&nbsp;UI link** and **❖&nbsp;Link&nbsp;/&nbsp;Mention** allowing link content to be editable from the side bar.

### Changes
- Changed [link component](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?node-id=81916-116837) color for interactive states based on guidelines changes in [!3327](https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/merge_requests/3327).
  - **❖&nbsp;Link&nbsp;/&nbsp;Inline&nbsp;link**
  - **❖&nbsp;Link&nbsp;/&nbsp;UI&nbsp;link**
  - **❖&nbsp;Link&nbsp;/&nbsp;Meta&nbsp;link**
  - **❖&nbsp;Link&nbsp;/&nbsp;Mention**
- Changed heading style by adding "breakpoint" and clarifying the range in order to make it more clear that a heading size is chosen by breakpoint and not a preferred size.
- Updated the following illustrations: [**empty-subgroup-md**](https://gitlab-org.gitlab.io/gitlab-svgs/illustrations/?q=illustrations/empty-state/empty-subgroup-md.svg), [**rocket-launch-md**](https://gitlab-org.gitlab.io/gitlab-svgs/illustrations/?q=illustrations/rocket-launch-md.svg).
- Increased contrast for [label instances](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?node-id=1531-2&t=ZrpNCwtIrer1pRZo-11) that didn't meet 4.5:1.

### Fixes

- Breaking (medium): Fix height of [**❖&nbsp;Option**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?type=design&node-id=65765-98174&t=zF4a3tAsVJGGuzTk-11) component (part of dropdown). Options now resize correctly in prototypes. For existing uses, it's possible that each option will shift height by up to 4px. To migrate, check if dropdown sizing needs to be increased, and if not using auto layout ensure spacing between options is correct.
- Made dropdown [empty state](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?type=design&node-id=61256-133768&t=zF4a3tAsVJGGuzTk-4) example plain text instead of an option with states.
- Removed bottom padding from last list items in some [dropdown instances](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?type=design&node-id=65182-99209&t=zF4a3tAsVJGGuzTk-11) for proper padding within the panel after scrolling to the bottom.
- The nested layer names of the following icons in the [GitLab Product Icons](https://www.figma.com/file/h4YjjttHL5YI0mXZfQ4uuU/GitLab-Product-Icons?node-id=0%3A1&t=Ta7o7P5IrksrZ3r4-1) file has been changed to "icon" in order to preserve color overrides:
  - **stop**
  - **highlight**
  - **attention-solid**
  - **attention-solid-sm**
- The [**code**](https://gitlab-org.gitlab.io/gitlab-svgs/?q=~code) icon has been recreated to correct it being flipped when used in a component.
- Fixed the broken [typescale code blocks](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?node-id=72017-102904&t=7tow6e6oHv2EeFwa-11).

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
