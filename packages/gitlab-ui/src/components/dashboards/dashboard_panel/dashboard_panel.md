## Dashboard panel

The `GlDashboardPanel` component is a foundational building block for dashboards but it can also be
used in other analytics interfaces. It is desinged to wrap a query result visualization with standardized
styling, loading states, actions, and metadata as outlined by our [Pajamas guidelines](https://design.gitlab.com/patterns/dashboards).
It does not manage data states and fetching, or handle filter state managment.

### When to use

This component should be used when:

- You need a standardized container for individual results in dashboards, reports,
or other analytics-focused interfaces.
- You want to wrap a single visualization of query results, such as charts,d markdown,
single stats, or tables.
- You want to benefit from easy integration with the dashboard layout component.

## The component

The component is designed to wrap a single data visualization, but it's not opinionated about its content
and can be used for example to wrap other content types such as rendered markdown.

### Loading states

Panels provide built-in loading state management. When content is loading:

- Set the `loading` prop to `true` to show a loading spinner.
- Use `loadingDelayed` and `loadingDelayedText` for long-running operations.
- The panel handles the visual loading state while you handle the actual data loading.

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
