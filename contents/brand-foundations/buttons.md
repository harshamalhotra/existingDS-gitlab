---
name: Buttons
---

Buttons are an important facet to any design system. Buttons define a call to action that lead people somewhere related to the content it's contained in. There are common practices and data that prove certain types of buttons work better for conversion than others. Here are buttons and their classes that should be used throughout the marketing website:

## Primary buttons

Primary buttons are solid and should be the default buttons used. Depending on the color scheme of the content, purple or orange solid buttons can be used depending on the background color of the content. These primary buttons should be used on white or lighter gray backgrounds or any background that has a high contrast with the button color. They should also be a `%a` tag so it can be linked elsewhere and for accessibility. Buttons should also be given the class `margin-top20` if the button lacks space between itself and the content above.

Todo: Add an example of a primary button

## Secondary buttons

There will be times when two buttons are needed. This will be in places such as [our jobs page](https://about.gitlab.com/jobs/), where we have a button to view opportunities and one to view our culture video. In this example, both buttons are solid, but one is considered the primary button (orange), and the other is the secondary button (white). The CSS class for the solid white button is `.btn.cta-btn.btn-white`.

![primary and secondary button example](/img/brand/jobs-buttons-example.png)

This is the proper use of two buttons, both being solid, but different colors based on hierarchy. If the background is white or a lighter color that doesn't contrast well with a white-backgound button, a ghost button should be used as a secondary button, and should match in color to the primary button beside it as shown below:

Todo: Add examples of primary and secondary buttons

DO NOT: Do not use these ghost buttons styles as standalone buttons. They have been proven to be less effective than solid buttons [in a number of studies](https://conversionxl.com/blog/ghost-buttons/). They should only be used as a secondary button, next to a solid primary button that already exists. Here are the classes for the secondary buttons:

Todo: Add an example of secondary button one
