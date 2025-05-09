import { createSlice } from "@reduxjs/toolkit";

const reducerSlice = createSlice({
  name: "store",
  initialState: {},
  reducers: {
    someAction: function () {},
  },
});

export const { someAction } = reducerSlice.actions;