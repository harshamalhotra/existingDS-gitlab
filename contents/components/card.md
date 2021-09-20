---
name: Card
description: A card displays a single group of content within a set of similar groups.
vueComponents:
  - GlCard
related:
  - list
  - table
---

## Examples

[[Example:card-with-header-footer]]

Todo: Provide additional card examples.

Todo: Add link to design specs.

## Structure

Todo: Add structure diagram based on design specs.

1. **Container**: Wraps the content.
1. **Header** (optional): Contains the title.
1. **Title** (optional): Conveys the purpose of the card.
1. **Content**: Contains a wide variety of content types and controls depending on the purpose.
1. **Actions** (optional): Buttons or links used to provide explicit action(s) the user can take related to the card content.

## Guidelines

### When to use

- Display a single, concise group of content within a set of similar, related groups. As a set, each card is meaningful on its own, but also in relationship and comparison to other cards.

### When not to use

- A card shouldn't be used for the sole purpose of styling a single block of content. Use available [utility classes](https://unpkg.com/browse/@gitlab/ui/src/scss/utilities.scss) instead.
- If you're only displaying static text or items that don't require comparison or additional grouping, consider using a [list](/components/list) instead.
- If you need to present or compare data, consider using a [table](/components/table) instead.
- If you need to show a high level overview of a single data point, use a single stat component. Todo: Add link to single stat component after it's been created

### Behavior

- Card width is fluid by default.
- A card can be static or draggable when there is an option to reorder it within a set of other cards.
  - When dragging the card to a new location, any cards positioned behind it should move to show their new placement as if the user were to let go of the selected card and drop it into the current position.
  - For touch devices there should be a longer hold on the card in order to grab it and move it, so that the user intent isn't confused with scrolling.

### Content

- All copy within a card should be short, actionable, and use clear language.
- A card should utilize the [skeleton loader](/components/skeleton-loader/) pattern when possible to represent loading content within.

#### Title

- Be brief and keep it to a single line by utilizing a sentence fragment.
- Avoid using punctuation such as periods, commas, or semicolons.
- Use a full stop only when it's a full sentence.

#### Body content

- Since a card can be used for many purposes, body content can be just about anything from an image to meta information and plain text.
- Body content for each card within a set should follow a similar pattern and structure so that the cards are scannable and consistent.

#### Actions

- Left aligned, except in right-to-left languages where they are right aligned and the order is the same. See [button alignment and order](/components/button#alignment-and-order) for more details.
