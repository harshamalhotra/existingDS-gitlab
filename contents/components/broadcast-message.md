---
name: Broadcast message
figma: https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/Pajamas-UI-Kit?node-id=425%3A6
docs: complete
vueComponents:
  - GlBroadcastMessage
related:
  - alert
---

Broadcast messages provide an efficient and prominent way to deliver critical messages at the instance level to all users. For example, a broadcast message can be used when an admin wants to announce that their platform will experience downtime during a specific period.

In comparison with an [alert](/components/alert), broadcast messages are created by an admin and not triggered by the system.

## Usage

Broadcast messages are always located at the top of the page, above the [global navigation](/regions/navigation). They use a background color that matches the available theme colors but should stand apart to ensure users notice the information.

Broadcast messages expire after a set period as defined by the admin but they can also be dismissed at the user level.

Broadcast messages generally contain a small amount of content. It is a rare usecase for multiple broadcast messages to be present at a given time. When this happens, however, the messages should stack.

## Demo

[[Example:broadcast-message-basic-example]]

## Specifications

- The content within a broadcast message should use the container width when user preference is set to use a [fixed width](https://docs.gitlab.com/ee/user/profile/preferences.html#layout-width) layout.
- The close button tooltip should read “Dismiss” on hover.

### Design

- Background uses `$[hue]-700` of chosen theme.
- Border-bottom uses `$[hue]-900` of chosen theme.
- Anchoring message text uses `text-decoration: underline;` 

Color, spacing, dimension, and layout specific information pertaining to this component can be viewed using the following link:

[View design in Pajamas UI Kit →](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/Pajamas-UI-Kit-Beta?node-id=1501%3A1583)
