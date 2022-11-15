---
name: Merge request reports
---

The merge request (MR) reports region includes a wide variety of widgets that report information about the MR changes, helping authors and reviewers understand their impact and what needs to be improved. The following guidelines systematize attributes like layout, hierarchy, and content sections, making the widgets consistent, scannable, and utilitarian. Widgets are designed to adapt to page layout (responsive), and future widgets will have patterns to follow. We provide constraints where possible, but ultimately a widget's unique purpose should define the extent of how the guidelines are applied.

[View in Pajamas UI Kit →](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/Component-library?node-id=38193%3A30482)

## Layout

Each widget is laid out as a grid with three possible horizontal levels and three vertical sections. Levels define [hierarchy](#hierarchy) and sections define [content sections](#content-sections) for each level.

<figure class="figure" role="figure" aria-label="A grid layout of the merge request widget structure identifying the levels and content sections">
  <img class="figure-img" src="/img/mrw-layout.png" alt="Merge request widget layout grid" role="img" />
  <figcaption class="figure-caption">A grid layout of the merge request widget structure identifying the levels and content sections</figcaption>
</figure>

### Levels

- [Level 1](#level-1) - parent level of the widget.
- [Level 2](#level-2) - child of level 1.
- [Level 3](#level-3) - child of level 2.

### Sections

- [Status](#status) - contains the status icon for the widget and each child item.
- [Subject](#subject) - describes the widget and each child item.
- [Actions](#actions) - a group of optional actions for the widget and each level 2 child item.

### Grid

The widgets use [our 8px spacing system](/product-foundations/spacing/) to align elements within. External spacing is always greater than or equal to internal spacing, meaning that as nesting increases, space decreases. This helps identify content relationships and makes the higher levels more scannable. Widget content nests up to two levels deep.

- Level 1 adjusts vertical spacing responsively to keep more widgets in view at smaller breakpoints.
- All levels adjust horizontal spacing responsively to provide more room for the subject at smaller breakpoints.

<figure class="figure" role="figure" aria-label="A layout with different sized overlays to indicate content spacing within a widget">
  <img class="figure-img" src="/img/mrw-grid.png" alt="Merge request widget spacing" role="img" />
  <figcaption class="figure-caption">A layout with different sized overlays to indicate content spacing within a widget</figcaption>
</figure>

### Responsive

Content sections follow a left-to-right reading order at all breakpoints.

- Actions other than info and the expand/collapse toggle are within an overflow (ellipsis) dropdown for the medium breakpoint and down (`<768px`).
- When download options are available, they merge into the overflow menu at small viewports.

<figure class="figure" role="figure" aria-label="Examples of different padding and action options as they change responsively">
  <img class="figure-img" src="/img/mrw-responsive.png" alt="Merge request widget changes per breakpoint" role="img" />
  <figcaption class="figure-caption">Examples of different padding and action options as they change responsively</figcaption>
</figure>

### Overflow

An optional maximum height can be applied to the nested content when level 1 is expanded. This is best used when the number of nested reports typically exceeds five, or when the expanded view introduces a large amount of scrolling that makes it difficult to view the rest of the page content.

<figure class="figure" role="figure" aria-label="Overflow example with scrim overlay to indicate scrolling for the combined levels 2 and 3">
  <img class="figure-img" src="/img/mrw-overflow.png" alt="Merge request widget overflow scrolling" role="img" />
  <figcaption class="figure-caption">Overflow example with scrim overlay to indicate scrolling for the combined levels 2 and 3</figcaption>
</figure>

<todo>Replace static visual with live example</todo>

1. A maximum height is set for the expanded level 2 and level 3 area with overflow scrolling set to `auto`.
1. A scrim visual indicator overlays the bottom of the scroll area when the content height exceeds the maximum height. The scrim is hidden once the end of the scrolling content is reached.

## Hierarchy

In addition to external spacing being greater than internal spacing, widgets use progressive indentation to help establish hierarchy.

### Container

The container wraps one or more widgets.

- `1px` `$gray-100` inset border
- `$white` background
- `4px` border radius

<figure class="figure" role="figure" aria-label="The container that groups merge request widgets with a slightly rounded border radius and light border">
  <img class="figure-img" src="/img/mrw-container.png" alt="Merge request widget container shape" role="img" />
  <figcaption class="figure-caption">The container that groups merge request widgets with a slightly rounded border radius and light border</figcaption>
</figure>

<todo>Replace static visual with live example</todo>

### Level 1

Level 1 is the parent level of the widget and has the primary status in text and icon form, as well as optional controls and actions that apply to the entire widget. The status icon is surrounded by a highlight to make it a stronger visual anchor while emphasizing the status. The primary status is determined by the widget's rules and influenced by level 2 statuses if present. The expand/collapse control is only visible when this level contains children.

- Top border `1px` `$gray-100` for `n+1`
- `$white` background
- Collapsed by default
- Status icon: required

<figure class="figure" role="figure" aria-label="The default layout of level 1 in a widget">
  <img class="figure-img" src="/img/mrw-level-1.png" alt="Merge request widget level 1" role="img" />
  <figcaption class="figure-caption">The default layout of level 1 in a widget</figcaption>
</figure>

<todo>Replace static visual with live example</todo>

### Level 2

Level 2 has a status that may be the same or different from the parent, as well as optional controls and actions that apply to itself. Its influence on the parent status will depend on the type of widget and the applicable rules. Likewise, its status will be determined by applicable rules and influenced by level 3 status if present.

- Content indented and left-aligned to the level 1 subject.
- Full width `1px` `$gray-100` top border for `n+1`
- Top border inset (`16px` left and right padding) `1px` `$gray-100` for `n+1`
- `$gray-10` background
- Level 3 children are always visible
- Status icon: optional
- Actions: optional
- Section title and description: optional
- Items that share the same title and/or description do not have a top border.

<figure class="figure" role="figure" aria-label="The default layout of level 2 in a widget">
  <img class="figure-img" src="/img/mrw-level-2.png" alt="Merge request widget level 2" role="img" />
  <figcaption class="figure-caption">The default layout of level 2 in a widget</figcaption>
</figure>

<todo>Replace static visual with live example</todo>

### Level 3

Level 3 has a status that may be the same or different from the level 2 parent. Its influence on the level 2 parent status will depend on the type of widget and the applicable rules.

- Content indented and left-aligned to the level 2 subject.
- `$gray-10` background
- Status icon: optional
- Actions: inline text links only
- Section title and description: optional

<figure class="figure" role="figure" aria-label="The default layout of level 3 in a widget">
  <img class="figure-img" src="/img/mrw-level-3.png" alt="Merge request widget level 3" role="img" />
  <figcaption class="figure-caption">The default layout of level 3 in a widget</figcaption>
</figure>

<todo>Replace static visual with live example</todo>

## Content sections

As shown in the [layout](#layout), there are three content sections: status, subject, and actions.

### Status

Each widget has rules that determine its status. The icon at the top level of each widget reflects the highest severity, unless the highest nested severity doesn’t trigger a failure of the parent.

#### Level 1

- <img class="gl-vertical-align-middle" src="/img/mr-status-failed-1.svg" alt="Failed status icon" role="img"> Failed
- <img class="gl-vertical-align-middle" src="/img/mr-status-warning-1.svg" alt="Warning status icon" role="img"> Warning
- <img class="gl-vertical-align-middle" src="/img/mr-status-success-1.svg" alt="Success status icon" role="img"> Success
- <img class="gl-vertical-align-middle" src="/img/mr-status-neutral-1.svg" alt="Neutral status icon" role="img"> Neutral
- <img class="gl-vertical-align-middle" src="/img/mr-status-loading-1.svg" alt="Loading status icon" role="img"> Loading ([spinner](/components/spinner))

#### Level 2–3 general

- <img class="gl-vertical-align-middle" src="/img/mr-status-failed.svg" alt="Failed status icon" role="img"> Failed
- <img class="gl-vertical-align-middle" src="/img/mr-status-error.svg" alt="Error status icon" role="img"> Error
- <img class="gl-vertical-align-middle" src="/img/mr-status-warning.svg" alt="Warning status icon" role="img"> Warning
- <img class="gl-vertical-align-middle" src="/img/mr-status-notice.svg" alt="Notice status icon" role="img"> Notice
- <img class="gl-vertical-align-middle" src="/img/mr-status-success.svg" alt="Success status icon" role="img"> Success
- <img class="gl-vertical-align-middle" src="/img/mr-status-neutral.svg" alt="Neutral status icon" role="img"> Neutral

#### Level 2–3 severity

- <img class="gl-vertical-align-middle" src="/img/mr-status-critical.svg" alt="Severity critical status icon" role="img"> Critical
- <img class="gl-vertical-align-middle" src="/img/mr-status-high.svg" alt="Severity high status icon" role="img"> High
- <img class="gl-vertical-align-middle" src="/img/mr-status-medium.svg" alt="Severity medium status icon" role="img"> Medium
- <img class="gl-vertical-align-middle" src="/img/mr-status-low.svg" alt="Severity low status icon" role="img"> Low
- <img class="gl-vertical-align-middle" src="/img/mr-status-info.svg" alt="Severity info status icon" role="img"> Info
- <img class="gl-vertical-align-middle" src="/img/mr-status-unknown.svg" alt="Severity unknown status icon" role="img"> Unknown

### Subject

Since everything in a widget is technically content, identifying a specific _subject_ section allows us to focus on the text and meta information that identifies the item, what it means for a user, and how to remedy problems.

- Section title, description, and meta information are optional, but the main text is required.
- Follow the [voice and tone](/content/voice-and-tone) guidelines for writing all text content.

<figure class="figure" role="figure" aria-label="Example options and formatting within the subject area with numbered markers corresponding to the list that follows">
  <img class="figure-img" src="/img/mrw-subject.png" alt="Merge request widget subject styles" role="img" />
  <figcaption class="figure-caption">Example options and formatting within the subject area with numbered markers corresponding to the list that follows</figcaption>
</figure>

1. **Section title and description** - groups level 2 and level 3 status items. A description must be preceded by a title, but a title does not require a description.
1. **Text** - identifies the item, what it means for a user, and how to remedy problems. It can contain inline links and formatting to emphasize text.
1. **Meta** - supplemental text, links, and badges that add meaningful context to an item. Text can include formatting for emphasis.

<todo>Replace static visual with live example</todo>

### Actions

Actions available for level 1 and level 2 and always use the tertiary confirm or default [button](/components/button) variants.

- Only level 1 can be expanded and collapsed.
- Level 3 can only have inline text links.
- All actions are optional except the expand/collapse toggle for a level 1 item with children.

<figure class="figure" role="figure" aria-label="Example actions with numbered markers corresponding to the list that follows">
  <img class="figure-img" src="/img/mrw-actions.png" alt="Merge request widget actions" role="img" />
  <figcaption class="figure-caption">Example actions with numbered markers corresponding to the list that follows</figcaption>
</figure>

1. **Info button** - provides supplemental information in a [popover](/components/popover/).
1. **Options button** - at smaller breakpoints opens a dropdown with available actions. On hover/focus a [tooltip](/components/tooltip/) reads “{widget} options”.
1. **Download dropdown** - ability to download assets related to the widget. On hover/focus a [tooltip](/components/tooltip/) reads “{widget} downloads”.
1. **Tertiary button** - actions that can be taken on or from the widget, like “Manage licenses” or “View report”.
1. **Expand/collapse button** - toggles the visibility of level 2 and level 3 items when present. On hover/focus a [tooltip](/components/tooltip/) reads “Show {widget} details” when collapsed and “Hide {widget} details” when expanded.
1. **Inline links** - can be used to provide more information about level 3 items. For example, by linking to another page or by triggering a [modal](/components/modal).

<todo>Replace static visual with live example</todo>

## Accessibility

The following provides guidance on roles, keyboarding, and content for screen readers.

**Legend**

- <img class="gl-vertical-align-middle" src="/img/a11y-annotation-region.svg" alt="Region marker" role="img"> Region
- <img class="gl-vertical-align-middle" src="/img/a11y-annotation-tab-order.svg" alt="Tab order marker" role="img"> Tab order
- <img class="gl-vertical-align-middle" src="/img/a11y-annotation-screen-reader.svg" alt="Screen reader marker" role="img"> Screen reader
- <img class="gl-vertical-align-middle" src="/img/a11y-annotation-note.svg" alt="Note marker" role="img"> Note

### Landmark

The widget area is an important enough section of a merge request page that it should be identified as its own [landmark region](https://w3c.github.io/aria-practices/examples/landmarks/region.html). It contains the unordered list where each widget is a list item. See the [notes](#notes) section below for markup recommendations.

<figure class="figure" role="figure" aria-label="A basic merge request report region is contained within a border highlighting the parent div that has an assigned role of region">
  <img class="figure-img" src="/img/mrw-a11y-landmark.png" alt="Merge request landmark highlight" role="img" />
  <figcaption class="figure-caption">A basic merge request report region is contained within a border highlighting the parent div that has an assigned role of region</figcaption>
</figure>

1. `<div role="region" aria-label="Merge request reports">`

### Focus order

The focus order traverses focusable elements in the DOM in a left-to-right, top-down order.

<figure class="figure" role="figure" aria-label="Numbered markers represent the expected tab order of the focusable content within a widget">
  <img class="figure-img" src="/img/mrw-a11y-focus-order.png" alt="Merge request focus order highlights" role="img" />
  <figcaption class="figure-caption">Numbered markers represent the expected tab order of the focusable content within a widget</figcaption>
</figure>

- `TAB` key moves through the list of interactive items in the order of the DOM.
- `ENTER` or `SPACE` key expands/collapses the mobile overflow dropdown.
- `ENTER` or `SPACE` key expands/collapses a level 1 item to reveal level 2–3 content.

### Screen reader

The following highlights element attributes and the general expectation of how they should be announced by a screen reader.

<figure class="figure" role="figure" aria-label="Numbered markers highlight areas to identify how they're announced within a widget">
  <img class="figure-img" src="/img/mrw-a11y-screen-reader.png" alt="Merge request screen reader announcement highlights" role="img" />
  <figcaption class="figure-caption">Numbered markers highlight areas to identify how they're announced within a widget</figcaption>
</figure>

1. `aria-label="{status} {widget}"`<br>
   SR: “{status} {widget}, image”
1. `aria-label="{widget} information"`<br>
   `aria-describedby="{popoverID}"`
   SR: “{widget} information, button, {popoverID content}”
1. `aria-label="[widget} options"`<br>
   Collapsed: `aria-expanded="false"` → Expanded: `aria-expanded="true"`<br>
   `aria-haspopup="true"`<br>
   `aria-controls="{menuID}"`<br>
   SR collapsed: “{widget} options, collapsed, pop up button” → SR expanded: “{widget} options, expanded, pop up button”
1. Collapsed: `aria-label="Show {widget} details"` → Expanded: `aria-label="Hide {widget} details"`<br>
   Collapsed: `aria-expanded="false"` → Expanded: `aria-expanded="true"`<br>
   `aria-controls="{nestedStatusID}"`<br>
   SR collapsed: “Show {widget} details, collapsed, button” → SR expanded: “Hide {widget} details, expanded, button”
1. `aria-label="Downloads"`
   Collapsed: `aria-expanded="false"` → Expanded: `aria-expanded="true"`<br>
   `aria-haspopup="true"`<br>
   `aria-controls="{menuID}"`<br>
   SR collapsed: “Downloads, collapsed, pop up button” → SR expanded: “Downloads, expanded, pop up button”
1. `aria-label="{status} {report}"`<br>
   SR: “{status} {report}, image”

### Notes

The widgets are organized in an unordered list, which has the benefit of providing hierarchy and a report count (number of list items) to screen reader users.

<figure class="figure" role="figure" aria-label="The merge request report region with overlays that highlight the semantic container div and unordered list structure">
  <img class="figure-img" src="/img/mrw-a11y-notes.png" alt="Merge request notes highlights" role="img" />
  <figcaption class="figure-caption">The merge request report region with overlays that highlight the semantic container div and unordered list structure</figcaption>
</figure>

1. The widget group is wrapped in a `<div>` that functions as a [landmark](#landmark).
1. Each level is a `<ul>` with `<li>`s for individual reports. A title and description for a report are contained within that report’s `<li>`.
