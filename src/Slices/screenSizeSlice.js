import { createSlice } from "@reduxjs/toolkit";

const screenSizeSlice = createSlice({
  name: "screenSize",
  initialState: {
    screenSize: 0,
  },
  reducers: {
    getScreenSize: (state, action) => {
      console.log("getsize", action.payload)
      state.screenSize=action.payload;
    },
  },
});
export const {getScreenSize} = screenSizeSlice.actions;

export default screenSizeSlice.reducer;
