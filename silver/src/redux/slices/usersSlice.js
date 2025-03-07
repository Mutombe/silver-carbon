import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../utils/api";

// Async thunks
export const fetchUsers = createAsyncThunk(
  "adminUsers/fetchUsers",
  async (params = {}, { rejectWithValue }) => {
    try {
      const queryParams = new URLSearchParams();
      if (params.search) queryParams.append("search", params.search);
      if (params.role) queryParams.append("role", params.role);
      if (params.status) queryParams.append("status", params.status);

      const response = await api.get(`/users/?${queryParams.toString()}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || { detail: "Failed to fetch users" }
      );
    }
  }
);

export const toggleUserActive = createAsyncThunk(
  "adminUsers/toggleUserActive",
  async (userId, { rejectWithValue }) => {
    try {
      const response = await api.patch(`/users/${userId}/toggle_active/`);
      return { userId, isActive: response.data.is_active };
    } catch (error) {
      return rejectWithValue(
        error.response?.data || { detail: "Failed to update user status" }
      );
    }
  }
);

export const changeUserRole = createAsyncThunk(
  "adminUsers/changeUserRole",
  async ({ userId, role }, { rejectWithValue }) => {
    try {
      const response = await api.patch(`/users/${userId}/change_role/`, { role });
      return { userId, role: response.data.role };
    } catch (error) {
      return rejectWithValue(
        error.response?.data || { detail: "Failed to update user role" }
      );
    }
  }
);

const initialState = {
  users: [],
  loading: false,
  error: null,
  filters: {
    search: "",
    role: "",
    status: "",
  },
};

const adminUsersSlice = createSlice({
  name: "adminUsers",
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filters = {
        ...state.filters,
        ...action.payload,
      };
    },
    clearFilters: (state) => {
      state.filters = {
        search: "",
        role: "",
        status: "",
      };
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch Users
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || { detail: "Failed to fetch users" };
      })
      // Toggle User Active
      .addCase(toggleUserActive.pending, (state) => {
        state.error = null;
      })
      .addCase(toggleUserActive.fulfilled, (state, action) => {
        const { userId, isActive } = action.payload;
        const userIndex = state.users.findIndex((user) => user.id === userId);
        if (userIndex !== -1) {
          state.users[userIndex].is_active = isActive;
        }
      })
      .addCase(toggleUserActive.rejected, (state, action) => {
        state.error = action.payload;
      })
      // Change User Role
      .addCase(changeUserRole.pending, (state) => {
        state.error = null;
      })
      .addCase(changeUserRole.fulfilled, (state, action) => {
        const { userId, role } = action.payload;
        const userIndex = state.users.findIndex((user) => user.id === userId);
        if (userIndex !== -1) {
          state.users[userIndex].role = role;
        }
      })
      .addCase(changeUserRole.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export const { setFilter, clearFilters, clearError } = adminUsersSlice.actions;
export default adminUsersSlice.reducer;