// src/services/api/authApi.ts
import axios from "axios";
import { clearAuthCookies } from "./tokenUtils";

const BASE_URL = `${process.env.NEXT_PUBLIC_API_URL}/api/v1`;

// 🔑 Refresh access token (server sets new cookie)
export const refreshAccessToken = async (): Promise<boolean> => {
  try {
    const response = await axios.post(
      `${BASE_URL}/auth/refresh`,
      {},
      { withCredentials: true }
    );
    return response.status === 200;
  } catch (error) {
    console.log("Failed to refresh access token:", error);
    clearAuthCookies();
    return false;
  }
};

// 🧍 Login API — backend should set `access_token` and `refresh_token` cookies
export const login = async (payload: { email: string; password: string }) => {
  return axios.post(`${BASE_URL}/auth/login`, payload, {
    withCredentials: true,
  });
};

// ✨ Signup API — should NOT use axiosInstance
export const signup = async (payload: {
  fullname: string;
  email: string;
  password: string;
}) => {
  return axios.post(`${BASE_URL}/auth/register`, payload, {
    withCredentials: true, // if backend sets cookies on signup (optional)
  });
};

// ✨ Verify email API — should NOT use axiosInstance
export const verifyEmail = async (payload: { email: string; otp: string }) => {
  return axios.post(`${BASE_URL}/auth/verify-email`, payload, {
    withCredentials: true, // if backend sets cookies on signup (optional)
  });
};

// ✨ Resent email verification API — should NOT use axiosInstance
export const resentEmailVerification = async (payload: { email: string }) => {
  return axios.post(
    `${BASE_URL}/auth/resend-email-verification?type=email-verification`,
    payload
  );
};

// ✨ Forgot password API — should NOT use axiosInstance
export const forgotPassword = async (payload: { email: string }) => {
  return axios.post(`${BASE_URL}/auth/forgot-password`, payload);
};

// ✨ Reset password API — should NOT use axiosInstance
export const resetPassword = async (payload: {
  email: string;
  otp: string;
  password: string;
}) => {
  return axios.post(`${BASE_URL}/auth/reset-password`, payload);
};

// 🚪 Logout API — clears cookies server-side
export const logout = async () => {
  try {
    await axios.post(`${BASE_URL}/auth/logout`, {}, { withCredentials: true });
    clearAuthCookies();
  } catch {
    clearAuthCookies();
  }
};
