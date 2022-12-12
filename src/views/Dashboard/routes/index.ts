import Dashboard from "../index.vue";
import Users from "../views/Users/routes";
import Products from "../views/Products/routes";
import ProductInfo from "../views/Products/views/ProductInfo/routes";

export default [
  {
    path: "/",
    name: "dashboard",
    component: Dashboard,
    children: [...Users, ...Products,...ProductInfo],
    meta: {
      needsToken: true,
    },
  },
];
