import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
// import { customFetch } from '../../utils/axios';
import {
  loginUserThunk,
  registerUserThunk,
  updateUserThunk,
  clearStoreThunk,
} from './userThunk';

import { getUserFromLocalStorage, AdduserToLocalStorage, RemoveuserFromLocalStorage } from '../../utils/localStorage';

const initialState = {
	User: getUserFromLocalStorage(),
	isLoading: false,
	isSidebarOpen: false
};

// function for registering user
export const RegisterUser = createAsyncThunk('user/register', async (user, thunkApi) => {
	// console.log(` register : ${JSON.stringify(user)} `)
	registerUserThunk('/auth/register', user, thunkApi)
	// try {
	// 	const response = await customFetch.post('/auth/register', user);
	// 	return response.data;
	// } catch (error) {
	// 	return thunkApi.rejectWithValue(error.response.data.msg);
	// }
});

// function for Logining user
export const LoginUser = createAsyncThunk('user/loginUser', async (user, thunkApi) => {
	
	return loginUserThunk('/auth/login', user, thunkApi);
	
});


// function for Updating user information
export const updateUser = createAsyncThunk('user/updateUser', async (user, thunkApi) => {

return updateUserThunk('/auth/updateUser', user, thunkApi);
});

export const clearStore = createAsyncThunk('user/clearStore', clearStoreThunk);

// my state handler
const UserSlice = createSlice({
	name: 'user',
	initialState,

	reducers: {
		// used in Navbar.js for toggling sidebar
		toggleSideBar: (state) => {
			state.isSidebarOpen = !state.isSidebarOpen;
		},

		//  Used in Navbar.js for once user click on this function
		// its automatically log them out
		logOutUser:  (state, { payload }) => {
      state.User = null;
      state.isSidebarOpen = false;
      RemoveuserFromLocalStorage();
      if (payload) {
        toast.success(payload);
      }
    },
	},

	// extraReducers is used for fetching of api
	extraReducers: {
		[RegisterUser.pending]: (state) => {
			state.isLoading = true;
		},

		[RegisterUser.fulfilled]: (state, { payload }) => {
			// Destructuring my user from the payload
			const { user } = payload;
			state.isLoading = false;
			state.User = user;
			AdduserToLocalStorage(user);
			toast.success(`Welcome ${user.name}`);
		},

		[RegisterUser.rejected]: (state, { payload }) => {
			state.isLoading = false;
			toast.error(payload);
		},

		[LoginUser.pending]: (state) => {
			state.isLoading = true;
		},

		[LoginUser.fulfilled]: (state, { payload }) => {
			const { user } = payload;
			state.isLoading = false;
			state.User = user;
			AdduserToLocalStorage(user);
			toast.success(`Welcome back ${user.name}`);
		},

		[LoginUser.rejected]: (state, { payload }) => {
			state.isLoading = false;
			toast.error(payload);
		},

     
    // updateUser api
    [updateUser.pending]: (state) => {
			state.isLoading = true;
		},

		[updateUser.fulfilled]: (state, { payload }) => {
			const { user } = payload;
			state.isLoading = false;
			state.User = user;
			AdduserToLocalStorage(user);
			toast.success(`User updated !`);
		},

		[updateUser.rejected]: (state, { payload }) => {
			state.isLoading = false;
			toast.error(payload);
		},
    
    [clearStore.rejected]: () => {
      toast.error('There was an error..');
    },
	}
  
});

export const { toggleSideBar, logOutUser } = UserSlice.actions;

// always export your UserSlice.reducer to allow to have access in your store.js
export default UserSlice.reducer;
