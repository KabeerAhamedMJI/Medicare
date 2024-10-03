import { configureStore } from '@reduxjs/toolkit';
import patientReducer from './features/patientSlice';
import departmentReducer from './features/departmentSlice';
import appointmentReducer from './features/appointmentSlice';

export const store = configureStore({
  reducer: {
    patient: patientReducer,
    department: departmentReducer,
    appointment: appointmentReducer
  },
});