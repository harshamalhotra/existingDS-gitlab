import { getUniquePanelId } from './utils';

export const createVisualization = () => ({
  version: 1,
  type: 'LineChart',
  slug: 'test_visualization',
  data: {
    type: 'cube_analytics',
    query: {
      measures: ['TrackedEvents.count'],
      timeDimensions: [
        {
          dimension: 'TrackedEvents.utcTime',
          granularity: 'day',
        },
      ],
      limit: 100,
      timezone: 'UTC',
      filters: [],
      dimensions: [],
    },
  },
});

export const dashboard = {
  id: 'analytics_overview',
  slug: 'analytics_overview',
  title: 'Analytics Overview',
  description: 'This is a dashboard',
  userDefined: true,
  panels: [
    {
      title: 'Test A',
      gridAttributes: { width: 3, height: 3 },
      visualization: createVisualization(),
      id: getUniquePanelId(),
    },
    {
      title: 'Test B',
      gridAttributes: { width: 2, height: 4, minHeight: 2, minWidth: 2 },
      visualization: createVisualization(),
      id: getUniquePanelId(),
    },
  ],
  status: null,
  errors: null,
};

export const mockPanel = {
  title: 'Test A',
  gridAttributes: {
    width: 1,
    height: 2,
    xPos: 0,
    yPos: 3,
    minWidth: 1,
    minHeight: 2,
    maxWidth: 1,
    maxHeight: 2,
  },
  visualization: createVisualization(),
  id: getUniquePanelId(),
};
