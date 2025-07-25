---
name: Card
description: A card is a flexible container that groups related content and actions in a consistent visual structure.
---

## Examples

<story-viewer component="base-card" title="Default card"></story-viewer>

[View in Pajamas UI Kit →](https://www.figma.com/design/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?m=auto&node-id=131231-5825&t=mR0m2eSiFjcFxri4-1&mode=design)

## Structure

<figure-img alt="Numbered diagram of a card structure" label="Card structure" src="/img/card-structure.svg"></figure-img>

1. **Container**: Wraps the card content.
1. **Header** (optional): Contains the title and any supplementary elements or actions.
1. **Body**: Contains the primary content of the card.
1. **Footer** (optional): Includes supplemental content related to the card content.

## Guidelines

### When to use

- Group related information that benefits from visual separation from other content on the page.
- Help a user scan and compare similar content by displaying each as a separate card.
- Present a self-contained unit of content with its own actions or interactions.
- Create a repeatable visual structure for similar content throughout the interface.

### When not to use

- For a single block of content without logical grouping or a prescribed visual structure, use [design tokens](/product-foundations/design-tokens) or utility classes instead as ["unboxing the UI"](https://handbook.gitlab.com/handbook/product/ux/product-designer/#unboxing-the-ui) is the preferred approach.
- For displaying a simple list of static text, use semantic HTML lists.
- For a complex data comparison with multiple columns, use a [table](/components/table) instead.
- For displaying an individual metric, use a [single stat](/data-visualization/single-stat) component.
- For a complex form, use form components directly rather than nesting them in cards.

### Appearance

A card uses [section design tokens](/product-foundations/design-tokens-using#sections) by default to visually identify it as a contained content region.

### Content

- Use the [skeleton loader](/components/skeleton-loader/) pattern when possible for loading content within a card.
- Follow button [alignment](/components/button#alignment) and [order](/components/button#order) guidelines when including actions.

#### Header

- Provides context for the card content and helps users quickly understand the card's purpose.
- Keep headers concise and consistent across similar cards to improve scannability.
- Include a title, supplementary information (metadata, badges, icons), or contextual actions as needed.
- Use appropriate heading levels that respect the document's semantic structure.

#### Body content

- Contains the primary content and serves as the focal point of the card.
- Accommodates various content types: from images and meta information, to data and plain text.
- Maintain similar patterns and structure for body content across cards within a set to improve scannability and consistency.

#### Footer

- Provides a consistent location for supplementary elements related to the card content.

### Accessibility

- A card is visually a styled container with no particular semantic meaning as a landmark region.
- Use an appropriate heading level for a card title that aligns with the page hierarchy.
- When displaying a collection of related cards, structure them as a parent `<ul>` with `<li>` elements that each contain a single card.

## Code reference

Cards are a flexible component used to display content and actions in a variety of contexts.
They are generally restricted to a single topic and it should be easy for users to scan relevant and
actionable information. Content, such as images and text, should be positioned within them in a
manner that demonstrates their intended hierarchy.

### GlCard

<story-viewer component="base-card" title="GlCard" view-mode="docs"></story-viewer>

### Pajamas::CardComponent

<lookbook-viewer component="card"></lookbook-viewer>
