import React from 'react'
import { NavLink } from 'react-router-dom'

export const SidebarLinks = ({id, label, icon, path, toggle}) => {
  return (
    <>  
    <NavLink to={path} className = {({isActive}) =>{
        return isActive ? "nav-link active" : "nav-link";
    }}
    key = {id}
    onClick ={toggle}>
      <span className='icon'>{icon}</span>
      {label}
    </NavLink>
    </>
  )
}
