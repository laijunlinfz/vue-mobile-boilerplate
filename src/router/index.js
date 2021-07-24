import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import(/* webpackChunkName: "about" */ "../views/home/index.vue"),
  },
  {
    path: "/test",
    name: "Test",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "test" */ "../views/test/index.vue"),
  },
  {
    path: "/vue2",
    name: "Vue2",
    component: () => import(/* webpackChunkName: "vue2" */ "../views/vue2/index.vue"),
  },
  {
    path: "/vue3",
    name: "Vue3",
    component: () => import(/* webpackChunkName: "vue3" */ "../views/vue3/index.vue"),
  },
  {
    path: "/login",
    name: "Loign",
    component: () => import(/* webpackChunkName: "login" */ "../views/login/index.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
