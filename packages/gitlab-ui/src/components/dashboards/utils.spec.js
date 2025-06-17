import { getPanelGridItemConfig, getUniquePanelId } from './utils';
import { mockPanel } from './mock_data';

describe('getPanelGridItemConfig', () => {
  it('parses all panel configs to GridStack format', () => {
    const { gridAttributes } = mockPanel;

    expect(getPanelGridItemConfig(mockPanel)).toStrictEqual({
      x: gridAttributes.xPos,
      y: gridAttributes.yPos,
      w: gridAttributes.width,
      h: gridAttributes.height,
      minH: gridAttributes.minHeight,
      minW: gridAttributes.minWidth,
      maxH: gridAttributes.maxHeight,
      maxW: gridAttributes.maxWidth,
      id: mockPanel.id,
    });
  });

  it('filters out props with undefined values', () => {
    const local = { ...mockPanel };
    local.id = undefined;

    expect(Object.keys(getPanelGridItemConfig(local))).not.toContain('id');
  });
});

describe('getUniquePanelId', () => {
  it('returns an ID value prefixed with `panel-`', () => {
    expect(getUniquePanelId()).toMatch(/panel-(\d+)/);
  });
});
