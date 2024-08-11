import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TeacherState } from "../types";

export interface TeacherInitialState {
  teacherData: TeacherState | null;
}

const initialState: TeacherInitialState = {
  teacherData: null,
};

export const teacherSlice = createSlice({
  name: "teacher",
  initialState,
  reducers: {
    setTeacher: (state, action: PayloadAction<TeacherState>) => {
      state.teacherData = action.payload;
    },
    clearTeacher: (state) => {
      state.teacherData = null;
    },
  },
});

export const { setTeacher, clearTeacher } = teacherSlice.actions;

export default teacherSlice.reducer;
