---
name: Button
figma: https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/Pajamas-UI-Kit?node-id=425%3A7
docs: in-progress
vueComponents:
  - GlButton
  - GlButtonGroup
related:
  - dropdowns
  - segmented-control
  - spinner 
  - pagination
  - /usability/i18n
  - /accessibility/best-practices
---

Buttons execute an action, either in the background or foreground of an experience. Different button categories help guide users through certain actions. Buttons express what action will occur when the user clicks or touches it either by text, icon, or both. Additional meaning can be derived from the button style.

## Categories

Different button categories bring varying emphasis to potential user actions. This makes the page comprehensive while guiding the user through performing a task.

### Primary

Primary buttons are the single most important action that moves the task forward within a context and thus have the most emphasis placed upon them. There should only be one call to action in any given context. Primary buttons are recognized by their solid color, bold text labels, and must use one of the four elementary button styles: Info (blue), Success (green), Warning (orange), or Danger (red).

Defining context depends on the hierarchy of information displayed on the screen, the motivated user flow, and the available tasks. As an example; Settings pages may have multiple equally important contexts, each requiring its own primary button to complete its task.

Please note that contexts may be temporary, such as a modal.

[[Example:button-primary]]

### Secondary

Secondary buttons represent supplementary actions that the user is motivated to take. The outlined styling places less emphasis on these buttons. Just like primary buttons, secondary buttons also require one of the four elementary button styles: Info (blue), Success (green), Warning (orange), or Danger (red).

[[Example:button-secondary]]

### Tertiary

A tertiary button is the default button category. Tertiary buttons still have an outlined styling but cannot have one of the four elementary button styles. They are typically used for less important actions that are not promoted to the user.

[[Example:button-tertiary]]

### Link

Todo: Add link category button documentation

Todo: Add live component block with code example

## States

Buttons change depending on the user's interaction or set behavior. This is to ensure they are accessible and feel responsive in both desktop and mobile environments. Additionally, disabled and read-only buttons have specific styling and interaction restrictions that inform the user of their meaning.

### Hover, Active, and Focus

Buttons change depending on the user's interaction with them. In hover, active, and focus states the buttons will have a thicker border and their background color will change. For the focus state, buttons will get an additional blue glow indicating that they are in focus.

[[Example:button-variants]]

### Disabled

Disabled buttons prevent the user from performing an action. They are there to let the user know a certain action would be possible if circumstances were different. All buttons regardless of style are styled the same way when in the disabled state. Additionally they will show the "not-allowed" cursor style when hovered upon and have a faded text color.

[[Example:button-disabled]]

## Variants

Buttons derive additional meaning from their presented style and help the user quickly presume any consequences that button may cause when clicked.

### Neutral

The neutral button style is used most often and is generally picked when using tertiary buttons. It features grayscale colors with a white background.

[[Example:button-tertiary]]

### Elementary

Our elementary button styles all convey a different meaning due to their respective styling. Their colors are aligned with our [four primary chromatic colors](/foundations/colors).

#### Info

Buttons that represent activation or informative processes. They are represented in a blue color.

[[Example:button-info]]

#### Success

Buttons that represent positive actions such as the creation or addition of items. They are represented in a green color.

[[Example:button-success]]

#### Warning

Buttons that represent actions where the user should be cautious such as overriding certain rulesets. These actions can be undone or somehow rectified by the user if a mistake is made. They are represented in an orange color.

Please note that often the secondary button category is the correct choice here as the user will mostly not be motivated to delete content when completing the task at hand.

[[Example:button-warning]]

#### Danger

Buttons that represent actions that are destructive, such as deleting content. These actions cannot be undone. They are represented in a red color.

Please note that often the secondary button category is the correct choice here as the user will mostly not be motivated to delete content when completing the task at hand.

[[Example:button-danger]]

### Dashed

Dashed button styles are used when something has not yet been created. Their action will lead the user to create the missing item, after which it will replace the dashed button with a link to the item.

[[Example:button-dashed]]

## Combinations

Buttons come in many different combinations to fit different situations. Some trigger a dropdown while others combine multiple similar actions together

### Text

The default combination is the text button. They contain a text label and have no special interactions.

