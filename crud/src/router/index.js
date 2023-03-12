import Vue from "vue";
import VueRouter from "vue-router";
import Clientes from "../views/Clientes.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "clientes",
    component: Clientes,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
