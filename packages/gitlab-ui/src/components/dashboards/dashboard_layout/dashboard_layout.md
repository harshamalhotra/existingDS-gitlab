## Dashboard layout

The `GlDashboardLayout` component provides an easy way to render grid-based dashboards
using a configuration as outlined by our [Pajamas guidelines](#pajamas-guidelines).
For more in-depth details on the dashboard layout framework, see the
[architecture design document](https://handbook.gitlab.com/handbook/engineering/architecture/design-documents/dashboard_layout_framework/).

### When to use

This component should be used when:

- You want an easy way to create a dashboard interface.
- You want your dashboard to align with our [Pajamas guidelines](#pajamas-guidelines).
- You want to benefit from features such as customizable layouts with resizable, draggable elements.

### Current limitations

The `GlDashboardLayout` component is limited to rendering dashboards. As defined
in our architecture design document it does not provide:

- Data exploration outside defined panel visualizations.
- User-driven customization outside of editing panel position and size.
- Navigation placement for dashboards.

## The component

The component expects a dashboard configuration object as input and renders a dashboard
layout with title, description, actions, and panels.

### Grid layout

Panels within the dashboard layout are rendered in a cross-browser 12-column grid
system with an unlimited number of rows. The grid is responsive and collapses down to a
single column at the [medium breakpoint](https://design.gitlab.com/product-foundations/layout/#breakpoints).

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

```html
<script>
import { GlDashboardLayout, GlDashboardPanel } from '@gitlab/ui';

// Your i18n library
import { __ } from '~/locale';

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
        title: __('My dashboard title'),
        description: __('The dashboard description to render'),
        panels: [
          {
            // Each panel ID must be unique within the context of this dashboard obj
            id: 'active-users-panel',
            dashboardPanelProps: {
              title: __('Active users over time'),
              // Any additional GlDashboardPanel props go here
            },
            component: UsersVisualization,
            componentProps: {
              apiPath: '/example-users-api',
              // Any props you want to pass to your component
            },
            gridAttributes: {
              width: 6,
              height: 4,
              yPos: 0,
              xPos: 0,
            },
          },
          {
            // Each panel ID must be unique within the context of this dashboard obj
            id: 'events-over-time-panel',
            dashboardPanelProps: {
              title: __('Events over time'),
              // Any additional GlDashboardPanel props go here
            },
            component: EventsVisualization,
            componentProps: {
              apiPath: '/example-events-api',
              // Any props you want to pass to your component
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

## Pajamas guidelines

- [Pajamas dashboards pattern](https://design.gitlab.com/patterns/dashboards)
