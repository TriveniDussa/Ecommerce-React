import React from 'react'
import {Link} from 'react-router-dom'
function Navbar() {
  return (
    <div className='nav'>
        <Link to='/' className='home'>Home</Link>
        <Link to='/login' >Login</Link>
        <Link to='/reg' >Register</Link>

    </div>
  )
}

export default Navbar