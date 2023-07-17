import Vue from "vue";
import VueRouter from "vue-router";
import tablaClientes from "../views/tablaClientes.vue";
import cardsClientes from "../views/cardsClientes.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "tarjetas",
    component: cardsClientes,
  },
  {
    path: "/tabla",
    name: "tabla",
    component: tablaClientes,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
