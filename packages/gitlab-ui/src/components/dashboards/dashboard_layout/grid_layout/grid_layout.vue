<script>
import { GridStack } from 'gridstack';
import pickBy from 'lodash/pickBy';
import { breakpoints } from '../../../../utils/breakpoints';

const CURSOR_GRABBING_CLASS = '!gl-cursor-grabbing';

export default {
  name: 'GlGridLayout',
  props: {
    value: {
      type: Object,
      required: true,
    },
    isStatic: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
  data() {
    return {
      grid: undefined,
      gridPanels: [],
    };
  },
  computed: {
    gridConfig() {
      return this.value.panels.map((panel) => {
        const { gridAttributes, ...otherProps } = panel;

        return {
          ...this.getPanelGridItemConfig(panel),
          props: otherProps,
        };
      });
    },
  },
  watch: {
    isStatic(value) {
      this.grid?.setStatic(value);
    },
    gridConfig: {
      handler(config) {
        this.grid?.load(config);
      },
      deep: true,
    },
    /**
     * Data flow:
     * 1. Initial: mounted → initGridStack() → grid.load(gridConfig) →
     *    grid.getGridItems() → initGridPanelSlots → gridPanels populated with DOM references
     * 2. Updates: value.panels changes → two parallel paths:
     *    a. gridConfig changes → grid.load() updates grid layout (but not gridPanels)
     *    b. this watcher updates gridPanels with new panel properties
     */
    'value.panels': {
      handler(newPanels) {
        if (this.gridPanels.length === 0) return;

        // Only update panels that have changed to improve performance
        newPanels.forEach((updatedPanel) => {
          const panel = this.gridPanels.find((p) => p.id === updatedPanel.id);

          if (panel) {
            // Exclude `gridAttributes` from being included in the panel props as it's not a valid prop for the panel component
            const panelPropsWithoutGridAttributes = pickBy(
              updatedPanel,
              (_, k) => k !== 'gridAttributes',
            );

            panel.props = { ...panelPropsWithoutGridAttributes };
          }
        });
      },
      deep: true,
    },
  },
  mounted() {
    this.initGridStack();
  },
  beforeDestroy() {
    const removeDom = Boolean(this.$el.parentElement);
    this.grid?.destroy(removeDom);
  },
  methods: {
    // TODO: Refactor this to use render methods once Vue 3 migration is complete
    // https://gitlab.com/gitlab-org/gitlab/-/issues/549095
    async mountGridComponents(panels, options = { scrollIntoView: false }) {
      // Ensure new panels are always rendered first
      await this.$nextTick();

      panels.forEach((panel) => {
        const wrapper = this.$refs.panelWrappers?.find((w) => w.id === panel.id);
        const widgetContentEl = panel.el.querySelector('.grid-stack-item-content');

        if (wrapper && widgetContentEl) {
          widgetContentEl.appendChild(wrapper);
        }
      });

      if (options.scrollIntoView) {
        const mostRecent = panels[panels.length - 1];
        mostRecent.el.scrollIntoView({ behavior: 'smooth' });
      }
    },
    getGridItemForElement(el) {
      return this.gridConfig.find((item) => item.id === el.getAttribute('gs-id'));
    },
    initGridPanelSlots(gridElements) {
      if (!gridElements) return;

      this.gridPanels = gridElements.map((el) => ({
        ...this.getGridItemForElement(el),
        el,
      }));

      this.mountGridComponents(this.gridPanels);
    },
    initGridStack() {
      // See https://github.com/gridstack/gridstack.js/tree/master/doc#grid-options
      this.grid = GridStack.init(
        {
          // Uniform gap between panels
          margin: '8px',
          // CSS Selector for finding the drag handle element
          handle: '.grid-stack-item-handle',
          /* Magic number 125px:
           * After allowing for padding, and the panel title row, this leaves us with minimum 48px height for the cell content.
           * This means text/content with our spacing scale can fit up to 49px without scrolling.
           */
          cellHeight: '125px',
          // Setting 1 in minRow prevents the grid collapsing when all panels are removed
          minRow: 1,
          // Define the number of columns for anything below a set width, defaults to fill the available space
          columnOpts: { breakpoints: [{ w: breakpoints.md, c: 1 }] },
          alwaysShowResizeHandle: true,
          animate: true,
          float: true,
          // Toggles user-customization of grid layout
          staticGrid: this.isStatic,
        },
        this.$refs.grid,
      ).load(this.gridConfig);

      // Sync Vue components array with gridstack items
      this.initGridPanelSlots(this.grid.getGridItems());

      this.grid.on('dragstart', () => {
        this.$el.classList.add(CURSOR_GRABBING_CLASS);
      });
      this.grid.on('dragstop', () => {
        this.$el.classList.remove(CURSOR_GRABBING_CLASS);
      });
      this.grid.on('change', (_, items) => {
        if (!items) return;

        this.emitLayoutChanges(items);
      });
      this.grid.on('added', (_, items) => {
        this.addGridPanels(items);
      });
      this.grid.on('removed', (_, items) => {
        this.removeGridPanels(items);
      });
    },
    getPanelGridItemConfig({
      gridAttributes: { xPos, yPos, width, height, minHeight, minWidth, maxHeight, maxWidth },
      id,
    }) {
      const filterUndefinedValues = (obj) => pickBy(obj, (value) => value !== undefined);

      // GridStack renders undefined layout values so we need to filter them out.
      return filterUndefinedValues({
        x: xPos,
        y: yPos,
        w: width,
        h: height,
        minH: minHeight,
        minW: minWidth,
        maxH: maxHeight,
        maxW: maxWidth,
        id,
      });
    },
    convertToGridAttributes(gridStackItem) {
      return {
        yPos: gridStackItem.y,
        xPos: gridStackItem.x,
        width: gridStackItem.w,
        height: gridStackItem.h,
      };
    },
    removeGridPanels(items) {
      items.forEach((item) => {
        const index = this.gridPanels.findIndex((c) => c.id === item.id);
        this.gridPanels.splice(index, 1);
        // Finally, remove the gridstack element
        item.el.remove();
      });
    },
    addGridPanels(items) {
      const newPanels = items.map(({ grid, ...rest }) => ({ ...rest }));
      this.gridPanels.push(...newPanels);

      this.mountGridComponents(newPanels, { scrollIntoView: true });
    },
    emitLayoutChanges(items) {
      /**
       * Uses JSON parse and stringify to remove object references.
       * Lodash's `cloneDeep` retains circular references.
       * See https://github.com/lodash/lodash/issues/4710#issuecomment-606892867 for details on cloneDeep circular references
       * See https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm for the underlying mechanism used by Lodash
       */
      const newValue = JSON.parse(JSON.stringify(this.value));

      items.forEach((item) => {
        const panel = newValue.panels.find((p) => p.id === item.id);

        if (!panel) return;

        panel.gridAttributes = {
          ...panel.gridAttributes,
          ...this.convertToGridAttributes(item),
        };
      });
      this.$emit('input', newValue);
    },
  },
};
</script>

<template>
  <div ref="grid" class="grid-stack" data-testid="gridstack-grid">
    <div
      v-for="panel in gridPanels"
      :id="panel.id"
      ref="panelWrappers"
      :key="panel.id"
      class="gl-h-full"
      :class="{ 'gl-cursor-grab': !isStatic }"
      data-testid="gridstack-panel"
    >
      <slot name="panel" v-bind="{ panel: panel.props }"></slot>
    </div>
  </div>
</template>
