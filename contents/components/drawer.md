---
name: Drawer
description: A drawer is a convenient way to present context-specific information or to provide the user with a deeper interaction experience without leaving the page.
docs: complete
vueComponents:
  - GlDrawer
related:
  - accordion
  - modals
---

## Usage

### Dos and dont's

| Do | Don’t |
|------------------------|-------------------|
| Use to display additional or supplemental information to the user about an element or item. | Use to display content that is not suited for small areas, such as large tables or visualizations. |
| Use for simple tasks such as editing content or changing a setting. | Use for critical interactions, such as confirming a deletion event or for complex multi-step tasks. |
| Let a user’s action trigger the drawer to open or close. For example, a button click, following a link, or selecting an option. | Surprise the user by opening or closing a drawer without their action. |

### Example use cases

- Show more information about an issue without taking the user to a new page.
- Show more information about a feature without taking the user to the documentation.
- Show more information about a vulnerability instead of using a [modal](/components/modals).

## Specifications

### Sections

#### Header

The header appears at the top of the drawer with a full-width horizontal break line below it, separating the header from the content. It always has a title and a close icon, and it can also include actions related to the drawer's content.

##### Title

- Size and style can vary depending on the use case. By default, the drawer uses a `19px-bold weight font`.
- The title should truncate **after 3 lines** to avoid pushing content too far down in the drawer.

##### Actions

- Actions, either [buttons](/components/button) or links, are not required. The type of action utilized depends on the use case.
- When used, actions are always left-aligned and placed below the title.

##### Close icon

- The close icon is always present, right-aligned in the header, and center-aligned vertically with the first line of the title.

#### Content

Content selection should be based on the experience you intend to promote. Content should be structured according to our [layout](/layout/spacing) guidelines. The container background can either be set in [`$white`](https://design.gitlab.com/product-foundations/colors#neutral-palette) or [`$gray-50`](https://design.gitlab.com/product-foundations/colors#neutral-palette) depending on the use case.

### Interaction

The drawer will appear following the [motion guidelines](/product-foundations/motion).

- 200ms with an ease-in animation.
- By default, the drawer overflows all page content.
- If full-width elements exist on the page and you do not want the drawer to cover them then you may specify the drawer to be embedded in the page and push all or some of the content rather than overflowing it.

#### Opening

Like [modals](/components/modals), drawers should never take the user by surprise when they open. Let a user’s action, such as using a button, a link, or selecting an option, trigger the drawer.

#### Closing

- The primary way to close the drawer is by using the close icon in the header. All drawers should have this action.
- The second way to close the drawer is by using the <kbd>esc</kbd> key. This is primarily meant to help with accessibility.

#### Scrolling

The drawer allows for scrolling content. When scrolling happens, the content scrolls below the header.

### States

#### Loading

The drawer should utilize the [skeleton loader](/components/skeleton-loader/) pattern when possible.

#### Empty

If an empty state is required, please follow the [empty-state](/regions/empty-states) guidelines while being mindful of illustration size.

### Small screens and mobile

The drawer maintains its behavior down to the smallest breakpoint, at which point it takes up the full viewport width.

### Accessibility

- Drawer states (open/closed) should be announced by a screen reader.
- The focus should move to the drawer once opened. An intentional keyboard trap keeps tab order (looped) within the drawer until it is closed. This is so a user cannot focus on anything outside the drawer.
- The <kbd>esc</kbd> key should close the drawer along with the close icon.

## Demo

[[Example:drawer]]

## Design Specifications

Color, spacing, dimension, and layout specific information pertaining to this component can be viewed using the following link:

[Sketch measure preview for the drawer](https://gitlab-org.gitlab.io/gitlab-design/hosted/design-gitlab-specs/drawer-spec-previews/)
