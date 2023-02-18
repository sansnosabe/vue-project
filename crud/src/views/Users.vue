<template>
  <div>
    <h1 class="text-center mt-5">Esta es la vista de usuario: {{ $route.params.id }}</h1>
    <div class="text-center mt-5">
      <v-pagination v-model="page" :length="6"> </v-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: "users",
  data() {
    return {
      page: 1,
    };
  },
  watch: {
    page() {
      this.$router.push(`/users/${this.page}`);
    },
  },
  methods: {},
};
</script>
