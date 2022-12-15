import axios from "axios";
import store from '@/store'

const axiosConfig = {
  baseURL: "https://dummyjson.com",
};

const instance = axios.create(axiosConfig);

instance.interceptors.request.use(
  function (config: any) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function (response) {
    if (response.data.limit && response.data.total) {
      const { total,limit } = response.data;
      const paginationOptions = {
        limit,
        total
      };
      store.commit('pagination/SET_PAGINATION_OPTIONS', paginationOptions)
    }

    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default instance;
