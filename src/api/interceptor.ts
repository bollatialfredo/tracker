import axios, { AxiosRequestConfig } from "axios";
import { useStore } from "../stores/main";

export const apiInterceptor = function (): any {
  const store = useStore();
  axios.interceptors.request.use(
    function (config: AxiosRequestConfig) {
      const token = 'a demo token';
      if (token && config.headers && !config.headers.Authorization) {
        config.headers.Authorization = `Bearer ${token}`;
        store.startLoading();
      } else {
        // DO Nothing
      }
      return config;
    },
    function (err) {
      return Promise.reject(err);
    }
  );
  axios.interceptors.response.use(
    function (response) {
      store.stopLoading();
      return response;
    },
    function (error) {
      store.stopLoading();
      return Promise.reject(error);
    }
  );
  //axios.interceptors.r
};
