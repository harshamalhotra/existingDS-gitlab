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
1. **Picture** (optional): Visual indication about the content of the card
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

### Variants

There are two different variants for the cards: vertical and horizontal.

1. **Horizontal**: Horizontal cards work well on larger screens. They can be used in a maximum of 2 columns due to their larger width.
1. **Vertical**: Vertical cards work well on smaller screens and increase readability. They can be used in a maximum of 3 colums due to their smaller width.

### Behavior

- Card width is fluid by default.
- A card can be static or draggable when there is an option to reorder it within a set of other cards.
  - When dragging a card, any adjacent cards should remain visible.
  - For touch devices, there should be a longer hold on the card to avoid collision with the act of scrolling. 
  - When a card is currently being dragged, there should be an indication it's in a draggable state.
- If a card contains an action, a button or link inside the card should trigger the action, not the entire card.

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

#### Image

- For horizontal layout, the image should be top/left-aligned with the content container. 
- For vertical layout, the image should be center-aligned with the content container.

#### Button

- Buttons are left aligned, except in right-to-left languages where they are right aligned and should follow the [alignment and order guidelines for buttons](https://design.gitlab.com/components/button#alignment).
- Contains the primary and secondary action (if applicable) for a card.
- Located below the content. 

### Accessibility

Todo: Add accessibility guidelines.
