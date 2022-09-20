import React from 'react'
import { Links } from './Links'
import { links } from '../../utils/links'

const Navlink = ({toggleSideBar}) => {
  return (
    <ul className='nav-links'>
           {links.map( (link) =>{
            return <Links key={link.id} {...link} toggleSideBar={toggleSideBar}/>
           })}
         </ul>
  )
}

export default Navlink