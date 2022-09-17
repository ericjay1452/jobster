const InputRow = ({type, value, name, handleChange, placeholder}) =>{
    return (
        <div className='form-row'>
          <label htmlFor={name} className='form-label'>
           {name}
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