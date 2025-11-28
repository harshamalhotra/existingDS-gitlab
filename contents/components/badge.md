---
name: Badge
description: A badge highlights system generated metadata as an attribute of a larger object.
figma: https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/Pajamas-UI-Kit?node-id=425%3A3
related:
  - label
  - button
  - tabs
---

## Examples

<story-viewer component="base-badge" story="variants" title="Badge variants"></story-viewer>

<story-viewer component="base-badge" story="actionable" title="Actionable badges"></story-viewer>

<story-viewer component="base-badge" story="badge-icon" title="With icons"></story-viewer>

[View in Pajamas UI Kit →](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?type=design&node-id=59780-92312&mode=design)

## Structure

<figure-img alt="Numbered diagram of a badge structure" label="Badge structure" src="/img/badge-structure.svg"></figure-img>

1. **Container**: Wraps the content.
1. **Icon** (optional): Supports or directly communicates the metadata meaning, always left aligned.
1. **Text** (optional): Conveys the status or other attribute of the metadata.

## Guidelines

### When to use

- Highlight system generated metadata that provides additional meaning or status to a primary object, like an issue or merge request.

### When not to use

- Showing metadata doesn't always require the use of a badge. If it doesn't need to be highlighted consider using a static icon or plain text.
- A badge shouldn't be a standalone, floating element. If it can't be placed within direct relationship to the object it supports, consider using another method that provides more context for the metadata.
- If the metadata is created and applied by a user, or customizable, use a [label](/components/label) instead.

### Variants

- **Neutral** (default): Metadata that is stable but special, or that requires moderate emphasis. Has a neutral meaning.
- **Info**: Metadata that is noteworthy, or communicates a state of active progress. Has a neutral to slightly positive meaning.
- **Success**: Metadata that is positive or desired. Has a clearly positive connotation.
- **Warning**: Metadata that is sub-optimal but not critical. Has a slightly negative meaning.
- **Danger**: Metadata that is critical or problematic. Has a strongly negative meaning.
- **Tier**: Metadata that indicates which product tier an entity belongs to.

### Behavior

- A badge is static (non-interactive) by default.
- A badge should link to the object it refers to if the user isn't seeing the most detailed state of that object (for example, the object's detail page).

### Content

- Information can be represented by an icon, text, or both together.
- Avoid long text strings.
- When text overflows the width, it's truncated and aided by a [tooltip](/components/tooltip) (content doesn't wrap).
- Text can be emphasized with **bold** weight, but use sparingly.
- Text can contain not only words, but also numbers which act as _counters_ (for example, a number badge in a [tab](/components/tabs)).
- When only using an icon, provide a [tooltip](/components/tooltip) with a brief explanation.

## Accessibility

- When a badge only has an icon, the badge must use `aria-label` with text that identifies the metadata. The badge will automatically receive `role="img"`.
- When an icon is present with text it must use `aria-hidden="true"` to avoid being announced by a screen reader.
- When a badge is used as meta information to support content it's inline with, ensure that its meaning is clear. If necessary, add `sr-only` text after the badge. For example, `<gl-badge>9</gl-badge><span class="sr-only">to-do's</span>` clarifies what "9" quantifies.
- If a badge isn't inline with the content it supports, use `aria-describedby="badgeID"` to associate the content with the badge, where `badgeID` is the unique ID of the badge. Note that `aria-describedby` support is mostly on focusable elements and headings.

## Reference

Other terms that are commonly used to refer to a badge: counter, status, chip, tag, metadata, lozenge, pill, and bubble.

## Code reference

### Using icon-only badges

When a badge only has an icon and no slot content, be sure to set the `aria-label` attribute of the
badge for best accessibility. The label should describe what the metadata represents, not just the icon name.

```html
<!-- bad: missing aria-label -->
<gl-badge icon="eye" />

<!-- bad: aria-label is just the icon name -->
<gl-badge icon="calendar" aria-label="calendar" />

<!-- good: aria-label describes the metadata -->
<gl-badge icon="eye" aria-label="Confidential" />
<gl-badge icon="calendar" aria-label="Due date" />
```

**Common examples:**

```html
<!-- Status badges -->
<gl-badge variant="success" icon="issue-open-m" aria-label="Open" />
<gl-badge variant="info" icon="issue-close" aria-label="Closed" />
<gl-badge variant="warning" icon="status-alert" aria-label="Needs attention" />

<!-- Metadata badges -->
<gl-badge icon="calendar" aria-label="Scheduled" />
<gl-badge icon="user" aria-label="Assigned" />
<gl-badge icon="label" aria-label="Labeled" />
```

### Link badges

Badges can be made actionable and turn into links by providing the `href` prop,
which can be used in combination with the props `rel`, `target`, `active`, and `disabled`.
The prop `tag` will be ignored and the `BLink` component will be used instead.

### GlBadge

<story-viewer component="base-badge" title="GlBadge" view-mode="docs"></story-viewer>

### Pajamas::BadgeComponent

#### Using icon-only badges in HAML

When using `icon_only: true`, you must provide the `text` parameter. This text becomes the `aria-label` for the badge and is not displayed visually. The label should describe what the metadata represents, not just the icon name.

```ruby
# bad: missing text parameter
= render Pajamas::BadgeComponent.new(icon: 'eye', icon_only: true)

# bad: text is just the icon name
= render Pajamas::BadgeComponent.new(icon: 'calendar', icon_only: true, text: 'calendar')

# good: text describes the metadata
= render Pajamas::BadgeComponent.new(icon: 'eye', icon_only: true, text: 'Confidential')
= render Pajamas::BadgeComponent.new(icon: 'calendar', icon_only: true, text: 'Due date')
```

**Common examples:**

```ruby
# Status badges
= render Pajamas::BadgeComponent.new(variant: :success, icon: 'issue-open-m', icon_only: true, text: 'Open')
= render Pajamas::BadgeComponent.new(variant: :info, icon: 'issue-close', icon_only: true, text: 'Closed')
= render Pajamas::BadgeComponent.new(variant: :warning, icon: 'status-alert', icon_only: true, text: 'Needs attention')

# Metadata badges
= render Pajamas::BadgeComponent.new(icon: 'calendar', icon_only: true, text: 'Scheduled')
= render Pajamas::BadgeComponent.new(icon: 'user', icon_only: true, text: 'Assigned')
= render Pajamas::BadgeComponent.new(icon: 'label', icon_only: true, text: 'Labeled')
```

<lookbook-viewer component="badge"></lookbook-viewer>
