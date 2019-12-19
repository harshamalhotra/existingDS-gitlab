---
name: Accordion
related:
- modals
- tree
- tabs
---

Accordions are used to group similar content and hide or show it depending on user needs or preferences. Accordions give users more granular control over the interface and help digest content in stages, rather than all at once.

## Usage

An accordion can be used on its own or with [more accordions](#multiple-accordions) stacked vertically. An accordion always contain a [header](#header), an [icon](#icon) reflecting its current state (collapsed or expanded), and a clearly identifiable [body](#body).

### Use an accordion when:

* Displaying and grouping additional information.
* Adding granular control over the information on a given page.
* Shortening pages to reduce scrolling.

### Do not use an accordion when:

* Displaying critical system information or a primary action to be taken on the page. (e.g. [alerts](/components/alert), confirmation or cancellation buttons).
* Displaying navigation elements such as [tabs](/components/tabs).
* Displaying links pointing to sections of the same page, instead use a [list](/components/list).
* Creating hierarchy levels by nesting them within each other. If you need to add hierarchy to the content use a [tree](/components/tree).
* Displaying a set of visual components following the same style, prefer using Collapsable.(TODO: Add link to collapsable).

### Dos and Dont's

| Do | Don't |
| ------ | ------ |
| Use icons and [animation](/product-foundations/motion) to easily reflect collapsed and expanded states. | Leave the header without icon or use a [button](/components/buttons) to trigger the expand/collapse action.|
| Trigger collapsed and expanded states when clicking on either the header or icon. | Make the icon the only way to trigger collapsed and expanded states. | 
| Use [chevron](https://gitlab-org.gitlab.io/gitlab-svgs/?q=chevron) to indicate the expand/collapse behavior | Use an icon that can not reflect the transition like a [question mark](https://gitlab-org.gitlab.io/gitlab-svgs/?q=~question). | 

## Specifications

### Icon

To reduce cognitive load and time to task completion, the icon should be located before the header, so users always click on the same spot to expand/collapse the accordion. The icon should always reflect the state of the accordion (expanded or collapsed).

The following icon should be used:

TODO:
Add chevron-right icon
Add chevron-down icon

The affordance of the chevron means that additional information can be found "under" the header.

### Header

Just like [modals](/components/modals/), the header of an accordion could be a question or a title. Either way, headers should give context about the underlying content in a concise and actionable way. Examples of headers can be "What can GitLab offer me?", or "More options".

### Body

The content in the accordion body should be visually different from the rest of the page as it is secondary information. The accordion body is always displayed below its header. Use spacing (margin/padding/horizontal rule) and/or hierarchy (font size, color) to structure the body content. The content should directly relate to the header. For example, the content for "What can GitLab offer me?" could be "GitLab helps organizations deliver better products faster, increase operational efficiencies, and reduce security and compliance risks...".

### Interaction

Users should be able to expand and collapse the body by clicking or tapping a single area containing the accordion header and icon. Changes to the accordion state are considered [macro animations](/product-foundations/motion/#macro-animations) and should follow the guidelines for this kind of animation.

#### Multiple accordions
In the case of a page layout built around several accordions following each other (e.g. FAQ page where each question is an accordion), changing one accordion state does not reflect on the other, each accordion would need to be expanded/collapsed individually by users.

## Accessibility

Use proper semantic markup, so that users of screen readers are aware of the states of the accordion.

* The `aria-controls` attribute should define that the header is acting as a trigger to reveal content (the accordion body).
* The `aria-expanded` attribute should be used to indicate the state of the accordion.
* After a user expands/collapses the accordion, the focus should remain on the area wrapping the header and the icon, so that the user can trigger the accordion using the keyboard.
* The accordion should not rely on JavaScript to reveal the body content.

## Demo

Todo: Add live component block with code example

## Design specifications

Color, spacing, dimension, and layout specific information pertaining to this component can be viewed using the following link:

TODO: Add Sketch Measure Preview for Accordion

## Resources

* [NN/G: Progressive disclosure](https://www.nngroup.com/articles/progressive-disclosure/)
* [Smashing Magazine - Designing The Perfect Accordion](https://www.smashingmagazine.com/2017/06/designing-perfect-accordion-checklist/#top)
* [NN/G: Accordions Are Not Always the Answer for Complex Content on Desktops](https://www.nngroup.com/articles/accordions-complex-content/)
* [Viget - Testing Accordion Menu Designs & Iconography](https://www.viget.com/articles/testing-accordion-menu-designs-iconography/) 