[[Example:button-tertiary]]

### Icon

Icon buttons provide the user with visual iconography to signify what the button does. They only contain an icon label and have no special interactions. They can be used when a text button would be too big or the meaning of an icon conveys what will happen in a more concise way.

[[Example:button-icon]]

### Icon + text

Text buttons might be supplemented with an icon to both clarify an action and call attention to a button. Icons are always positioned to the left of the text label.

Please note to **not** use two icons in the same button.

[[Example:button-icon-and-text]]

### Emoji

Emoji buttons provide the user with visual to signify what the emotion users have attributed to the parent object. They only contain an emoji label and convert to an active state when pressed.

[[Example:button-emoji]]

### Dropdown

Dropdown buttons trigger menus of options which can be either actions or input values. The only icon that should be present in the default dropdown is the [chevron-down](https://gitlab-org.gitlab.io/gitlab-svgs/?q=chevron-down) icon to the right of the text label.

[[Example:new-dropdown-default]]

#### Split dropdown

Dropdown buttons may be split when its options are actions. The text button will allow immediate access to the most common option and an attached dropdown button to either change the default action or directly access a list of related actions. The dropdown button is attached to the right of the text button and has a chevron icon as its label.

If the dropdown menu has no related actions available, a split dropdown button should be converted back to just a text button.

The currently selected action has a checkmark on the left side of the dropdown item. See also [checkmark dropdowns](/components/dropdowns).

[[Example:new-dropdown-split]]

#### Icon dropdown

Icon dropdowns function similar to other dropdown button combinations with the difference being an icon label.

[[Example:new-dropdown-with-icon]]

### Ellipsis

Ellipsis buttons allow for expanding content inline. It can be used when content is hidden for the purpose of not overloading the user or because of initial space constraints.

[[Example:button-ellipsis]]

### Group

Button groups merge frequently used buttons with a close relationship or similar actions together to aid with arrangement and spacing. Button groups are always displayed in a horizontal row.

[[Example:button-group-basic]]

### Icon group

Icon groups function similar to button groups with the difference being an icon label.

Todo: Add live component block with code example

### Segmented control

A segmented control allows users to choose one out of a range of available options. It’s commonly used as an alternative to dropdowns and radio selections.

See [segmented control](/components/segmented-control) for more information.

### Icon segmented control

Icon segmented controls function similar to segmented control buttons with the difference being an icon label.

See [segmented control](/components/segmented-control) for more information.

### Loading

Any button can utilize the `loading` property to turn a button’s state into a loading state. This state indicates that an action is in progress by adding a [spinner](/components/spinner), and the button can’t be clicked while the state persists.

For [text buttons](#text) or [icon and text buttons](#icon-%2B-text), the spinner is added to the left of the button, before the icon or label.

[[Example:button-loading]]

For [icon buttons](#icon), the spinner replaces the icon.

Todo: Add live component block with example of loading icon button

### Pagination

Pagination is a specific example of a [segmented control](/components/pagination). It indicates the number of pages available, what page the user is on, and controls for navigating between pages.

See [pagination](/components/pagination) for more information.

## Sizing

Depending on the interface buttons may either use the medium or small size.

### Medium

This is the default button size.

[[Example:button-medium]]

### Small

This is the alternative button size for use in tight spaces.

[[Example:button-small]]

### Full width

Buttons can be expanded to the full width of the parent container. This can be used for buttons embedded inside smaller width containers or to improve usability on mobile viewports.

[[Example:button-full-width]]

## Alignment and order

Buttons can be aligned left, right, or center depending on the context. Multiple alignments can be combined within a single screen, but not within an individual context. For example, on a single screen the main content uses left alignment, while the sidebar with multiple settings uses right alignment.

Each type of alignment and its recommended application is covered more below.

### Left alignment

Buttons are aligned left in page content and forms where the content is typically unconstrained other than by the grid layout. In these instances an F-pattern (top to bottom and left to right in a horizontal movement) is common for reading flow, and buttons align with other content on the page like headings, lists, input labels, and form labels.

Left alignment is a benefit for [accessibility](/accessibility/best-practices) in many ways, including reading flow, focus order, and page zoom where right-aligned buttons may be initially off screen.

<div class="row">
  <div class="col col-50">
    <figure class="figure" role="figure" aria-label="Left-aligned buttons in a form">
      <img class="figure-img" src="/img/buttons-left-alignment.png" alt="A group of two buttons aligned to the left at the bottom of a form" role="img" style="width:100%; max-width:332px; height:auto" />
      <figcaption class="figure-caption">Left-aligned buttons in a form</figcaption>
    </figure>
  </div>
  <div class="col col-50">
    <figure class="figure" role="figure" aria-label="Left-aligned buttons in a page flow">
      <img class="figure-img" src="/img/buttons-left-alignment-2.png" alt="A page flow where several sets of buttons are aligned to the left of the page" role="img" style="width:100%; max-width:332px; height:auto" />
      <figcaption class="figure-caption">Left-aligned buttons in a page flow</figcaption>
    </figure>
  </div>
</div>

### Right alignment 

Buttons are aligned right in constrained containers like modals and dialogs, flows that continue in a progressive direction, actions with a global impact, and toolbars. In these instances a Z-pattern (top to bottom and left to right with a diagonal, scanning movement) is common for reading flow. In these instances a user may be taking a progressive action, like affirming a modal, or an action upon a section, like formatting text in a comment.

<div class="row">
  <div class="col col-50">
    <figure class="figure" role="figure" aria-label="Right-aligned buttons in a modal">
      <img class="figure-img" src="/img/buttons-right-alignment.png" alt="A group of two buttons aligned to the right in a modal" role="img" style="width:100%; max-width:332px; height:auto" />
      <figcaption class="figure-caption">Right-aligned buttons in a modal</figcaption>
    </figure>
  </div>
  <div class="col col-50">
    <figure class="figure" role="figure" aria-label="Right-aligned buttons in a sidebar with multiple settings">
      <img class="figure-img" src="/img/buttons-right-alignment-2.png" alt="A sidebar with stacked sections of settings where each section has an edit button on the right" role="img" style="width:100%; max-width:332px; height:auto" />
      <figcaption class="figure-caption">Right-aligned buttons in a sidebar with multiple settings</figcaption>
    </figure>
  </div>
  <div class="col col-50">
    <figure class="figure" role="figure" aria-label="Right-aligned buttons as global actions">
      <img class="figure-img" src="/img/buttons-right-alignment-3.png" alt="A group of two buttons aligned to the top right of a page" role="img" style="width:100%; max-width:332px; height:auto" />
      <figcaption class="figure-caption">Right-aligned buttons as global actions</figcaption>
    </figure>
  </div>
  <div class="col col-50">
    <figure class="figure" role="figure" aria-label="Right-aligned buttons in toolbars">
      <img class="figure-img" src="/img/buttons-right-alignment-4.png" alt="Two unique toolbars with actions above and to the right of the content they act upon" role="img" style="width:100%; max-width:332px; height:auto" />
      <figcaption class="figure-caption">Right-aligned buttons in toolbars</figcaption>
    </figure>
  </div>
</div>

### Center alignment

Center alignment is only used for empty states where content is promotional or the actions are the only ones available in context.

<figure class="figure" role="figure" aria-label="Center-aligned buttons in an empty state">
  <img class="figure-img" src="/img/buttons-center-alignment.png" alt="Centered buttons at the bottom of empty state content" role="img" style="width:100%; max-width:332px; height:auto" />
  <figcaption class="figure-caption">Center-aligned buttons in an empty state</figcaption>
</figure>

### Order

In all cases, affirmative actions are positioned to the outer edge of a container. This means that on left-aligned buttons the affirmative action is the left-most action, and on right-aligned buttons, the affirmative action is the right-most action.

An affirmative action is something that takes the users further in their journey (for example, Save or Delete), while a dismissive action takes a user back (for example, Cancel). Depending on the context, an affirmative action may be destructive.

<div class="row">
  <div class="col col-50">
    <figure class="figure" role="figure" aria-label="Affirmative action on left edge for left alignment">
      <img class="figure-img" src="/img/buttons-order-left.png" alt="Two buttons with the affirmative one on the left" role="img" style="width:100%; max-width:332px; height:auto" />
      <figcaption class="figure-caption">Affirmative action on left edge for left alignment</figcaption>
    </figure>
  </div>
  <div class="col col-50">
    <figure class="figure" role="figure" aria-label="Affirmative action on right edge for right alignment">
      <img class="figure-img" src="/img/buttons-order-right.png" alt="Two buttons with the affirmative one on the right" role="img" style="width:100%; max-width:332px; height:auto" />
      <figcaption class="figure-caption">Affirmative action on right edge for right alignment</figcaption>
    </figure>
  </div>
</div>

The visual hierarchy is primary buttons on the outer edge, followed by secondary buttons, and so on.

<div class="row">
  <div class="col col-50">
    <figure class="figure" role="figure" aria-label="Hierarchy from left to right for left alignment">
      <img class="figure-img" src="/img/buttons-hierarchy-left.png" alt="Button hierarchy from left to right for left alignment" role="img" style="width:100%; max-width:332px; height:auto" />
      <figcaption class="figure-caption">Hierarchy from left to right for left alignment</figcaption>
    </figure>
  </div>
  <div class="col col-50">
    <figure class="figure" role="figure" aria-label="Hierarchy from right to left for right alignment">
      <img class="figure-img" src="/img/buttons-hierarchy-right.png" alt="Button hierarchy from right to left for right alignment" role="img" style="width:100%; max-width:332px; height:auto" />
      <figcaption class="figure-caption">Hierarchy from right to left for right alignment</figcaption>
    </figure>
  </div>
</div>

### Right to left languages

Button alignment should be reversed for [Right-to-left languages](/usability/i18n), but order should remain the same.

### Dos and dont’s

| **Do** | **Don’t** |
| ------ | ------ |
| <figure class="figure" role="figure" aria-label="Keep buttons visually grouped"><img class="figure-img" src="/img/buttons-do-group.svg" alt="Buttons in a group" role="img" /><figcaption class="figure-caption">Keep buttons visually grouped</figcaption></figure> | <figure class="figure" role="figure" aria-label="Separate buttons or mix alignment."><img class="figure-img" src="/img/buttons-dont-separate.svg" alt="Buttons that should be in a group are separated" role="img" /><figcaption class="figure-caption">Separate buttons or mix alignment</figcaption></figure> |
| <figure class="figure" role="figure" aria-label="Keep buttons inline when space allows"><img class="figure-img" src="/img/buttons-do-inline.svg" alt="Buttons presented inline" role="img" /><figcaption class="figure-caption">Keep buttons inline when space allows</figcaption></figure> | <figure class="figure" role="figure" aria-label="Stack buttons vertically if there is space to place them inline"><img class="figure-img" src="/img/buttons-dont-wrap.svg" alt="Buttons wrapping to a new line when there’s room to keep them inline" role="img" /><figcaption class="figure-caption">Stack buttons vertically if there is space to place them inline</figcaption></figure> |
| <figure class="figure" role="figure" aria-label="Maintain parity between focus order and visual order"><img class="figure-img" src="/img/buttons-do-dom-order.png" alt="Buttons that visually match the DOM order" role="img" style="width:100%; max-width:332px; height:auto" /><figcaption class="figure-caption">Maintain parity between focus order and visual order</figcaption></figure> | <figure class="figure" role="figure" aria-label="Use CSS to visually order buttons differently than the DOM order"><img class="figure-img" src="/img/buttons-dont-dom-order.png" alt="Buttons that visually are presented opposite of the DOM order" role="img" style="width:100%; max-width:332px; height:auto" /><figcaption class="figure-caption">Use CSS to visually order buttons differently than the DOM order</figcaption></figure> |

## Labels

Button labels should be short and concise while conveying what happens when the button is clicked. Buttons use [sentence case](/content/punctuation) and a normal font weight. An icon can be used in place of text.

Please note to **not** mix text and icon label buttons together within the same interface.

## Design specifications

Color, spacing, dimension, and layout specific information pertaining to this component can be viewed using the following link:

[View design in Pajamas UI Kit →](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/Pajamas-UI-Kit-Beta?node-id=2956%3A3357)
