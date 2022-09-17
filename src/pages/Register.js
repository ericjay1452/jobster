import React, {useState, useEffect} from 'react'
import Wrapper from '../assets/wrappers/RegisterPage'
import {Button, Input, Logo} from "../components"

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

        {/* name field */}
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            name
          </label>
          <Input 
          name="name" 
          value={user.name}
          type={"text"}
          onChange = {onCahnge}
          className = {`form-input`}
          placeholder = "Enter your name"/>
        </div>

        <Button>Submit</Button>
      </form>
    </Wrapper>
  )
}

export default Register