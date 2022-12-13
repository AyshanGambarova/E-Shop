import UserInfo from "../index.vue";

export default [
  {
    path: "/users/:id",
    name: "user",
    component: UserInfo,
    meta: {
      needsToken: true,
    },
  },
];
