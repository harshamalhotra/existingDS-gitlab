---
name: Charts
docs: complete
vueComponents:
  - GlAreaChart
  - GlLineChart
  - GlColumnChart
  - GlStackedColumnChart
related:
  - popover
---

Charts help users quickly digest, visualize and see trends in their data.

## Usage

Charts should be:

- Simple to understand, and easy to interact with.
- Have a consistent visual appearance, and be accessible on all screen sizes.
- Be easy to build, and straightforward to modify.
- Built using a flexible framework, so we have room to grow.

In cases where the charting principles conflict, consider data representation accuracy over speed of delivery, speed over visual consistency, and consistency over interaction.

Going forward, our charts will be built using [ECharts](https://echarts.apache.org/).

General content and style considerations for charts include:

- If there is more than one series being displayed, add a legend.
- We have two legend types: default and tabular. The default legend option works best for simple charts. If a chart has many series, or if you want to display multiple values for a series (for example, average, median, and maximum), use the tabular chart legend for better readability.
- Line and area charts use the series label with the rectangular color chip to match the line colors in the chart, while column and heat map charts use the square color chip to match the fill and stroke color of the elements in the visualization. The fill of the chip should match the fill of the column and the border of the chip should match the border of the column. 
- In legends, the text after the series name is optional. It allows for the possibility of complementing the series legend with additional useful calculations (total, etc).
- Use chart titles, category and value labels as necessary to clarify the content being shown (with units in parentheses, if required). Note that units aren't always necessary, for example, in the case of counts.
- The default color order for charts with multiple series is blue, green, orange, then purple (see spec measure details for further information). If you need additional color options, utilize the 500 version of any of the color palette options at a 20% opacity. In addition, if you have charts that feature positive and negative values, feel free to utilize a green/red version of the chart to make the data gains (greens) and losses (reds) more immediately apparent. This variation of a column chart is usually known as a waterfall chart.
- When hovering, detailed information on the data point is shown in a [popover](/components/popover).

## Types

We currently support column charts, line charts, and area charts. More charting types will be added, in future.

Column charts can be considered the 'default' chart type. If you are thinking about using a pie chart, consider that a column chart may tell the story more clearly.

When choosing a chart type, first consider your data set. If you are hoping to show:

- A comparison of values across categories or across time, consider a column, bar, line or pie chart.
- A distribution of values, consider a scatter chart, a line histogram, or a column histogram.
- The relationship between values, which are usually presented on the x and y axes, consider a scatter chart or a bubble chart.  
- The composition of elements within the data set, consider a stacked column, stacked area, pie, or waterfall chart.

### Column charts

Column charts are used to compare values across categories. The categories are usually presented on the x-axis, with the values on the y-axis.

The bars on a column chart are presented vertically rather than horizontally, and they can be stacked. Stacking can be useful for comparing multiple series.

[[Example:column-basic]]

#### Column chart variants

##### Stacked

Todo: add details

[[Example:stacked-column-basic]]

##### Grouped

Todo: add details

##### Grouped and stacked

Grouped and stacked column charts display two dimensions of data (one nested within another) moving across a time series. 

There are three dimensions displayed in total on grouped and stacked column charts:
- **Groups**: The first dimension is represented by a group of columns.
- **Stacks**: The second nested dimension is represented as a stacked column.
- **Series**: The time series is represented across the x-axis.

*Note: Try to avoid using more than 5 values in each dimension to prevent visual complexity in the charts.*

There are two kinds of grouped and stacked column charts:
- **Symmetric**: The number of stacks in each column is equal.
- **Asymmetric**: The number of stacks in each columnn is not equal.

Todo: Add symmetric example
Todo: Add asymmetric example

See [color](/data-visualization/color/) for a full description of data visualization color patterns.

###### Cross-column colors

Use cross-column colors to highlight the "Groups" dimension spanning across columns.

Todo: Add example

###### Graded transparency

Use graded transparency to highlight the "Stacks" dimension within the columns whilst differentiating between the other columns.

Todo: Add example

###### Specific colors

Specific colors may be used when values in a chart have certain colors associated with them. For example, merge request state or vulnerability status. Specific colors should be used sparingly.

Todo: Add example

##### 2 y-axes

2 y-axis charts may be used when showing data sets at different orders of magnitude (for example, issues closed, 10; issues opened, 10; total issues 1,000). This helps to show the correlation between the two data sets whilst maintaining the visualisation at lower orders of magnitude at a usable and parsable size.

Todo: add details

### Line charts

Line charts are used to display continuous data.

They are useful when you are looking to identify trends or to see larger patterns in your data, and to see how your data changes over time.

[[Example:line-basic]]

### Area charts

Area charts are used to represent "[cumulated totals](http://www.vizwiz.com/2012/10/stacked-area-chart-vs-line-chart-great.html) using numbers or percentages."

In instances where you want to see both the overall trend and the percent contribution, it is preferable to use a line chart rather than an area chart. It can be very difficult for our eyes to correctly assess the width of areas and how it trends.

[[Example:area-basic]]

### Interaction

#### Zoom bar

ECharts has a default mechanism for [zooming on charts](https://echarts.apache.org/en/feature.html#interaction). A zoom bar gives users more control over how much data is displayed at any one time, and gives them the ability to dig into issues they are observing at a more granular level.

The zoom bar is not added to all charts by default and shouldn't be used in cases where the chart neatly fits its container. However, in instances where the chart would otherwise overflow its container or where there is a large amount of data for users to explore, the zoom bar should be introduced.

#### Chart popovers

By hovering over specific data points on charts, users will see a [popover](/components/popover/). The popovers for charts help provide users with more detailed information about both the values being hovered on and their corresponding positions on the x and y axes. The data displayed in the chart popovers is as follows:

- Popover header: x-axis value (x-axis title)
- Popover body: y-axis title, value

The [column chart measure spec](https://gitlab-org.gitlab.io/gitlab-design/hosted/amelia/gd%23195-column-chart-design-spec-previews/) shows examples of how popover content could be structured, in practice.

##### Text wrapping in chart popovers

The max-width of chart popovers is `512px`, with long chart values wrapping rather than truncating. When chart values in popovers wrap, break the word into two lines without using a hyphen.

#### Chart legends

Chart data can be toggled on and off by clicking its related item in the legend.

#### More options menu

A "more options" menu (vertical ellipses) can be used in the top righthand corner of charts. This provides users with access to additional chart functionality (such as copying chart embed code) which isn't directly displayed on or near the chart.

## Design specifications

Color, spacing, dimension, and layout specific information pertaining to this component can be viewed using the following links:

[Column charts measure spec](http://gitlab-org.gitlab.io/gitlab-design/hosted/amelia/gd%23195-column-chart-design-spec-previews/)

[Line chart measure spec](http://gitlab-org.gitlab.io/gitlab-design/hosted/amelia/gd%23204-line-charts-spec-previews/)

[Area chart measure spec](http://gitlab-org.gitlab.io/gitlab-design/hosted/amelia/gitlab-design%23304-area-charts-spec-previews/)

[Zoom bar measure spec](http://gitlab-org.gitlab.io/gitlab-design/hosted/amelia/gd%23221-charts-scrolling-spec-previews/)
