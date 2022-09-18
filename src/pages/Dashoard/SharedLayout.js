import React from 'react'
// always import Outlet from react-router-dom for accessing sharedlayout
import { Outlet } from 'react-router-dom'
import { BigSideBar,SmallSideBar, Navbar } from '../../components'
import Wrapper from '../../assets/wrappers/SharedLayout'

const SharedLayout = () => {
  return (
    <Wrapper>
      <main className='dashboard'>
        <SmallSideBar />
        <BigSideBar />

        <div>
          <Navbar />
          <div className='dashboard-page'>
            {/* Display your Outlet here */}
            <Outlet />
          </div>
        </div>
      </main>
    </Wrapper>
  )
}

export default SharedLayout