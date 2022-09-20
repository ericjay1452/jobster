import React from 'react'
import Wrapper from '../../assets/wrappers/SmallSidebar'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux"
import Logo from '../Logo/Logo'
import { GrFormClose } from "react-icons/gr"
import Button from '../Button/Button'
import { toggleSideBar } from '../../features/User/UserSlice'
import { links } from '../../utils/links'
import { SidebarLinks } from './SidebarLinks'
const SmallSideBar = () => {

  const { isSidebarOpen } = useSelector( (store) =>store.user)
  const dispatch = useDispatch()

  const toggle = () =>{
    dispatch(toggleSideBar())
  }
  return (
    <Wrapper>
      <section className= {isSidebarOpen ? 'sidebar-container show-sidebar' : "sidebar-container"}>

        <div className='content'>
         <Button className={"close-btn"} onClick={toggle}>
          <GrFormClose />
         </Button>

         <header>
          <Logo />
         </header>

         <ul className='nav-links'>
           {links.map( (link) =>{
            return <SidebarLinks key={link.id} {...link} toggle={toggle}/>
           })}
         </ul>
        </div>

      </section>
    </Wrapper>
  )
}

export default SmallSideBar