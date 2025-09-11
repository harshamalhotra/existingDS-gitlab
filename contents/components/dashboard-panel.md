---
name: Dashboard panel
description: A dashboard panel displays content and data for analysis and decision-making. It's the basic building blocks of a dashboard, but can also be used on its own. In a customizable dashboard, it can be moved and resized by a user to create their preferred layout.
extendedNotice:
  owners: group::platform insights
  contacts:
    - text: '#g_analytics_platform_insights'
      url: 'https://gitlab.slack.com/channels/g_analytics_platform_insights'
related:
  - dashboards
---

## Structure

<figure-img alt="Numbered diagram of a dashboard panel structure" label="Dashboard panel structure" src="/img/dashboard-panel-structure.svg"></figure-img>

1. **Container**: Wraps the dashboard panel content.
1. **Title icon** (optional): In some cases the dashboard panel title can be prefixed with an icon (for example, a severity type or runner status).
1. **Title**: Concisely describes the dashboard panel.
1. **Info icon** (optional): Triggers a popover to add additional context about the data.
1. **Badge** (optional): Communicates additional information (for example, [Beta](/patterns/feature-management/#highlighting-feature-versions) or [Experiment](/patterns/feature-management/#highlighting-feature-versions)).
1. **Configuration menu**: Contains dashboard panel settings and actions.
1. **Description** (optional): Specify the data time range, refresh frequency, and any exclusions (for example, Last 30 days, excludes weekends).
1. **Filter** (optional): Adds refinement options to further narrow data beyond the page-level context.
1. **Visualization**: A graphical representation of query results (for example, a chart, a table, or a list).
1. **Resize**: For user-customizable dashboards, dashboard panels can be resized and repositioned on a dashboard using drag-and-drop.

## Guidelines

### When to use

- For a standardized container for individual results in a [dashboard](/patterns/dashboard), report, or other analytics-focused interface.
- To wrap a single visualization of query results, such as a chart, markdown, single stat, or table.
- Easy integration with `GlDashboardLayout`.

### When not to use

- For simple content grouping without data visualization, consider using a [card](/components/card) instead.
- For content that doesn't require standardized dashboard layout integration.
- For interactive elements that aren't related to data visualization or analytics.

#### Titles

Keep to one line using sentence fragments:

<grid>
  <do>Pending reviews this week</do>
  <dont>Merge requests that have been open for more than 7 days and are awaiting review</dont>
</grid>

Avoid punctuation except full stops for complete sentences:

<grid>
  <do>Open merge requests by team</do>
  <dont>Open merge requests: sorted by team</dont>
</grid>

<grid>
  <do>Merge requests including drafts</do>
  <dont>Merge requests (including drafts)</dont>
</grid>

<grid>
  <do>Open MRs last 30 days</do>
  <dont>Open MRs - last 30 days</dont>
</grid>

Avoid conversational tone:

<grid>
  <do>Average time to merge</do>
  <dont>How long did merge requests take to merge?</dont>
</grid>

### Considerations

#### Maintain simplicity

Limit each dashboard panel to one visualization for better scalability and easier configuration. Multiple visualizations in a single dashboard panel creates cognitive overload, making it harder for a user to quickly extract insights. A single-purpose dashboard panel is easier to understand at a glance, reduces decision fatigue, and allows a user to build their mental model more effectively. From a technical perspective, isolated components are easier to maintain, debug, and update without affecting other visualizations. An isolated component also scales better across different screen sizes and can be more easily rearranged or reused in a different dashboard context.

#### Limit filters

Keep dashboard panel-level filter options minimal. Too many filters create analysis paralysis and increases the likelihood of a user creating a misleading or incorrect data view. Minimal filters reduce cognitive load and help maintain focus on the most important data dimensions. This also improves dashboard performance, since fewer filter combinations result in more predictable query patterns and better caching opportunities. Additionally, minimal dashboard panel-level filter options ensure consistency across user experiences and reduce the risk of a user getting lost in edge-case filter combinations that may not provide meaningful insights.

## Code reference

### GlDashboardPanel

The `GlDashboardPanel` component is a container that can be used in dashboards or other analytics-focused pages. While not opinionated about its contents, it's designed as a container for a single query result visualization. It wraps its content with standardized styling, loading states, actions, and metadata. It does not manage data states and fetching, or handle filter state management.

#### Loading states

A dashboard panel provides built-in loading state management. When content is loading:

- Set the `loading` prop to `true` to show a loading spinner.
- Use `loadingDelayed` and `loadingDelayedText` for long-running operations.
- The dashboard panel handles the visual loading state while your content handles the actual data loading.

#### Filters

The component provides a `#filters` slot for you to render your filters within the dashboard panel layout. It's up to the consumer to manage the state of filters.

#### Basic implementation

```html
<script>
import { GlDashboardPanel } from '@gitlab/ui';
import MyVisualization from './my_visualization.vue';

export default {
  components: {
    GlDashboardPanel,
    MyVisualization,
  },
  data() {
    return {
      isLoading: false,
    };
  },
};
</script>

<template>
  <gl-dashboard-panel
    title="My Content Title"
    :loading="isLoading"
  >
    <template #body>
      <my-visualization />
    </template>
  </gl-dashboard-panel>
</template>
```

<story-viewer component="dashboards-dashboards-panel" story="image" title="GlDashboardPanel" view-mode="docs"></story-viewer>
