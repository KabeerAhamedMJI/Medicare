import { createSlice } from "@reduxjs/toolkit";

export const departmentSlice = createSlice({
  name: "department",
  initialState: {
    department: {},
  },
  reducers: {
    setdepartment: (state, action) => {
      state.department = action.payload;
    },
    resetdepartment: (state) => {
      state.department = [];
    },
  },
});

export const { setdepartment,resetdepartment } = departmentSlice.actions;

export default departmentSlice.reducer;