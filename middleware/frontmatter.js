// eslint-disable-next-line import/no-default-export
export default async function frontmatterMiddleware(context) {
  const { route, store } = context;
  const { path } = route;
  const mdFile = path.replace(new RegExp(`/${route.params.tab}/?`), '');
  try {
    const { default: frontmatter } = await import(`~/static/contents${mdFile}.json`);
    store.commit('setFrontmatter', frontmatter);
  } catch {
    store.commit('resetFrontmatter');
  }
}
