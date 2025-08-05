## Dashboard panel

The `GlDashboardPanel` component wraps any type of content in a consistent UI structure
for analytics. It is primarily designed for dashboards, but can be used in other analytics
interfaces. It is a foundational building block designed to wrap query results with standardized
styling, loading states, actions, and metadata as outlined by our [Pajamas guidelines](#pajamas-guidelines).
It does not manage data states and fetching, or handle filter state managment.

### When to use

This component should be used when:

- You need a standardized container for individual results in dashboards, reports,
or other analytics-focused interfaces.
- You want to wrap a single visualization of query results, such as charts, markdown,
single stats, or tables.
- You want to benefit from easy integration with the dashboard layout component.

## The component

While not opinionated about its contents, it's designed as a container
for a single query result visualization. It also provides useful ways to communicate
the query state, metadata, available actions to our users as outlined by our [Pajamas guidelines](#pajamas-guidelines).

### Loading states

Panels provide built-in loading state management. When content is loading:

- Set the `loading` prop to `true` to show a loading spinner.
- Use `loadingDelayed` and `loadingDelayedText` for long-running operations.
- The panel handles the visual loading state while your content handles the actual data loading.

### Filters

The component provides a `#filters` slot for you to render your filters within the panel
layout. It's up to the consumer to manage the state of filters.

### Basic implementation

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

## Pajamas guidelines

- [Pajamas dashboards pattern](https://design.gitlab.com/patterns/dashboards)
