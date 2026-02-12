---
name: Broadcast message
description: A broadcast message delivers an instance level message from the admin to all users.
figma: https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/Pajamas-UI-Kit?node-id=425%3A6
related:
  - alert
extendedNotice:
  owners: group::engagement
  contacts:
    - text: '#g_engagement on slack'
      url: 'https://gitlab.slack.com/channels/g_engagement'
    - text: '@gitlab-org/growth/engagement on GitLab'
      url: 'https://gitlab.com/groups/gitlab-org/growth/engagement/-/group_members?with_inherited_permissions=exclude'
---

## Examples

<story-viewer component="base-broadcast-message" title="Default broadcast message"></story-viewer>

[View in Pajamas UI Kit →](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?type=design&node-id=425-6&mode=design)

## Structure

<figure-img alt="Numbered diagram of the broadcast message structure" label="Broadcast message structure" src="/img/broadcast-message-structure.svg"></figure-img>

1. **Container**: Wraps the content.
1. **Icon**: The [bullhorn](/product-foundations/iconography-directory/?q=~bullhorn) icon indicates an announcement.
1. **Message**: Text content indicating the purpose.
1. **Dismiss button** (optional): Permanently removes the broadcast message for a user.

## Guidelines

### When to use

- Make an announcement or provide a notification from an admin to all users within a single instance.

### When not to use

- If you need to provide a system generated, contextual, and timely message to a user, use an [alert](/components/alert) instead.
- If you are immediately confirming a user's action while they remain in the same view, use a [toast](/components/toast) instead.

### Appearance

- Background color is chosen by the admin from a set of swatches when creating the broadcast message.

### Behavior

- Expires after a set period defined by the admin, but may also be dismissed by a user if the dismiss setting is enabled by the admin.

### Content

- Contains a small amount of text content that uses the container width when user preference is set to use a [fixed width](https://docs.gitlab.com/ee/user/profile/preferences.html#layout-width) layout.

### Placement

- At the top of the [static panel](https://design.gitlab.com/product-foundations/layout/#panel-based-layout).
- Multiple broadcast messages stack vertically.

### Accessibility

- Part of the DOM order on load, and should flow in the natural reading order.
- The dismiss button uses `aria-label="Dismiss"`.

## Code reference

Broadcast messages provide an efficient and prominent way to deliver critical messages at the
instance level to all users. For example, a broadcast message can be used when an admin wants to
announce that their platform will experience downtime during a specific period.

In comparison with an alert, broadcast messages are created by an admin and not triggered by the
system.

### Dismiss a broadcast message

The `GlBroadcastMessage` component deals with users dismissal the same way `GlAlert` does, meaning
it does not handle its own visibility but emits a `dismiss` event that the parent component should
listen to in order to hide the message. Example:

```html
<template>
  ...
  <gl-broadcast-message v-if="!dismissed" @dismiss="dismissed = true">
    An important message
  </gl-broadcast-message>
  ...
</template>
```

### GlBroadcastMessage

<story-viewer component="base-broadcast-message" title="GlBroadcastMessage" view-mode="docs"></story-viewer>

### Pajamas::BroadcastBannerComponent

<lookbook-viewer component="broadcast_banner"></lookbook-viewer>
