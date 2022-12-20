import Login from "../index.vue";

export default [
  {
    path: "/login",
    name: "login",
    component: Login,
    meta: {
      needsToken: false,
    },
  },
];
