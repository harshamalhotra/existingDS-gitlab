<template>
  <div class="content limited m-t-7 m-b-7">
    <div class="component md">
      <h1>Spinner</h1>
      <p>A spinner is a simple animated element that tells users that either saving or loading of information/data is in progress and is tied to user-triggered actions. In some cases of saving information the UI will reflect the change before the change is actually saved. In such cases, the spinner should be used to indicate background activity until information is successfully saved.</p>
      <h2>Usage</h2>
      <p>Spinners attract attention because of their animation so they should be used sparingly. Ideally, only one spinner should be used at a time. <a href="/components/skeleton-loader">Skeleton loader</a> should be used for indicating the loading of whole pages, spinners should be used on a small scale for small changes in the UI.</p>
      <p>Spinners shouldn’t be used in combination with the skeleton loader, too much animation at once can be overwhelming. Either one or the other should be used.</p>
      <p>Additionally, we add a 100 ms delay before showing the spinner to mitigate lots of unnecessary spinners showing up at the same time.</p>
      <p>We use three spinner sizes:</p>
      <ul>
        <li><strong>Small</strong>: 16 pixels</li>
        <li><strong>Medium</strong>: 32 pixels</li>
        <li><strong>Large</strong>: 64 pixels</li>
      </ul>
      <p>and three spinner colors:</p>
      <ul>
        <li><strong>Orange</strong>: <code>$orange-600</code></li>
        <li><strong>Dark</strong>: <code>$grey-700</code></li>
        <li><strong>Light</strong>: white</li>
      </ul>
      <p class="todo">Todo: Add live component block with code example (all spinner sizes and colors — <a href="https://codepen.io/matejlatin/full/OoVoMO/">example</a>)</p>
      <h3>Sizes</h3>
      <h4>Small</h4>
      <p>With its size at 16 pixels this spinner size is perfect for placing it alongside text labels. This is also the size that can be used inside other elements such as buttons or input fields.</p>
      <h4>Medium</h4>
      <p>This size can be used for indicating that loading is in progress for larger components (for example charts and other interactive elements).</p>
      <h4>Large</h4>
      <p>This size is the largest we allow for our spinners. It can be used for indicating that loading is in progress for content areas and sections of the UI.</p>
      <h3>Colors</h3>
      <h4>Orange</h4>
      <p>This is the primary color for the spinner and it should be used in most cases.</p>
      <h4>Dark</h4>
      <p>This is the secondary color for the spinner. It’s a great alternative for times when the spinner doesn’t need to stand out as much (background activity for example).</p>
      <h4>Light</h4>
      <p>This color is reserved for spinners on dark background only (buttons for example).</p>
      <h2>Design specification</h2>
      <p>Color, spacing, dimension, and layout specific information pertaining to this component can be viewed using the following link:</p>
      <a href="https://gitlab-org.gitlab.io/gitlab-design/hosted/design-gitlab-specs/spinner-spec-previews/">Sketch Measure Preview for search patterns</a>
      <h2>Related patterns</h2>
      <ul>
        <li><a href="/components/buttons">Buttons</a></li>
        <li><a href="/components/forms">Forms</a></li>
        <li><a href="/components/search">Search</a></li>
        <li><a href="/components/skeleton-loader">Skeleton loader</a></li>
      </ul>
    </div>
  </div>
</template>
