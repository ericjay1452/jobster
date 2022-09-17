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
 
  const [user, setUser ] = useState(Data);

  const onCahnge = (e) =>{
    console.log(e)
  }

   const onSubmit = (e) =>{
    e.preventDefault()
   }

  return (
    <Wrapper className='full-page'>
      <form className='form' onSubmit={onSubmit}>
        <Logo />
        <h3>Login</h3>
      </form>
    </Wrapper>
  )
}

export default Register