import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {toast} from "react-toastify"
import { customFetch } from "../../utils/axios";
import { getUserFromLocalStorage, AdduserToLocalStorage, RemoveuserFromLocalStorage } from "../../utils/localStorage";

  const initialState = {
    User: getUserFromLocalStorage(),
    isLoading : false,
  }
  

// function for registering user
export const RegisterUser = createAsyncThunk("user/register", async (user,thunkApi) => {

  // console.log(` register : ${JSON.stringify(user)} `)
  try {
    const response = await customFetch.post("/auth/register", user)
    return response.data
  } catch (error) {
    return thunkApi.rejectWithValue(error.response.data.msg)
  }
})

// function for Logining user
export const LoginUser = createAsyncThunk("user/loginUser", async (user,thunkApi) => {
  try {
    const response = await customFetch.post("/auth/login", user)
    return response.data
  } catch (error) {
    return thunkApi.rejectWithValue(error.response.data.msg)
  }
})

const UserSlice = createSlice({
  name: "user",
  initialState,
  extraReducers : {

    [RegisterUser.pending]: (state) => {
      state.isLoading = true
    },

    [RegisterUser.fulfilled]: (state, {payload}) => {
      // Destructuring my user from the payload
      const { user} = payload;
      state.isLoading = false;
      state.User = user;
      AdduserToLocalStorage(user);
      toast.success(`Welcome ${user.name}`)
    },

    [RegisterUser.rejected]: (state, {payload}) => {
      state.isLoading = false;
      toast.error(payload)
    },


    [LoginUser.pending] : (state) =>{
      state.isLoading = true;
    },

    [LoginUser.fulfilled] : (state, {payload}) =>{
      const { user} = payload;
      state.isLoading = false;
      state.User = user;
      AdduserToLocalStorage(user);
      toast.success(`Welcome back ${user.name}`)
    },

    [LoginUser.rejected] : (state, {payload}) =>{
      state.isLoading = false;
      toast.error(payload)
    }
  }
})

// always export your UserSlice.reducer to allow to have access in your store.js
export default UserSlice.reducer