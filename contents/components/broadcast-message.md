---
name: Broadcast message
description: A broadcast message delivers an instance level message from the admin to all users.
figma: https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/Pajamas-UI-Kit?node-id=425%3A6
docs: complete
components:
  - base-broadcast-message
related:
  - alert
---

## Examples

<story-viewer component="base-broadcast-message" title="Default broadcast message"></story-viewer>

[View in Pajamas UI Kit →](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/Pajamas-UI-Kit-Beta?node-id=1501%3A1583)

## Structure

<figure-img alt="Numbered diagram of the broadcast message structure" label="Broadcast message structure" src="/img/broadcast-message-structure.svg"></figure-img>

1. **Container**: Wraps the content.
1. **Icon**: The [bullhorn](http://gitlab-org.gitlab.io/gitlab-svgs/?q=~bullhorn) icon indicates an announcement.
1. **Message**: Text content indicating the purpose.
1. **Dismiss button** (optional): Permanently removes the broadcast message for a user.

## Guidelines

### When to use

- Make an announcement or provide a notification from an admin to all users within a single instance.

### When not to use

- If you need to provide a system generated, contextual, and timely message to a user, use an [alert](/components/alert) instead.
- If you are immediately confirming a user's action while they remain in the same view, use a [toast](/components/toast) instead.

### Appearance

Background color is chosen by the admin from a set of swatches when creating the broadcast message.

### Behavior

Expires after a set period defined by the admin, but may also be dismissed by a user if the dismiss setting is enabled by the admin.

### Content

Contains a small amount of text content that uses the container width when user preference is set to use a [fixed width](https://docs.gitlab.com/ee/user/profile/preferences.html#layout-width) layout.

### Placement

- Located at the top of the page, above the [global navigation](/patterns/navigation).
- Multiple broadcast messages stack vertically.

### Accessibility

- Part of the DOM order on load, and should flow in the natural reading order.
- The dismiss button uses `aria-label="Dismiss"`.
