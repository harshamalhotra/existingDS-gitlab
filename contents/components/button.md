---
name: Button
figma: https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/Pajamas-UI-Kit?node-id=425%3A7
docs: in-progress
gitlab_ui: /components/button/code
vueComponents:
  - GlButton
  - GlButtonGroup
related:
  - tooltip
  - dropdown
  - modal
  - segmented-control
  - spinner 
  - pagination
  - /usability/i18n
  - /accessibility/best-practices
---

Buttons execute an action, either in the background or foreground of an experience. Buttons express what action will occur either by text, icon, or both. Additional meaning can be derived from the button variant and occasionally [tooltips](/components/tooltip).

## Categories

Different button categories bring varying emphasis to potential user actions. This makes the page comprehensive while guiding the user through performing a task. We have three button categories: Primary, Secondary, and Tertiary.

### Action hierarchy

Button categories are chosen based on the overall hierarchy on a given page, as well as the individual contexts found within. Defining context depends on the hierarchy of information displayed on the screen, the motivated user flow, and the available tasks. As an example: Settings pages may have multiple equally important contexts, each requiring its own primary button to complete its task.

Note that contexts may be temporary, such as a modal.

|Category|Purpose|How often|
|--------|-----------|---------|
|Primary |The single most important action that moves the task forward within a context|One per context|
|Secondary|Supplementary actions that the user is motivated to take|One or more per context|
|Tertiary|Less important actions that are not promoted to the user|Multiple|

[[Example:button-primary]]

[[Example:button-secondary]]

[[Example:button-tertiary]]

## Variants

The visual style of a button helps a user identify what type of action it performs as well as its importance compared to other buttons in the same context.

|Variant|Purpose|Example|
|-------|--------|-------|
|Confirm|A positive or negative non-destructive action that is confirmation of what the user desires to take place (replaces `info`, `success`, and `warning`).|The **New issue** button when creating a new issue from the Issues list.|
|Default|An action that doesn’t warrant prominence, typically when a primary variant is already used in the same context.|The **Cancel** button when leaving a modal.|
|Dashed|An object that has yet to be created.|The **Add LICENSE** button on a project that doesn't contain a license.|
|Danger|A destructive action that can't be undone or has potentially detrimental consequences.|The **Delete account** button when deleting an account.|
|Link|An action that is visually styled like an anchor link.|The **Edit** links in the issue sidebar.|

[[Example:button-variants]]

### Deprecated variants

These variants have been deprecated, don‘t use in production.

|Variant|Purpose|
|-------|--------|
|Info|Activation or informative processes|
|Success|Positive actions such as the creation or addition of items|
|Warning|Actions that can be undone or rectified but warrant caution|

## States

Button states change visually and/or programmatically depending on user interaction or a predetermined state. For example, programmatically moving focus to a button in a modal when it opens. This ensures they’re accessible and feel reactive for different modalities.

### Disabled

Disabled buttons prevent the user from performing an action. They are there to let the user know a certain action would be possible if circumstances were different. All buttons regardless of style are styled the same way when in the disabled state. Additionally they will show the "not-allowed" cursor style when hovered upon and have a faded text color.

[[Example:button-disabled]]

### Loading

Any button can utilize the `loading` property to turn a button’s state into a loading state. The loading status is indicated by the use of a [spinner](/components/spinner), and the button is disabled while the state persists.

For [buttons containing text](#combinations), the spinner is added to the left of the button, before the icon or label.

[[Example:button-loading]]

For [icon buttons](#icon), the spinner replaces the icon.

Todo: Add live component block with example of loading icon button

### Selected

Selected buttons act like a toggle that indicate whether or not an option is in a selected state. To indicate to screen readers that the button functions as a toggle it should have `aria-pressed="true"` to align with the visually selected state, otherwise `aria-pressed="false"`.

[[Example:button-selected]]

## Combinations

Buttons can contain different content depending on the situation. For example, some buttons only have text, while others only have an icon. A combination may be used when space allows and more emphasis is required. Icons are always positioned to the left of text. Two icons should never be used in the same button, unless it is an [icon dropdown](#text-%2B-icon-dropdowns).

[[Example:button-basic]]

[[Example:button-icon]]

[[Example:button-icon-and-text]]

### Label

A button may also be attached to a label, such as a commit SHA.

[[Example:button-label]]

### Emoji

Emoji buttons provide the user with a visual to indicate what emotion has been attributed to the parent object. They only contain an emoji character and convert to a [selected](#selected) state when pressed.

[[Example:button-emoji]]

## Dropdown buttons

Dropdown buttons trigger option menus. 

### Text and icon dropdowns

A dropdown button is identified by the use of a [chevron-down](https://gitlab-org.gitlab.io/gitlab-svgs/?q=chevron-down) icon to the right of the text label. The chevron is the only icon that should be present with a text label.

[[Example:new-dropdown-default]]

[[Example:new-dropdown-with-icon]]

### Split dropdown

Dropdown buttons may be split when additional related actions are available. The text button will allow immediate access to the most common option and an attached dropdown button to change the default action.

If the dropdown menu has no related actions available, a split dropdown button should be converted back to a text button.

[[Example:new-dropdown-split]]

## Ellipsis

Ellipsis buttons allow for expanding content inline. It can be used when content is hidden for the purpose of not overloading the user or because of initial space constraints.

[[Example:button-ellipsis]]

## Group

Button groups visually group buttons that have similar or related actions together to emphasize the relationship and aid with arrangement and spacing.

[Pagination](/components/pagination) and [segmented controls](/components/segmented-control) are specific types of button groups.

[[Example:button-group-basic]]

## Sizing

Depending on the interface buttons may either use the medium or small size. Block buttons expand to fill the width of their parent container. This can be used for buttons embedded inside smaller width containers or to improve usability on mobile viewports.

[[Example:button-sizes]]

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

For button actions that do not immediately perform an action, append an ellipsis (`...`) to the button label text. For example, when committing a change in the Web IDE you are asked to select a branch before the action occurs.

| Direct action | Subsequent action needed |
| ------ | ------ |
| <img src="/img/buttons-label.png" alt="A green confirmation button labeled save changes"> | <img src="/img/buttons-label-ellipsis.png" alt="a blue primary action button labeled commit..."> |

Please note to **not** mix text and icon label buttons together within the same interface.

## Design specifications

Color, spacing, dimension, and layout specific information pertaining to this component can be viewed using the following link:

[View design in Pajamas UI Kit →](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/Pajamas-UI-Kit-Beta?node-id=2956%3A3357)
