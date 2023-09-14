---
name: Accordion
description: An accordion is used to show and hide content. 
components:
  - base-accordion
related:
- modal
- tree
- tabs
---

## Examples

<story-viewer component="base-accordion" title="Default accordion"></story-viewer>

[View in Pajamas UI Kit →](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?type=design&node-id=425-0&mode=dev)

## Structure

<figure-img alt="Numbered diagram of an accordion structure" label="Accordion structure" src="/img/accordion-structure.svg"></figure-img>

1. **Caret**: Identifies when the accordion is open or closed. Pointing down in open. Pointing right is closed. 
1. **Title**: Identifies the title of the accordion.
1. **Body**: Contains the content of an accordion. 

## Guidelines

### When to use:

- Displaying and grouping additional information.
- Adding granular control over the information on a given page.
- Shortening pages to reduce scrolling.

### When not to use:

- Displaying critical system information or a primary action to be taken on the page. (for example, [alerts](/components/alert), confirmation or cancellation buttons).
- Displaying navigation elements such as [tabs](/components/tabs).
- Displaying links pointing to sections of the same page, instead use a semantic HTML list.
- Creating hierarchy levels by nesting them within each other. If you need to add hierarchy to the content use a [tree](/components/tree).
- Displaying a set of visual components following the same style, prefer using Collapsable.(TODO: Add link to collapsable).

### Content

#### Icon

To reduce cognitive load and time to task completion, the icon should be located before the header, so users always click on the same spot to expand/collapse the accordion. The icon should always reflect the state of the accordion (expanded or collapsed).

The following icons should be used:

| Collapsed state icon | Expanded state icon |
| :---: | :---: |
| <figure class="figure gl-p-0" role="figure"><img class="figure-img gl-p-5" src="/img/chevron-right.svg" alt="Chevron right icon" role="img" /><figcaption class="figure-caption">[`chevron-right`]( https://gitlab-org.gitlab.io/gitlab-svgs/?q=chevron-right)</figcaption></figure> | <figure class="figure gl-p-0" role="figure"><img class="figure-img gl-p-5" src="/img/chevron-down.svg" alt="Chevron down icon" role="img" /><figcaption class="figure-caption">[`chevron-down`](https://gitlab-org.gitlab.io/gitlab-svgs/?q=chevron-down)</figcaption></figure> |

The affordance of the chevron means that additional information can be found "under" the header.

#### Header

Just like [modals](/components/modal/), the header of an accordion could be a question or a title. Either way, headers should give context about the underlying content in a concise and actionable way. Examples of headers can be "What can GitLab offer me?", or "More options".

#### Body

The content in the accordion body should be visually different from the rest of the page as it is secondary information. The accordion body is always displayed below its header. Use spacing (margin/padding/horizontal rule) and/or hierarchy (font size, color) to structure the body content. The content should directly relate to the header. For example, the content for "What can GitLab offer me?" could be "GitLab helps organizations deliver better products faster, increase operational efficiencies, and reduce security and compliance risks...".

#### Interaction

Users should be able to expand and collapse the body by clicking or tapping a single area containing the accordion header and icon. Changes to the accordion state are considered [macro animations](/product-foundations/motion/#macro-animations) and should follow the guidelines for this kind of animation.

#### Multiple accordions

In the case of a page layout built around several accordions following each other (for example, FAQ page where each question is an accordion), changing one accordion state does not reflect on the other, each accordion would need to be expanded/collapsed individually by users.

### Accessibility

Use proper semantic markup, so that users of screen readers are aware of the states of the accordion.

- The `aria-controls` attribute should define that the header is acting as a trigger to reveal content (the accordion body).
- The `aria-expanded` attribute should be used to indicate the state of the accordion.
- After a user expands/collapses the accordion, the focus should remain on the area wrapping the header and the icon, so that the user can trigger the accordion using the keyboard.
- The accordion should not rely on JavaScript to reveal the body content.

### Resources

- [NN/G: Progressive disclosure](https://www.nngroup.com/articles/progressive-disclosure/)
- [Smashing Magazine - Designing The Perfect Accordion](https://www.smashingmagazine.com/2017/06/designing-perfect-accordion-checklist/#top)
- [NN/G: Accordions Are Not Always the Answer for Complex Content on Desktops](https://www.nngroup.com/articles/accordions-complex-content/)
- [Viget - Testing Accordion Menu Designs & Iconography](https://www.viget.com/articles/testing-accordion-menu-designs-iconography/)
