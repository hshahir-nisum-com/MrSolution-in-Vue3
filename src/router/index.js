import { createRouter, createWebHistory } from "vue-router";
import index from "../views/index";
import myfashion from "../views/fashion";

const routes = [
  {
    path: "/",
    name: "index",
    component: index,
  },
  {
    path: "/fashion",
    name: "fashion",
    component: myfashion,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
