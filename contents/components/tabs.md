---
name: Tabs
---

Tabs are used to divide content into meaningful, related sections. Tabs allow users to focus on one specific view at a time while maintaining sight of all the relevant content options available. Each tab, when active, will reveal it's own unique content.

Tabs may include a counter. This counter enables users to understand how many items that particular view contains.

## Usage

There can only be one tab active at a given time. Tabs may be nested, with a maximum nesting of two levels. Please note that this should be considered only as a last resort.

### Tabs with counter badges

If tabs containa a counter badge, the value of "All" should be the sum of the rest of the tabs. A badged tab should not be included if it breaks this pattern.

For example in the merge request list view, there should not be "Open" and "WIP" tabs. As a merge request can be both "Open" and "WIP," this will cause the sum of all badges not to match the number of "All" merge requests. An alternative would be to have a separate sorting function within the tab's content which filters open merge requests by "WIP."

### Fitted tabs

When tabs are used in a narrow container, column, or space, the tabs themselves may be fitted to the entire width instead of remaining left aligned.

## Demo

Todo: Add live component block with code example

## Design specifications

Color, spacing, dimension, and layout specific information pertaining to this component can be viewed using the following link:

[Sketch Measure Preview for tabs](https://gitlab-org.gitlab.io/gitlab-design/hosted/design-gitlab-specs/tabs-spec-previews/)

Todo: Add Sketch Measure Preview for fitted tabs

## Related patterns

*   [Navigation](../regions/navigation)
