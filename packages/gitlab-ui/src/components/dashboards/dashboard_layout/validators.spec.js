import { dashboard, mockPanel } from '../mock_data';
import { dashboardConfigValidator } from './validators';

describe('dashboardConfigValidator', () => {
  const dashboardNoTitle = { ...dashboard, title: undefined };
  const dashboardNoDesc = { ...dashboard, description: undefined };
  const dashboardNoPanel = { ...dashboard, panels: undefined };
  const dashboardNoPanelId = { ...dashboard, panels: [{ ...mockPanel, id: undefined }] };
  const dashboardNoPanelGridAttrs = {
    ...dashboard,
    panels: [{ ...mockPanel, gridAttributes: undefined }],
  };

  it.each`
    scenario                       | config                       | expected
    ${'dashboard'}                 | ${dashboard}                 | ${true}
    ${'dashboardNoTitle'}          | ${dashboardNoTitle}          | ${true}
    ${'dashboardNoDesc'}           | ${dashboardNoDesc}           | ${true}
    ${'dashboardNoPanel'}          | ${dashboardNoPanel}          | ${true}
    ${'dashboardNoPanelId'}        | ${dashboardNoPanelId}        | ${false}
    ${'dashboardNoPanelGridAttrs'} | ${dashboardNoPanelGridAttrs} | ${false}
  `('returns $expected when config is $scenario', ({ config, expected }) => {
    const result = dashboardConfigValidator(config);

    expect(result).toBe(expected);
  });
});
