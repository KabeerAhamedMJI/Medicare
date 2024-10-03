import { createSlice } from "@reduxjs/toolkit";

export const appointmentSlice = createSlice({
  name: "appointment",
  initialState: {
    appointment: [],
  },
  reducers: {
    setappointment: (state, action) => {
      state.appointment = action.payload;
    },
    resetappointment: (state) => {
      state.appointment = [];
    },
  },
});

export const { setappointment,resetappointment } = appointmentSlice.actions;

export default appointmentSlice.reducer;
