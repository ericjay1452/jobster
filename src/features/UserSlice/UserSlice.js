import { createSlice } from "@reduxjs/toolkit";

  const initialState = {
    user: null,
    isLoading : false
  }
  
const UserSlice = createSlice({
    name: "user",
    initialState
})