// src/features/auth/authSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../utils/api";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_BASE_URL_DEPLOY;

// Async thunks

export const initializeAuth = createAsyncThunk(
  "auth/initialize",
  async (_, { dispatch }) => {
    const tokens = JSON.parse(localStorage.getItem("tokens"));
    if (!tokens) return null;

    try {
      // Verify token validity
      await dispatch(refreshToken(tokens.refresh)).unwrap();
      return tokens;
    } catch (error) {
      localStorage.removeItem("tokens");
      return null;
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await api.post(`api/login/`, credentials, {
        headers: {
          'Content-Type': 'application/json',
        }
      });
      
      if (!response.data.access) {
        throw new Error('Invalid server response');
      }
      
      localStorage.setItem("tokens", JSON.stringify(response.data));
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || { detail: "Login failed" });
    }
  }
);

export const register = createAsyncThunk(
  "auth/register",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await api.post(`api/register/`, userData, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(
        console.log(error),
        error.response?.data || { detail: 'Registration failed' }
      );
    }
  }
);

// Updated logout thunk in authSlice.js
export const logout = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens")); // Parse JSON
      
      if (!tokens?.refresh) {
        throw new Error("No refresh token available");
      }

      await axios.post(
        `${BASE_URL}/api/logout/`, 
        { refresh: tokens.refresh },  // Match backend expectation
        {
          headers: {
            'Authorization': `Bearer ${tokens.access}`,
            'Content-Type': 'application/json',
          }
        }
      );
      
      localStorage.removeItem("tokens");
      return null;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Logout failed');
    }
  }
);

// Modified refresh token thunk
export const refreshToken1 = createAsyncThunk(
  "auth/refreshToken",
  async (refresh, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${BASE_URL}api/token/refresh/`, {
        refresh,
      });
      const newTokens = { ...response.data };
      localStorage.setItem("tokens", JSON.stringify(newTokens));
      return newTokens;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// authSlice.js - Update refreshToken thunk
export const refreshToken = createAsyncThunk(
  "auth/refreshToken",
  async (_, { rejectWithValue }) => {
      try {
          const tokens = JSON.parse(localStorage.getItem("tokens"));
          const response = await axios.post(
              `${BASE_URL}api/token/refresh/`,
              { refresh: tokens?.refresh }
          );
          const newTokens = response.data;
          localStorage.setItem("tokens", JSON.stringify(newTokens));
          return newTokens;
      } catch (error) {
          localStorage.removeItem("tokens");
          return rejectWithValue(error.response?.data);
      }
  }
);

const initialState = {
  user: null,
  tokens: JSON.parse(localStorage.getItem("tokens")) || null,
  isAuthenticated: !!localStorage.getItem("tokens"),
  loading: true,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
    setError: (state, action) => {
      state.error = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      // Login
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.tokens = action.payload;
        state.user = {
          id: action.payload.user_id,
          email: action.payload.email,
          role: action.payload.role,
          // Add other user properties
        };
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.detail || 'Login failed. Please check your credentials.';
      })
      // Register
      .addCase(register.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(register.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Logout
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
        state.tokens = null;
        state.isAuthenticated = false;
      })
      .addCase(initializeAuth.pending, (state) => {
        state.loading = true;
      })
      .addCase(initializeAuth.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = !!action.payload;
      })
      .addCase(initializeAuth.rejected, (state) => {
        state.loading = false;
        state.isAuthenticated = false;
      })
      // Refresh Token
      .addCase(refreshToken.fulfilled, (state, action) => {
        state.tokens = action.payload;
      });
  },
});

export const { clearError, setError } = authSlice.actions;
export default authSlice.reducer;
