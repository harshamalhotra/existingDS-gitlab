<template>
  <div class="content limited m-t-7 m-b-7">
    <div class="component md">
      <h1>Buttons</h1>
      <p>Buttons are an important facet to any design system. Buttons define a call to action that lead people somewhere related to the content it's contained in. There are common practices and data that prove certain types of buttons work better for conversion than others. Here are buttons and their classes that should be used throughout the marketing website:</p>
      <h2>Primary buttons</h2>
      <p>Primary buttons are solid and should be the default buttons used. Depending on the color scheme of the content, purple or orange solid buttons can be used depending on the background color of the content. These primary buttons should be used on white or lighter gray backgrounds or any background that has a high contrast with the button color. They should also be a <code>%a</code> tag so it can be linked elsewhere and for accessibility. Buttons should also be given the class <code>margin-top20</code> if the button lacks space between itself and the content above.</p>
      <p class="todo">Todo:  Add an example of a primary button</p>
      <h2>Secondary buttons</h2>
      <p>There will be times when two buttons are needed. This will be in places such as <a href="https://about.gitlab.com/jobs/" target="_blank">our jobs page</a>, where we have a button to view opportunities and one to view our culture video. In this example, both buttons are solid, but one is considered the primary button (orange), and the other is the secondary button (white). The CSS class for the solid white button is <code>.btn.cta-btn.btn-white</code>.</p>
      <img 
        src="~/assets/images/brand/jobs-buttons-example.png" alt="primary and secondary button example" 
        width="600px"
      />
      <p>This is the proper use of two buttons, both being solid, but different colors based on hierarchy. If the background is white or a lighter color that doesn't contrast well with a white-backgound button, a ghost button should be used as a secondary button, and should match in color to the primary button beside it as shown below:</p>
      <p class="todo">Todo:  Add examples of primary and secondary buttons</p>
      <p>DO NOT: Do not use these ghost buttons styles as standalone buttons. They have been proven to be less effective than solid buttons <a href="https://conversionxl.com/blog/ghost-buttons/" target="_blank">in a number of studies</a>. They should only be used as a secondary button, next to a solid primary button that already exists. Here are the classes for the secondary buttons:</p>
      <p class="todo">Todo:  Add an example of secondary button one</p>
      <p class="todo">Todo:  Add an example of secondary button two</p>
    </div>
  </div>
</template>
