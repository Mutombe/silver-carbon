import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import api from '@/utils/api';

// API base URL
const API_URL = '/api/devices/';

// Async thunks
export const fetchDevices = createAsyncThunk(
  'devices/fetchDevices',
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get(API_URL);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const fetchMyDevices = createAsyncThunk(
  'devices/fetchMyDevices',
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get(`${API_URL}my_devices/`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const getDeviceById = createAsyncThunk(
  'devices/getDeviceById',
  async (id, { rejectWithValue }) => {
    try {
      const response = await api.get(`${API_URL}${id}/`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const createDevice = createAsyncThunk(
  'devices/createDevice',
  async (deviceData, { rejectWithValue }) => {
    try {
      // Create FormData for file uploads
      const formData = new FormData();
      
      // Append all fields from deviceData to formData
      Object.keys(deviceData).forEach(key => {
        // Handle file fields separately
        if (key === 'production_facility_registration' || 
            key === 'declaration_of_ownership' || 
            key === 'metering_evidence' || 
            key === 'single_line_diagram' || 
            key === 'project_photos') {
          if (deviceData[key]) {
            formData.append(key, deviceData[key]);
          }
        } else {
          formData.append(key, deviceData[key]);
        }
      });
      
      const response = await api.post(API_URL, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const updateDevice = createAsyncThunk(
  'devices/updateDevice',
  async ({ id, deviceData }, { rejectWithValue }) => {
    try {
      // Create FormData for file uploads
      const formData = new FormData();
      
      // Append all fields from deviceData to formData
      Object.keys(deviceData).forEach(key => {
        // Handle file fields separately
        if (key === 'production_facility_registration' || 
            key === 'declaration_of_ownership' || 
            key === 'metering_evidence' || 
            key === 'single_line_diagram' || 
            key === 'project_photos') {
          if (deviceData[key] && deviceData[key] instanceof File) {
            formData.append(key, deviceData[key]);
          }
        } else {
          formData.append(key, deviceData[key]);
        }
      });
      
      const response = await api.patch(`${API_URL}${id}/`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const deleteDevice = createAsyncThunk(
  'devices/deleteDevice',
  async (id, { rejectWithValue }) => {
    try {
      await api.delete(`${API_URL}${id}/`);
      return id;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const fetchFuelTypes = createAsyncThunk(
  'devices/fetchFuelTypes',
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get(`${API_URL}fuel_types/`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const fetchTechnologyTypes = createAsyncThunk(
  'devices/fetchTechnologyTypes',
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get(`${API_URL}technology_types/`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Initial state
const initialState = {
  devices: [],
  currentDevice: null,
  fuelTypes: {},
  technologyTypes: {},
  loading: false,
  error: null,
  success: false,
  message: '',
};

// Slice
const deviceSlice = createSlice({
  name: 'devices',
  initialState,
  reducers: {
    clearCurrentDevice: (state) => {
      state.currentDevice = null;
    },
    clearError: (state) => {
      state.error = null;
    },
    clearSuccess: (state) => {
      state.success = false;
      state.message = '';
    },
  },
  extraReducers: (builder) => {
    builder
      // fetchDevices
      .addCase(fetchDevices.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchDevices.fulfilled, (state, action) => {
        state.loading = false;
        state.devices = action.payload;
      })
      .addCase(fetchDevices.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Failed to fetch devices';
      })
      
      // fetchMyDevices
      .addCase(fetchMyDevices.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMyDevices.fulfilled, (state, action) => {
        state.loading = false;
        state.devices = action.payload;
      })
      .addCase(fetchMyDevices.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Failed to fetch your devices';
      })
      
      // getDeviceById
      .addCase(getDeviceById.pending, (state) => {
        state.loading = true;
      })
      .addCase(getDeviceById.fulfilled, (state, action) => {
        state.loading = false;
        state.currentDevice = action.payload;
      })
      .addCase(getDeviceById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Failed to fetch device';
      })
      
      // createDevice
      .addCase(createDevice.pending, (state) => {
        state.loading = true;
      })
      .addCase(createDevice.fulfilled, (state, action) => {
        state.loading = false;
        state.devices.unshift(action.payload);
        state.success = true;
        state.message = 'Device created successfully';
      })
      .addCase(createDevice.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Failed to create device';
      })
      
      // updateDevice
      .addCase(updateDevice.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateDevice.fulfilled, (state, action) => {
        state.loading = false;
        state.devices = state.devices.map(device => 
          device.id === action.payload.id ? action.payload : device
        );
        state.currentDevice = action.payload;
        state.success = true;
        state.message = 'Device updated successfully';
      })
      .addCase(updateDevice.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Failed to update device';
      })
      
      // deleteDevice
      .addCase(deleteDevice.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteDevice.fulfilled, (state, action) => {
        state.loading = false;
        state.devices = state.devices.filter(device => device.id !== action.payload);
        state.success = true;
        state.message = 'Device deleted successfully';
      })
      .addCase(deleteDevice.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Failed to delete device';
      })
      
      // fetchFuelTypes
      .addCase(fetchFuelTypes.fulfilled, (state, action) => {
        state.fuelTypes = action.payload;
      })
      
      // fetchTechnologyTypes
      .addCase(fetchTechnologyTypes.fulfilled, (state, action) => {
        state.technologyTypes = action.payload;
      });
  },
});

export const { clearCurrentDevice, clearError, clearSuccess } = deviceSlice.actions;
export default deviceSlice.reducer;