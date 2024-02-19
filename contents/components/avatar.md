---
name: Avatar
description: An avatar represents a unique entity, like a person, group, or project.
docs: in-progress
components:
  - base-avatar
related:
  - badge
  - breadcrumb
---

## Examples

<story-viewer component="base-avatar" story="image" title="Avatar image"></story-viewer>

<story-viewer component="base-avatar-labeled" title="Labeled avatar"></story-viewer>

<story-viewer component="base-avatar-avatars-inline" title="Group" :args-collapsed="false"></story-viewer>

<story-viewer component="base-avatar-avatars-inline" title="Stack"></story-viewer>

[View in Pajamas UI Kit →](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?type=design&node-id=425-2&mode=design)

## Structure

<figure-img alt="Numbered diagram of an avatar structure" label="Avatar structure" src="/img/avatar-structure.svg"></figure-img>

1. **Image or identicon**: A unique image or fallback representing the object.
1. **Label and sub-label** (optional): Text corresponding to the image or identicon.

## Guidelines

### When to use

- Use an avatar to consistently represent a person, group, or project where the visual or semantic relationship provides context to the content it's in proximity to.

### When not to use

- An avatar only represents a user, project, or group. Consider an [icon](/product-foundations/iconography) to visually represent interactive elements or other metaphors.

### Variants

1. **Circle**: A circle is used for a person.
1. **Square**: A rounded square is used for a group or project.

### Sizes

- The size of an avatar varies depending upon its context.
- **Available sizes** (in pixels): 16, 24, 32, 48, 64, 96.

### Behavior

- A standalone avatar without adjacent descriptive text must use a [tooltip](/components/tooltip) clarifying what it represents.

### Content

- An avatar image is added to a profile, group, or project by a user.
  - A circle avatar for a user has a [Gravatar](https://gravatar.com) fallback of either a configured or randomly generated image.
  - A square avatar uses a text fallback (identicon) where the text character is an abbreviation of the object it represents.
- A text label identifies the subject of the avatar.
- A text sub-label provides content or metadata for the label.

### Multiple avatars

The following only applies to circle avatars.

#### Group

- A collection of avatars without labels can be grouped.
- When the group wraps to more than one line use a text action to show and hide additional avatars.
  - Use "+{#} more" to expand the group. Replace "#" with the number of avatars that aren't visible.
  - Use "- show less" to collapse the group.

<figure-img alt="Two avatar group examples, one collapsed with an action to show more, and the other expanded with an action to show less." label="Collapsed and expanded avatar group" src="/img/avatar-group.svg"></figure-img>

#### Stack

- Avatars form a horizontal stack when space is especially limited.
- The number of avatars in a stack is variable, but should never cause wrapping.
- Use a [badge](/components/badge) after the last avatar to display the number of avatars that aren't visible. It can optionally be an action that leads a user to more context for all associated avatars. The badge and avatar sizes should be the same.

<figure-img alt="Three avatars slightly overlap each other in a horizontal row. A badge at the end includes the number of additional avatars that aren't visible" label="A horizontal avatar stack" src="/img/avatar-stack.svg"></figure-img>

### Accessibility

- A standalone avatar image should use a descriptive `alt` tag where the content matches that of the tooltip. See the [behavior](#behavior) section for more about the use of a tooltip.
- If an avatar image is adjacent to descriptive text, like a user or project name, it should use an empty `alt` tag so it can be ignored by a screen reader.
