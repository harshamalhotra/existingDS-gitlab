---
name: Button
description: A button indicates a distinct action and executes a function. Text, icon, or a combination of the two express the action and are supported by the variant and occasionally a tooltip.
figma: https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/Pajamas-UI-Kit?node-id=425%3A7
docs: in-progress
gitlab_ui: /components/button/code
components:
  - base-button
  - base-button-group
related:
  - dropdown-disclosure
  - dropdown-menu
  - segmented-control
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

<story-viewer component="base-button" story="badges" title="Buttons with badges"></story-viewer>

<story-viewer component="base-button" story="dropdown-button" title="Dropdown button" iframe-padding="0 0 50px 0"></story-viewer>

<story-viewer component="base-button" story="dropdown-icon-button" title="Icon dropdown button" iframe-padding="0 0 50px 0"></story-viewer>

<story-viewer component="base-button" story="dropdown-split-button" title="Split dropdown button" iframe-padding="0 0 50px 0"></story-viewer>

<story-viewer component="base-button" story="ellipsis" title="Ellipsis button"></story-viewer>

<story-viewer component="base-button-group" title="Button Group" iframe-padding="0 0 50px 0"></story-viewer>

[View in Pajamas UI Kit →](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?type=design&node-id=425-7&mode=design)

## Structure

<figure-img alt="Numbered diagram of a button structure" label="Button structure" src="/img/button-structure.svg"></figure-img>

