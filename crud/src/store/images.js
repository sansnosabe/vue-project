import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default {
  namespaced: true,
  state: {
    items: [],
  },
  getters: {
    items(state) {
      return state.items;
    },
  },
  mutations: {
    fillItems(state, data) {
      state.items = data;
    },
  },
  actions: {
    chargeImages: async function ({ commit }) {
      try {
        const setting = {
          method: "GET",
        };
        const url = "https://picsum.photos/v2/list?page=2&limit=100";
        const data = await fetch(url, setting);
        const json = await data.json();
        commit("fillItems", json);
      } catch (e) {
        console.error(e);
      }
    },
  },
  modules: {},
};
