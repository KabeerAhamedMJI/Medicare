import { createSlice } from "@reduxjs/toolkit";

export const patientSlice = createSlice({
  name: "patient",
  initialState: {
    patient: {},
  },
  reducers: {
    setpatient: (state, action) => {
      state.patient = action.payload;
    },
    resetpatient: (state) => {
      state.patient = [];
    },
  },
});

export const { setpatient,resetpatient } = patientSlice.actions;

export default patientSlice.reducer;

