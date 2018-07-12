<template>
  <div class="content limited m-t-7 m-b-7">
    <div class="component md">
      <h1>Segmented control</h1>
      <p>Segmented control allows users to choose one out of a range of available options. It’s commonly used as a interaction-friendlier alternative to dropdowns and radio selections.</p>
      <h2>Usage</h2>
      <p>Segmented control is easier to use than the elements that allow the same interaction but it comes with its own limitations. Because it takes up more space, it should only be used for ranges of up to 5 options. But when there are only 2 or 3 options with short labels and enough space to work with, segmented control should be used instead of a dropdown. It requires less interactions, is easier to use on mobile devices, and thus has a smaller effect on the user’s cognitive load.</p>
      <h3>Labels</h3>
      <p>Label positioning rules are the same as they are for forms. They can be placed to the left of segmented control when there’s a lack of vertical space. But by default, the label comes above the segmented control.</p>
      <p class="todo">Todo: Add live component block with code example (whitespace exmple)</p>
      <p>Labels for the options need to be as short as possible and should only be one word whenever possible. Sometimes, that can be done by removing the repeating word in the options and using it as an outside label. for example, instead of having labels "Show whitespace" and "Hide whitespace" use "Whitespace: Show | Hide".</p>
      <p>The outside label can be omitted in cases when it’s clear what the segmented control is referring to from the UI (For example, switching between a day, week or month view in a calendar UI).</p>
      <h3>Sizing</h3>
      <p>The options must be equal in width and prominence. If there are 3 options, each of them should take 33% of the total width of segmented control.</p>
      <h2>Design specification</h2>
      <p>Color, spacing, dimension, and layout specific information pertaining to this component can be viewed using the following link:</p>
      <a href="https://gitlab-org.gitlab.io/gitlab-design/hosted/design-gitlab-specs/segmented-control-spec-previews/">Sketch Measure Preview for the Date picker</a>
      <h2>Related patterns</h2>
      <ul>
        <li><a href="/components/forms">Forms</a></li>
        <li><a href="/components/dropdowns">Dropdowns</a></li>
      </ul>
    </div>
  </div>
</template>
