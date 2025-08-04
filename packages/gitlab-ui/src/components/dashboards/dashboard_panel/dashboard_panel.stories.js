import GlLineChart from '../../charts/line/line.vue';
import GlIcon from '../../base/icon/icon.vue';
import GlPopover from '../../base/popover/popover.vue';
import GlLink from '../../base/link/link.vue';
import GlButton from '../../base/button/button.vue';
import GlButtonGroup from '../../base/button_group/button_group.vue';
import GlDashboardPanel from './dashboard_panel.vue';
import readme from './dashboard_panel.md';

export default {
  title: 'dashboards/dashboards-panel',
  component: GlDashboardPanel,
  parameters: {
    docs: {
      description: {
        component: readme,
      },
    },
  },
};

const chartProps = {
  chartData: [
    {
      name: 'Created MRs',
      data: [
        ['Mon', 1184],
        ['Tue', 1346],
        ['Wed', 1035],
        ['Thu', 1226],
        ['Fri', 1421],
        ['Sat', 1347],
        ['Sun', 1035],
      ],
    },
    {
      name: 'Closed MRs',
      data: [
        ['Mon', 1509],
        ['Tue', 1275],
        ['Wed', 1187],
        ['Thu', 1287],
        ['Fri', 1098],
        ['Sat', 1457],
        ['Sun', 1452],
      ],
    },
    {
      name: 'Predicted closed MRs',
      data: [
        ['Mon', 1041],
        ['Tue', 1468],
        ['Wed', 1273],
        ['Thu', 1503],
        ['Fri', 1209],
        ['Sat', 1416],
        ['Sun', 1213],
      ],
    },
  ],
  chartOptions: {
    animation: false,
    xAxis: {
      name: 'Time',
      type: 'category',
    },
  },
};

const marginTop = 'margin-top: 100px;';

const alertMessageSlot = `
<template #alert-message="{ panelId }">
  <gl-popover
    triggers="hover focus"
    title="Alert message"
    :show-close-button="false"
    placement="top"
    :css-classes="['gl-max-w-1/2']"
    :target="panelId"
    :delay="{ hide: 500 }"
    boundary="viewport"
    >
      Alert message to show users. <gl-link href="#">Learn more</gl-link>.
  </gl-popover>
</template>
`;

const wrap = (template, style = '') => `
  <div style="${style}" class="gl-text-base">
    <gl-dashboard-panel v-bind="$props" style="min-height: 7rem;">
      ${template}
    </gl-dashboard-panel>
  </div>
`;

const Template = (args, { argTypes }) => ({
  components: { GlDashboardPanel, GlLineChart, GlIcon, GlPopover, GlLink },
  props: Object.keys(argTypes),
  ...chartProps,
  template: wrap(`
    <template #body>
      <p class="gl-text-tertiary">Your visualization here</p>
    </template>
  `),
});

const PopoverTemplate = (args, { argTypes }) => ({
  components: { GlDashboardPanel, GlLineChart, GlIcon, GlPopover, GlLink },
  props: Object.keys(argTypes),
  ...chartProps,
  template: wrap(
    `
    <template #body>
      <p class="gl-text-tertiary">Your visualization here</p>
    </template>
  `,
    // Margin top added to give space for the popover
    marginTop,
  ),
});

export const Default = Template.bind({});
Default.args = {
  containerClass: null,
  borderColorClass: null,
  title: 'Dashboard panel',
  titlePopover: null,
  loading: false,
  loadingDelayed: false,
  loadingDelayedText: 'Still loading...',
  actions: [],
  actionsToggleText: 'Actions',
};

export const WithTitlePopover = PopoverTemplate.bind({});
WithTitlePopover.args = {
  ...Default.args,
  titlePopover: {
    description: 'Find out %{linkStart}more%{linkEnd}',
    descriptionLink: 'http://test.com',
  },
};

export const WithLoading = Template.bind({});
WithLoading.args = {
  ...Default.args,
  loading: true,
};

export const WithLoadingDelayed = Template.bind({});
WithLoadingDelayed.args = {
  ...Default.args,
  loading: true,
  loadingDelayed: true,
};

export const WithActions = Template.bind({});
WithActions.args = {
  ...Default.args,
  actions: [
    {
      text: 'Delete',
      icon: 'remove',
      action: () => {},
    },
  ],
};

