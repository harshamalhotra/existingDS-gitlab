---
name: Avatar group
description: An avatar group displays multiple user avatars in a compact layout.
related:
  - avatar
  - badge
---

## Examples

<story-viewer component="base-avatar-avatars-inline" title="Stack" :args-collapsed="false"></story-viewer>

<story-viewer component="base-avatar-avatars-inline" title="Stack collapsed"></story-viewer>

<todo>
Add link to Pajamas UI Kit when avatar group assets are available.
</todo>

## Structure

<figure-img alt="Numbered diagram of avatar group structure" label="Avatar group structure" src="/img/avatar-group-structure.svg"></figure-img>

1. **Avatar group**: Collection of user avatars.
1. **Badge** (optional): Shows the count of additional avatars when collapsed.
1. **Action text** (optional): Text to expand or collapse the group.

## Guidelines

### When to use

- Display multiple users associated with the same context.
- Show user participation or involvement when space is limited.

### When not to use

- To represent a single user. Use the [avatar](/components/avatar) component instead.
- For displaying collections of projects or groups.
- When you need clear identification of each user rather than just a visual impression of involvement.

### Variants

#### Stack

- User avatars form a horizontal stack when space is especially limited.
- The number of avatars in a stack is variable, but should never cause wrapping.
- Use a [badge](/components/badge) after the last avatar to display the number of avatars that aren't visible. It can optionally be an action that leads a user to more context for all associated avatars. The badge and avatar sizes should be the same.

<figure-img alt="Three avatars slightly overlap each other in a horizontal row. A badge at the end includes the number of additional avatars that aren't visible" label="A horizontal avatar stack" src="/img/avatar-stack.svg"></figure-img>

#### Group

<note>
The group variant is a design pattern that is not yet implemented as a coded component.
</note>

- A collection of user avatars without labels can be grouped.
- When the group wraps to more than one line use a text action to show and hide additional avatars.
  - Use "+{#} more" to expand the group. Replace "#" with the number of avatars that aren't visible.
  - Use "- show less" to collapse the group.

<figure-img alt="Two avatar group examples, one collapsed with an action to show more, and the other expanded with an action to show less." label="Collapsed and expanded avatar group" src="/img/avatar-group.svg"></figure-img>

### Behavior

- Stacks maintain a fixed horizontal layout without wrapping.
- Groups can expand and collapse to show more or fewer avatars.
- A [popover](/components/popover) or [tooltip](/components/tooltip) can provide additional context for each avatar.

### Content

- Each user avatar follows the same content guidelines as individual [avatars](/components/avatar).
- Badge text should clearly indicate the number of hidden user avatars.

### Accessibility

- Each avatar in the group maintains the same accessibility requirements as individual avatars.
- Badge content should be meaningful to screen readers.
- Interactive elements must be keyboard accessible.
- The `badgeSrOnlyText` property provides screen reader descriptions for collapsed avatars.

## Code reference

### Basic usage

The `avatars` property accepts an array of objects that contains the avatar properties. By default,
`<gl-avatars-inline />` expects each object contained in the array to have the same shape as the
properties of the `<gl-avatar />` component. You can customize the display of each avatar by
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

The avatars in the example above `<gl-avatars-inline />` are links pointing to a URL
stored in each avatar object. Each avatar also displays a tooltip. If you override
`<inline-avatars />` default display, you can pass an array of objects with any desired shape to
the `avatars` property.

### Collapsing

When the `collapse` property value is `true` and the `maxVisible` property value is a number less
than the length of the `avatars` property array, `<gl-avatars-inline>` will hide the overflown avatars
and display a badge instead.

### Badge description in screen readers

The `badgeSrOnlyText` property provides a meaningful description of the badge that appears
when avatars are collapsed for screen reader users.

### Supported sizes

`<gl-avatars-inline>` supports avatars with `16`, `24`, or `32` size.

### GlAvatarInline

<story-viewer component="base-avatar-avatars-inline" title="GlAvatarInline" view-mode="docs"></story-viewer>
