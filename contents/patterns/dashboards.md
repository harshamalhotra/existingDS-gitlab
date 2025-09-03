---
name: Dashboards
summary: Guidelines for designing interfaces that present multiple dashboard panels of content and data for analysis and decision-making.
description: A dashboard is a structured interface that organizes multiple dashboard panels, and is analysis focused. Dashboards can be built-in to GitLab features or created and customized by a user.
related:
  - dashboard-panel
---

## Structure

<figure-img alt="Numbered diagram of a dashboard structure" label="Dashboard structure" src="/img/dashboard-structure.svg"></figure-img>

1. **Title**: Displays the dashboard name and purpose.
2. **Description** (optional): Provides context about the dashboard's objectives and key questions it addresses.
3. **Configuration menu**: Enables authorized users to configure dashboard-level settings.
4. **Filters** (optional): Applies dashboard-wide filtering that affects multiple dashboard panels.
5. **Grid**: Contains all dashboard panels within a 12-column responsive grid with unlimited rows that collapses to a single column at the medium breakpoint.
6. **Actions**: Contains administrative controls (such as save, cancel, and add a panel) visible to authorized users during edit mode.

## Guidelines

### When to use

- Display dashboard panels of content and data for analysis-oriented tasks.
- Create customizable, analytical workspaces for different user roles or use cases.
- Consolidate related metrics into a unified analytical interface.

### When not to use

- If the interface is action-oriented where content is presented as a list, table, or board that requires use action, then consider a more general page layout.
- If a chart or metric doesn't benefit from the overhead or features of the dashboard framework, then it can be a standalone visualization.

### Layout

A dashboard uses a grid to arrange elements. Rows and columns are used to align and snap elements based on sequence and position.

### Content

- **Configuration menu**: Open and modify dashboard settings and utilize dashboard actions.
- **Date range**: An interval of dates defined relative to the current date or a custom range.
- **Description**: Explains the purpose of the dashboard.
- **Filter**: A selection of one or more ways to reduce the data shown to meet a specific set of criteria for the majority of dashboard panels.
- **Title**: Concisely describes the group of dashboard panels.
- **Unique ID** (required): An internal value to uniquely identify the dashboard.
- **Variable**: A placeholder for a value that could propagate through the dashboard panels. For example, a team name that could be rendered in visualizations or panel titles.
- **Version history**: Listing of historical changes that were done to the dashboard that shows dates and author. Could have the option to revert back to any point of a past change if able.
- **Grid attributes**: The number of rows and columns, margin around dashboard panels, and other grid functionality that should be applied to the whole grid.

### Dashboard categories

There are two categories of dashboard in GitLab:

- Built-in dashboard.
- Customizable dashboard.

#### Built-in dashboard

A built-in dashboard is pre-configured with fixed dashboard panel layouts and pre-defined data sources that cannot be modified by a user.

#### Customizable dashboard

A customizable dashboard allows a user to add or remove dashboard panels, adjust their size and position, and save personalized configurations.

## Behavior

