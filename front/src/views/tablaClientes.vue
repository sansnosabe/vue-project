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
    this.listUsers();
  },
  data() {
    return {
      titulo: "TABLA CLIENTES",
      cabecera: [
        { text: "ID", value: "id" },
        { text: "Nombre", value: "name" },
        { text: "Edad", value: "age" },
        { text: "Profesión", value: "profession" },
        { text: "Acciones", value: "actions" },
      ],
    };
  },
  methods: {
    ...mapActions("clientes", ["listUsers"]),
  },
  computed: {
    ...mapGetters("clientes", ["items"]),
  },
};
</script>
