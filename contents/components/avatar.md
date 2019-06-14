---
name: Avatars
vueComponents:
  - GlAvatar
---

Avatars are used to represent a unique entity, be it a person, a group, or a project.

## Usage

Avatars representing persons use a circular shape and avatars representing a group or a project use a rounded square shape. They come in a variety of sizes. The size of an avatar varies depending upon the element it resides in as well as the size of the viewport.

It is preferable that an avatar display an image. Images are personalized and make good use of the ability of the human brain to recognize faces. Project and group avatars contain a fallback in the case an image is not provided. This fallback will display the first letter of the project or group name. Personal avatars have a [Gravatar](https://gravatar.com) fallback which contains either a configured image or a randomly generated image.

### Displaying multiple avatars

Some features require the display of multiple avatars, side by side. If there is enough space, they should be displayed in a grid pattern. In tighter places, avatars may overlap one another.

Todo: Add an example of multiple avatars using live components

## Demo

[[Example:avatar-image]]

## Design specifications

Color, spacing, dimension, and layout specific information pertaining to this component can be viewed using the following link:

[Sketch Measure Preview for avatars](https://gitlab-org.gitlab.io/gitlab-design/hosted/design-gitlab-specs/avatar-spec-previews/)
