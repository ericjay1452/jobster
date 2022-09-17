import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {toast} from "react-toastify"

  const initialState = {
    user: null,
    isLoading : false
  }
  
const UserSlice = createSlice({
    name: "user",
    initialState
})

// always export your UserSlice.reducer to allow to have access in your store.js
export default UserSlice.reducer