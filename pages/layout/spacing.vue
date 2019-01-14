<template>
  <div class="content limited m-t-7 m-b-7">
    <div class="component md">
      <h1>Spacing</h1>
      <p>All GitLab components follow an 8px spacing system. We’ve defined this as our memorable base number to build upon in order to establish spatial values that are utilized by every component. By following a set spatial convention, we decrease design complexity while increasing consistency across the application.</p>
      <h2>Geometric progression</h2>
      <p>We use 8px as the base for determining our spacial system. In order to create a scale that offers flexibility in spacing without providing an abundance of choices, we’ve defined a set of values using geometric progression: <code>8 * 2^n</code>. We have augmented the progression in order to provide the flexibility that a complex application needs to accommodate a large amount of content. To do this, we’ve added values after 16px using <code>n * 1.5</code>, where <code>n</code> is the previous value from the geometric progression.</p>
      <h3>12px outlier</h3>
      <p>We include 12px as one of our measures but it should only be reserved for right and left padding of horizontal tabs, buttons, and inputs. This special padding amount allows for better alignment of stacked items while giving elements enough room to breathe. 12px should not be using for any other measurement other than those defined here.</p>
      <h2>Demo</h2>
      <div class="spacing-demo m-b-6">
        <span 
          class="w-1 h-1 c-background-blue-300 d-inline-block" 
          title="2px"
        ></span>
        <span 
          class="w-2 h-2 c-background-blue-300 d-inline-block" 
          title="4px"
        ></span>
        <span 
          class="w-3 h-3 c-background-blue-300 d-inline-block" 
          title="8px"
        ></span>
        <span 
          class="w-4 h-4 c-background-blue-300 d-inline-block" 
          title="12px"
        ></span>
        <span 
          class="w-5 h-5 c-background-blue-300 d-inline-block" 
          title="16px"
        ></span>
        <span 
          class="w-6 h-6 c-background-blue-300 d-inline-block" 
          title="24px"
        ></span>
        <span 
          class="w-7 h-7 c-background-blue-300 d-inline-block" 
          title="32px"
        ></span>
        <span 
          class="w-8 h-8 c-background-blue-300 d-inline-block" 
          title="48px"
        ></span>
        <span 
          class="w-9 h-9 c-background-blue-300 d-inline-block" 
          title="64px"
        ></span>
        <span 
          class="w-10 h-10 c-background-blue-300 d-inline-block" 
          title="96px"
        ></span>
        <span 
          class="w-11 h-11 c-background-blue-300 d-inline-block" 
          title="128px"
        ></span>
        <span 
          class="w-12 h-12 c-background-blue-300 d-inline-block" 
          title="176px"
        ></span>
        <span 
          class="w-13 h-13 c-background-blue-300 d-inline-block" 
          title="256px"
        ></span>
      </div>
      <p class="todo">Todo: Add spacing class examples</p>
      <h2>Standard spacing guidelines</h2>
      <p><code>2px</code> or <code>4px</code> is used for spacing within a component.</p>
      <p class="todo">Todo: Add example of 2px spacing</p>
      <p class="todo">Todo: Add example of 4px spacing</p>
      <p><code>8px</code> is used to separate related elements.</p>
      <p class="todo">Todo: Add example of 8px spacing (buttons)</p>
      <p><code>16px</code> is used to separate unrelated elements.</p>
      <p class="todo">Todo: Add example of 16px spacing</p>
      <p><code>24px</code> is used to separate sub-sections of content.</p>
      <p class="todo">Todo: Add example of 24px spacing</p>
      <p><code>32x</code> is used to separate sections of content.</p>
      <p class="todo">Todo: Add example of 32px spacing</p>
    </div>
  </div>
</template>
