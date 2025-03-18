import axios from "axios";
import { logout } from "@/redux/slices/authSlice";
import { store } from "@/redux/store/store";

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.withCredentials = true;

const baseURL = import.meta.env.VITE_API_BASE_URL_DEPLOY;

const api = axios.create({
  baseURL: baseURL,
  withCredentials: true,
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    const tokens = JSON.parse(localStorage.getItem('tokens'));
    if (tokens?.access) {
      config.headers.Authorization = `Bearer ${tokens.access}`;
    }
    config.headers['Content-Type'] = 'application/json';
    config.withCredentials = true;
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor
api.interceptors.response.use(
  response => response,
  async (error) => {
    const originalRequest = error.config;
    
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      
      try {
        const tokens = JSON.parse(localStorage.getItem('tokens'));
        if (!tokens?.refresh) {
          throw new Error('No refresh token');
        }
        
        // Refresh tokens
        const response = await axios.post(
          `${baseURL}api/token/refresh/`,
          { refresh: tokens.refresh }
        );
        
        const newTokens = response.data;
        localStorage.setItem('tokens', JSON.stringify(newTokens));
        
        // Update Authorization header
        originalRequest.headers.Authorization = `Bearer ${newTokens.access}`;
        
        // Retry original request
        return api(originalRequest);
      } catch (refreshError) {
        // If refresh fails, logout user
        store.dispatch(logout());
        localStorage.removeItem('tokens');
        window.location.href = '/login';
        return Promise.reject(refreshError);
      }
    }
    
    return Promise.reject(error);
  }
);

export default api;