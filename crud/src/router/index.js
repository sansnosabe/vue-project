import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Users from "../views/Users.vue";
import Alerts from "../views/Alerts.vue";
import Clientes from "../views/Clientes.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/users/:id",
    name: "users",
    component: Users,
  },
  {
    path: "/alerts",
    name: "alerts",
    component: Alerts,
  },
  {
    path: "/clientes",
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
