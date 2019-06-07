---
name: Charts
vueComponents:
  - GlAreaChart
  - GlLineChart
  - GlColumnChart
  - GlStackedColumnChart
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

We currently support column charts, line charts, and area charts. More charting types will be added, in future.

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

Line charts are used to display continuous data. 

They are useful when you are looking to identify trends or to see larger patterns in your data, and to see how your data changes over time. 

### Area charts

Todo: Add specific information about area charts

### Pie charts

Todo: Add specific information about pie charts

### Chart zooming and scrolling

Our charting framework, [ECharts](https://ecomfe.github.io/echarts-doc/public/en/index.html), has a default mechanism for zooming and scrolling on graphs. 

The zoom and scroll bar isn't added to all charts by default. In cases where the chart neatly fits its container, it needn't be displayed. However, in instances where the chart would otherwise overflow its container or where there is a large amount of data for users to explore, a zoom and scroll bar should be introduced. The zoom and scroll bar allows users more control over how much data is displayed at any one time, and gives them the ability dig into issues they are observing at a more granular level.

## Demo

[[Example:area-basic]]

[[Example:line-basic]]

[[Example:column-basic]]

[[Example:stacked-column-basic]]

## Design specifications

Color, spacing, dimension, and layout specific information pertaining to this component can be viewed using the following links:

[Column charts measure spec](http://gitlab-org.gitlab.io/gitlab-design/hosted/amelia/gd%23195-column-chart-design-spec-previews/)

[Line chart measure spec](http://gitlab-org.gitlab.io/gitlab-design/hosted/amelia/gd%23204-line-charts-spec-previews/)

[Zoom and scroll measure spec](http://gitlab-org.gitlab.io/gitlab-design/hosted/amelia/gd%23221-charts-scrolling-spec-previews/)

Todo: Add sketch measure preview specs for each additional chart type
