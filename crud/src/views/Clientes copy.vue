<template>
  <div>
    <tabla :titulo="titulo" :cabecera="cabecera" :items="items" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import tabla from "@/components/tabla.vue";

export default {
  name: "clientes",
  components: {
    tabla,
  },
  created() {
    this.cargarClientes();
    // this.eliminarCliente(id);
  },
  data() {
    return {
      titulo: "CLIENTES",
      cabecera: [
        { text: "ID", value: "id" },
        { text: "Nombre", value: "name" },
        { text: "Edad", value: "age" },
        { text: "Profesión", value: "profession" },
        { text: "Acciones", value: "actions" },

      ],
      items: [],
    };
  },
  methods: {
    ...mapGetters
    // cargarClientes: async function () {
    //   try {
    //     const setting = {
    //       method: "GET",
    //     };
    //     const url = "http://localhost:4000/api/users";
    //     const data = await fetch(url, setting);
    //     const json = await data.json();
    //     this.items = json.data.users;
    //   } catch (e) {
    //     console.error(e);
    //   }
    // },
    // eliminarCliente: async function ({commit, dispatch}, id) {
    //   console.log("holaaaaaaaaaa", id);
    //   try {
    //     const setting = {
    //       method: "DELETE",
    //       headers: {
    //         'Content-type': 'application/json'
    //       }
    //     };
    //     console.log("iddddddddddddddddddddddddd", id)
    //     const url = `http://localhost:4000/api/user/${id}`;
    //     const response = await fetch(url, setting);
    //     const json = await response.json();

    //     if (json.code === 200) {
    //       console.log('El cliente fue eliminado exitosamente');
    //       dispatch('CargarClientes');
    //     } else {
    //       console.error(json.message);
    //     }
    //   } catch (e) {
    //     console.error(e);
    //   }
    // },
  },
};
</script>
