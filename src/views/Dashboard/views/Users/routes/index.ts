import Users from "../index.vue";

export default [
  {
    path: "/users",
    name: "users",
    component: Users,
    meta: {
      needsToken: true,
    },
  },
];
