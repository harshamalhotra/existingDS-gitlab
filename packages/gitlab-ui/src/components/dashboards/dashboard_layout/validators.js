export const dashboardConfigValidator = (config) => {
  if (config.panels) {
    if (!Array.isArray(config.panels)) return false;
    if (!config.panels.every((panel) => panel.id && panel.gridAttributes)) return false;
  }

  return true;
};
