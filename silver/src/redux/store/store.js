import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../slices/authSlice';
import usersReducer from '../slices/usersSlice';
import profileReducer from '../slices/profileSlice';
import deviceReducer from '../slices/deviceSlice';


export const store = configureStore({
  reducer: {
    auth: authReducer,
    profile: profileReducer,
    users: usersReducer,
    device: deviceReducer,
  },
});