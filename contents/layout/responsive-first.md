---
name: Responsive-first
---

We take a [responsive-first](/layout/grid#responsive-ui) approach that considers each component and content block in light of its ability to adapt and function regardless of viewport or layout. Content and functionality are designed to be available and useful independent of page constraints. By default, content should [reflow](#reflow), but [truncation](#truncation) or [visual affordance](#visual-affordance) indicating behavior can also be used to keep the overall experience robust.

## Reflow

As content reflows responsively to leverage available space, the hierarchy, structure, and relationships remain intact and clear within any viewport. In almost all cases the visual order should match the DOM order. Reflow isn't limited to just wrapping. For example, a list of actions could be grouped into a single dropdown when space is limited.

## Truncation

Individual lines of text can be truncated with an ellipsis when length or wrapping would break a component, negatively impact surrounding content, or cause some content to flow off screen. When text is truncated, there must be a method, like a [tooltip](/components/tooltip) to easily view and access all of the content for both sighted and unsighted users, as well as those using assistive technology.

## Visual affordance

Similar to how an ellipsis provides a visual indicator for text truncation, providing visual affordance for other components and content helps a user understand when there's a behavior that allows them to access additional content or controls. Examples include a scrim (gradient overlay) at the bottom of a [dropdown](/components/dropdown) panel to indicate scrolling or arrows to access offscreen tabs.

