export const getDefaultFrontmatter = () => ({
  attributes: {},
  body: '',
  lastUpdatedAt: '',
});

export default () => ({
  frontmatter: getDefaultFrontmatter(),
});
