export default ({ store }) => {
  if (process.client) {
    store.dispatch('mode/loadDarkMode');
  }
};
