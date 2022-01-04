---
name: Banner
description: A banner promotes awareness of a new feature or high-priority research initiative.
stories:
  - base-banner--default
related:
  - alert
  - broadcast-message
  - button
  - empty-states
---

## Examples

[[Story:base-banner--introduction]]

[[Story:base-banner--default]]

[[Story:base-banner--no-image|Promotion]]

[View design in Pajamas UI Kit →](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/Pajamas-UI-Kit?node-id=4845%3A7873)

## Structure

<figure class="figure" role="figure" aria-label="Banner structure">
  <img class="figure-img" src="/img/banner-structure.svg" alt="Numbered diagram of a banner structure" role="img" />
</figure>

1. **Container**: Wraps the content.
1. **Illustration** (optional): Compliments the content.
1. **Title**: Header for the content.
1. **Message**: Text content indicating the purpose and potential next steps.
1. **Action**: A single button to provide an explicit action the user can take based on the message.
1. **Dismissal**: Removes the banner for a user.

## Guidelines

### When to use 

A banner should be used sparingly and with consideration of its impact to neighboring components and the overall user experience to:

- Inform a user of a feature that isn't enabled.
- Promote a new feature.
- Solicit user feedback. 

### When not to use

- If you need to communicate that a feature hasn't been configured or used, consider using an [empty state](https://design.gitlab.com/regions/empty-states) instead.
- If you're giving tips and hints for an existing or established feature, consider the [tip alert variant](/components/alert#variants) instead.
- If you need to communicate system status, consider using an [alert](/components/alert) instead.
- If a user can't take immediate action, activate a feature, or benefit from the content, then the banner shouldn't be displayed.

### Variants

- **Introduction**: Provide a basic introduction to help users get started with an existing feature. Illustration optional.
- **Promotion**: A promotional message to encourage exploring or upgrading to a new feature. Illustration optional.

### Behavior

- A banner can always be dismissed.
  - It doesn't reappear by default, but in rare circumstances the banner can reappear after 7 days have passed.
- The action should direct a user to one of the following:
  - Docs for an installation guide.
  - Where they can upgrade their plan to enable a feature.
  - A format for contributing or providing feedback.

### Content

- Title should be concise and indicate the purpose of the banner.
- The message describes the benefits of performing the action.
- An optional [illustration](/product-foundations/illustration) to support the message uses the [medium](/product-foundations/illustration#grid-and-size) illustration size.

### Accessibility

- When an illustration is used, it should be hidden from screen readers with `aria-hidden="true"`.
