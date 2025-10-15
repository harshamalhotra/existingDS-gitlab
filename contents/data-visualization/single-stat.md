---
name: Single stat
extendedNotice:
  owners: group::platform insights
  contactPreset: custom-dashboards-foundation
---

The single stat component displays the title and value of a metric.

## Examples

<story-viewer component="charts-single-stat" title="GlSingleStat"></story-viewer>

## Usage

A single stat can be used by itself or side-by-side with other single stats to display a topical set of metrics. There are a number of variations to allow for additional context or representation of the metric.

### When to use a single stat

- To show an overview of how a metric is performing.
- To show multiple metrics around a similar topic side-by-side.

### When not to use single stat

- To display standard text or labels.
- To display the same metric over a period of time (use a [chart](/data-visualization/charts) instead).

## Demo

### Simple

The default pattern for displaying a metric.

<story-viewer component="charts-single-stat" title="Default" :args-value="100000" ></story-viewer>

### Title icon

A single stat with a title icon to convey extra meaning to the metric.

<story-viewer component="charts-single-stat" story="with-title-icon" title="With Title Icon"></story-viewer>

### Meta icon

A single stat with an icon which can be used to convey status or trend.

<story-viewer component="charts-single-stat" story="with-meta-icon" title="With Meta Icon"></story-viewer>

### Badge

A single stat with a badge which can be used to convey status or trend in more detail.

<story-viewer component="charts-single-stat" story="with-meta-icon" title="With Badge" args-variant="info" args-meta-text="through the roof" args-meta-icon="rocket"></story-viewer>

### Link

A single stat that navigates to detailed information about a metric.

<todo issue="https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/issues/1555">Complete design spec and add "linked" single stat example.</todo>

## Design specifications

Color, spacing, dimension, and layout information can be viewed in the [Pajamas UI Kit →](https://www.figma.com/file/17NxNEMa7i28Is8sMetO2H/Data-Visualization?node-id=275%3A731)

## Code reference

The single stat component is used to show a single value. The color of the meta icon / badge is
determined by the **variant** prop, which can be one of "success", "warning", "danger", "info",
or "neutral" (default).

### Hover state

You can make the component focusable by adding a `tabindex=0` attribute to it. This will also apply
a hover state to the component.

### GlSingleStat

<story-viewer component="charts-single-stat" title="GlSingleStat" view-mode="docs"></story-viewer>
