---
name: Labels
related:
  - badge
---

Labels are editable objects that allow users to manually categorize other objects, like issues, merge requests, and epics. They have a name, description, and a customizable color. They provide a quick way to recognize which categories the labeled object belongs to.

Labels should not be confused with [badges](/components/badge). Badges highlight more generic object metadata that are not categories.

## Usage

Labels are usually displayed in that object's detail page and in list views, next to the corresponding object. Clicking on a label navigates the user to a list view filtered by that label. Users can also manually filter lists and other types of views by labels.

In most places, a label's description is shown in a [tooltip](/components/tooltips) when hovering the label. But if the label's description appears on the page with no need for user interaction, do not show it in a tooltip.

Scoped labels are a sub-type of labels, and their usage is determined by the user. A scoped label is differentiated from a regular label by the contrasting colors on the left and right sides of the label.

## Demo

Todo: Add live component block with code example

## Design specifications

Color, spacing, dimension, and layout specific information pertaining to this component can be viewed using the following link:

[Sketch Measure Preview for labels](https://gitlab-org.gitlab.io/gitlab-design/hosted/design-gitlab-specs/labels-spec-previews/)
