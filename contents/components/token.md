---
name: Token
description: A token represents a keyword used to add or filter objects.
componentLabel: form-token
components:
  - base-token
related:
  - filter
  - badge
  - label
---

## Examples

<story-viewer component="base-token" title="Interactive"></story-viewer>

<story-viewer component="base-token" story="view-only" title="View-only"></story-viewer>

<story-viewer component="base-token" story="with-avatar" title="Avatar"></story-viewer>

[View in Pajamas UI Kit →](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/Component-library?node-id=425%3A141)

## Structure

<figure-img alt="Numbered diagram of a token structure" label="Token structure" src="/img/token-structure.svg"></figure-img>

1. **Container**: Wraps the content.
1. **Avatar** (optional): Prefixes the text for a user, project, or group.
1. **Text**: Represents the query.
1. **Remove button** (optional): Permanently removes the token.

## Guidelines

### When to use

- In a search query where the user is expected to include multiple queries.
- To represent dynamic user input in a [filter](/components/filter) and verify the input by converting the text into a token.
- Allow a user to manage, filter, and search in a compact area.

### When not to use

- If you need to categorize an object, use a [label](/components/label) instead.
- To highlight more generic object metadata that is system-generated, use a [badge](/components/badge) instead.

### Variants

- **Interactive**: Include a [close](http://gitlab-org.gitlab.io/gitlab-svgs/?q=~close) icon at the end of the token. When enabled, a user can click the icon to remove the token from the set.
- **View-only**: Can't be removed.
- **Avatar**: When querying for a user, project, or group, an avatar token should be used. These can be either interactive or view-only.

### Placement

- A token can be positioned inline with the text cursor in a field, or in a stacked list.
- A token can wrap to a new row.

### Behavior

A token can be used to both add and filter content where:

- An input token adds content in the form of an attribute attached to another object.
- A filter token narrows down content and is attached to a qualifier. The [filter](/components/filter) inherits a filter token.

### Accessibility

<todo>Add accessibility requirements and considerations.</todo>
