import React, {useState, useEffect} from 'react'
import Wrapper from '../assets/wrappers/RegisterPage'
import {Logo} from "../components"

const Data = {
  name: '',
  email  : '',
  password: '',
  isMember : true
}

const Register = () => {
 
  const [user, setUser ] = useState(Data)

  return (
    <div>Register</div>
  )
}

export default Register