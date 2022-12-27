import $http from "../../utils/interceptors/index";

export async function apiProducts(skipNumber: number, limitNumber: number) {
  return await $http({
    method: "GET",
    url: `/products`,
    params: {
      skip: skipNumber,
      limit: limitNumber,
    },
  });
}
export async function apiProduct(productId: number) {
  return await $http({
    method: "GET",
    url: `/products/${productId}`
  });
}
