import React from 'react'
import { Link } from 'react-router-dom'
import error from "../assets/images/error.svg" 
import Wrapper from '../assets/wrappers/ErrorPage'
import { Button } from '../components'

const Error = () => {
  return (
    <Wrapper className='full-page'>
     <div>
      <img src={error} alt='not-found'/>
      <h3>Ohh!! Page not found</h3>
      <p>Sorry, the page you are trying to access doen't exist</p>

      <Button className={"btn"} type= {"button"}>
      <Link to= {"/"} style={{color : "white", textDecoration : "none", padding: "1rem"}}>Go Home</Link>
      </Button>
      
     </div>
    </Wrapper>
  )
}

export default Error