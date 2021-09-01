import { getDefaultFrontmatter } from './state';

const resetFrontmatter = (state) => {
  state.frontmatter = getDefaultFrontmatter();
};

const setFrontmatter = (state, frontmatter) => {
  state.frontmatter = frontmatter;
};

export const toggleSidebar = (state) => {
  state.sidebarOpen = !state.sidebarOpen;
};

export const closeSidebar = (state) => {
  state.sidebarOpen = false;
};

export default {
  resetFrontmatter,
  setFrontmatter,
  toggleSidebar,
  closeSidebar,
};
