import uniqueId from 'lodash/uniqueId';
import pickBy from 'lodash/pickBy';

const filterUndefinedValues = (obj) => pickBy(obj, (value) => value !== undefined);

/**
 * Parses a dashboard panel config into a GridStack item.
 */
export const getPanelGridItemConfig = ({
  gridAttributes: { xPos, yPos, width, height, minHeight, minWidth, maxHeight, maxWidth },
  id,
}) =>
  // GridStack renders undefined layout values so we need to filter them out.
  filterUndefinedValues({
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

export const getUniquePanelId = () => uniqueId('panel-');
