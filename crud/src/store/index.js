import Vue from "vue";
import Vuex from "vuex";
import images from "./images";
import clientes from "./clientes";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    images,
    clientes,
  },
});
