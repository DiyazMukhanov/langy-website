import { configureStore } from "@reduxjs/toolkit";
import teacherReducer from "./teacher/teacherSlice";
import packageReducer from "./student/packageSlice";
import studentProfileReducer from "./admin/studentProfileSlice";

export const store = configureStore({
  reducer: {
    teacher: teacherReducer,
    package: packageReducer,
    studentProfile: studentProfileReducer
  },
});
