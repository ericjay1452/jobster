import React from 'react'
import Wrapper from '../../assets/wrappers/Navbar'
import { TbAlignLeft } from "react-icons/tb"
import { FaUserCircle, FaCaretDown } from "react-icons/fa"
import { toggleSideBar } from "../../features/User/UserSlice"
import { useSelector, useDispatch } from 'react-redux'
import Button from '../Button/Button'
import Logo from '../Logo/Logo'

const Navbar = () => {
  const {User} = useSelector( (store) =>store.user);
  const dispatch = useDispatch()

  // for sidebarToggle
  const sideBarToggler = () =>{
    dispatch(toggleSideBar())
  }

  return (
    <Wrapper>
      <section className='nav-center'>
       <Button type={"button "} className="toggle-btn" onClick={()=>console.log("Toggle-sidebar")}>
       <TbAlignLeft />
       </Button>

      <div>
        <Logo />
        <h3 className='logo-text'>Dashboard</h3>
      </div>

      <div className='btn-container'>
        <Button className={"btn"} type = {"btn"} onClick = {()=>console.log("User toggler")}>
          <FaUserCircle />
           {User?.name}
          <FaCaretDown />
        </Button>

         {/* For user toggling dropdown */}
        <div className='dropdown show-dropdown'>
        <Button className={"dropdown-btn"} type = {"btn"} onClick = {()=>console.log("logout user")}>
         Logout
        </Button>
        </div>

      </div>
      </section>
      </Wrapper>
  )
}

export default Navbar