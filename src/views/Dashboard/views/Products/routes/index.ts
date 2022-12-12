import Products from "../index.vue";

export default [
  {
    path: "/products",
    name: "products",
    component: Products,
    meta: {
      needsToken: true,
    },
  },
];
