import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PackageState } from "../types";

const initialState: PackageState | null = {
  package: null,
};

export const packageSlice = createSlice({
  name: "package",
  initialState,
  reducers: {
    setPackage: (state, action: PayloadAction<number>) => {
      state.package = action.payload;
    },
  },
});

export const { setPackage } = packageSlice.actions;

export default packageSlice.reducer;