1. **Icon**: Icon indicating or supporting the action.
1. **Label**: Text clarifying the action.
1. **Dropdown**: [chevron-down](http://gitlab-org.gitlab.io/gitlab-svgs/?q=~chevron-down) icon indicating a dropdown menu.
1. **Emoji**: Pictogram character.
1. **Badge** (optional): Counts the number of items or provides a status related to the action.

## Guidelines

### When to use

- A button (`<button>`) element is used to indicate an action.

### When not to use

- If you are directing a user to a new location, consider using an anchor (`<a>`) element, which can also be styled like a button when actions and destinations are present in the same set of controls.

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
- **Dashed**: Highlight an action to indicate an object has yet to be created.
- **Link**: Visually style an action like an anchor link when using a [link](/components/link) isn't possible.

### Sizes

- **Medium** (default): The medium button size is sufficient in most cases and provides the largest possible click target size.
- **Small**: Decrease the size of a button to prevent it from competing with a primary button, or to decrease the overall size of a group or string of buttons. Although it's possible to use the small size for an icon-only button, using the default medium size is encouraged to provide a larger click target.
- **Block**: Expand the width of a button to fill the parent container which can help provide balance in mobile layouts.

### States

States change visually and/or programmatically depending on user interaction or a predetermined state. For example, programmatically moving focus to a button in a modal when it opens. This ensures they're accessible and feel reactive for different modalities.

- **Disabled**: Prevents the user from performing an action. It lets the user know a certain action would be possible if circumstances were different. All buttons regardless of variant appear the same when disabled. Additionally, they will show the "not-allowed" cursor when hovered.
- **Loading**: Place a button in the loading state with the `loading` property. The loading status is indicated by the use of a [spinner](/components/spinner), and the button is disabled while the state persists.
  - For [buttons containing text](#combinations), the spinner is added to the left of the button, before the icon or label.
  - For icon buttons, the spinner replaces the icon.
- **Selected**: Acts like a toggle that indicate whether or not an option is in a selected state. To indicate to screen readers that the button functions as a toggle it should have `aria-pressed="true"` to align with the visually selected state, otherwise `aria-pressed="false"`.

### Content

#### Labels

- Use concise language that conveys what happens when the button is activated.
- Use [sentence case](/content/punctuation).
- Append an ellipsis (…) to the button label text when the action will require additional input from the user before final completion. Does not apply to [danger actions](#variants).
- Try not to use text-only and icon-only buttons in the same context.
- For destructive actions, use clear text and always indicate what is being destroyed. For example, use **Delete page** instead of just **Delete**.
- For buttons that copy content to the clipboard, don't use **to clipboard**. For example, use **Copy branch name** instead of **Copy branch name to clipboard**.

#### Icons

- Only use icons from [GitLab's SVG library](http://gitlab-org.gitlab.io/gitlab-svgs/).
- Icons use the default size (16×16px).

#### Badges

- A single [badge](/components/badge) can be used to the right of a text label to indicate status or a numeric count.
- A badge that includes a numeric count should be followed by a `<span>` with the `sr-only` class providing a text description of what's being counted.
- The badge variant should match the button variant. For example, a danger badge within a danger button.
- The badge size should match the button size. For example, a small badge within a small button.

### Alignment

Buttons can be aligned left, right, or center depending on the context.
Multiple alignments can be combined within a single screen, but not within an individual context. For example, on a single screen the main content uses left alignment, while the sidebar with multiple settings uses right alignment.

- **Left alignment**: In page content and forms where the content is typically unconstrained other than by the grid layout. In these instances an F-pattern (top to bottom and left to right in a horizontal movement) is common for reading flow, and buttons align with other content on the page like headings, lists, input labels, and form labels. Left alignment is a benefit for [accessibility](/accessibility/best-practices) in many ways, including reading flow, focus order, and page zoom where right-aligned buttons may be initially off screen.
  <div class="gl-display-grid gl-grid-template-columns-2 gl-column-gap-6">
    <figure-img alt="A group of two buttons aligned to the left at the bottom of a form" label="Left-aligned buttons in a form" src="/img/buttons-left-alignment.png" width="332"></figure-img>
    <figure-img alt="A page flow where several sets of buttons are aligned to the left of the page" label="Left-aligned buttons in a page flow" src="/img/buttons-left-alignment-2.png" width="332"></figure-img>
  </div>
- **Right alignment**: In constrained containers like modals and dialogs, flows that continue in a progressive direction, actions with a global impact, and toolbars. In these instances a Z-pattern (top to bottom and left to right with a diagonal, scanning movement) is common for reading flow. In these instances a user may be taking a progressive action, like affirming a modal, or an action upon a section, like formatting text in a comment.
  <div class="gl-display-grid gl-grid-template-columns-2 gl-column-gap-6">
    <figure-img alt="A group of two buttons aligned to the right in a modal" label="Right-aligned buttons in a modal" src="/img/buttons-right-alignment.png" width="332"></figure-img>
    <figure-img alt="A sidebar with stacked sections of settings where each section has an edit button on the right" label="Right-aligned buttons in a sidebar with multiple settings" src="/img/buttons-right-alignment-2.png" width="332"></figure-img>
    <figure-img alt="A group of two buttons aligned to the top right of a page" label="Right-aligned buttons as global actions" src="/img/buttons-right-alignment-3.png" width="332"></figure-img>
    <figure-img alt="Two unique toolbars with actions above and to the right of the content they act upon" label="Right-aligned buttons in toolbars" src="/img/buttons-right-alignment-4.png" width="332"></figure-img>
  </div>
- **Center alignment**: Only used for empty states where content is promotional or the actions are the only ones available in context.
  <figure-img alt="Centered buttons at the bottom of empty state content" label="Center-aligned buttons in an empty state" src="/img/buttons-center-alignment.png" width="332"></figure-img>
- **Right to left languages**: Reverse button alignment for [right-to-left languages](/content/i18n) while maintaining the same order.
- **Additional considerations:**
  <div class="gl-display-grid gl-grid-template-columns-2 gl-column-gap-6 gl-mt-6">
    <figure-img alt="Buttons in a group" label="Keep buttons visually grouped" src="/img/buttons-do-group.svg">
      <template #caption><strong>Do</strong>: Keep buttons visually grouped</template>
    </figure-img>
    <figure-img alt="Buttons that should be in a group are separated" label="Separate buttons or mix alignment." src="/img/buttons-dont-separate.svg">
      <template #caption><strong>Don't</strong>: Separate buttons or mix alignment (unless the separated button is destructive)</template>
    </figure-img>
    <figure-img alt="Destructive button separated from other actions" label="Keep destructive buttons separate" src="/img/buttons-with-danger-do-separate.svg">
      <template #caption><strong>Do</strong>: Keep destructive buttons separate</template>
    </figure-img>
    <figure-img alt="Destructive button between other buttons" label="Group destructive buttons with confirmation buttons" src="/img/buttons-with-danger-dont-group.svg">
      <template #caption><strong>Don't</strong>: Group destructive buttons with confirmation buttons</template>
    </figure-img>
    <figure-img alt="Buttons presented inline" label="Keep buttons inline when space allows" src="/img/buttons-do-inline.svg">
      <template #caption><strong>Do</strong>: Keep buttons inline when space allows</template>
    </figure-img>
    <figure-img alt="Buttons wrapping to a new line when there’s room to keep them inline" label="Stack buttons vertically if there is space to place them inline" src="/img/buttons-dont-wrap.svg">
      <template #caption><strong>Don't</strong>: Stack buttons vertically if there is space to place them inline</template>
    </figure-img>
  </div>

### Order

- Affirmative actions are positioned to the outer edge of a container. This means that on left-aligned buttons the affirmative action is the left-most action, and on right-aligned buttons, the affirmative action is the right-most action.
- An affirmative action is something that takes the users further in their journey (for example, Save or Delete), while a dismissive action takes a user back (for example, Cancel). Depending on the context, an affirmative action may be destructive.
  <div class="gl-display-grid gl-grid-template-columns-2 gl-column-gap-6">
    <figure-img alt="Two buttons with the affirmative one on the left" label="Affirmative action on left edge for left alignment" src="/img/buttons-order-left.png" width="332"></figure-img>
    <figure-img alt="Two buttons with the affirmative one on the right" label="Affirmative action on right edge for right alignment" src="/img/buttons-order-right.png" width="332"></figure-img>
  </div>
- The visual hierarchy is primary buttons on the outer edge, followed by secondary buttons, and so on.
- One exception to the visual hierarchy is an ellipsis button. When using an ellipsis button, place it on the outer edge.
  <div class="gl-display-grid gl-grid-template-columns-2 gl-column-gap-6">
    <figure-img alt="Button hierarchy from left to right for left alignment" label="Hierarchy from left to right for left alignment" src="/img/buttons-hierarchy-left.png" width="332"></figure-img>
    <figure-img alt="Button hierarchy from right to left for right alignment" label="Hierarchy from right to left for right alignment" src="/img/buttons-hierarchy-right.png" width="332"></figure-img>
  </div>

### Combinations

Buttons can contain different content depending on the situation. For example, some buttons only have text, while others only have an icon. A combination may be used when space allows and more emphasis is required. Icons are always positioned to the left of text. Two icons should never be used in the same button, unless it is an icon dropdown.

- **Label**: A button may also be attached to a label, such as a commit SHA.
- **Emoji**: An emoji button provides a user with a visual to indicate what emotion has been attributed to the parent object. It only contains an emoji character and uses the [selected state](#states) when pressed.

### Dropdown buttons

A dropdown button triggers an option menu.

- **Text and icon dropdowns**: A dropdown button uses the [chevron-down](https://gitlab-org.gitlab.io/gitlab-svgs/?q=chevron-down) icon to the right of the text label. The chevron is the only icon that should be present with a text label.
- **Split dropdown**: A dropdown button is split when additional related actions are available. The left half displays the default action and the additional related actions are contained within the attached dropdown on the right half. The options available in the dropdown perform the action on click.

### Icon-only buttons

- An icon can be used in place of text.
- Use a [tooltip](/components/tooltip) to provide context, unless the action may be universally understood, like a closing action using the [close icon](/product-foundations/iconography/icons?q=%7Eclose).
- An icon-only button shouldn't be used to toggle between two states. If the icon and action of the button change after clicking it, it can be difficult to determine if the icon represents the current or future state. For example, a button that uses the [eye](https://gitlab-org.gitlab.io/gitlab-svgs/?q=~eye) icon and changes to [eye-slash](https://gitlab-org.gitlab.io/gitlab-svgs/?q=~eye-slash) when clicked doesn't make it clear on its own whether or not it represents that an object _is_ confidential or _will be_ as a result of clicking. Use a [toggle](/components/toggle) or [checkbox](/components/checkbox) with a label to more clearly indicate alternating states. Note that this scenario is different than an icon-only button with a [selected state](#states), as there the icon doesn't change.

### Ellipsis

An ellipsis button is a specific kind of icon-only button that allows for expanding content inline. It can be used when content is hidden for the purpose of not overloading the user or because of initial space constraints.

### Group

Button groups visually group buttons that have similar or related actions together to emphasize the relationship and aid with arrangement and spacing. When button groups are used to select an option from a series of options, a single button in a button group can act as an indicator of the currently selected state.

[Pagination](/components/pagination) and [segmented controls](/components/segmented-control) are specific types of button groups.

### Accessibility

- Maintain parity between focus order and visual order (don't use CSS to reorder buttons).
- Icon-only buttons must use `aria-label` to indicate the action.
- When an icon is used with a text label, the icon should be hidden from screen readers with `aria-hidden="true"`.

## Reference

These variants have been deprecated, don‘t use in production:

- **Info**: Activation or informative processes, replaced by **confirm** variant.
- **Success**: Positive actions such as the creation or addition of items, replaced by **confirm** variant.
- **Warning**: Actions that can be undone or rectified but warrant caution, replaced by **confirm** or **default** variant depending on context.
