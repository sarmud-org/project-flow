// src/services/api/axiosInstance.ts
import axios, {
  AxiosError,
  AxiosInstance,
  InternalAxiosRequestConfig,
  AxiosResponse,
} from "axios";

import { refreshAccessToken } from "./authApi";
import { clearAuthCookies } from "./tokenUtils";

let isRefreshing = false;
let refreshSubscribers: ((token: string) => void)[] = [];

const onTokenRefreshed = (token: string) => {
  refreshSubscribers.forEach((cb) => cb(token));
  refreshSubscribers = [];
};

const addRefreshSubscriber = (cb: (token: string) => void) => {
  refreshSubscribers.push(cb);
};

const api: AxiosInstance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_UR}/api/v1`,
  withCredentials: true,
  headers: { "Content-Type": "application/json" },
});

/* ===========================================================
    REQUEST INTERCEPTOR  (⚡ FIXED TYPES)
=========================================================== */
api.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    // Nothing to attach manually because cookies auto-send
    return config;
  },
  (error: AxiosError) => Promise.reject(error)
);

/* ===========================================================
    RESPONSE INTERCEPTOR (⚡ FIXED TYPES)
=========================================================== */
api.interceptors.response.use(
  (response: AxiosResponse) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config as InternalAxiosRequestConfig & {
      _retry?: boolean;
    };

    if (error.response?.status === 401 && !originalRequest._retry) {
      if (isRefreshing) {
        return new Promise((resolve) => {
          addRefreshSubscriber(() => resolve(api(originalRequest)));
        });
      }

      originalRequest._retry = true;
      isRefreshing = true;

      try {
        const success = await refreshAccessToken();

        if (success) {
          onTokenRefreshed("refreshed");
          return api(originalRequest); // retry request
        } else {
          clearAuthCookies();
          if (typeof window !== "undefined") window.location.href = "/login";
          return Promise.reject(error);
        }
      } catch (err) {
        clearAuthCookies();
        if (typeof window !== "undefined") window.location.href = "/login";
        return Promise.reject(err);
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  }
);

export default api;
