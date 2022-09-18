import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {toast} from "react-toastify"
import { customFetch } from "../../utils/axios";

  const initialState = {
    User: null,
    isLoading : false,
    isVisible : false,
  }
  
const UserSlice = createSlice({
    name: "user",
    initialState
})

// function for registering user
export const RegisterUser = createAsyncThunk("user/register", async (user,thunkApi) => {

  // console.log(` register : ${JSON.stringify(user)} `)
  try {
    const response = await customFetch.post("/auth/testingRegister", user)

  } catch (error) {
    console.log(error.response)
  }
})

// function for Logining user
export const LoginUser = createAsyncThunk("user/loginUser", async (user,thunkApi) => {
  console.log(`login : ${JSON.stringify(user)} `)
})

// always export your UserSlice.reducer to allow to have access in your store.js
export default UserSlice.reducer