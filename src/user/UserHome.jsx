import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addItem } from '../store/cartSlice';
function UserHome() {
  const [products,setproducts]=useState([]);
  let navigate=useNavigate();
  let dispatch=useDispatch();

  async function getData() {
    let res = await axios.get("https://fakestoreapi.com/products");
    console.log(res.data);
    setproducts(res.data)
  }
  let result=products.map((item,ind)=>{
    return(
      <div className='card' key={item.id}>
        <img src={item.image} alt="" className='image' />
        <h1>{item.title}</h1>
        <h5>{item.category}</h5>
        <h4>Rs.{item.price}</h4>
        <button onClick={()=>{dispatch(addItem(item)); alert("Item adda to cart")}}>Add to cart</button>
        <button onClick={()=>navigate(`/userDashboard/productDetails/${item.id}`)}>Open</button>

      </div>
    )
  });

  useEffect(() => {
    getData();

  }, [])
  return (
    <div className='container'>
      <>
        {result}
      </>

    </div>
  )
}

export default UserHome