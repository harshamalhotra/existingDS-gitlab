---
name: Button
description: A button indicates a distinct action and executes a function. Text, icon, or a combination of the two express the action and are supported by the variant and occasionally a tooltip.
figma: https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/Pajamas-UI-Kit?node-id=425%3A7
related:
  - button-group
  - dropdown-disclosure
  - pagination
  - tooltip
  - spinner
  - badge
  - modal
---

## Examples

<story-viewer component="base-button" story="all-variants-and-categories" title="All variants and categories"></story-viewer>

<story-viewer component="base-button" story="sizes" title="All sizes"></story-viewer>

<story-viewer component="base-button" title="Selected button" :args-selected="true"></story-viewer>

<story-viewer component="base-button" title="Loading button" :args-loading="true"></story-viewer>

<todo>Add live component block with example of loading icon button</todo>

<story-viewer component="base-button" title="Disabled button" :args-disabled="true"></story-viewer>

<story-viewer component="base-button" story="icon-button" title="Icon buttons"></story-viewer>

<story-viewer component="base-button" story="emojis" title="Emoji buttons"></story-viewer>

<story-viewer component="base-button" story="label-button" title="Label button"></story-viewer>

<story-viewer component="base-button" story="button-with-count" title="Buttons with counts"></story-viewer>

<story-viewer component="base-button" story="button-with-badge" title="Buttons with badges"></story-viewer>

<story-viewer component="base-button" story="badge-with-sr-only-text" title="Badge with screen reader text"></story-viewer>

<story-viewer component="base-button" story="dropdown-button" title="Dropdown button" iframe-padding="0 0 50px 0"></story-viewer>

<story-viewer component="base-button" story="dropdown-icon-button" title="Icon dropdown button" iframe-padding="0 0 50px 0"></story-viewer>

<story-viewer component="base-button" story="dropdown-split-button" title="Split dropdown button"></story-viewer>

<story-viewer component="base-button" story="ellipsis" title="Ellipsis button"></story-viewer>

[View in Pajamas UI Kit →](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?type=design&node-id=425-7&mode=design)

## Structure

<figure-img alt="Numbered diagram of a button structure" label="Button structure" src="/img/button-structure.svg"></figure-img>

