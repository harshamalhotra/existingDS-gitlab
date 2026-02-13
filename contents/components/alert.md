---
name: Alert
description: An alert is a system generated, contextual, and timely message to a user that may or may not result from their action.
figma: https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/Pajamas-UI-Kit?node-id=425%3A1
related:
  - broadcast-message
  - toast
---

## Examples

```html
<!-- live-example -->
<gl-alert
  variant="danger"
  title="Alert title"
  primary-button-text="Primary"
  secondary-button-text="Secondary"
  class="gl-mb-3"
>
  Danger lorem ipsum dolor sit <gl-link href="#">text link</gl-link> amet
</gl-alert>

<gl-alert
  variant="warning"
  title="Alert title"
  primary-button-text="Primary"
  secondary-button-text="Secondary"
  class="gl-mb-3"
>
  Warning lorem ipsum dolor sit <gl-link href="#">text link</gl-link> amet
</gl-alert>

<gl-alert
  variant="success"
  title="Alert title"
  primary-button-text="Primary"
  secondary-button-text="Secondary"
  class="gl-mb-3"
>
  Success lorem ipsum dolor sit <gl-link href="#">text link</gl-link> amet
</gl-alert>

<gl-alert
  variant="info"
  title="Alert title"
  primary-button-text="Primary"
  secondary-button-text="Secondary"
  class="gl-mb-3"
>
  Info lorem ipsum dolor sit <gl-link href="#">text link</gl-link> amet
</gl-alert>

<gl-alert
  variant="tip"
  title="Alert title"
  primary-button-text="Primary"
  secondary-button-text="Secondary"
>
  Tip lorem ipsum dolor sit <gl-link href="#">text link</gl-link> amet
</gl-alert>
```

[View in Pajamas UI Kit →](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?type=design&node-id=95988-10021&mode=design)

## Structure

<figure-img alt="Numbered diagram of an alert structure" label="Alert structure" src="/img/alert-structure.svg"></figure-img>

1. **Container**: Wraps the content.
1. **Icon**: Supports the variant meaning.
   - [error](/product-foundations/iconography-directory/?q=~error) icon for error and danger alerts.
   - [warning](/product-foundations/iconography-directory/?q=~warning) icon for the warning alert.
   - [check-circle](/product-foundations/iconography-directory/?q=~check-circle) icon for the success alert.
   - [information-o](/product-foundations/iconography-directory/?q=~information-o) icon for the information alert.
   - [bulb](/product-foundations/iconography-directory/?q=~bulb) icon for the tip alert.
1. **Title** (optional): Conveys what event triggered the alert.
1. **Dismissal** (optional): Permanently removes the alert for a user.
1. **Message**: Text content indicating the purpose and potential next steps.
1. **Actions** (optional): Buttons used to provide explicit action(s) the user can take to either remedy the alert or continue with a task.

## Guidelines

### When to use

