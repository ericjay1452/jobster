import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {toast} from "react-toastify"
import { customFetch } from "../../utils/axios";

  const initialState = {
    User: null,
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
  console.log(`login : ${JSON.stringify(user)} `)
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
      console.log(payload)
      state.isLoading = false;
      state.User = user
      console.log(user)
      toast.success(`Welcome ${user.name}`)
    },

    [RegisterUser.rejected]: (state, {payload}) => {
      state.isLoading = false;
      toast.error(payload)
    },
  }
})

// always export your UserSlice.reducer to allow to have access in your store.js
export default UserSlice.reducer