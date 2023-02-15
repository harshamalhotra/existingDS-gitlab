---
name: Badge
description: A badge highlights system generated metadata as an attribute of a larger object. 
figma: https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/Pajamas-UI-Kit?node-id=425%3A3
docs: complete
stories:
  - base-badge--default
related:
  - label
  - button
  - tabs
---

## Examples

<story-viewer story-name="base-badge--variants" title="Badge variants"></story-viewer>

<story-viewer story-name="base-badge--actionable" title="Actionable badges"></story-viewer>

<story-viewer story-name="base-badge--badge-icon" title="With icons"></story-viewer>

[View in Pajamas UI Kit →](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/Component-library?node-id=425%3A3)

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

- **Neutral muted** (default): Metadata that requires the least amount of visual emphasis and has a neutral meaning.
- **Neutral**: Metadata that has a neutral meaning.
- **Info**: Metadata that's informative or new and also has a neutral meaning.
- **Success**: Metadata that communicates success or completion with a positive meaning.
- **Warning**: Metadata that requires attention and a slightly negative meaning.
- **Danger**: Metadata that indicates a problem and has a negative meaning.
- **Tier**: Metadata that indicates which product tier an entity belongs to

### Sizes

- **Small**: A small badge is ideal in condensed parts of the UI where space is limited.
- **Medium** (default): Use the medium size where content has breathing room. The medium size also works well to provide sufficient affordance when only an icon is used.
- **Large**: A large badge is used in headers or titles where there is ample space or the metadata needs additional prominence.

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

- When a badge only has an icon, the icon must use `aria-label` with text that identifies the metadata.
- When an icon is present with text it must use `aria-hidden="true"` to avoid being announced by a screen reader.
- When a badge is used as meta information to support content it's inline with, ensure that its meaning is clear. If necessary, add `sr-only` text after the badge. For example, `<gl-badge>9</gl-badge><span class="sr-only">to-do's</span>` clarifies what "9" quantifies.
- If a badge isn't inline with the content it supports, use `aria-describedby="badgeID"` to associate the content with the badge, where `badgeID` is the unique ID of the badge. Note that `aria-describedby` support is mostly on focusable elements and headings. 

## Reference

Other terms that are commonly used to refer to a badge: counter, status, chip, tag, metadata, lozenge, pill, and bubble.
