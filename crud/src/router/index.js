import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import About from "../views/About.vue";
import Users from "../views/Users.vue";
import Alerts from "../views/Alerts.vue";
import Images from "../views/Images.vue";
import Clientes from "../views/Clientes.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: About,
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
    path: "/images",
    name: "images",
    component: Images,
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
