import ShoppingCart from "../index.vue";

export default [
  {
    path: "/cart",
    name: "cart",
    component: ShoppingCart,
    meta: {
      needsToken: true,
    },
  },
];
