import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./features/User/UserSlice";
import jobSlice from "./features/job/jobSlice";
import allJobsSlice from "./features/allJobs/allJobsSlice";

// import your exported UserSlice.reducer from UserSlice.js

export const store = configureStore({
    reducer : {
        // give your reducer object name to identify your reducer object
        user : UserSlice,
        job : jobSlice,
        alljobs : allJobsSlice
    },
})
