---
name: Responsive-first
---

We take a [responsive-first](/layout/grid#responsive-ui) approach that considers each component and content block in light of its ability to adapt and function regardless of viewport or layout. Content and functionality are designed to be available and useful independent of page constraints. By default, content should [reflow](#reflow), but [truncation](#truncation) or [visual affordance](#visual-affordance) indicating behavior can also be used to keep the overall experience robust.

## Reflow

When the content on a page reflows to fit the available space, the hierarchy, structure, and relationships should remain intact and clear within any viewport. 
- The visual order should match the [DOM order](https://www.w3.org/WAI/WCAG21/Techniques/css/C27). 
- Reflow isn't limited to content wrapping. For example, you might consider grouping a list of actions into a single dropdown in smaller viewports.
- Content should not abruptly rearrange as that can be disorienting for users and cause the page to re-load, which may negatively impact the perceived performance of a page. 
## Truncation

Individual lines of text can be truncated with an ellipsis when length or wrapping would break a component, negatively impact surrounding content, or cause some content to flow off screen. When text is truncated, there must be a method, like a [tooltip](/components/tooltip) to easily view and access all of the content for both sighted and unsighted users, as well as those using assistive technology.

## Visual affordance

Similar to how an ellipsis provides a visual indicator for text truncation, providing visual affordance for other components and content helps a user understand when there's a behavior that allows them to access additional content or controls. For example, a scrim (gradient overlay) at the bottom of a dropdown panel indicates scrolling. [View scrim in Pajamas UI Kit →](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/Component-library?node-id=12053%3A184)

