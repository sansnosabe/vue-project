<template>
  <div>
    <cards :titulo="titulo" :items="items" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import cards from "@/components/cards.vue";

export default {
  name: "clientes",
  components: {
    cards,
  },
  created() {
    this.listUsers();
  },
  data() {
    return {
      titulo: "CLIENTES",
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
