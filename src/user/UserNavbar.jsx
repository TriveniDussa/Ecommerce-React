import React from 'react'
import './UserNavbar.css'
import { useNavigate } from 'react-router-dom'

function UserNavbar() {
  let navigate=useNavigate();

  

  return (
    <nav className='navbar'>

      <h2 className='logo'>MyStore</h2>

      <div className='nav-links'>
       <button
          className='home-btn'
          onClick={() => navigate("/userDashboard")}
        >
          Home
        </button>
       

        <button className='cart-btn' onClick={()=>navigate('/userDashboard/cart')}>
          🛒 Cart
        </button>

      </div>

    </nav>
  )
}

export default UserNavbar