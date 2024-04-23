import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Student } from "../types";

export interface StudentProfileInitialState {
  studentProfile: Student | null;
}

const initialState: StudentProfileInitialState = {
  studentProfile: null,
};

export const studentProfileSlice = createSlice({
  name: "studentProfile",
  initialState,
  reducers: {
    setProfile: (state, action: PayloadAction<Student>) => {
      state.studentProfile = action.payload;
    },
  },
});

export const { setProfile } = studentProfileSlice.actions;

export default studentProfileSlice.reducer;
