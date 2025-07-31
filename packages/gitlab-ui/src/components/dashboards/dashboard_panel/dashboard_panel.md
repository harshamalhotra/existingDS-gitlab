## Dashboard panel

The `GlDashboardPanel` component is a container that provides consistent UI structure
for content within dashboards and other analytics interfaces. It is a foundational building
block used to wrap query results with standardized styling, loading states, actions,
and metadata display as outlined by our [Pajamas guidelines](#pajamas-guidelines).

### When to use

This component should be used when:

- You need a container for dashboards, reports, or other analytics focused interfaces.
- You want to wrap a single visualization of query results, such as charts, markdown,
single stats, or tables.
- You want to benefit from easy integration with the dashboard layout component.

### Known limitations

The panel component is UI focused and intentionally does not:

- Manage data states or data fetching.
- Handle filter logic or filter state management.
- Process, transform, or visualize data in any way.

## The component

The component is a flexible container that can render any type of content.
While not opinionated about what you put inside it, it's designed as a container
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
