import Axios, { AxiosResponse } from "axios";
import { authAPI } from "./authApi";

export const baseURL = process.env.REACT_APP_API_URL;
export const instance: any = Axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.response.use(
  function (response: any) {
    return response;
  },
  async function (error: any) {
    if (error?.response?.status === 429) {
      return error.response;
    }
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const refreshToken = localStorage.getItem("refresh-token") ?? "";
      const response = (await authAPI.refreshToken(
        refreshToken
      )) as AxiosResponse;
      if (response.status === 200) {
        const { access } = response.data;
        localStorage.setItem("access-token", access);
        originalRequest.headers["Authorization"] = "Bearer " + access;
        return Axios(originalRequest);
      }
    }
    return Promise.reject(error.response);
  }
);

export const setAxiosToken = (token: string) => {
  instance.defaults.headers.Authorization = "Bearer " + token;
};

export { authAPI };
