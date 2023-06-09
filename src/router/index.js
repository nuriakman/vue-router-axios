import { createRouter, createWebHistory } from "vue-router";
// import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      alias: "/home",
      name: "home",
      // component: HomeView
      component: () => import("@/views/HomeView.vue"),
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("@/views/AboutView.vue"),
    },
    {
      path: "/users/:userId/posts",
      name: "userposts",
      props: true,
      component: () => import("@/views/UserPostsView.vue"),
    },
    {
      path: "/users",
      name: "users",
      component: () => import("@/views/UsersView.vue"),
    },
    {
      path: "/SeatPlan",
      name: "SeatPlan",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("@/views/SeatPlanView.vue"),
    },
  ],
});

export default router;
