import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Teacher {
  id: number;
  name: string;
  surname: string;
  email: string;
  photo: string;
  gender: string;
  description: string;
  isLoggedIn: boolean;
}

export interface TeacherState {
  teacherData: Teacher | null;
}

const initialState: TeacherState = {
  teacherData: null,
};

export const teacherSlice = createSlice({
  name: "teacher",
  initialState,
  reducers: {
    setTeacher: (state, action: PayloadAction<Teacher>) => {
      state.teacherData = action.payload;
    },
    clearTeacher: (state) => {
      state.teacherData = null;
    },
  },
});

export const { setTeacher, clearTeacher } = teacherSlice.actions;

export default teacherSlice.reducer;
