import { GlBarChart } from '../../../charts';
import { makeContainer } from '../../../utils/story_decorators/container';

const Template = (args, { argTypes }) => ({
  components: { GlBarChart },
  props: Object.keys(argTypes),
  template: `
    <gl-bar-chart
      :data="data"
      :option="option"
      :y-axis-title="yAxisTitle"
      :x-axis-title="xAxisTitle"
      :x-axis-type="xAxisType"
      :height="height"
      :presentation="presentation"
    />
  `,
});

const mockData = {
  Office: [
    [100, 'Jim'],
    [210, 'Dwight'],
    [300, 'Pam'],
    [340, 'Ryan'],
    [130, 'Kelly'],
    [50, 'David'],
    [90, 'Mike'],
    [10, 'Andy'],
    [50, 'Stanley'],
    [30, 'Erin'],
  ],
};

const mockMultipleSeriesData = {
  ...mockData,
  'Dunder Mifflin': [
    [285, 'Jim'],
    [420, 'Dwight'],
    [195, 'Pam'],
    [75, 'Ryan'],
    [160, 'Kelly'],
    [380, 'David'],
    [240, 'Mike'],
    [85, 'Andy'],
    [310, 'Stanley'],
    [145, 'Erin'],
  ],
};

const generateProps = ({
  data = mockData,
  option = {},
  xAxisTitle = 'Pushes per day',
  yAxisTitle = 'User',
  xAxisType = 'value',
  height = null,
  presentation,
} = {}) => ({
  data,
  option,
  xAxisTitle,
  yAxisTitle,
  xAxisType,
  height,
  presentation,
});

export const Default = Template.bind({});
Default.args = generateProps();

export const AutoHeight = Template.bind({});
Object.assign(AutoHeight, {
  args: generateProps({
    height: 'auto',
  }),
  decorators: [makeContainer({ height: '600px' })],
});

export const Stacked = Template.bind({});
Object.assign(Stacked, {
  args: generateProps({
    data: mockMultipleSeriesData,
  }),
});

export const Tiled = Template.bind({});
Object.assign(Tiled, {
  args: generateProps({
    data: mockMultipleSeriesData,
    presentation: 'tiled',
  }),
});

export default {
  title: 'charts/bar-chart',
  component: GlBarChart,
};
