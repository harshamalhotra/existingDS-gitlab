export default {
  toggleActiveNavItem({ state: { activeNavItem }, commit }, navItem) {
    if (activeNavItem.startsWith(navItem)) {
      commit('setActiveNavItem', '');
    } else {
      commit('setActiveNavItem', navItem);
    }
  },
};
