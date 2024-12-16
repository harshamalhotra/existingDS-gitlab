// eslint-disable-next-line import/no-default-export
export default ({ store }) => {
  if (process.client) {
    store.dispatch('mode/loadDarkMode');
  }
};
