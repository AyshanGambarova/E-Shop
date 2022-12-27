import $http from "../../utils/interceptors/index";

export async function apiLogin(loginingUser: any) {
  return await $http({
    method: "POST",
    data: loginingUser,
    url: `/auth/login`,
  });
}
