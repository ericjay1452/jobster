const InputRow = ({type, value, name, handleChange, placeholder, labelText}) =>{
    return (
        <div className='form-row' style={{position : "relative"}}>
          <label htmlFor={name} className='form-label'>
           {labelText || name}
          </label>
          <input
          name= {name} 
          value={value}
          type={type}
          onChange = {handleChange}
          className = {`form-input`}
          placeholder = {placeholder}/>
        </div>
    )
}

export default InputRow