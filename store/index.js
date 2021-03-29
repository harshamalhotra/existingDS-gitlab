const getDefaultFrontmatter = () => ({
  attributes: {},
  body: '',
  lastUpdatedAt: '',
});

export const state = () => ({
  frontmatter: getDefaultFrontmatter(),
});

export const mutations = {
  resetFrontmatter(currentState) {
    currentState.frontmatter = getDefaultFrontmatter();
  },
  setFrontmatter(currentState, frontmatter) {
    currentState.frontmatter = frontmatter;
  },
};
