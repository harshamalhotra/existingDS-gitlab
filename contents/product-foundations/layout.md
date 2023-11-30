---
name: Layout
---

## Responsive-first

We take a [responsive-first](/product-foundations/layout#responsive-ui) approach that considers each component and content block in light of its ability to adapt and function regardless of viewport or layout. Content and functionality are designed to be available and useful independent of page constraints. By default, content should [reflow](#reflow), but [truncation](#truncation) or [visual affordance](#visual-affordance) indicating behavior can also be used to keep the overall experience robust.

### Reflow

When the content on a page reflows to fit the available space, the hierarchy, structure, and relationships should remain intact and clear within any viewport. 
- The visual order should match the [DOM order](https://www.w3.org/WAI/WCAG21/Techniques/css/C27). 
- Reflow isn't limited to content wrapping. For example, you might consider grouping a list of actions into a single dropdown in smaller viewports.
- Content should not abruptly rearrange as that can be disorienting for users and cause the page to re-load, which may negatively impact the perceived performance of a page. 

### Truncation

Content can be truncated when length or wrapping would break a component, negatively impact surrounding content, or cause some content to flow off screen. When content is truncated, there must be a method to easily view and access all of the content for both sighted and unsighted users, as well as those using assistive technology. Use your judgment on how to truncate content in your specific situation, but here are a few methods depending on the content type, usage, and size.

- Show in [tooltip](/components/tooltip): Use when truncated text is non-critical or providing reference information, or when users don't need access to the raw content. 
- Show with [ellipsis button](/components/button#ellipsis): Use for longer spans of text, or when users need access to raw content to compare or view critical information.

### Visual affordance

Similar to how an ellipsis provides a visual indicator for text truncation, providing visual affordance for other components and content helps a user understand when there's a behavior that allows them to access additional content or controls. For example, a scrim (gradient overlay) at the bottom of a dropdown panel indicates scrolling. [View scrim in Pajamas UI Kit →](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/Component-library?node-id=12053%3A184)

## Grid

### Responsive UI

GitLab is a responsive experience that works well across all screen sizes, from mobile devices to large monitors. In order to provide a great user experience, the core functionality (browsing files, creating issues, writing comments, and so on) is available at all resolutions. However, due to size limitations, some secondary functionality may be hidden on smaller screens. This functionality is limited to rare actions that aren’t necessary on small devices.

#### Breakpoints

These breakpoints define specifications for different screens, devices, and orientations.

- **`xs`**: <576px
- **`sm`**: ≥576px
- **`md`**: ≥768px
- **`lg`**: ≥992px
- **`xl`**: ≥1200px

### Page containers

Users can choose between two kinds of [layout width](https://docs.gitlab.com/ee/user/profile/preferences.html#layout-width) which set the behavior of page containers: **fixed** (default) or **fluid**.

The **fluid** layout does not impose any width restrictions to page containers, so elements expand across the screen to fill all available space.

The **fixed** layout applies the ideal maximum width to page containers according to the elements being displayed so they can be experienced using the most appropriate width.

[Breadcrumbs](/components/breadcrumb) always share the width of the page container that follows it.

#### Fixed layout

In the fixed layout, there are three possible maximum widths for page containers. For each width, you must consider which one is best to consume and interact with the elements on the page. The following widths include a `16px` padding on both sides.

- **`990px`**: By default, all pages use this maximum width. It’s ideal for forms, simple pages, tables with few columns, or pages that focus on written content.
- **`1280px`**: For pages that have a lot of horizontal elements, such as content-heavy tables/lists or tables with a lot of columns.
- **Full-width** (100%): Exception for pages where the interaction benefits from more screen real-estate, such as charts/graphs and other data visualizations, or boards.

We recommend that you first try and use **`990px`** unless another width is more suited. A width can also be chosen based on consistency between similar views in different pages, even if another width would have been more suitable.

## Sticky containers

A sticky container is a div that sticks to the top or bottom of it's parent container. It contains actions or links that are relevant to the task someone is performing. Sticky containers are useful for long pages that contain lots of content that would push buttons or actions above or below the viewport. For example, when editing a wiki, the save changes button will always be visible even if the wiki content extends below the viewport.

Use sticky containers with caution as they can easily crowd the interface and make it difficult to navigate the page by shrinking the content area.
