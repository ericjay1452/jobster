import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Wrapper from "../../assets/wrappers/DashboardFormPage"
import { FiLoader } from "react-icons/fi"
import { updateUser } from '../../features/User/UserSlice'
import {toast} from "react-toastify"
import {Button, InputRow } from "../../components"


const Profile = () => {
  const {isLoading, User } = useSelector( (store) =>store.user)
  const dispatch = useDispatch();

  const [Data, setData ] = useState( {
    name : User?.name || "",
    lastName : User?.lastName || "",
    location : User?.location || "",
    email : User?.email
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    const { name, email, lastName, location } = Data;

    if( !name || !email || !lastName || !location) {
      toast.error("please, provide all inputs fields")
      return;
    }

    // You can neither pass it as a full data or pass them explicitly, eg, name, email, location, lastName
    dispatch(updateUser(Data))
    // setData({
    //   name : "",
    //   lastName : "",
    //   email : "",
    //   location : ""
    // })
    console.log("You clicked me!")
  }

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData( {...Data, [name] : value})
  }
  
  const  {name, lastName, email, location } = Data;

  return (
    <Wrapper>
      <form className='form' onSubmit={handleSubmit}>
        <h3>Profile</h3>

        <div className='form-center'>
          <InputRow 
          type={"text"}
          name = {"name"}
          value = {name}
          placeholder = {'Enter name'}
          handleChange={handleChange}
          />

          <InputRow 
          type={"text"}
          labelText = {"last Name"}
          name = {"lastName"}
          value = {lastName}
          placeholder = {'Enter lastName'}
          handleChange={handleChange}
          />

          <InputRow 
          type={"email"}
          name = {"email"}
          value = {email}
          placeholder = {'Enter email'}
          handleChange={handleChange}
          />

          <InputRow 
          type={"text"}
          name = {"location"}
          value = {location}
          placeholder = {'Enter location'}
          handleChange={handleChange}
          />

          <Button disable={isLoading} type={"submit"} className={"btn btn-block"}>
            {isLoading ? <FiLoader /> : `Save changes `}
          </Button>
        </div>
      </form>
    </Wrapper>
  )
}

export default Profile