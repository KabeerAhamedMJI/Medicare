import { createSlice } from '@reduxjs/toolkit';

const departmentSlice = createSlice({
  name: 'department',
  initialState: {
    department: [],
  },
  reducers: {
    setdepartment: (state, action) => {
      state.department = action.payload;
    },
  },
});

export const { setdepartment } = departmentSlice.actions;
export default departmentSlice.reducer;

