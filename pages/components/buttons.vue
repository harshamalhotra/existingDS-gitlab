<template>
  <div class="content limited m-t-7 m-b-7">
    <div class="component md">
      <h1>Buttons</h1>
      <p>Buttons execute an action, either in the background or foreground of an experience. Different button types help guide users through certain actions. Buttons express what action will occur when the user clicks or touches it either by text, icon, or both. Additional meaning can be derived from the button style.</p>

      <h2>Types</h2>
      <p>Different button types bring varying emphasis to potential user actions. This makes the page comprehensive while guiding the user through performing a task.</p>

      <h3>Primary</h3>
      <p>Primary buttons are the single most important action that moves the task forward within a context and thus have the most emphasis placed upon them. There should only be one call to action in any given context. Primary buttons are recognized by their solid color, bold text labels, and must use one of the four elementary button styles: Info (blue), Success (green), Warning (orange), or Danger (red).</p>
      <p>Defining context depends on the hierarchy of information displayed on the screen, the motivated user flow, and the available tasks. As an example; Settings pages may have multiple equally important contexts, each requiring its own primary button to complete its task.</p>
      <p>Please note that contexts may be temporary, such as a modal.</p>
      <p class="todo">Todo: Add live component block with code example</p>

      <h3>Secondary</h3>
      <p>Secondary buttons represent supplementary actions that the user is motivated to take. The outlined styling places less emphasis on these buttons. Just like primary buttons, secondary buttons also require one of the four elementary button styles: Info (blue), Success (green), Warning (orange), or Danger (red).</p>
      <p class="todo">Todo: Add live component block with code example</p>

      <h3>Tertiary</h3>
      <p>A tertiary button is the default button type. Tertiary buttons still have an outlined styling but cannot have one of the four elementary button styles. They are typically used for less important actions that are not promoted to the user.</p>
      <p class="todo">Todo: Add live component block with code example</p>

      <h3>Link</h3>
      <p class="todo">Todo: Add link type button documentation</p>
      <p class="todo">Todo: Add live component block with code example</p>

      <h2>States</h2>
      <p>Buttons change depending on the user's interaction or set behavior. This is to ensure they are accessible and feel responsive in both desktop and mobile environments. Additionally, disabled and read-only buttons have specific styling and interaction restrictions that inform the user of their meaning.</p>

      <h3>Hover, Active, and Focus</h3>
      <p>Buttons change depending on the user's interaction with them. In hover, active, and focus states the buttons will have a thicker border and their background color will change. For the focus state, buttons will get an additional blue glow indicating that they are in focus.</p>

      <p class="todo">Todo: Add live component block with code example</p>

      <h3>Disabled</h3>
      <p>Disabled buttons prevent the user from performing an action. They are there to let the user know a certain action would be possible if circumstances were different. All buttons regardless of style are styled the same way when in the disabled state. Additionally they will show the "not-allowed" cursor style when hovered upon and have a faded text color.</p>

      <p class="todo">Todo: Add live component block with code example</p>

      <h2>Styles</h2>
      <p>Buttons derive additional meaning from their presented style and help the user quickly presume any consequences that button may cause when clicked.</p>

      <h3>Neutral</h3>
      <p>The neutral button style is used most often and is generally picked when using tertiary buttons. It features grayscale colors with a white background.</p>

      <p class="todo">Todo: Add live component block with code example</p>

      <h3>Elementary</h3>
      <p>Our elementary button styles all convey a different meaning due to their respective styling. Their colors are aligned with our <a href="/foundations/colors">four primary chromatic colors</a>.</p>

      <h4>Info</h4>
      <p>Buttons that represent activation or informative processes. They are represented in a blue color.</p>

      <p class="todo">Todo: Add live component block with code example</p>

      <h4>Success</h4>
      <p>Buttons that represent positive actions such as the creation or addition of items. They are represented in a green color.</p>

      <p class="todo">Todo: Add live component block with code example</p>

      <h4>Warning</h4>
      <p>Buttons that represent actions where the user should be cautious such as overriding certain rulesets. These actions can be undone or somehow rectified by the user if a mistake is made. They are represented in an orange color.</p>
      <p>Please note that often the secondary button type is the correct choice here as the user will mostly not be motivated to delete content when completing the task at hand.</p>
      <p class="todo">Todo: Add live component block with code example</p>

      <h4>Danger</h4>
      <p>Buttons that represent actions that are destructive, such as deleting content. These actions cannot be undone. They are represented in a red color.</p>
      <p>Please note that often the secondary button type is the correct choice here as the user will mostly not be motivated to delete content when completing the task at hand.</p>
      <p class="todo">Todo: Add live component block with code example</p>
  
      <h3>Dashed</h3>
      <p>Dashed button styles are used when something has not yet been created. Their action will lead the user to create the missing item, after which it will replace the dashed button with a link to the item.</p>

      <p class="todo">Todo: Add live component block with code example</p>

      <h3>Dark and Inverted</h3>
      <p>Some circumstances are exceptions in that they require a different button style than normal to still be accessible. When the UI is darker than normal, a dark or inverted button style may be required. These button styles are only possible for tertiary button types.</p>

      <p class="todo">Todo: Add live component block with code example</p>

      <h2>Variations</h2>
      <p>Buttons come in many different variations which fit different situations. Some can require a dropdown while others require less width or a certain type of information and action combo.</p>

      <h3>Text</h3>
      <p>The default variation is the text button. They contain a text label and have no special interactions.</p>
      <p class="todo">Todo: Add live component block with code example</p>

      <h3>Icon</h3>
      <p>Icon buttons provide the user with visual iconography to signify what the button does. They only contain an icon label and have no special interactions. They can be used when a text button variation would be too big or the meaning of an icon conveys what will happen in a more concise way.</p>
      <p class="todo">Todo: Add live component block with code example</p>

      <h3>Icon + text</h3>
      <p>Text button variations might be supplemented with an icon to both clarify an action and call attention to a button. Icons are always positioned to the left of the text label.</p>
      <p>Please note to <strong>not</strong> use two icons in the same button.</p>
      <p class="todo">Todo: Add live component block with code example</p>

      <h3>Dropdown</h3>
      <p>Dropbown buttons trigger menus of options which can be either actions or input values. See <a href="/components/dropdowns">dropdowns</a> for more information.</p>
      <p class="todo">Todo: Add live component block with code example</p>

      <h4>Split dropdown</h4>
      <p>Dropdown buttons may be split if there are multiple similar actions being grouped together. The text button will default to the most common option and an attached dropdown button allows the user to change the default. Clicking the chevron icon within the dropdown button triggers a menu of related actions. It is attached to the right of the text button.</p>
      <p class="todo">Todo: Add live component block with code example</p>
      
      <h4>Icon dropdown</h4>
      <p>Icon dropdown variations function similar to dropdown button variations with the difference being an icon label.</p>
      <p class="todo">Todo: Add live component block with code example</p>

      <h3>Ellipsis</h3>
      <p>Ellipsis buttons allow for expanding content inline. It can be used when content is hidden for the purpose of not overloading the user or because of initial space contraints.</p>
      <p class="todo">Todo: Add live component block with code example</p>

      <h3>Group</h3>
      <p>Button groups merge frequently used buttons with a close relationship or similar actions together to aid with arrangement and spacing. Button groups are always displayed in a horizontal row.</p>
      <p class="todo">Todo: Add live component block with code example</p>

      <h3>Icon group</h3>
      <p>Icon group variations function similar to button group variations with the difference being an icon label.</p>
      <p class="todo">Todo: Add live component block with code example</p>

      <h3>Segmented control</h3>
      <p>A segmented control allows users to choose one out of a range of available options. It’s commonly used as an alternative to dropdowns and radio selections. See <a href="/components/segmented-control">segmented control</a> for more information.</p>
      <p class="todo">Todo: Add live component block with code example</p>

      <h3>Icon segmented control</h3>
      <p>Icon segmented control variations function similar to segmented control button variations with the difference being an icon label. See <a href="/components/segmented-control">segmented control</a> for more information.</p>
      <p class="todo">Todo: Add live component block with code example</p>

      <h2>Sizing</h2>
      <p>Depending on the interface buttons may either use the medium or small size.</p>

      <h3>Medium</h3>
      <p>This is the default button size.</p>
      <p class="todo">Todo: Add live component block with code example</p>

      <h3>Small</h3>
      <p>This is the alternative button size for use in tight spaces.</p>
      <p class="todo">Todo: Add live component block with code example</p>

      <h3>Full width</h3>
      <p>Buttons can be expanded to the full width of the parent container. This can be used for buttons embedded inside smaller width containers or to improve usability on mobile viewports.</p>
      <p class="todo">Todo: Add live component block with code example</p>

      <h2>Order</h2>
      <p>Buttons are ordered by importance from right to left. This means primary buttons are always on the right followed by secondary buttons etc. As an effect it means buttons with dismissive actions are on the left and buttons with affirmative actions are on the right.</p>

      <h2>Positioning</h2>
      <p>Buttons are often embedded in or shown next to components like modals or editors. Similar to ordering, buttons with dismissive actions are left aligned and buttons with affirmative actions are right aligned.</p>
      <p>Please note to <strong>not</strong> place a button below another button if there is space to place them side by side.</p>

      <h2>Labels</h2>
      <p>Button labels should be short and concise while conveying what happens when the button is clicked. Buttons use <a href="/content/punctuation">sentence case</a> and a normal font weight. An icon can be used in place of text.</p>
      <p>Please note to <strong>not</strong> mix buttons with text labels with buttons with icon labels.</p>
      
      <h2>Design specifications</h2>
      <p>Color, spacing, dimension, and layout specific information pertaining to this component can be viewed using the following link:</p>
      <p><a href="https://gitlab-org.gitlab.io/gitlab-design/hosted/design-gitlab-specs/buttons-spec-previews/">Sketch Measure Preview for buttons</a></p>

      <h2>Related patterns</h2>
      <ul>
        <li><a href="/components/dropdowns">Dropdowns</a></li>
        <li><a href="/components/segmented-control">Segmented control</a></li>
      </ul>
    </div>
  </div>
</template>
