import { createRouter, createWebHistory } from "vue-router";
import Index from "@/views/Index.vue";
import ReserveView from "@/views/ReserveView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Index",
      component: Index
    },
    {
      path: "/reserve",
      name: "Reserve",
      component: ReserveView
    }
  ]
});

export default router;
