import React from 'react'
import Wrapper from '../../assets/wrappers/BigSidebar'
import Logo from '../Logo/Logo'
import Navlink from '../Navlink/Navlink'
import { useSelector } from 'react-redux'

const BigSideBar = () => {
  // 
  const { isSidebarOpen } = useSelector((store) =>store.user)
  return (
    <Wrapper>
      <section className={isSidebarOpen ? "sidebar-container" : "sidebar-container show-sidebar"}>

        <div className='content'>
          <header>
           <Logo />
          </header>
          <Navlink />
        </div>
      </section>
    </Wrapper>
  )
}

export default BigSideBar