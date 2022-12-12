import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home/routes";
import Dashboard from "@/views/Dashboard/routes";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...Home, ...Dashboard],
});

export default router;
