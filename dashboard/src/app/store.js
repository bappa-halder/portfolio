import { configureStore } from "@reduxjs/toolkit";
import projectSlice from "../features/projectSlice"
import userSlice from "../features/authSlice"

export const store = configureStore({
  reducer: {
    project: projectSlice,
    user: userSlice
  },
});