import React from 'react'

const Button = ({type, className,onClick, children, disable}) => {
  return (
    <button 
    type={type} 
    onClick = {onClick} 
    className = {className}
    disabled = {disable}>{children}</button>
  )
}

export default Button