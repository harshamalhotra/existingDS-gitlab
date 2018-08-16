<template>
  <div class="content limited m-t-7 m-b-7">
    <div class="component md">
      <h1>Popovers</h1>
      <p>Popovers are used to provide supplemental, useful, unique information about an element, including one or multiple actionable elements. They inform the user of additional information within the context of their original view, but without forcing the user to act upon it like a modal. Popovers are different from <a href="/components/tooltips">tooltips</a>, which do not provide rich markup and actionable items. Additionally, a popover can contain a header section with a different background color and images if needed.</p>
      <p>Popovers fade in upon hover or touch of its trigger element. They fade out upon interacting with an area or element outside of the popover or its trigger, or on a delay of the cursor moving outside the popover or its trigger element.</p>
      <h2>Usage</h2>
      <p>A popover should be used:</p>
      <ol>
        <li>When you don't want to let the user lose context, but still want to provide additional useful unique information about referring elements.</li>
        <li>When it isn’t critical for the user to act upon the information.</li>
        <li>When you want to give a user a summary of extended information and the option to switch context if they want to dive in deeper.</li>
      </ol>
      <h2>Placement</h2>
      <p>By default, popovers are placed above the referring element. However, when there isn’t enough space in the viewport, the popover is moved to the side or below as needed. If it blocks related content, the preferred popover placement can be manually set.</p>
      <h2>Demo</h2>
      <p class="todo">Todo: Add live component block with code example</p>
      <h2>Design specifications</h2>
      <p>Color, spacing, dimension, and layout specific information pertaining to this component can be viewed using the following link:</p>
      <p><a href="https://gitlab-org.gitlab.io/gitlab-design/hosted/design-gitlab-specs/popover-spec-previews/">Sketch Measure Preview for Popovers</a></p>
   
      <h2>Related patterns</h2>
      <ul>
        <li><a href="/components/tooltips">Tooltips</a></li>
      </ul>
    </div>
  </div>
</template>

