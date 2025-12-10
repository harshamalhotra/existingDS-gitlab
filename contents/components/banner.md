---
name: Banner
description: A banner promotes awareness of a new feature or high-priority research initiative.
related:
  - alert
  - broadcast-message
  - button
  - /patterns/empty-states
---

## Examples

<story-viewer component="base-banner" story="introduction"></story-viewer>

<story-viewer component="base-banner"></story-viewer>

<story-viewer component="base-banner" story="no-image" title="Promotion"></story-viewer>

[View in Pajamas UI Kit →](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?type=design&node-id=425-4&mode=design)

## Structure

<figure-img alt="Numbered diagram of a banner structure" label="Banner structure" src="/img/banner-structure.svg"></figure-img>

1. **Container**: Wraps the content.
1. **Illustration** (optional): Compliments the content.
1. **Title**: Header for the content.
1. **Message**: Text content indicating the purpose and potential next steps.
1. **Dismissal**: Removes the banner for a user.
1. **Action**: A single button to provide an explicit action the user can take based on the message.

## Guidelines

### When to use

A banner should be used sparingly and with consideration of its impact to neighboring components and the overall user experience to:

- Inform a user of a feature that isn't enabled.
- Promote a new feature over a limited amount of time. For example, while a feature is in [beta](https://docs.gitlab.com/ee/policy/experiment-beta-support.html#beta-features) or within a single [major version](https://docs.gitlab.com/ee/policy/maintenance.html#versioning).
- Solicit user feedback.

### When not to use

- If you need to communicate that a feature hasn't been configured or used, consider using an [empty state](/patterns/empty-states) instead.
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
- When using a banner to solicit feedback, ensure a clear metric of success is set to remove the banner once complete. For example, using a banner to collect survey responses and removing the banner once 100 responses are collected.

### Content

- Title should be concise and indicate the purpose of the banner.
- The message describes the benefits of performing the action.
- An optional [illustration](/product-foundations/illustration) to support the message uses the [small](/product-foundations/illustration#size) illustration size and [round container shape](/product-foundations/illustration-creation-guide#shape).

### Placement

- Similar to [alert placement](/components/alert#placement), the content within the banner will determine its placement on the page.
- Generally speaking, an introduction banner should be used at the page-level and relate to all content on the page, whereas a promotion banner can either be used at the page-level or in-page level. If in-page level is used, the banner should be placed directly above the content it relates to.

<figure-img alt="Page level banner position" label="Introduction banner at the top of the page" src="/img/banner-page-level.svg" width="332"></figure-img>

<figure-img alt="Page level banner position" label="In-page banner above the content it relates to" src="/img/banner-in-page.svg" width="332"></figure-img>

### Accessibility

- When an illustration is used, it should be hidden from screen readers with `aria-hidden="true"`.

## Code reference

### Dismiss

Users are able to permanently dismiss banners by default.
Banners may also be dismissed temporarily, depending on the use case.

#### Permanent dismissal

The dismiss action is always represented by the `Close` icon and anchored
to the top right of the banner.

Banner dismissal should work as follows:

- Banner dismissal must be associated with the user in the system database.
  Dismissal must persist, even across version upgrades and clients.
- Banners do not reappear by default. In rare circumstances, you may present the
  banner again to a user after some time has passed.
- Banners should only be shown to users who are logged in.

**Implementation Notes:**

- The dismissal of the banner is achieved using the `UserCallout` model on the backend and the
  `PersistentUserCallout` JS file on the frontend. If both parameters are implemented correctly, the
  banner will adhere to the dismissal guidelines above.

#### Temporary dismissal

To introduce temporary dismissal, include a secondary or tertiary button placed alongside
the primary action button. Follow the [button](/components/button#alignment)
alignment and order guidelines.

Temporary dismissals should work as follows:

- Banners dismissed temporarily will reappear after **7 days**.
- After a banner is dismissed temporarily, use a [toast](?path=/story/base-toast--default) message
  to let the user know they will see the banner again in 7 days.

### GlBanner

<story-viewer component="base-banner" title="GlBanner" view-mode="docs"></story-viewer>
