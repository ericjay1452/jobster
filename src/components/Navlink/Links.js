import React from 'react'
import { NavLink } from 'react-router-dom'

export const Links = ({id, label, icon, path, toggleSideBar}) => {
  return (
    <>  
    <NavLink to={path} className = {({isActive}) =>{
        return isActive ? "nav-link active" : "nav-link";
    }}
    key = {id}
    onClick ={toggleSideBar}>
      <span className='icon'>{icon}</span>
      {label}
    </NavLink>
    </>
  )
}
