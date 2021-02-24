---
name: Card
docs: in-progress
gitlab_ui: /components/card/code
vueComponents:
  - GlCard
related:
  - table
---

Cards are a flexible component used to display content and actions in a variety of contexts. They are generally restricted to a single topic and it should be easy for users to scan relevant and actionable information. Content, such as images and text, should be positioned within them in a manner that demonstrates their intended hierarchy.

## Usage

Cards are used to connect similar concepts and/or activities to help make it easier for users to browse, read, and learn more about GitLab. The use-cases vary from communicating pricing plans to organizing content within issue boards.

| Do | Don't |
| --- | --- |
| Use cards for snapshots or an overview of information. | Don't use a card for an entire workflow. Consider a dedicated content area (a drawer, [modal](/components/modals), or even a dedicated page) for deep dives. |
| Use cards if you are displaying a discrete block of content as part of a broader set. For example, issues displayed on an issue board or pricing options displayed on pricing and marketing pages. | Use cards as a way of blocking information. For example, [forms](/components/forms) or single stats. |

### Types

There are two main types of Cards: Static and Dynamic.

| Card type | Purpose |
| --- | --- |
| Static Card | Single topic component to help compare and contrast similar pieces of information. |
| Dynamic card | Can be draggable. For use in a multidisciplinary list to help users stay organized, such as on GitLab issue boards. |

### Alternatives

#### Table

If the purpose of using the component is to compare and contrast several static (non-draggable) pieces of content, or if you're utilizing column headers to organize your content horizontally, a better option would be to structure the data within a [table component](/components/table).

#### Single Stat

If the purpose of using the component is to show a high level overview of incoming data such as Security vulnerabilities or Threat Monitoring statistics, use a single stat component.

Todo: Add link to single stat component after it's been created

## Demo

[[Example:card-with-header-footer]]

## Specifications

### Sections

A card is a very flexible component - it is generally any information contained and repeated within square or rectangle containers. However, the card component is more commonly referred to as a container with three main sections: Header, body, and action(s). Dividers should be used between these sections.

#### Header

The header is **optional** and acts as the title of the proceeding body content. An example could be the name of a pricing plan or a blog post title. Headings should set clear expectations about the card’s purpose.

#### Body

The card body is **always required**. The content in the body should never be ambiguous or unclear. Provide the user with content regarding a single topic and strive to be as concise as possible. For example, if a card's purpose is to communicate a pricing plan, the body would contain the plan's price point and key feature information.

Use multiple sections within the body when you have two or more related but distinct pieces of information to communicate to users. Multiple sections can help break up complicated concepts like pricing data. Content in this area could include media, and photos.

#### Actions

The action section is **optional**. There should be no more than 3 actions. Actions should always be located within an action bar at the bottom of the Card. Button order and positioning should follow our [guidelines for buttons](/components/button).

### Component Combinations

Todo: Add more context here (e.g. cards and alerts) and examples

### Behavior

#### Responsiveness

The card width is fluid by default. When presenting two or more static cards in a row, care must be taken to ensure the appropriate stacking occurs across breakpoints.

#### Interactions

Dynamic cards can be draggable and re-ordered within a list. To help layer the component within this particular use-case, a drop shadow is required. A draggable card will maintain the ability to house individual links and actions. Its empty space becomes the trigger to enable the drag functionality. The cursor should change to a pointer hand icon to convey functionality.

When dragging the card to a new location, any cards positioned behind it should move to show their new placement as if the user were to let go of the selected card and drop it into the current position.

On mobile, there should be a longer hold on the card in order to grab it and move it, so as not to interfere with a lighter, quicker touch for scrolling.

#### Loading

While the page is loading, cards should use the [skeleton loader component](/components/skeleton-loader).

## Design Specifications

Color, spacing, dimension, and layout specific information pertaining to this component can be viewed using the following link:

[Sketch Measure Preview for Cards](https://gitlab-org.gitlab.io/gitlab-design/hosted/design-gitlab-specs/card-spec-preview)
