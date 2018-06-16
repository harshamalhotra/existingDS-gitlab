<template>
  <div class="content limited m-t-7 m-b-7">
    <div class="component md">
      <h1>Spacing</h1>
      <p>All GitLab components follow an 8px spacing system. We’ve defined this as our memorable base number to build upon in order to establish spatial values that are utilized by every component. By following a set spatial convention, we decrease design complexity while increasing consistency across the application.</p>
      <h2>Geometric progression</h2>
      <p>We use 8px as the base for determining our spacial system. In order to create a scale that offers flexibility in spacing without providing too many choices, we’ve defined a set of values using geometric progression rather than a fixed increment.</p>
      <h3>12px outlier</h3>
      <p>We include 12px as one of our measures but it should only be reserved for right and left padding of horizontal tabs, buttons, and inputs. This special padding amount allows for better alignment of stacked items while giving elements enough room to breathe. 12px should not be using for any other measurement other than those defined here.</p>
      <h2>Demo</h2>
      <div class="spacing-demo m-b-6">
        <span class="w-1 h-1 c-blue-background-300 d-inline-block"></span>
        <span class="w-2 h-2 c-blue-background-300 d-inline-block"></span>
        <span class="w-3 h-3 c-blue-background-300 d-inline-block"></span>
        <span class="w-4 h-4 c-blue-background-300 d-inline-block"></span>
        <span class="w-5 h-5 c-blue-background-300 d-inline-block"></span>
        <span class="w-6 h-6 c-blue-background-300 d-inline-block"></span>
        <span class="w-7 h-7 c-blue-background-300 d-inline-block"></span>
        <span class="w-8 h-8 c-blue-background-300 d-inline-block"></span>
        <span class="w-9 h-9 c-blue-background-300 d-inline-block"></span>
        <span class="w-10 h-10 c-blue-background-300 d-inline-block"></span>
        <span class="w-11 h-11 c-blue-background-300 d-inline-block"></span>
        <span class="w-12 h-12 c-blue-background-300 d-inline-block"></span>
        <span class="w-13 h-13 c-blue-background-300 d-inline-block"></span>
      </div>
      <p class="todo">Todo: Add spacing class examples</p>
    </div>
  </div>
</template>
