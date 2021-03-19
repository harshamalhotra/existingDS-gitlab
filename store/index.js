const defaultFrontmatter = Object.freeze({
  attributes: {},
  body: '',
  lastUpdatedAt: '',
});

export const state = () => ({
  frontmatter: defaultFrontmatter,
});

export const mutations = {
  resetFrontmatter(s) {
    s.frontmatter = defaultFrontmatter;
  },
  setFrontmatter(s, frontmatter) {
    s.frontmatter = frontmatter;
  },
};
