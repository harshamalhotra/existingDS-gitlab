import { shallowMount } from '@vue/test-utils';
import { mockCreateChartInstance } from '~helpers/chart_stubs';
import { expectHeightAutoClasses } from '~helpers/chart_height';
import Chart from '../chart/chart.vue';
import ChartTooltip from '../shared/tooltip/tooltip.vue';
import BarChart from './bar.vue';

let mockChartInstance;

jest.mock('echarts', () => ({
  getInstanceByDom: () => mockChartInstance,
}));

const defaultChartProps = {
  xAxisTitle: 'Pushes per day',
  xAxisType: 'value',
  yAxisTitle: 'User',
  data: {
    Office: [
      [100, 'Scranton Strangler'],
      [300, 'Dwight'],
    ],
  },
};

describe('Bar chart component', () => {
  let wrapper;

  const findChart = () => wrapper.findComponent(Chart);
  const findChartTooltip = () => wrapper.findComponent(ChartTooltip);

  const getOptions = () => findChart().props('options');
  const emitChartCreated = () => findChart().vm.$emit('created', mockChartInstance);

  const createComponent = (props = {}) => {
    wrapper = shallowMount(BarChart, {
      propsData: { ...defaultChartProps, ...props },
    });
  };

  beforeEach(() => {
    mockChartInstance = mockCreateChartInstance();
  });

  describe('when mounted', () => {
    beforeEach(() => {
      createComponent();
    });

    it('should render chart with axis and series', () => {
      const chart = findChart();

      expect(chart.props('options')).toMatchSnapshot();
    });

    it('should not emit created', () => {
      expect(wrapper.emitted('created')).toBeUndefined();
    });
  });

  describe('when mounted and chart has created', () => {
    beforeEach(() => {
      createComponent();
      emitChartCreated();
    });

    it('emits "created" when onCreated is called', () => {
      expect(wrapper.emitted('created')).toEqual([[mockChartInstance]]);
    });

    it('long Y axis labels are ellipsized', () => {
      const { yAxis: { axisLabel: { formatter } } = {} } = getOptions();

      defaultChartProps.data.Office.map(([, name]) => expect(formatter(name)).toMatchSnapshot());
    });

    it('configures chart tooltip', () => {
      expect(findChartTooltip().props()).toMatchObject({
        chart: mockChartInstance,
        useDefaultTooltipFormatter: false,
      });
    });
  });

  describe('when multiple series data provided', () => {
    const multipleSeriesData = {
      ...defaultChartProps.data,
      DunderMifflin: [
        [200, 'Scranton Strangler'],
        [500, 'Dwight'],
      ],
    };

    beforeEach(() => {
      createComponent({ data: multipleSeriesData });
    });

    it('should correctly render chart', () => {
      expect(getOptions()).toMatchSnapshot();
    });

    describe('with tiled presentation', () => {
      beforeEach(() => {
        createComponent({ data: multipleSeriesData, presentation: 'tiled' });
      });

      it('should not stack series', () => {
        getOptions().series.forEach(({ stack }) => {
          expect(stack).toBeNull();
        });
      });
    });
  });

  describe('height', () => {
    expectHeightAutoClasses({
      createComponent,
      findContainer: () => wrapper,
      findChart,
    });
  });
});
