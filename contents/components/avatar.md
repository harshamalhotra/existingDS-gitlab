---
name: Avatar
description: An avatar represents a unique entity, like a person, group, or project.
docs: in-progress
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

- A standalone avatar image should use a descriptive `alt` tag.
- If an avatar image is adjacent to descriptive text, like a user or project name, it should use an empty `alt` tag so it can be ignored by a screen reader.
- If an avatar has a [tooltip](/components/tooltip) or a [popover](/components/popover) it must also be [focusable via keyboard](/accessibility/keyboard-only) to ensure the content is available for assistive technology. Tooltip content should match that of the `alt` attribute.
- The single text character in the fallback (identicon) has no semantic meaning and uses `aria-hidden="true"` to prevent it from being announced.

## Code reference

### GlAvatar

<story-viewer component="base-avatar" story="image" title="GlAvatar" view-mode="docs"></story-viewer>

### Pajamas::AvatarComponent

<lookbook-viewer component="avatar"></lookbook-viewer>

### GlAvatarLabelled

<story-viewer component="base-avatar-labeled" title="GlAvatarLabelled" view-mode="docs"></story-viewer>

Avatars may also be adjacent to a text alternative, such as a user or project name. In these cases,
a null `alt` text should be used so that they can be ignored by assistive technologies.

Use the `avatar-labeled` component in those scenarios. It will set a null `alt` text by default.
It allows to display a `label` and/or a `sub-label` next to the avatar image. It accepts the same
properties as the avatar component to modify the avatar’s shape and size.

#### Using the component

```html
<gl-avatar-labeled
  :shape="shape"
  :size="size"
  :src="src"
  :label="label"
  :sub-label="subLabel"
/>
```

### GlAvatarInline

<story-viewer component="base-avatar-avatars-inline" title="GlAvatarInline" view-mode="docs"></story-viewer>

Use `<avatars-inline />` to display multiple avatars organized in a single row.

#### Basic usage

The `avatars` property accepts an array of objects that contains the avatar properties. By default,
`<avatars-inline />` expects each object contained in the array to have the same shape as the
properties of the `<avatar />` component. You can customize the display of each avatar by
overriding the default slot:

```html
<gl-avatars-inline :avatars="avatars">
  <template #avatar="{ avatar }">
    <gl-avatar-link v-gl-tooltip target="blank" :href="avatar.href" :title="avatar.tooltip">
      <gl-avatar :src="avatar.src" :size="32" />
    </gl-avatar-link>
  </template>
</gl-avatars-inline>
```

In the example above, the avatars displayed inside `<avatars-inline />` are links pointing to a URL
stored in each avatar object. Each avatar also displays a tooltip. If you override
`<inline-avatars />` default display, you can pass an array of objects with any desired shape to
the `avatars` property.

#### Collapsing

When the `collapse` property value is `true` and the `maxVisible` property value is a number less
than the length of the `avatars` property array, `<avatars-inline>` will hide the overflown avatars
and display a badge instead.

#### Badge description in screen readers

The `badgeSrOnlyText` property provides a meaningful description of the badge that appears
when avatars are collapsed for screen reader users.

#### Supported sizes

`<avatars-inline>` supports avatars with `16`, `24`, or `32` size.

### GlAvatarLink

<story-viewer component="base-avatar-avatar-link" story="GlAvatarLink" title="Avatar link" view-mode="docs"></story-viewer>

`<gl-avatar-link>` decorates `<gl-avatar>` with hyperlink functionality. It accepts the same
properties as the `<gl-link>` component and it works in the same way too. The main purpose of this
component is to apply visual enhancements that makes evident that the user can interact with the
avatar.

#### Using the component

When wrapping an `<gl-avatar>` component, `<gl-avatar-link>` darkens
the border that surrounds the avatar image or fallback text when hovering over it.

```vue
<gl-avatar-link target="blank" href="https://gitlab.com/gitlab-org/gitlab">
  <gl-avatar
    :size="32"
    :src="avatarUrl"
  />
</gl-avatar-link>
```

When wrapping an `<avatar-labeled>` component, `<avatar-link>` underlines
the label and sub-label text when hovering over the avatar. It also applies the
same effects described in the first example.

```vue
<gl-avatar-link target="blank" href="https://gitlab.com/gitlab-org/gitlab">
  <gl-avatar-labeled
    :size="32"
    entity-name="GitLab"
    label="GitLab User"
    sub-label="@gitlab"
  />
</gl-avatar-link>
```
