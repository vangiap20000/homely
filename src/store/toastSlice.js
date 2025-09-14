import { createSlice } from "@reduxjs/toolkit";

const toastSlice = createSlice({
	name: "toast",
	initialState: {
		toasts: [],
	},
	reducers: {
		showToast: (state, action) => {
			state.toasts.push(action.payload);
		},
		clearToast: (state) => {
			state.toasts = [];
		},
	},
});

export const { showToast, clearToast } = toastSlice.actions;
export default toastSlice.reducer;
