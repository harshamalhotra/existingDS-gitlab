<template>
  <div class="content limited m-t-7 m-b-7">
    <div class="typography md">
      <h1>Motion</h1>
      <p>Motion is a tool to help convey important relationships, changes, or transitions between elements. It is used sparingly and intentionally, highlighting the right elements at the right moment.</p>
      <h3>Timings</h3>
      <p>The longer distance an object travels, the longer the timing is for the animation. Avoid large, full screen animations.</p>
      <p>Subtle animations, or objects leaving the screen should take 100 milliseconds. Objects entering the screen, or motion we want to use to direct user attention take between 200 milliseconds. Avoid animations longer animations as they will make the experience appear sluggish. If a specific animation feels like it will need more than 400 milliseconds, revisit the animation to see if there is a simpler, easier, shorter transition to implement.</p>
      <h3>Easing</h3>
      <p>Easing specifies the rate of change of a parameter over time. Adding an easing curve makes the motion feel more natural, cohesive, and connected.</p>
      <p class="todo">Todo: Define easing standards</p>
      <h2>Types of animations</h2>
      <h3>Hover</h3>
      <p>Interactive elements (links, buttons, etc.) should have a hover state. A subtle animation for this transition adds a polished feel. We use 100 milliseconds linear transition for a color hover effect.</p>
      <p class="todo">Todo: Add hover example</p>
      <h3>Quick update</h3>
      <p>When information is updating in place, a quick, subtle animation is needed. The previous content should cut out, and the new content should have a 200 milliseconds linear fade in.</p>
      <p class="todo">Todo: Add quick update example</p>
      <h3>Skeleton loading</h3>
      <p>Skeleton loaders includes a horizontally pulsating animation that shows motion as if it's growing. It's timing is a slower linear 1s. Learn more about <a href="/components/skeleton-loader">skeleton loaders</a>.</p>
      <p class="todo">Todo: Add skeleton loader transition example</p>
      <h3>Moving transitions</h3>
      <p>When elements move on-screen, there should be a quick animation so it is clear to users what moved where. These types of animations use a 200 milliseconds transition time.</p>
      <h4>Shifting elements</h4>
      <p>An example of a moving transition is when elements have to rearrange when you drag an element.</p>
      <p class="todo">Todo: Add drag animation example</p>
      <h4>Page autoscroll</h4>
      <p>To keep an active element visible, a page auto scroll transition can be used. An example of this includes clicking an issue board card that is out of screen.</p>
      <p class="todo">Todo: Add auto scroll example (issue board cards)</p>
    </div>
  </div>
</template>
