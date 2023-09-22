import { createSlice } from "@reduxjs/toolkit";

export const customizationSlice = createSlice({
  name: "customization",
  initialState: {
    opened: true,
  },
  reducers: {
    setMenu: (state, action) => {
      return {
        ...state,
        opened: action.payload,
      };
    },
  },
});

// this is for dispatch
export const { setMenu } = customizationSlice.actions;

// this is for configureStore
export default customizationSlice.reducer;