Both [dashboard categories](#dashboard-categories) support the following interactions:

- **Export**: Make data available as CSV file, static image of a visualization being shown, or static PDF of a visualization/dashboard (important for data analysis and accessibility).
- **Share**: Share a dashboard through different channels.

A customizable dashboard supports these additional interactions:

- **Archive**: Remove something from a current view to be organized and managed in a separate view. This change is recorded in the versioning area.
- **Edit**: Edit the dashboard title, description, and grid composition.
- **Make a copy**: Create an identical copy of any dashboard.
- **Lock**: One or more elements are temporarily unavailable for changes to be made.
- **Remove**: Delete a dashboard.

## Considerations

- **Organize hierarchically**: Place high-level information at the top and detailed information towards the bottom.
- **Design for sharing**: Ensure a dashboard is "meeting-ready" for a screenshot and screen sharing during a call.
- **Enable quick scanning**: Prominently display the data points that a user frequently looks for.
- **Support exploration**: Start with a high-level view that allows a user to drill-down for investigation.
- **Show progression**: Display trends and a comparison over time, not just a current snapshot.
- **Facilitate exporting**: Format data and visuals for easy inclusion in presentations.
- **Maintain simplicity**: Limit a dashboard panel to one visualization for better UI scalability and easier configuration.

## Code reference

The `GlDashboardLayout` component provides an easy way to render grid-based dashboards using a configuration.
For more in-depth and technical details on the dashboard layout framework, see the
[dashboard layout architecture design document](https://handbook.gitlab.com/handbook/engineering/architecture/design-documents/dashboard_layout_framework/).

### Editing the grid

The component supports interactive editing of panel position and size within the dashboard grid. Users can:

- Resize panels: Drag panel corners or edges to adjust width and height within the 12-column grid constraints.
- Reposition panels: Drag panels to new locations within the grid, with automatic snapping to grid positions.
- Real-time updates: Changes to the dashboard configuration object are rendered immediately.

**Future development**: Full user-driven customization with support for users to create, modify, and persist custom dashboard configurations
is currently being developed according to the
[dashboard customization architecture design document](https://handbook.gitlab.com/handbook/engineering/architecture/design-documents/dashboard_customization_framework/).

### Dashboard panels

The dashboard layout is not opinionated about the panel component used. You are free to choose
whichever panel component best suits your needs. However, to ensure consistency with
our design patterns, it's strongly recommended that you use `GlDashboardPanel`.

### Filters

The component provides a `#filters` slot to render your filters in the dashboard layout.
The component does not manage or sync filters and leaves it up to the consumer to manage this state.

We expect dashboards using the framework to implement two types of filters:

- Dashboard filters: Applied to every panel and visualization in the dashboard.
- Panel filters: Applied per panel to refine results available within the dashboard context.

### Basic implementation

A basic implementation of a static dashboard using the `#panel` slot to render existing
visualizations wrapped in `GlDashboardPanel`.

<!--
The below is intentionally *not* an HTML block.
See https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/issues/2953.
-->
```text
<script>
import { GlDashboardLayout, GlDashboardPanel } from '@gitlab/ui';

// Your visualizations
import UsersVisualization from './my_users_visualization.vue';
import EventsVisualization from './my_events_visualization.vue';

export default {
  components: {
    GlDashboardLayout,
    GlDashboardPanel,
    UsersVisualization,
    EventsVisualization,
  },
  data() {
    return {
      dashboard: {
        title: 'My dashboard title',
        description: 'The dashboard description to render',
        panels: [
          {
            // Each panel ID must be unique within the context of this dashboard object
            id: 'active-users-panel',
            dashboardPanelProps: {
              title: 'Active users over time',
              // Any additional GlDashboardPanel props go here
            },
            component: UsersVisualization,
            componentProps: {
              apiPath: '/example-users-api',
              // Any props you want to pass to your component go here
            },
            gridAttributes: {
              width: 6,
              height: 4,
              yPos: 0,
              xPos: 0,
            },
          },
          {
            // Each panel ID must be unique within the context of this dashboard object
            id: 'events-over-time-panel',
            dashboardPanelProps: {
              title: 'Events over time',
              // Any additional GlDashboardPanel props go here
            },
            component: EventsVisualization,
            componentProps: {
              apiPath: '/example-events-api',
              // Any props you want to pass to your component go here
            },
            gridAttributes: {
              width: 6,
              height: 4,
              yPos: 0,
              xPos: 6,
            },
          },
        ],
      },
    }
  },
}
</script>

<template>
  <gl-dashboard-layout :config="dashboard">
    <template #panel="{ panel }">
      <gl-dashboard-panel v-bind="panel.dashboardPanelProps">
        <template #body>
          <component
            :is="panel.component"
            class="gl-h-full gl-overflow-hidden"
            v-bind="panel.componentProps"
          />
        </template>
      </gl-dashboard-panel>
    </template>
  </gl-dashboard-layout>
</template>
```

<story-viewer component="dashboards-dashboards-layout" title="GlDashboardLayout" view-mode="docs"></story-viewer>
