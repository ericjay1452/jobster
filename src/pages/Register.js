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

  //  For toggling user membership status
   const toggleMember = () =>{
    setUser({...user, isMember: !user.isMember})
   }

  return (
    <Wrapper className='full-page'>
      <form className='form' onSubmit={onSubmit}>
        <Logo />

        <h3>{user.isMember? "Login" : "Register"}</h3>

        {/* name field */}
        {!user.isMember && (
        <InputRow type={"text"}
        value={user.name}
        handleChange= {handleChange}
        name="name"
        placeholder={"Enter your name"}
        />

        )}

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

        <div style={{display: "flex", justifyContent:"space-between", alignContent:"center"}}>
           <p>{user.isMember? "Already a member" : "Register and signup"}</p>
          <Button type={"button"} onClick= {toggleMember} className= {`btn`}>{user.isMember ? "Login" : "SignUp"} </Button>
          </div>
      </form>
    </Wrapper>
  )
}

export default Register