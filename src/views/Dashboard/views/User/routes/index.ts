import User from "../index.vue";

export default [
  {
    path: "/user",
    name: "user",
    component: User,
    meta: {
      needsToken: true,
    },
  },
];
