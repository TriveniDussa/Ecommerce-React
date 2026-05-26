import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landingpage from './components/Landingpage'
import Home from './components/Home'
import Login from './components/Login'
import Reg from './components/Reg'
import './App.css'
import UserDashboard from './user/UserDashboard'
import UserHome from './user/UserHome'
import ProtectedRoute from './user/ProtectedRoute'
import './Login.css'
import './Register.css'
import './userHome.css'
// import './ProductDetails.css'
import ProductDetails from './user/ProductDetails'
import UserNavbar from './user/UserNavbar'
import Cart from './user/Cart'
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landingpage />}>
            <Route index element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/reg' element={<Reg />} />
          </Route>
          <Route path='/userDashboard' element={<ProtectedRoute><UserDashboard /></ProtectedRoute>}>
            
            <Route index element={<UserHome />} />
            <Route path='/userDashboard/productDetails/:id' element={<ProductDetails/>}/>
            <Route path='/userDashboard/cart' element={<Cart/>}/>

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App