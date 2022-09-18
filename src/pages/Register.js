import React, {useState, useEffect} from 'react'
import Wrapper from '../assets/wrappers/RegisterPage'
import {Button, InputRow, Logo} from "../components"
import {FaPoop} from "react-icons/fa"
import {toast} from "react-toastify"
import { useSelector,useDispatch } from 'react-redux'
import { LoginUser, RegisterUser} from '../features/User/UserSlice'

const Data = {
  name: '',
  email  : '',
  password: '',
  isMember : true,
  isVisible : false
}

const Register = () => {
  // Always useDispatch for dispatching your actions coming from UserSlice.actions in UserSlice.js
    const dispatch = useDispatch();

    // destructuring my object to have access to my initialState in UserSlic.js
    const {User, isLoading } = useSelector((store) =>store.user)
  const [user, setUser ] = useState(Data);

  const handleChange =(e) =>{
    const name = e.target.name;
    const value = e.target.value;
    // when working with object, always copy your old values
    setUser({...user, [name] : value})
    console.log(`${name} : ${value}`)
    }

    // When working on your submit function, always destucture your values
   const onSubmit = (e) =>{
    e.preventDefault()
    const {email, name, password, isMember } = user;

    if(!email || !password || (!isMember && !name)) {
           console.log("Please provide values to your inputs")
           toast.error("Please fill all values")
           return;
    }
    
    // Dispatching my LoginUser to retrieve my userdata 
    if(isMember) {
       dispatch(LoginUser({email: email, password: password}))
       return;
    }
    // Dispatching my RegisterUser to allow registration of user
    dispatch(RegisterUser({name, email, password}))
    setUser({...user,
    name: "",
  email: "",
password: ""})

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
           <p>{user.isMember? "Not a member ? " : "Already a member ? "}</p>
          <Button type={"button"} onClick= {toggleMember} className= {`btn`}>{user.isMember ? "Signup" : "Login"} </Button>
          </div>
      </form>
    </Wrapper>
  )
}

export default Register