import ProductInfo from "../index.vue";

export default [
  {
    path: "/products/:id",
    name: "product",
    component: ProductInfo,
    meta: {
      needsToken: true,
    },
  },
];
