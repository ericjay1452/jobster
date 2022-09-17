import React from 'react'
import { Link } from 'react-router-dom'
import error from "../assets/images/error.svg" 
import Wrapper from '../assets/wrappers/ErrorPage'

const Error = () => {
  return (
    <Wrapper className='full-page'>
     <div>
      <img src={error} alt='not-found'/>
      <h3>Ohh!! Page not found</h3>
      <p>Sorry, the page you are trying to access doen't exist</p>
      <Link to= {"/"} className = "btn" style={{color : "white", textDecoration : "none"}}>Go Home</Link>
     </div>
    </Wrapper>
  )
}

export default Error