---
name: Avatar
description: An avatar represents a unique entity, like a person, group, or project.
docs: in-progress
stories:
  - base-avatar--image
related:
  - badge
  - breadcrumb
---

## Examples

[[Story:base-avatar--image|Avatar image]]

[[Story:base-avatar-labeled--default|Labeled avatar]]

Todo: Add group demo

Todo: Add stack demo

[View in Pajamas UI Kit →](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/Component-library?node-id=425%3A2)

## Structure

<figure class="figure" role="figure" aria-label="Avatar structure">
  <img class="figure-img" src="/img/avatar-structure.svg" alt="Numbered diagram of an avatar structure" role="img" />
</figure>

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

<figure class="figure" role="figure" aria-label="Collapsed and expanded avatar group">
  <img class="figure-img" src="/img/avatar-group.svg" alt="Two avatar group examples, one collapsed with an action to show more, and the other expanded with an action to show less." role="img" />
  <figcaption class="figure-caption">Collapsed and expanded avatar group</figcaption>
</figure>

#### Stack

- Avatars form a horizontal stack when space is especially limited.
- The number of avatars in a stack is variable, but should never cause wrapping.
- Use a [badge](/components/badge) after the last avatar to display the number of avatars that aren't visible. It can optionally be an action that leads a user to more context for all associated avatars. The badge and avatar sizes should be the same.

<figure class="figure" role="figure" aria-label="A horizontal avatar stack">
  <img class="figure-img" src="/img/avatar-stack.svg" alt="Three avatars slightly overlap each other in a horizontal row. A badge at the end includes the number of additional avatars that aren't visible" role="img" />
  <figcaption class="figure-caption">A horizontal avatar stack</figcaption>
</figure>

### Accessibility

- A standalone avatar image should use a descriptive `alt` tag where the content matches that of the tooltip. See the [behavior](#behavior) section for more about the use of a tooltip.
- If an avatar image is adjacent to descriptive text, like a user or project name, it should use an empty `alt` tag so it can be ignored by a screen reader.
