---
name: Charts
docs: complete
components:
  - charts-area-chart
  - charts-line-chart
  - charts-column-chart
  - charts-stacked-column-chart
  - charts-gauge-chart
related:
  - popover
---

Charts help users quickly digest, visualize and see trends in their data.

## Overview

Our charts are built with resources from the [Apache ECharts](https://echarts.apache.org/) Open Source Library. Charts should be:

- Simple to understand, and easy to interact with.
- Have a consistent visual appearance, and be accessible on all screen sizes.

### General guidelines

When creating and utilizing charts, consider the following:

- Use chart titles, category and value labels as necessary to clarify the content being shown, with units in parentheses, if required. Note that units aren't always necessary, for example, in the case of counts.
- If there is more than one data series being displayed, add a legend to differentiate them.
- We have two legend types: default and tabular. The default legend option works best for simple charts. If a chart has many series, or if you want to display multiple values for a series (for example, average, median, and maximum), use the tabular chart legend for better readability.
- In legends, any text after the series name is optional. Use this space to add complementary information as needed, such as total or average values.
- Line and area charts use the series label with the rectangular color chip to match the line colors in the chart, while column and heat map charts use the square color chip to match the fill and stroke color of the elements in the visualization. The fill of the chip should match the fill of the column and the border of the chip should match the border of the column. 
- Charts follow the data visualization recommendations for [color](/data-visualization/color). 
- When hovering, detailed information on the data point is shown in a [popover](/components/popover).
- Represent gaps in continuous data with a dashed `$grey-300` line, and without a data point.

### Types

GitLab UI supports [column](https://gitlab-org.gitlab.io/gitlab-ui/?path=/story/charts-column-chart--default), [line](https://gitlab-org.gitlab.io/gitlab-ui/?path=/story/charts-line-chart--default), [area](https://gitlab-org.gitlab.io/gitlab-ui/?path=/story/charts-area-chart--default), [bar](https://gitlab-org.gitlab.io/gitlab-ui/?path=/story/charts-bar-chart--default), [scatter](https://gitlab-org.gitlab.io/gitlab-ui/?path=/story/charts-discrete-scatter-chart--default), [gauge](https://gitlab-org.gitlab.io/gitlab-ui/?path=/story/charts-gauge-chart--default) and [sparkline](https://gitlab-org.gitlab.io/gitlab-ui/?path=/story/charts-sparkline-chart--default) charts. In addition, there are other forms of data visualizations available (see, for example, the [overview](/data-visualization/overview) page for information on heat maps, and the [single stat](/data-visualization/single-stat) page for additional information on the single stat component).

When implementing a chart type that does not already have a GitLab UI component, you can use the [Chart](https://gitlab-org.gitlab.io/gitlab-ui/?path=/docs/charts-chart--docs) component alonside the [ECharts options](https://echarts.apache.org/en/api.html#echarts) to build your chart.

When choosing a chart type, first consider your data set. If you are hoping to show:

- A comparison of values across categories or across time, consider a column, bar, line or sparkline chart.
- A comparison between groups or to show how a whole is divided into parts, consider an area chart.
- A distribution of values or the relationship between them, consider a scatter chart. 
- A value within a given range, consider a gauge chart.
- The composition of elements within the data set, consider a grouped or stacked column chart.

### Chart variations

While most charts only have a single x and y axis, two y-axis charts may occasionally be used; for example, when showing data sets at different orders of magnitude (for example, issues closed, 10; issues opened, 10; total issues 1,000). In this instance, the second y-axis shows how the two data sets are related while ensuring the visualisation at both orders of magnitude is still usable and parsable.

<todo>Add example</todo>

## Column charts

Column charts are the default chart type, and they are used to compare values across categories. The categories are usually presented on the x-axis, with the values on the y-axis. Column charts are favored over pie charts because they more clearly communicate data.

The bars on a column chart are presented vertically rather than horizontally, and they can be stacked. 

<story-viewer component="charts-column-chart" title="Basic Column Chart"></story-viewer>

### Grouped and stacked column charts

It may sometimes be necessary to stack values in a column or to have groups of columns within your chart, for example when there are two dimensions of data (one nested within another) moving across time. Stacked columns can be either symmetric or asymmetric, meaning the number of stacks may or may not be equal across groups.

<story-viewer component="charts-stacked-column-chart" story="stacked" title="Stacked Column Chart"></story-viewer>

#### Color in stacked and grouped charts

When utilizing stacked and grouped charts, you may choose not to follow the standard [color sequencing patterns](/data-visualization/color#color-sequence) when doing so provides an extra indicator that items in different groups are related. In addition, graded transparency may help to highlight differences in stacked variables while still differentiating stacks from groups in your chart.

Specific colors may be used when values in a chart have certain colors associated with them in the product; for example, merge request state or vulnerability status. Specific colors should, however, be used sparingly in favor of following the more general [color](/data-visualization/color) guidelines for data visualizations.

#### Using grouped and stacked column charts together

When there are three dimensions of data you want to display, it's also possible to group and stack columns in the same chart. If, for example, you want to display all merged MRs in one column, open and closed MRs together in a second column, and show both of these dimensions on the same chart, over time, you could display:

- Merged MRs in one column.
- Open and closed MRs in a separate, stacked column.
- Both columns of data across time (on the x-axis).

<note>Since a grouped and stacked chart already contains a lot of information, avoid using more than 5 values in each dimension.</note>

<todo>Add example</todo>

## Line charts

Line charts are used to display continuous data.

They are useful when you are looking to identify trends or to see larger patterns in your data, and to see how your data changes over time.

<story-viewer component="charts-line-chart" title="Line Chart"></story-viewer>

## Area charts

Area charts are used to represent "[cumulated totals](http://www.vizwiz.com/2012/10/stacked-area-chart-vs-line-chart-great.html) using numbers or percentages."

In instances where you want to see both the overall trend and the percent contribution, it is preferable to use a line chart rather than an area chart. It can be very difficult for our eyes to correctly assess the width of areas and how it trends.

<story-viewer component="charts-area-chart" title="Area Chart"></story-viewer>

## Bar charts

Bar charts are a variation of column charts, where the columns are horizontal rather than vertical. It can be used for the same purposes as column charts, which is to compare values across categories.

<story-viewer component="charts-bar-chart" title="Bar Chart"></story-viewer>

## Scatter charts

Scatter charts give a sense of the distribution and relative size of values.

<story-viewer component="charts-discrete-scatter-chart" title="Scatter Chart"></story-viewer>

## Gauge charts

Gauge charts highlight the current value within the range of possible values for the metric.

<story-viewer component="charts-gauge-chart" title="Gauge Chart"></story-viewer>

## Sparkline charts

Sparkline charts give a quick indication of trend and a summary of the current value. They are particularly useful when space is limited.

<story-viewer component="charts-sparkline-chart" title="Sparkline Chart"></story-viewer>

## Interaction

### Chart popovers

By hovering over specific data points on charts, users will see a [popover](/components/popover/). The popovers for charts help provide users with more detailed information about both the values being hovered on and their corresponding positions on the x and y axes. The data displayed in the chart popovers is as follows:

- Popover header: x-axis value (x-axis title)
- Popover body: y-axis title, value

Hovering over any of the charts on this page reveals a visual example of how popover content is structured in charts. Placement is set to the right by default to avoid obstructing y-axis data but can be adjusted if doing so would make the chart easier to read. The popover placement should dynamically shift depending on the selected element and space available in the chart.

#### Text wrapping in chart popovers

The max-width of chart popovers is `512px`, with long chart values wrapping rather than truncating. When chart values in popovers wrap, break the word into two lines without using a hyphen.

### Chart legends

Chart data can be toggled on and off by clicking its related item in the legend.

### More options menu

A "more options" menu (vertical ellipses) can be used in the top righthand corner of charts. This provides users with access to additional chart functionality (such as copying chart embed code) which isn't directly displayed on or near the chart.

### Zoom bar

ECharts has a default mechanism for [zooming on charts](https://echarts.apache.org/en/option.html#dataZoom). A zoom bar gives users more control over how much data is displayed at any one time, and gives them the ability to dig into issues they are observing at a more granular level.

The zoom bar is not added to all charts by default and shouldn't be used in cases where the chart neatly fits its container. However, in instances where the chart would otherwise overflow its container or where there is a large amount of data for users to explore, the zoom bar should be introduced.

## Design specifications

Color, spacing, dimension, and layout specific information pertaining to this component can be viewed using the following links:

[Pajamas UI Kit →](https://www.figma.com/file/17NxNEMa7i28Is8sMetO2H/Data-Visualization?node-id=3%3A0)

[Line chart in Pajamas UI Kit →](https://www.figma.com/file/17NxNEMa7i28Is8sMetO2H/Data-Visualization?node-id=63%3A697)

## Related

- [Single stat](/data-visualization/single-stat)

