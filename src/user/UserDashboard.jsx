import React from 'react'
import { Outlet } from 'react-router-dom'
import UserNavbar from './UserNavbar'

function UserDashboard() {
  return (
    <div>
        <UserNavbar/>
        <Outlet/>

    </div>
  )
}

export default UserDashboard