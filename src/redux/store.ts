import { configureStore } from "@reduxjs/toolkit";
import { mapReducer } from "../pages/home/_redux/mapSlice";

const store = configureStore({
  reducer: {
    map: mapReducer
  }
})
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>





export default store;
