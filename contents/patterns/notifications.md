---
name: Notifications
description: A notification is a user or system-generated update pushed to users.
---

## Structure

Though guidelines are still being defined for both email and UI notifications, you can view examples of all emails, organized by type, in either [GDK](https://docs.gitlab.com/ee/development/emails.html#mailer-previews) or in [Figma](https://www.figma.com/design/wRoOy8FwgL5f3uhEP0gMyv/Define-guidelines-for-notifications-Pajamas-%E2%80%A2-%231888?node-id=12307-26544&t=ctKNm5g1co2EWxZi-1). Examples of current UI notifications are also visible in [Figma](https://www.figma.com/design/uH0dVVB1PBdJ929KEiGqFf/Notifications?node-id=6977-111489&t=IdcDigotUwYmlbdv-1). Components for both are forthcoming.

<todo>Add structure image for email and UI notifications.</todo>

## Guidelines

Notifications from GitLab appear in two places: in a user's email and in the product, on the To-Do List. The To-Do List items are currently a small, actionable subset of the available notifications.

### When to use

- When a user needs to be made aware of a system action.
- When another user is awaiting a response.
- When there is an important product update a user should be aware of.

### When not to use

- Sharing trivial details. Overburdening users with notifications is fatiguing and inhibits productivity, but also devalues the notification system as a whole.
- For in-context updates, consider using an [alert](/components/alert), [toast](/components/toast) or [banner](/components/banner) instead, depending on severity and content.

### Behavior

Both email notifications and UI notifications are generally linked to the events within GitLab that generated them, allowing users to quickly jump to the relevant context, and take action if needed.

### Content

Both email and UI notifications aim to keep users up-to-date about things happening within GitLab. Content of email and UI notifications is currently non-identical, though we are working to bring more of a parity between them. Until then, for any new email notifications created, consider adding a corresponding To-Do, as well.

### Configuration

What appears as an email or UI notification should reflect a user's preferences for how and when they are contacted. Email notification settings are configured in user settings, under [/profile/notifications](https://gitlab.com/-/profile/notifications). In the future, users will be able to [customize](https://gitlab.com/gitlab-org/gitlab/-/issues/320912) what appears in their To-Do List, as well.
