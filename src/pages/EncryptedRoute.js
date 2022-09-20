import React from 'react'
import { useSelector} from 'react-redux'
import { Navigate } from 'react-router-dom';

const EncryptedRoute = ({children}) => {
    const {User} = useSelector( (store) =>store.user);

    if(!User) {
        return <Navigate to={"/landing"} />
    }

  return children
}

export default EncryptedRoute

// This function is used for bouncing or navigating users who are not registered back to landing page