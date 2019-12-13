---
name: Avatar
vueComponents:
  - GlAvatar
related:
  - /layout/grid
  - badge
---

Avatars are used to represent a unique entity, be it a person, a group, or a project.

## Usage

Avatars representing persons use a circular shape and avatars representing a group or a project use a rounded square shape. They come in a variety of sizes. The size of an avatar varies depending upon the element it resides in as well as the size of the viewport.

It is preferable that an avatar display an image. Images are personalized and make good use of the ability of the human brain to recognize faces. Project and group avatars contain a fallback in the case an image is not provided. This fallback will display the first letter of the project or group name. Personal avatars have a [Gravatar](https://gravatar.com) fallback which contains either a configured image or a randomly generated image.

[[Example:avatar-image]]

Avatars may also be adjacent to a text alternative, such as a user or project name. In these cases, a null `alt` text should be used so that they can be ignored by assistive technologies.

[[Example:avatar-labeled]]

### Displaying multiple avatars

Some features, such as Issue assignees and Merge Request threads on diffs, require the display of multiple avatars, side by side.

#### Overlap

When space is tight, overlap avatars slightly. Depending on the available space, if there are more than one or two avatars, use a [badge](/components/badge) after the last avatar item to display the number of additional avatars as a placeholder.

Todo: Add overlap demo with badge count

#### Grid

When space allows, display avatars in a [grid](/layout/grid).

Todo: Add grid demo

In areas where the avatar grid would expand multiple lines, provide a clickable option to expand and collapse the additional avatars.

Todo: Add grid demo with expand/collapse

## Design specifications

Color, spacing, dimension, and layout specific information pertaining to this component can be viewed using the following link:

[Sketch Measure Preview for avatars](https://gitlab-org.gitlab.io/gitlab-design/hosted/design-gitlab-specs/avatar-spec-previews/)
