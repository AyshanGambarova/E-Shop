import axios from "axios";

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
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default instance;
