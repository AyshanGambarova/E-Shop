import { createRouter, createWebHistory } from "vue-router";
import Login from "@/views/Auth/Login/routes";
import Dashboard from "@/views/Dashboard/routes";

const routes = [...Login, ...Dashboard]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.meta.needsToken
  let haveToken: boolean = localStorage.getItem('token') != null

  if (requiresAuth && !haveToken) {
    next('/login')
  } else if (!requiresAuth && haveToken) {
    next('/products')
  } else if (!('needsToken' in to.meta)) {
    next('/login')
  } else {
    next()
  }

})
export default router;