export const ChartWithFilters = (args, { argTypes }) => ({
  components: { GlDashboardPanel, GlLineChart, GlIcon, GlPopover, GlLink, GlButton, GlButtonGroup },
  props: Object.keys(argTypes),
  ...chartProps,
  dayChartData: [
    {
      name: 'Created MRs (Day)',
      data: [
        ['Mon', 1184],
        ['Tue', 1346],
        ['Wed', 1035],
        ['Thu', 1226],
        ['Fri', 1421],
        ['Sat', 1347],
        ['Sun', 1035],
      ],
    },
    {
      name: 'Closed MRs (Day)',
      data: [
        ['Mon', 1509],
        ['Tue', 1275],
        ['Wed', 1187],
        ['Thu', 1287],
        ['Fri', 1098],
        ['Sat', 1457],
        ['Sun', 1452],
      ],
    },
  ],
  weekChartData: [
    {
      name: 'Created MRs (Week)',
      data: [
        ['Week 1', 8500],
        ['Week 2', 9200],
        ['Week 3', 7800],
        ['Week 4', 8900],
      ],
    },
    {
      name: 'Closed MRs (Week)',
      data: [
        ['Week 1', 9200],
        ['Week 2', 8800],
        ['Week 3', 9500],
        ['Week 4', 8700],
      ],
    },
  ],
  monthsChartData: [
    {
      name: 'Created MRs (Month)',
      data: [
        ['Jan', 35000],
        ['Feb', 32000],
        ['Mar', 38000],
        ['Apr', 36000],
        ['May', 39000],
        ['Jun', 37000],
      ],
    },
    {
      name: 'Closed MRs (Month)',
      data: [
        ['Jan', 36000],
        ['Feb', 33000],
        ['Mar', 37000],
        ['Apr', 35000],
        ['May', 38000],
        ['Jun', 36000],
      ],
    },
  ],
  data() {
    return {
      selectedRange: 'day',
    };
  },
  computed: {
    currentChartData() {
      return {
        day: this.$options.dayChartData,
        week: this.$options.weekChartData,
        months: this.$options.monthsChartData,
      }[this.selectedRange];
    },
  },
  template: wrap(`
    <template #filters>
      <gl-button-group>
        <gl-button
          category="secondary"
          variant="default"
          size="small"
          :selected="selectedRange === 'day'"
          :disabled="loading || loadingDelayed"
          @click="selectedRange = 'day'"
        >
          Day
        </gl-button>
        <gl-button
          category="secondary"
          variant="default"
          size="small"
          :selected="selectedRange === 'week'"
          :disabled="loading || loadingDelayed"
          @click="selectedRange = 'week'"
        >
          Week
        </gl-button>
        <gl-button
          category="secondary"
          variant="default"
          size="small"
          :selected="selectedRange === 'months'"
          :disabled="loading || loadingDelayed"
          @click="selectedRange = 'months'"
        >
          Months
        </gl-button>
      </gl-button-group>
    </template>
    <template #body>
      <gl-line-chart :data="currentChartData" :option="$options.chartOptions" />
    </template>
  `),
});
ChartWithFilters.args = {
  ...Default.args,
  title: 'Dashboard panel with filters and example visualization',
};

export const ChartWithFiltersAndActions = ChartWithFilters.bind({});
ChartWithFiltersAndActions.args = {
  ...ChartWithFilters.args,
  actions: [
    {
      text: 'Delete',
      icon: 'remove',
      action: () => {},
    },
  ],
  title: 'Dashboard panel with filters, actions and example visualization',
};

export const WithBorderColor = Template.bind({});
WithBorderColor.args = {
  ...Default.args,
  borderColorClass: 'gl-border-t-blue-500',
};

export const WithTitleIcon = Template.bind({});
WithTitleIcon.args = {
  ...Default.args,
  titleIcon: 'error',
  titleIconClass: 'gl-text-red-500',
};

export const WithLongTitle = PopoverTemplate.bind({});
WithLongTitle.args = {
  ...Default.args,
  containerClass: 'gl-max-w-48',
  title:
    'Very long title that will be truncated and the tooltip will be displayed to reveal the full text.',
};

export const WithAlertMessage = (args, { argTypes }) => ({
  components: { GlDashboardPanel, GlLineChart, GlIcon, GlPopover, GlLink },
  props: Object.keys(argTypes),
  ...chartProps,
  template: wrap(
    `
    <template #body>
      <span data-testid="alert-body" class="gl-text-subtle">
        Something went wrong.
      </span>
    </template>
    ${alertMessageSlot}`,
    // Margin top added to give space for the alert popover
    marginTop,
  ),
});
WithAlertMessage.args = {
  ...Default.args,
  borderColorClass: 'gl-border-t-red-500',
  titleIcon: 'error',
  titleIconClass: 'gl-text-red-500',
};
