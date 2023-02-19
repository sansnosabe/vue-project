<template>
  <div>
    <tabla :titulo="titulo" :cabecera="cabecera" :items="items" />
  </div>
</template>

<script>
import tabla from "@/components/tabla.vue";

export default {
  name: "clientes",
  components: {
    tabla,
  },
  created() {
    this.cargarClientes();
  },
  data() {
    return {
      titulo: "Clientes",
      cabecera: [
        { text: "ID", value: "id" },
        { text: "Nombre", value: "name" },
        { text: "Edad", value: "age" },
        { text: "Profesión", value: "profession" },
      ],
      items: [],
    };
  },
  methods: {
    cargarClientes: async function () {
      try {
        const setting = {
          method: "GET",
        };
        const url = "http://localhost:4000/api/users";
        const data = await fetch(url, setting);
        const json = await data.json();
        this.items = json.data.users;
      } catch (e) {
        console.error(e);
      }
    },
  },
};
</script>
