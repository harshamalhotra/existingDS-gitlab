// eslint-disable-next-line import/no-default-export
export default function navigationMiddleware({ store }) {
  store.commit('closeSidebar');
  if (process.client) {
    document.body.focus();
  }
}
