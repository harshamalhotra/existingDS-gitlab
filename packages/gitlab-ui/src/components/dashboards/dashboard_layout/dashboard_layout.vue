<script>
import GridLayout from './grid_layout/grid_layout.vue';
import { dashboardConfigValidator } from './validators';

/**
 * The `DashboardLayout` component provides an easy way to render dashboards using a configuration, aligning with our [Pajamas guidelines](https://design.gitlab.com/patterns/dashboards).
 *
 * Please refer to the [documentation](https://docs.gitlab.com/development/fe_guide/dashboard_layout_framework) for more information.
 *
 */
export default {
  name: 'GlDashboardLayout',
  components: {
    GridLayout,
  },
  props: {
    /**
     * The dashboard configuration object.
     *
     * @typedef {Object} Dashboard
     * @property {string} title - The dashboard title to render. Expected if no #title or #header slot is provided.
     * @property {string} description - Optional: The dashboard description to render.
     * @property {DashboardGrid} panels - Optional: The grid configuration.
     * @see GridLayout.vue
     *
     * @type {Dashboard}
     */
    config: {
      type: Object,
      required: true,
      validator: dashboardConfigValidator,
    },
    /**
     * Set to `false` to enable user-driven modification of the grid layout.
     */
    isStaticGrid: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
  computed: {
    dashboardHasPanels() {
      return this.config.panels?.length > 0;
    },
    dashboardHasDescription() {
      return this.$scopedSlots.description || Boolean(this.config.description);
    },
  },
  methods: {
    emitChanges(newConfig) {
      this.$emit('changed', newConfig);
    },
  },
};
</script>
<template>
  <div>
    <section class="gl-my-4 gl-flex gl-items-center">
      <!-- @slot Used to render custom dashboard header state. Replaces the default rendering. -->
      <slot name="header">
        <div class="gl-flex gl-w-full gl-flex-col">
          <!-- Dashboard title -->
          <div class="gl-flex gl-items-center">
            <!-- @slot Used to render custom dashboard titles. Replaces the default rendering. -->
            <slot name="title">
              <h2 data-testid="title" class="gl-my-0">{{ config.title }}</h2>
            </slot>
          </div>
          <!-- Dashboard description -->
          <div v-if="dashboardHasDescription" class="gl-mt-3 gl-flex">
            <!-- @slot Used to render custom dashboard descriptions. Replaces the default rendering. -->
            <slot name="description">
              <p data-testid="description" class="gl-mb-0">
                {{ config.description }}
              </p>
            </slot>
          </div>
        </div>
      </slot>
      <div v-if="$scopedSlots.actions" data-testid="actions-container">
        <!-- @slot Place dashboard actions inside this slot. -->
        <slot name="actions"></slot>
      </div>
    </section>
    <div class="gl-flex">
      <div class="gl-flex gl-grow gl-flex-col">
        <!-- @slot For dashboard-level alerts. -->
        <slot name="alert"></slot>

        <!-- Dashboard filters -->
        <section
          v-if="$scopedSlots.filters"
          class="gl-flex gl-flex-row gl-flex-wrap gl-gap-5 gl-pb-3 gl-pt-4"
          data-testid="filters-container"
        >
          <!-- @slot Place dashboard filters inside this slot. -->
          <slot name="filters"></slot>
        </section>

        <!-- Dashboard grid -->
        <!--
          Gridstack guttering wraps around each panel in the grid.
          We want the grid to be flush against the edge, so we remove the excess margin using -gl-mx-3.
        -->
        <grid-layout
          v-if="dashboardHasPanels"
          :value="config"
          :is-static-grid="isStaticGrid"
          class="-gl-mx-3"
          @input="emitChanges"
        >
          <template #panel="{ panel }">
            <!-- @slot The contents to render inside each dashboard panel. -->
            <slot name="panel" v-bind="{ panel }"></slot>
          </template>
        </grid-layout>

        <!-- @slot Shown when a dashboard has no panels. -->
        <slot v-else name="empty-state"></slot>
      </div>
    </div>
    <!-- @slot Optional: The dashboard footer content. -->
    <slot name="footer"></slot>
  </div>
</template>
