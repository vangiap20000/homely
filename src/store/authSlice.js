
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';
import { auth, googleProvider, logout as firebaselogout } from '../firebase';
import { signInWithPopup } from 'firebase/auth';

export const registerUser = createAsyncThunk('auth/registerUser', async ({ email, password }) => {
	const userCredential = await createUserWithEmailAndPassword(auth, email, password);
	return userCredential.user.toJSON();
});

export const loginUser = createAsyncThunk('auth/loginUser', async ({ email, password }) => {
	const userCredential = await signInWithEmailAndPassword(auth, email, password);
	return userCredential.user.toJSON();
});

export const forgotPassword = createAsyncThunk('auth/forgotPassword', async (email) => {
	await sendPasswordResetEmail(auth, email);
});

export const googleLogin = createAsyncThunk(
	'auth/googleLogin',
	async (_, thunkAPI) => {
		try {
			const result = await signInWithPopup(auth, googleProvider);
			const user = result.user;
			return user.toJSON();
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);

const authSlice = createSlice({
	name: 'auth',
	initialState: {
		user: null,
		status: '',
		error: null,
		isAuthChecked: false,
	},
	reducers: {
		logout(state) {
			state.user = null;
			firebaselogout();
		},
		setUser(state, action) {
			state.user = action.payload;
		},
		setAuthChecked(state, action) {
      state.isAuthChecked = action.payload;
    },
	},
	extraReducers: (builder) => {
		builder
			.addCase(registerUser.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(registerUser.fulfilled, (state, action) => {
				state.status = 'succeeded';
				state.user = action.payload;
			})
			.addCase(registerUser.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.error.message;
			})
			.addCase(loginUser.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(loginUser.fulfilled, (state, action) => {
				state.status = 'succeeded';
				state.user = action.payload;
			})
			.addCase(loginUser.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.error.message;
			})
			.addCase(forgotPassword.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(forgotPassword.fulfilled, (state) => {
				state.status = 'succeeded';
			})
			.addCase(forgotPassword.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.error.message;
			})
			.addCase(googleLogin.pending, (state) => {
				state.status = 'loading';
				state.error = null;
			})
			.addCase(googleLogin.fulfilled, (state, action) => {
				state.status = 'succeeded';
				state.user = action.payload;
			})
			.addCase(googleLogin.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.payload;
			});
	},
});

export const { logout, setUser, setAuthChecked } = authSlice.actions;
export default authSlice.reducer;