- Advise a user about a system-generated event or condition related to their current context needing attention.
- Reaffirm to a user that a prior action has been successful. Typically background or async actions initiated in a different location or context.
- Present a dynamic status update based on system conditions or user actions.
- In combination with form validation to help users remedy errors. See the [accessibility](#accessibility) section for more.

### When not to use

- If you need to deliver an instance level message from an admin to all users, use a [broadcast message](/components/broadcast-message) instead.
- If you are immediately confirming a user's action while they remain in the same view, use a [toast](/components/toast) instead.
- If you are promoting, soliciting feedback, or informing a user about a feature, use a [banner](/components/banner) instead.
- If you need to display static documentation, warnings, or contextual information that's always present, use [contextual help and info](/patterns/contextual-help) patterns instead. These can be styled using [feedback and status](/product-foundations/design-tokens-using#choosing-between-feedback-and-status) utility classes. Alerts include focus management and semantic ARIA roles that are intended for dynamic notifications, not static content.

### Variants

- **Danger**: Advise the user that their attention is needed to address or be aware of a critical issue that relates to the current context.
- **Warning**: Caution the user that their attention or action may be needed within the current context, but it may not be critical.
- **Success**: Reaffirm to the user that a prior action they have taken, often in a different location within the application, has been successful.
- **Information**: Provide supplemental information to the user in regards to the current context or action they are about to take.
- **Tip**: Educate the user about new or unused features, and other useful information.

### Behavior

- Permanently dismissible only when the alert relates to a user's individual instance and wasn't triggered by a system condition.
- Permanently dismissible when a task isn't blocked or if no action is required.
- A dismissed alert can reappear if an action or system event reproduces it.

### Content

- All copy within an alert should be short, actionable, and use clear language.
- Keep translations in mind when writing copy and follow [UI text](/content/ui-text) guidelines.

#### Title

- Be brief and keep it to a single line by using a sentence fragment.
- Avoid punctuation, like periods, commas, or semicolons.

#### Message

- Provide next steps, troubleshooting actions, or links to learn about or remedy the event that triggered the alert.
- Avoid paraphrasing the title if one is included.
- Write as if the title was the first sentence of the message.
- Keep to one or two sentences when possible.
- Use sentence case and appropriate punctuation based on our [punctuation guidelines](/content/punctuation).

#### Actions

- Up to two actions can be used at a time.
- Primary action uses the **confirm** button variant.
- Secondary action uses the **default** button variant.
- Left aligned, except in right-to-left languages where they are right aligned and the order is the same. See button [alignment](/components/button#alignment) and [order](/components/button#order) for more details.

### Placement

- **Global**: Impacts the entire experience, is always full-width, and is placed directly below the breadcrumb bar.
  <figure-img alt="Global alert position" label="Full-width danger alert" src="/img/alert-global.svg" width="332"></figure-img>
- **Page-level**: Appears near the top of a page, directly above a header section, and is restricted to the content container width, which can be either fixed or fluid, depending on a user’s preference.
  <figure-img alt="Page-level alert position" label="Page-level danger alert in the main content area with space above and below" src="/img/alert-page-level.svg" width="332"></figure-img>
- **In-page**: Within a section of the page when the message is specific to that content.
  <figure-img alt="In-page alert position" label="In-page danger alert contextually placed with space above and below" src="/img/alert-in-page.svg" width="332"></figure-img>

#### Sticky positioning

- Uses `position: sticky` to keep critical information in view as the page scrolls.
- Helpful when an alert is added without a page refresh and its position would otherwise be out of view.
- Usually is reserved for errors, as they need to be addressed by users.
- Only one sticky alert should be used at a time.

#### Multiple alerts

- Multiple alerts should be avoided if at all possible, but if necessary ensure the placement of each is in the same context as the content it relates to.
- When multiple alerts are present in the same location, order them from most to least severe.

### Accessibility

#### Informational announcements without required action

For a status update or confirmation that doesn't require user action, use an ARIA live region with `aria-live="polite"`. The live region container must exist in the DOM at page load for changes to be announced automatically.

```html
<!-- This must exist in the initial HTML, before Vue mounts -->
<div aria-live="polite" aria-atomic="true"></div>
```

Screen readers will announce changes at the next natural break in narration without interrupting the user or moving focus.

**Note:** An alert in an ARIA live region is announced as a single text string, meaning headings, links, and other semantic elements within the alert will be read as plain text rather than being identified by their individual roles.

#### Informational announcements with required action

For an announcement that requires user action (such as "An error occurred while adding webhook. Try again."), place the alert where it makes sense contextually and set keyboard focus on it. This ensures screen readers announce the alert, but be mindful that focus will move to the alert's location on the page.

#### Critical or time-sensitive announcements

For an urgent notification that requires immediate attention or action (such as a critical error), use both `aria-live="assertive"` and `role="alert"` on the container. Both attributes are typically needed for reliable announcement across screen readers. These announcements will interrupt screen reader narration even when added dynamically.

```html
<div role="alert" aria-live="assertive" aria-atomic="true">
  <!-- Alert content -->
</div>
```

Consider also setting keyboard focus on critical alerts to allow users to interact with them immediately.

#### Additional considerations

- Use `aria-atomic="true"` when you want screen readers to announce the entire alert message, which is appropriate for most alerts. Use `aria-atomic="false"` (or omit the attribute, as this is the default) when only partial updates to the alert content should be announced, such as progress updates where only the changed portion needs to be read.
- If sticky positioning is used, the user must still be able to access and view focusable elements the alert may be covering.
- An alert is separate from, but complimentary to [validation](/patterns/forms#validation) error messages. In this way an alert announces that there are validation errors and links a user to each instance.

## Code reference

### Dismissible alerts

Alerts don't handle their own visibility, so it's the parent component's
responsbility to listen for the `dismiss` event and hide the alert in some way.
For example:

<!--
The below is intentionally *not* an HTML block.
See https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/issues/2953.
-->

```text
<script>
  ...
  computed: {
    shouldShowAlert() {
      return !this.isAlertDismissed && this.someOtherCondition();
    },
  },
  ...
</script>

<template>
  ...
  <gl-alert v-if="shouldShowAlert" @dismiss="isAlertDismissed = true">
    An important message
  </gl-alert>
  ...
</template>
```

### Sticky alerts

Any alert can use `position: sticky`, however it should be limited to critical alerts where keeping
the alert visually in context is necessary or when alerts are injected into a page and might
otherwise go unnoticed.

### GlAlert

<story-viewer component="base-alert" title="GlAlert" view-mode="docs"></story-viewer>

### Pajamas::AlertComponent

<lookbook-viewer component="alert"></lookbook-viewer>
