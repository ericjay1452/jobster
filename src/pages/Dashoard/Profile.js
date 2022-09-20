import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Wrapper from "../../assets/wrappers/DashboardFormPage"
import {toast} from "react-toastify"
import {InputRow } from "../../components" 

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

    if( !name || email || !lastName || !location) {
      toast.error("please, provide all inputs fields")
      return;
    }

    setData({
      name : "",
      lastName : "",
      email : "",
      location : ""
    })
  }

  const handleChange = (e) => {
    setData( {...Data, [e.target.name] : e.target.value})
  }


  return (
    <div>Profile</div>
  )
}

export default Profile