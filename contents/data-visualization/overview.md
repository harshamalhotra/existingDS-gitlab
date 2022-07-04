---
name: Overview
docs: in-progress
stories:
  - charts-heatmap--default
related:
  - /data-visualization/charts
---

Data visualizations pull insights from data sets into a narrative and allow users to explore data themselves to discover their own insights.

## Usage

Data visualizations should be:

- Cohesive
- Structured
- Readable
- Understandable

When creating a data visualization, keep in mind:

- In terms of cognition, visualizations where points are positioned along a common scale are most easily understood.
- We are generally less adept at understanding lengths without a common base.
- We are often worst at perceiving angles, directions and areas (which is why pie charts, for example, are generally not a great way to present data).

## Types

There are six main categories of data visualizations:

- Hierarchical: shows portions of a whole (ex. treemaps, node, and sunburst diagrams).
- Relational: shows the flow of assets (ex. network diagrams, matrices, and sankey diagrams).
- Spatial: shows data that can be mapped (ex. location map)
- Temporal: shows changes in data over time (ex. timeline)
- Spatial-temporal: shows data that can be mapped over time (ex. heat map)
- Statistical graphics: shows the composition of data (ex. column charts, area charts, and line charts)

We have use cases for Relational, Statistical, and Spatial-temporal. The other categories will be built when there is an appropriate use case.

### Relational

The GitLab [commit graph](https://gitlab.com/gitlab-org/gitlab-ui/-/network/main) is an example of a relational data visualization, as it shows how all of the individual commits are related to the master.

<todo>Create component for the Commit Graph in GitLab UI</todo>

### Spatial-temporal

A heat map is an example of a spatial-temporal data visualization.

Heat maps can be used to more quickly visualize and compare values in a dataset. In heat maps, data points are grouped and displayed using shades of color. Darker colors are generally used to communicate a higher density of data.

<story-viewer story-name="charts-heatmap--default" title="Heat Map"></story-viewer>

### Statistical graphics

Charts are statistical graphics that help users quickly digest, visualize and see trends in their data.

Full list of chart types and design specifications is detailed on the [Charts](/data-visualization/charts) component page.

<story-viewer story-name="charts-stacked-column-chart--stacked" title="Stacked column chart"></story-viewer>

## Design specifications

Color, spacing, dimension, and layout specific information pertaining to this component can be viewed using the following links:

[Heat map measure spec](http://gitlab-org.gitlab.io/gitlab-design/hosted/amelia/gitlab-design%23306-add-heat-maps-to-pattern-library-spec-previews/)
