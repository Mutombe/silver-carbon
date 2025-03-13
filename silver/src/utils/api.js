import axios from "axios";

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.withCredentials = true;

const isDevelopment = import.meta.env.MODE === "development";
const baseURL = import.meta.env.VITE_API_BASE_URL_DEPLOY;

const api = axios.create({
  baseURL: baseURL,
  withCredentials: true,
});

// Add request interceptor
api.interceptors.request.use(
  (config) => {
    const tokens = JSON.parse(localStorage.getItem('tokens'));
    if (tokens?.access) {
      config.headers.Authorization = `Bearer ${tokens.access}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;