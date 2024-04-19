import { configureStore } from "@reduxjs/toolkit";
import teacherReducer from "./teacher/teacherSlice";
import packageReducer from "./student/packageSlice";

export const store = configureStore({
  reducer: {
    teacher: teacherReducer,
    package: packageReducer,
  },
});
