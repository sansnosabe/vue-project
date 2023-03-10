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
		LlenarItems(state, data) {
			state.items = data;
		},
	},
	actions: {
		cargarClientes: async function ({ commit }) {
			try {
				const setting = {
					method: "GET",
				};
				const url = "http://localhost:4000/api/users";
				const data = await fetch(url, setting);
				const json = await data.json();
				const usersJson = await json.data;
				commit("LlenarItems", usersJson);
			} catch (err) {
				console.error(err);
			}
		},
		eliminarCliente: async function ({dispatch}, id) {
			try {
				const setting = {
					method: "DELETE",
				};
				const url = `http://localhost:4000/api/user/${id}`;
				const response = await fetch(url, setting);
				const json = await response.json();
				dispatch("cargarClientes");
			} catch (e) {
				console.error(e);
			}
		},
	},
};