1. **Icon**: Icon indicating or supporting the action.
1. **Label**: Text clarifying the action.
1. **Dropdown**: [chevron-down](http://gitlab-org.gitlab.io/gitlab-svgs/?q=~chevron-down) icon indicating a dropdown menu.
1. **Emoji**: Pictogram character.
1. **Count** or **Badge** (optional): Display the number of items or provide a status related to the action.

## Guidelines

### When to use

- A button (`<button>`) element is used to indicate an action.

### When not to use

- If you are directing a user to a new location, consider using a link (`<a href="">`) element or the [link](/components/link) component, which can also be styled like a button when actions and destinations are present in the same set of controls.

### Categories

Use categories to bring varying action hierarchy and emphasis that guide the user when performing tasks.

Choose a category based on the overall hierarchy on a given page, as well as the individual contexts found within. Defining context depends on the hierarchy of information displayed on the screen, the motivated user flow, and the available tasks. For example, a settings page may have multiple equally important contexts, each requiring its own primary button to complete a task.

Note that contexts may be temporary, such as a modal.

Too many secondary actions in a single view can flip the intended hierarchy. For example, a list of items where each has a secondary danger button can be overwhelming and distracting, especially when that action is repetitive and understood. In cases like these it may be better to use the tertiary category or the default variant in order to preserve the intended hierarchy.

- **Primary**: Provide the strongest visual emphasis to an action with a solid background — one per context.
- **Secondary**: Indicate a supplemental action with a border that matches the variant and a background that is close to, or the same as the page background color — one or more per context.
- **Tertiary**: Incorporate a borderless action into the flow that has a background during interaction for affordance — one or more per context.

### Variants

Use the visual style (variant) in combination with an icon or label to identify the type of action performed and its importance compared to other actions in the same context.

- **Default**: Use for an action that doesn’t warrant prominence, typically when a primary variant is already used in the same context.
- **Confirm**: Indicate a positive or negative non-destructive action that is confirmation of what the user desires to take place.
- **Danger**: Highlight an action that is destructive and undoable or has potentially detrimental consequences. In a long list of items where each contains a destructive action, use the `default` variant to avoid having many danger buttons overwhelm the page. Any final confirmation that is destructive must use the `danger` variant (unless a browser dialog is used).
- **Link**: Visually style an action like an anchor link when using a [link](/components/link) isn't possible.

### Sizes

- **Medium** (default): The medium button size is sufficient in most cases and provides the largest possible click target size.
- **Small**: Decrease the size of a button to prevent it from competing with a primary button, or to decrease the overall size of a group or string of buttons. Although it's possible to use the small size for an icon-only button, using the default medium size is encouraged to provide a larger click target.
- **Block**: Expand the width of a button to fill the parent container which can help provide balance in mobile ([`xs` breakpoint](/product-foundations/layout#breakpoints)) layouts.

### States

States change visually and/or programmatically depending on user interaction or a predetermined state. For example, programmatically moving focus to a button in a modal when it opens. This ensures they're accessible and feel reactive for different modalities.

- **Disabled**: Prevents the user from performing an action. It lets the user know a certain action would be possible if circumstances were different. All buttons regardless of variant appear the same when disabled. Additionally, they will show the "not-allowed" cursor when hovered. To include [tooltip](/components/tooltip) or [popover](/components/popover) content with a disabled button, wrap the button with an element that can receive focus and trigger the content.

<todo>Provide an example of a disabled button with a tooltip or popover.</todo>

- **Loading**: Place a button in the loading state with the `loading` property. The loading status is indicated by the use of a [spinner](/components/spinner), and the button is disabled while the state persists.
  - For [buttons containing text](#combinations), the spinner is added to the left of the button, before the icon or label.
  - For icon buttons, the spinner replaces the icon.
- **Accessible Loading**: When both `loading` and `accessibleLoading` are `true`, the button _appears_ disabled and in the loading state `loading`, but remains focusable. In this state:
  - the Vue `click` event is never fired.
  - the default behaviour of native `click` events are prevented, and the events are stopped from bubbling.
  - the `aria-disabled` attribute is set to `true`, and the `disabled` attribute is unset.
- **Selected**: Acts like a toggle that indicate whether or not an option is in a selected state. To indicate to screen readers that the button functions as a toggle it should have `aria-pressed="true"` to align with the visually selected state, otherwise `aria-pressed="false"`.

### Content

#### Labels

- Use concise language that conveys what happens when the button is activated.
- Use [sentence case](/content/punctuation).
- Try not to use text-only and icon-only buttons in the same context.
- For destructive actions, use clear text and always indicate what is being destroyed. For example, use **Delete page** instead of just **Delete**.
- For buttons that copy content to the clipboard, don't use **to clipboard**. For example, use **Copy branch name** instead of **Copy branch name to clipboard**.
- Append an ellipsis (`…`) when any of these conditions are met:
  - The action requires additional user input before completion. For example, "Export…" requires format/location selection.
  - It's not obvious from context that additional steps will follow. For example, "Commit changes…" in the single file editor when the surrounding context doesn't clearly indicate a dialog will appear.

#### Icons

Use either an icon or text in buttons, not both, as neither should require the other to be understood. While some buttons combine icon and text, this approach is generally not recommended. [Icon-only buttons](#icon-only-buttons) have additional considerations.

- Only use icons from [GitLab's SVG library](http://gitlab-org.gitlab.io/gitlab-svgs/).
- Icons use the default size (16×16px).

#### Count

A button can display a numeric count next to the button label. Use the `count-sr-text` prop to provide screen reader context for the count value. For example "pending comments" or "unread notifications" and so on. Counts are intended for quantities and numeric values.

```html
<!-- live-example -->
<!-- Basic count -->
<gl-button :count="5">Things</gl-button>

<!-- Count with accessibility context -->
<gl-button variant="confirm" :count="3" count-sr-text="pending comments">Your review</gl-button>
```

#### Badges

- A single [badge](/components/badge) can be added to the right of the button label to indicate status or provide additional context beyond simple counts.
- The badge variant should complement the button variant for visual harmony. Note: Not all button and badge combinations work together in all modes.

```html
<!-- live-example -->
<gl-button buttonTextClasses="gl-flex gl-items-center">
  Find my bug
  <gl-badge variant="info" class="gl-ml-3">Zap</gl-badge>
</gl-button>
```

### Alignment

Buttons can be aligned left, right, or center depending on the context.
Multiple alignments can be combined within a single screen, but not within an individual context. For example, on a single screen the main content uses left alignment, while the sidebar with multiple settings uses right alignment.

- **Left alignment**: In page content and forms where the content is typically unconstrained other than by the grid layout. In these instances an F-pattern (top to bottom and left to right in a horizontal movement) is common for reading flow, and buttons align with other content on the page like headings, lists, input labels, and form labels. Left alignment is a benefit for [accessibility](/accessibility/best-practices) in many ways, including reading flow, focus order, and page zoom where right-aligned buttons may be initially off screen.
  <grid>
  <figure-img alt="A group of two buttons aligned to the left at the bottom of a form" label="Left-aligned buttons in a form" src="/img/buttons-left-alignment.png" width="332"></figure-img>
  <figure-img alt="A page flow where several sets of buttons are aligned to the left of the page" label="Left-aligned buttons in a page flow" src="/img/buttons-left-alignment-2.png" width="332"></figure-img>
  </grid>
- **Right alignment**: In constrained containers like modals and dialogs, flows that continue in a progressive direction, actions with a global impact, and toolbars. In these instances a Z-pattern (top to bottom and left to right with a diagonal, scanning movement) is common for reading flow. In these instances a user may be taking a progressive action, like affirming a modal, or an action upon a section, like formatting text in a comment.
  <grid>
  <figure-img alt="A group of two buttons aligned to the right in a modal" label="Right-aligned buttons in a modal" src="/img/buttons-right-alignment.png" width="332"></figure-img>
  <figure-img alt="A sidebar with stacked sections of settings where each section has an edit button on the right" label="Right-aligned buttons in a sidebar with multiple settings" src="/img/buttons-right-alignment-2.png" width="332"></figure-img>
  <figure-img alt="A group of two buttons aligned to the top right of a page" label="Right-aligned buttons as global actions" src="/img/buttons-right-alignment-3.png" width="332"></figure-img>
  <figure-img alt="Two unique toolbars with actions above and to the right of the content they act upon" label="Right-aligned buttons in toolbars" src="/img/buttons-right-alignment-4.png" width="332"></figure-img>
  </grid>
- **Center alignment**: Only used for empty states where content is promotional or the actions are the only ones available in context.
  <figure-img alt="Centered buttons at the bottom of empty state content" label="Center-aligned buttons in an empty state" src="/img/buttons-center-alignment.png" width="332"></figure-img>
- **Right to left languages**: Reverse button alignment for right-to-left languages while maintaining the same order.
- **Additional considerations:**
  <grid>
  <do>
  <figure-img class="!gl-my-0" alt="Buttons in a group" label="Keep buttons visually grouped" src="/img/buttons-do-group.svg"></figure-img>
  </do>
  <dont>
  <figure-img class="!gl-my-0" alt="Buttons that should be in a group are separated" label="Separate buttons or mix alignment." src="/img/buttons-dont-separate.svg"></figure-img>
  </dont>
  <do>
  <figure-img class="!gl-my-0" alt="Destructive button separated from other actions" label="Keep destructive buttons separate" src="/img/buttons-with-danger-do-separate.svg"></figure-img>
  </do>
  <dont>
  <figure-img class="!gl-my-0" alt="Destructive button between other buttons" label="Group destructive buttons with confirmation buttons" src="/img/buttons-with-danger-dont-group.svg"></figure-img>
  </dont>
  <do>
  <figure-img class="!gl-my-0" alt="Buttons presented inline" label="Keep buttons inline when space allows" src="/img/buttons-do-inline.svg"></figure-img>
  </do>
  <dont>
  <figure-img class="!gl-my-0" alt="Buttons wrapping to a new line when there’s room to keep them inline" label="Stack buttons vertically if there is space to place them inline" src="/img/buttons-dont-wrap.svg"></figure-img>
  </dont>
  </grid>

### Order

- Affirmative actions are positioned to the outer edge of a container. This means that on left-aligned buttons the affirmative action is the left-most action, and on right-aligned buttons, the affirmative action is the right-most action.
- An affirmative action is something that takes the users further in their journey (for example, Save or Delete), while a dismissive action takes a user back (for example, Cancel). Depending on the context, an affirmative action may be destructive.
  <grid>
  <figure-img alt="Two buttons with the affirmative one on the left" label="Affirmative action on left edge for left alignment" src="/img/buttons-order-left.png" width="332"></figure-img>
  <figure-img alt="Two buttons with the affirmative one on the right" label="Affirmative action on right edge for right alignment" src="/img/buttons-order-right.png" width="332"></figure-img>
  </grid>
- The visual hierarchy is primary buttons on the outer edge, followed by secondary buttons, and so on.
- One exception to the visual hierarchy is an ellipsis button. When using an ellipsis button, place it on the outer edge.
  <grid>
  <figure-img alt="Button hierarchy from left to right for left alignment" label="Hierarchy from left to right for left alignment" src="/img/buttons-hierarchy-left.png" width="332"></figure-img>
  <figure-img alt="Button hierarchy from right to left for right alignment" label="Hierarchy from right to left for right alignment" src="/img/buttons-hierarchy-right.png" width="332"></figure-img>
  </grid>

### Combinations

Buttons can contain different content depending on the situation. For example, some buttons only have text, while others only have an icon. A combination may be used when space allows and more emphasis is required. Icons are always positioned to the left of text. Two icons should never be used in the same button, unless it is an icon dropdown.

- **Label**: A button may also be attached to a label, such as a commit SHA.
- **Emoji**: An emoji button allows a user to react to content with an emoji. The button uses the medium (default) size and is displayed with a count of how many times the reaction has been applied. A selected state visually indicates when the current user has added the reaction.

### Dropdown buttons

- A dropdown button triggers a [dropdown](/components/dropdown-overview) and uses the [chevron-down](/product-foundations/iconography-directory?q=~chevron-down) icon to the right of the text label. The chevron is the only icon that should be present with a text label.
- A dropdown button is split when additional related actions are available. The left half displays the default action and the additional related actions are contained within the attached dropdown on the right half. The options available in the dropdown perform the action on click.

### Icon-only buttons

- An icon can be used in place of text.
- Use a [tooltip](/components/tooltip) to provide context, unless the action may be universally understood, like a closing action using the [close icon](/product-foundations/iconography-directory?q=~close).
- An icon-only button shouldn't be used to toggle between two states. If the icon and action of the button change after clicking it, it can be difficult to determine if the icon represents the current or future state. For example, a button that uses the [eye](/product-foundations/iconography-directory?q=~eye) icon and changes to [eye-slash](/product-foundations/iconography-directory?q=~eye-slash) when clicked doesn't make it clear on its own whether or not it represents that an object _is_ confidential or _will be_ as a result of clicking. Use a [toggle](/components/toggle) or [checkbox](/components/checkbox) with a label to more clearly indicate alternating states. Note that this scenario is different than an icon-only button with a [selected state](#states), as there the icon doesn't change.

### Ellipsis

An ellipsis button is a specific kind of icon-only button that allows for expanding content inline. It can be used when content is hidden for the purpose of not overloading the user or because of initial space constraints.

### Group

See the [button group](/components/button-group) component.

With three or more actions, show them in a [disclosure dropdown](/components/dropdown-disclosure) if appropriate for your context. A button group can make it easier to notice and access the actions, but it can also take up unnecessary space in the UI.

### Accessibility

- Maintain parity between focus order and visual order (don't use CSS to reorder buttons).
- A visible focus state must always be present, regardless of the mode of operation (mouse, keyboard, other). We currently rely on `:focus` for this state. In the future, we may explore the use of [`:focus-visible`](https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible), but more research needs to happen first, specifically around browser heuristics. Many kinds of users benefit from visible focus indicators (like a focus ring), not just keyboard users. From [Understanding SC 2.4.7](https://www.w3.org/WAI/WCAG22/Understanding/focus-visible.html) (for [Focus Visible](https://www.w3.org/TR/WCAG22/#focus-visible) (Level AA)): "People with attention limitations, short term memory limitations, or limitations in executive processes benefit by being able to discover where the focus is located." Matsuko's [Understanding Visible Focus Indicators](https://craftcms.com/blog/understanding-visible-focus-indicators) lists additional examples of users that benefit from visible focus indicators:
  - Users using alternative input devices, such as keyboards and switches.
  - Users with low vision.
  - Users with cognitive disabilities, especially those that affect memory or attention such as dementia and ADHD (Attention-Deficit/Hyperactivity Disorder).
- Icon-only buttons must use `aria-label` to indicate the action.
- When an icon is used with a text label, the icon should be hidden from screen readers with `aria-hidden="true"`.

## Reference

These variants have been deprecated, don‘t use in production:

- **Info**: Activation or informative processes, replaced by **confirm** variant.
- **Success**: Positive actions such as the creation or addition of items, replaced by **confirm** variant.
- **Warning**: Actions that can be undone or rectified but warrant caution, replaced by **confirm** or **default** variant depending on context.

## Code reference

Buttons execute an action, either in the background or foreground of an experience. Different button
categories help guide users through certain actions. Buttons express what action will occur when the
user clicks or touches it either by text, icon, or both. Additional meaning can be derived from the
button variant.

### Button link

A button link is a link that is styled to look like a button, semantically speaking it's a `<a>` tag
with the necessary classes added to make it look like a button, it shares the same functionality as
[<gl-link>](/components/link#gllink)

<note>Setting a `target` attribute without a `href` attribute, will not create any side effects. Without the presence of a `href` attribute, this component will render a `<button>`.</note>

### Icon-only button

Icon-only buttons must have an accessible name.
You can provide one with the `aria-label` attribute, which is read out by screen readers.

```html
<gl-button icon="close" aria-label="Close" />
```

### Type

You can specify the button's type by setting the prop `type` to `button`, `submit` or `reset`.
The default type is `button`.

Note the `type` prop has no effect when either `href` or `to` props are set.

### Sizing

Specify `small` or `medium` via the `size` prop. Defaults to `medium`.

```html
<gl-button size="small">Small Button</gl-button>
<gl-button>Default Button (medium)</gl-button>
<gl-button size="medium">Medium Button</gl-button>
```

### Categories

Use the `category` prop to set the button category to `primary`, `secondary`, or `tertiary`.
Defaults to `primary`.

### Variants

Use the `variant` prop to set the button variant to `default`, `confirm`, `danger`, or `link`.
Defaults to `default`.

### Block level buttons

Create block level buttons, those that span the full width of a parent, by setting the `block`
prop.

```html
<gl-button block>Block Level Button</gl-button>
```

### Disabled state

Set the `disabled` prop to disable button default functionality. `disabled` also works with buttons
rendered as `<a>` elements and `<router-link>` (i.e. with the `href` or `to` prop set).

```html
<gl-button disabled>Disabled</gl-button>
```

### Router link support

Refer to the [Router support](/components/link#router-links) reference docs for
the various supported `<router-link>` related props.

### Accessibility

When the `href` prop is set to `'#'`, `<gl-button>` will render a link (`<a>`) element with attribute
`role="button"` set and appropriate keydown listeners (<kbd>Enter</kbd> and <kbd>Space</kbd>) so
that the link acts like a native HTML `<button>` for screen reader and keyboard-only users. When
disabled, the `aria-disabled="true"` attribute will be set on the `<a>` element.

When the `href` is set to any other value (or the `to` prop is used), `role="button"` will not be
added, nor will the keyboard event listeners be enabled.

### Label button

A label button renders a non-interactive `span` styled as a button. This can be especially useful
when used in a button group to render text-only labels along with actionable buttons. To improve
accessibility, and when applicable, consider using [`aria-describedby`] to establish a
relationship between the label button and the associated button.

[`aria-describedby`]: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-describedby_attribute

### Security

This component implements a few security measures to make it as safe as possible by default.
See [SafeLinkDirective docs] for more details.

#### Linking to an unsafe URL

If you're trying to link to a location considered unsafe by the `SafeLink` directive (when rendering
a download link with a [Data URL] for example), you'll need to bypass the `href` attribute's
sanitization. This component exposes the `is-unsafe-link` prop for that purpose.

<note>Warning! Only disable URL sanitization when absolutely necessary.</note>

```html
<gl-button
  is-unsafe-link
  download="file.txt"
  href="data:text/plain;charset=utf-8,GitLab%20is%20awesome"
>
  Download
</gl-button>
```

[SafeLinkDirective docs]: https://design.gitlab.com/storybook?path=/docs/directives-safe-link-directive--default
[Data URL]: https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs

### vue-bootstrap component

This component uses [`BButton`](https://bootstrap-vue.org/docs/components/button) from vue-bootstrap
internally. So please take a look also there at their extensive documentation.

### GlButton

<story-viewer component="base-button" title="GlButton" view-mode="docs"></story-viewer>

### Pajamas::ButtonComponent

<lookbook-viewer component="button"></lookbook-viewer>
