import Dashboard from "../index.vue";
import Users from "../views/Users/routes";
import Products from "../views/Products/routes";
import ProductInfo from "../views/Products/views/ProductInfo/routes";
import UserInfo from "../views/Users/views/UserInfo/routes";
import ShoppingCart from "../views/Products/views/ShoppingCart/routes";

export default [
  {
    path: "/",
    name: "dashboard",
    component: Dashboard,
    children: [...Users, ...Products,...ProductInfo,...UserInfo,...ShoppingCart],
    meta: {
      needsToken: true,
    },
  },
];
