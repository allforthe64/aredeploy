import React from 'react'
import AuthContext from '../context/authProvider'
import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { Users } from './Users'
import Orders from './Orders'

const Admin = () => {

    useEffect(() => {
      window.scrollTo(0, 0)
    }, [])

    //create the navigate hook
    const navigate = useNavigate()

    const { auth } = useContext(AuthContext)
    
    /* useEffect(() => {
        //check to see if the user has logged in and is an admin
        if (!auth || !auth.length) {
            alert("Oops! Looks like you tried to access a page that you don't have access too! Redirecting you back to the page you came from...")
            navigate(-1)
        }
    }, [])
     */

    console.log(auth)

  return (
    <div className='py-10'>
      <h1 className='heading text-8xl grey mb-10'>Admin Page</h1>
        <Orders />
    </div>
  )
}

export default Admin