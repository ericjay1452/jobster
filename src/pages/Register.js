import React, {useState, useEffect} from 'react'
import Wrapper from '../assets/wrappers/RegisterPage'
import {Button, InputRow, Logo} from "../components"
import {FaPoop} from "react-icons/fa"

const Data = {
  name: '',
  email  : '',
  password: '',
  isMember : true,
  isVisible : false
}

const Register = () => {
 
  const [user, setUser ] = useState(Data);

  const handleChange =(e) =>{
    const name = e.target.name;
    const value = e.target.value;
    // when working with object, always copy your old values
    setUser({...user, [name] : value})
    console.log(`${name} : ${value}`)
    }

   const onSubmit = (e) =>{
    e.preventDefault()
    const {email, name, password } = user

   }

  //  For toggling user membership status
   const toggleMember = () =>{
    setUser({...user, isMember: !user.isMember})
   }

  //  password visibility toggle function
   const passwordVisible = () =>{
    setUser({...user, isVisible:!user.isVisible})
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
        <div style={{position : "relative"}}>
        <InputRow type={user.isVisible ? "text" : "password"}
        value={user.password}
        handleChange= {handleChange}
        name="password"
        placeholder={"Enter your password"}
        />
        <FaPoop style={{position: "absolute", top: "3em", right: "0", cursor: "pointer"}} onClick = {passwordVisible}/>
        </div>

        <Button type={"submit"} className= {"btn btn-block"}>Submit</Button>

        <div style={{display: "flex", justifyContent:"space-between", alignContent:"center"}}>
           <p>{user.isMember? "Not a member" : "Already a member"}</p>
          <Button type={"button"} onClick= {toggleMember} className= {`btn`}>{user.isMember ? "Signup" : "Login"} </Button>
          </div>
      </form>
    </Wrapper>
  )
}

export default Register