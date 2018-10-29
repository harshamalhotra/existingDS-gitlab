<template>
  <div class="content limited m-t-7 m-b-7">
    <div class="component md">
      <h1>Skeleton loader</h1>
      <p>A skeleton loader is used to let users know what kind of content is currently loading. The content can be loaded independently and asynchronously, while still adhering to the structure and look of the complete view.</p>
      <h2>Usage</h2>
      <p>A skeleton loader can replace any existing UI elements for the period in which they are being loaded and should aim for maintaining a similar structure visually.</p>
      <ul>
        <li>A skeleton represents a recognizable organisim.</li>
        <li><a 
          href="https://gitlab.com/gitlab-org/gitlab-design/blob/master/doc/pattern-library.md" 
          target="_blank"
        >Atom elements</a> within organisms may be represented in a maximum of 3 repetitions, if applicable.</li>
        <li>Skeletons are presented in grayscale and never use color.</li>
        <li>Animate the gray atoms by adding a pulsing <a href="/foundations/motion">motion</a> to indicate it is loading. The pulse animation transitions color horizontally from left to right, starting with #f2f2f2 to #fafafa.</li>
      </ul>
      <h2>Demo</h2>
      <p class="todo">Todo: Add live component block with code example</p>
      <h2>Design specifications</h2>
      <p>Color, spacing, dimension, and layout specific information pertaining to this component can be viewed using the following link:</p>
      <p class="todo">Todo: Add link to spec preview</p>
      <h2>Related patterns</h2>
      <ul>
        <li><a href="/components/spinner">Spinner</a></li>
      </ul>
    </div>
  </div>
</template>
