---
name: Label
description: Labels are editable objects that allow users to manually categorize other objects, like issues, merge requests, and epics. They have a name, description, and a customizable color. They provide a quick way to recognize which categories the labeled object belongs to.
components:
  - base-label
related:
  - badge
---

## Examples

<story-viewer component="base-label" title="Label"></story-viewer>

<story-viewer component="base-label" story="scoped" title="Scoped"></story-viewer>

<story-viewer component="base-label" story="with-close-button" title="With close"></story-viewer>

[View in Pajamas UI Kit →](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?type=design&node-id=425-127&mode=dev)

## Structure

<todo>Add structure image.</todo>

## Guidelines

### When to use

<todo>Add when to use.</todo>

### When not to use

- If displaying more generic object metadata that are not categories, consider using [badges](/components/badge). 

### Variants

1. **Scoped Labels**: Scoped labels are a unique type of label, characterized by their mutually exclusive behavior. Each scoped label has a `key` and a `value`. An issue, epic, or merge request can only have one scoped label of a specific `key`. For example, if an issue has the label `workflow::ready for design`, it cannot have any other `workflow::` labels at the same time. Applying a second `workflow::` label will automatically replace the former. A scoped label is visually differentiated from a regular label by the contrasting colors on the left and right sides of the label.

### Behavior

- Clicking on a label filters the view, or navigates the user to a list view filtered by that label.
- Users can manually filter lists and other types of views by labels.
- Labels can include a [close icon](https://gitlab-org.gitlab.io/gitlab-svgs/?q=~close) that, when clicked, remove the label from the interface.

### Content

#### Description

- A label's description is shown in a [tooltip](/components/tooltip) when hovering the label.

### Accessibility

<todo>Add accessibility guidelines.</todo>
