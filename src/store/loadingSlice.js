import { createSlice } from "@reduxjs/toolkit";

const loadingSlice = createSlice({
	name: "loading",
	initialState: {
		global: false,
	},
	reducers: {
		loading: (state, action) => {
			state.global = action.payload;
		},
	},
});

export const { loading } = loadingSlice.actions;
export default loadingSlice.reducer;
