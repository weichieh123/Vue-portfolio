import { createStore } from 'vuex';

export default createStore({
  state: {
    isOpen: false,
  },
  getters: {
    getIsOpen(state) {
      return state.isOpen;
    },
  },
  mutations: {
    toggleIsOpen(state) {
      state.isOpen = !state.isOpen;
    },
    closeMenu(state) {
      state.isOpen = false;
    },
  },
  actions: {
    toggleIsOpen({ commit }) {
      commit('toggleIsOpen');
    },
    closeMenu({ commit }) {
      commit('closeMenu');
    },
  },
  modules: {},
});
