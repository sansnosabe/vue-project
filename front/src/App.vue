<template>
  <v-app>
    <v-app-bar app color="secondary" class="text-light">
      <div class="d-flex align-center">
        <h1 class="mt-2">CRUD</h1>
      </div>
      <v-spacer></v-spacer>
      <v-btn v-for="(item, index) in routes" :key="index" @click="insertRoute(item.route)" text class="text-light">
        <span class="m-2">{{ item.name }}</span>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Footer from "../src/components/footer.vue";

export default {
  name: "App",
  components: {
    Footer,
  },

  data: () => ({
    routes: [
      { name: "Tarjetas", route: "/" },
      { name: "Tabla", route: "/tabla" },
    ],
  }),

  methods: {
    insertRoute(route) {
      this.$router.push(route);
    },
  },
};
</script>
