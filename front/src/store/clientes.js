import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const apiUrl = process.env.VUE_APP_API_URL;

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
    listUsers: async function ({ commit }) {
      try {
        const setting = {
          method: "GET",
        };
        const url = `${apiUrl}/api/users`;
        const data = await fetch(url, setting);
        const json = await data.json();
        const usersJson = await json.data.users;

        const usersWithAvatar = usersJson.map((user) => {
          return {
            ...user,
            avatar: `https://avatars.dicebear.com/api/avataaars/${user.id}.svg`,
          };
        });

        commit("LlenarItems", usersWithAvatar);
      } catch (err) {
        console.error(err);
      }
    },
    createUserAction: async function ({ commit, dispatch }, datos) {
      try {
        const setting = {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(datos),
        };
        const url = `${apiUrl}/api/users`;
        const response = await fetch(url, setting);
        const json = await response.json();
        dispatch("listUsers");
      } catch (e) {
        console.error(e);
      }
    },
    editUserAction: async function ({ commit, dispatch }, datos) {
      try {
        const setting = {
          method: "PUT",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(datos),
        };
        const url = `${apiUrl}/api/user`;
        const response = await fetch(url, setting);
        const json = await response.json();
        dispatch("listUsers");
      } catch (e) {
        console.error(e);
      }
    },
    deleteUserAction: async function ({ dispatch }, id) {
      try {
        const setting = {
          method: "DELETE",
        };
        const url = `${apiUrl}/api/user/${id}`;
        const response = await fetch(url, setting);
        const json = await response.json();
        dispatch("listUsers");
      } catch (e) {
        console.error(e);
      }
    },
  },
};
