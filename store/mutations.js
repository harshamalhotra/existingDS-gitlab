import { getDefaultFrontmatter } from './state';

const resetFrontmatter = (state) => {
  state.frontmatter = getDefaultFrontmatter();
};

const setFrontmatter = (state, frontmatter) => {
  state.frontmatter = frontmatter;
};

const setActiveNavItem = (state, navItem) => {
  state.activeNavItem = navItem;
};

const toggleActiveNavItem = (state, navItem) => {
  if (!navItem) {
    setActiveNavItem(state, '');
  }

  if (state.activeNavItem.startsWith(navItem)) {
    setActiveNavItem(state, '');
  } else {
    setActiveNavItem(state, navItem);
  }
};

export default { resetFrontmatter, setFrontmatter, setActiveNavItem, toggleActiveNavItem };
