<template>
	<v-app>
		<v-app-bar app color="secondary" class="text-light">
			<div class="d-flex align-center">
				<h1 class="mt-2">CRUD</h1>
			</div>
			<v-spacer></v-spacer>
			<v-btn v-for="(item, index) in routes" :key="index" @click="insertRoute(item.route)" text class="text-light">
				<span class="mr-2">{{ item.name }}</span>
			</v-btn>
		</v-app-bar>

		<v-main>
			<router-view />
		</v-main>
	</v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    routes: [
      { name: "Home", route: "/" },
      { name: "Clientes", route: "/clientes" },
    ],
  }),

  methods: {
    insertRoute(route) {
      this.$router.push(route);
    },
  },
};
</script>
