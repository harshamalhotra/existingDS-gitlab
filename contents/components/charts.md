---
name: Charts
vueComponents:
  - GlAreaChart
---

Charts help users quickly digest, visualize and see trends in their data. 

## Usage

Charts should be:

*   Simple to understand, and easy to interact with.
*   Have a consistent visual appearance, and be accessible on all screen sizes.
*   Be easy to build, and straightforward to modify.
*   Built using a flexible framework, so we have room to grow.

In cases where the charting principles conflict, consider data representation accuracy over speed of delivery, speed over visual consistency, and consistency over interaction.

Going forward, our charts will be built using [Echarts](https://ecomfe.github.io/echarts-doc/public/en/index.html). 

General content and style considerations for charts include: 
*   If there is more than one series being displayed, add a legend. 
*   In legends, the text after the series name is optional. It allows for the possibility of complementing the series legend with additional useful calculations (total, etc).
*   Use chart titles, category and value labels as necessary to clarify the content being shown (with units in parentheses, if required). Note that units aren't always necessary, for example, in the case of counts.
*   The default color order for charts with multiple series is blue, green, orange, then purple (see spec measure details for further information). However, if you have charts that feature positive and negative values, feel free to utilize a green/red version of the chart to make the data gains (greens) and losses (reds) more immediately apparent. This variation of a column chart is usually known as a waterfall chart.
*   When hovering, detailed information on the data point is shown in a [popover](/components/popovers).

## Types

We currently support column charts, line charts, area charts and pie charts. More charting types will be added, in future.

Column charts can be considered the 'default' chart type. If you are thinking about using a pie chart, consider that a column chart may tell the story more clearly.

When choosing a chart type, first consider your data set. If you are hoping to show:

*   a comparison of values across categories or across time, consider a column, bar, line or pie chart. 
*   a distribution of values, consider a scatter chart, a line histogram, or a column histogram. 
*   the relationship between values, which are usually presented on the x and y axes, consider a scatter chart or a bubble chart.  
*   the composition of elements within the data set, consider a stacked column, stacked area, pie, or waterfall chart. 

### Column charts
Column charts are used to compare values across categories. The categories are usually presented on the x-axis, with the values on the y-axis. 

The bars on a column chart are presented vertically rather than horizontally, and they can be stacked. Stacking can be useful for comparing multiple series. 

### Line charts

Todo: Add specific information about line charts

### Area charts

[[Example:area-basic]]

Todo: Add specific informationa about area charts

### Pie charts

Todo: Add specific information about pie charts

## Demo

Todo: Add live component block with code example of all available chart types

## Design specifications

Todo: Add sketch measure preview specs for each chart type
