import React from 'react'
import {Route, Routes} from "react-router-dom"
import { Landing, Dashboard, Error, Register, BrowserRouter} from './pages'

 const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' exact element = {<Dashboard />} />
      <Route path='register' element = {<Register />} />
      <Route path='landing' element = {<Landing />} />
      <Route path='*' exact element = {<Error />} />
    </Routes>
      </>
  )
}

export default App

