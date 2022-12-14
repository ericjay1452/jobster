import React from 'react'
import Wrapper from '../../assets/wrappers/SmallSidebar'
import { useSelector, useDispatch } from "react-redux"
import Logo from '../Logo/Logo'
import { GrFormClose } from "react-icons/gr"
import Button from '../Button/Button'
import { toggleSideBar } from '../../features/User/UserSlice'
import Navlink from '../Navlink/Navlink'

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
           <Navlink toggleSideBar={toggle}/>
        </div>

      </section>
    </Wrapper>
  )
}

export default SmallSideBar