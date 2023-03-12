import Vue from "vue";
import VueRouter from "vue-router";
import clientes from "../views/clientes.vue";
import cardsClientes from "../views/cardsClientes.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: cardsClientes,
  },
  {
    path: "/clientes",
    name: "clientes",
    component: clientes,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
