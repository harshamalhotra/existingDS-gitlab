export const toggleSidebar = (state) => {
  state.sidebarOpen = !state.sidebarOpen;
};

export const closeSidebar = (state) => {
  state.sidebarOpen = false;
};

export default {
  toggleSidebar,
  closeSidebar,
};
