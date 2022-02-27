import { configureStore } from "@reduxjs/toolkit";
import modeReducer from "./reducers/modeSlice";

export default configureStore({
  reducer: {
    mode: modeReducer,
  },
});
