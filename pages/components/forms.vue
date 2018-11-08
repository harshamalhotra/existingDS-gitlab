<template>
  <div class="content limited m-t-7 m-b-7">
    <div class="component md">
      <h1>Forms</h1>
      <p>Forms allow for user input by mimicking paper forms where users fill in information into particular fields and submit it to the system. They’re a fundamental but a complex part of interacting with web applications such as GitLab. Getting them right and assisting the users to successfully complete their tasks is essential.</p>
      <h2>Usage</h2>
      <h3>Layout</h3>
      <p>Form elements should move in a single direction so they should only be distributed through one column when the progression of the form is vertical and through one row when the progression is horizontal. Horizontally stacking input fields in a vertically moving form is only acceptable when they’re related (e.g. Name and Surname).</p>
      <p class="todo">Todo: Add live component block with code example (Vertical form with stacked input fields)</p>
      <p class="todo">Todo: Add live component block with code example (Horizontal form)</p>
      <h3>Labels</h3>
      <p>Input field and text area labels are set in bold and positioned above the form element by default. Labels must use the <strong>for</strong> attribute for accessibility reasons. Labels for <a href="#checkbox">checkboxes and radio buttons</a> are set in regular font weight.</p>
      <p>In rare cases and exceptions, the label can be placed to the left of the input field. Examples include single input fields (e.g. "Sort by" dropdowns) and horizontally distributed forms.</p>
      <p class="todo">Todo: Add live component block with code example (sort by dropdown)</p>
      <p class="todo">Todo: Add live component block with code example (horizontally distributed form)</p>
      <h3>Input fields</h3>
      <p class="todo">Todo: Add live component block with code example (input field types)</p>
      <p>Disabled input fields need an explanation on why they’re disabled and that comes as <a href="#help-text">Help text</a> below.</p>
      <p class="todo">Todo: Add live component block with code example (disabled input)</p>
      <p>The width of an input field should reflect the expected content, for example postcode should be smaller than address.</p>
      <p class="todo">Todo: Add live component block with code example (inputs of different widths)</p>
      <h4>Predefined widths</h4>
      <p>To encourage the usage of different input field widths, we use a set of predefined widths based on the 8 pixels grid. It’s okay to use a width that isn’t on this list but it should be based on the 8 pixels grid.</p>
      <p class="todo">Todo: Add live component block with code example (predefined widths + 100% width)</p>
      <h3>Text area</h3>
      <p>Text areas should be used when expected content is long. Predefined widths from the <strong>Input fields</strong> section apply to text area as well.</p>
      <p class="todo">Todo: Add live component block with code example (text area)</p>
      <h3>Placeholders</h3>
      <p>Placeholders must not be used as a replacement for labels but as a supplement. Their usage should be limited  even if used correctly. When they are used, they should be:</p>
      <ul>
        <li><strong>Contextual</strong>: Either an example or an explanation of the label, not a generic "Enter" or a repetition of the label.</li>
        <li><strong>Helpful</strong>: If a placeholder doesn’t add value and make things easier for the user, it shouldn’t be used.</li>
        <li><strong>Short</strong>: If a placeholder can’t be short, it should be turned into a <a href="#help-text">Help text</a> below the form element.</li>
      </ul>
      <p>If the placeholder isn’t all of the above, it shouldn’t be used.</p>
      <p>If a placeholder is an example, it must start with "e.g.".</p>
      <p class="todo">Todo: Add live component block with code example (placeholder)</p>
      <p>If a placeholder can’t be shortened but an explanation is needed, a <a href="#help-text">Help text</a> below the input should be used. An easy guideline to find out if the explanatory text is too long for a placeholder: if it resembles a sentence, use Help text below the input, if it’s just a few words (ideally up to two or three), consider using a placeholder.</p>
      <p class="todo">Todo: Add live component block with code example (help text)</p>
      <h3 id="checkbox">Checkboxes and radio buttons</h3>
      <p>Checkbox and radio button labels are set in regular font weight and should be as short as possible. If more, explanatory text is required, it should be added and styled as <a href="#help-text">Help text</a> below the label.</p>
      <p class="todo">Todo: Add live component block with code example (checkbox & radio button: active & disabled)</p>
      <p class="todo">Todo: Add live component block with code example (checkbox & radio button: with help text below labels)</p>
      <h3>Validation</h3>
      <h4>Error messages and states</h4>
      <p>Error messages and validation should be shown inline and can, in general, happen either live or on form submission. Live validation should be seen as assisting the user to input the correct information and not as a way of preventing them from submitting the form with possibly incorrect information (live validation might be frontend-only but the user has no way of knowing that).</p>
      <p>The error message shows up below the input field in error state and should be helpful and contextual, not generic. If there’s Help text below the input field, an error pushes it further down as it needs to show up immediately after the input.</p>
      <p class="todo">Todo: Add live component block with code example (error state + message)</p>
      <h4>Form buttons</h4>
      <p>We don’t disable buttons as a form of validating forms. We default to active buttons in forms and disable them once clicked to avoid the possibility of submitting the form twice.</p>
      <p>Disabling buttons by default can still make sense in some cases. Editing existing information within a form is a good example. In such cases, buttons are disabled by default and become enabled once a change has been made by the user. The state change indicates the need for saving the changes and shouldn’t be tied to whether the information in the form is valid or not.</p>
      <p class="todo">Todo: Add live component block with code example (form button)</p>
      <h4>Required information</h4>
      <p>We default to all information being required unless stated otherwise with "(optional)" added to the label of the corresponding input field.</p>
      <p class="todo">Todo: Add live component block with code example (optional)</p>
      <h3 id="help-text">Help text</h3>
      <p>Help text can be used as additional instructions to the user when filling in the form. It’s styled using the "Secondary" text style and should always be placed below the form element. In most cases, it should be a short sentence, not a paragraph or a single word.</p>
      <p class="todo">Todo: Add live component block with code example (help text)</p>
      <h3>Icons</h3>
      <p>Icons can be placed inside input fields for various use cases. For example, date picker input fields come with a calendar icon, and dropdown input fields come with a downward facing chevron icon. The top right corner is the default position where icons should be placed and the <code>$grey-700</code> is the default color.</p>
      <p class="todo">Todo: Add live component block with code example (input field with an icon)</p>
      <h2>Design specification</h2>
      <p>Color, spacing, dimension, and layout specific information pertaining to this component can be viewed using the following link:</p>
      <a href="https://gitlab-org.gitlab.io/gitlab-design/hosted/design-gitlab-specs/forms-spec-previews/">Sketch Measure Preview for forms</a>
      <h2>Related patterns</h2>
      <ul>
        <li><a href="/components/buttons">Buttons</a></li>
        <li><a href="/components/dropdowns">Dropdowns</a></li>
        <li><a href="/components/date-picker">Date picker</a></li>
      </ul>
    </div>
  </div>
</template>
