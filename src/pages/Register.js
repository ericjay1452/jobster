import React, {useState, useEffect} from 'react'
import Wrapper from '../assets/wrappers/RegisterPage'
import {Button, InputRow, Logo} from "../components"

const Data = {
  name: '',
  email  : '',
  password: '',
  isMember : true
}

const Register = () => {
 
  const [user, setUser ] = useState(Data);

  const handleChange =(e) =>{
    console.log(e.target)
  }

   const onSubmit = (e) =>{
    e.preventDefault()
    console.log(e)
   }

  return (
    <Wrapper className='full-page'>
      <form className='form' onSubmit={onSubmit}>
        <Logo />
        <h3>Login</h3>

        {/* name field */}
        <InputRow type={"text"}
        value={user.name}
        handleChange= {handleChange}
        name="name"
        placeholder={"Enter your name"}
        />

        {/* email field */}
        <InputRow type={"email"}
        value={user.email}
        handleChange= {handleChange}
        name="email"
        placeholder={"Enter your email"}
        />

        {/* password field */}
        <InputRow type={"password"}
        value={user.password}
        handleChange= {handleChange}
        name="password"
        placeholder={"Enter your password"}
        />

        <Button type={"submit"} className= {"btn btn-block"}>Submit</Button>
      </form>
    </Wrapper>
  )
}

export default Register