import React from 'react'
import {Route, Routes} from "react-router-dom"
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import { Landing, Error, Register, EncryptedRoute} from './pages'
ATBBrKJkkFVCgzhjmnsGnUY339D5F090B987
import {AddJobs, AllJobs, Profile, Stats, SharedLayout } from "./pages/Dashoard" 

 const App = () => {
  return (
    <>
    <Routes>
      {/* Created a sharedlayout for displaying my nested routes without navigating away */}
      <Route path='/' exact element = {
        <EncryptedRoute>
          <SharedLayout />
        </EncryptedRoute>  
      }>

        {/* The outlet of SharedLayout i.e the sub pages in SharedLayout */}
        <Route index element = {<Profile/> }/>
       <Route element = {<Stats />} path="stats"/>
       <Route element = {<AllJobs />} path="all-jobs"/>
       <Route element = {<AddJobs />} path="add-jobs"/>
      </Route>
      <Route path='register' element = {<Register />} />
      <Route path='landing' element = {<Landing />} />
      <Route path='*' exact element = {<Error />} />
    </Routes>
    <ToastContainer position='top-center'/>
      </>
  )
}

export default App

