import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import './ProductDetails.css'
import { useDispatch } from 'react-redux';
import { addItem } from '../store/cartSlice';

function ProductDetails() {

    const [product, setproduct] = useState({})
    let params = useParams();
    let navigate = useNavigate();
    let dispatch=useDispatch();

    async function getData() {
        let res = await axios.get(`https://fakestoreapi.com/products/${params.id}`);
        setproduct(res.data)
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <div className='details-container'>

            <div className='details-card'>

                <div className='image-section'>
                    <img src={product.image} alt="" />
                </div>

                <div className='content-section'>

                    <h1>{product.title}</h1>

                    <h4>{product.category}</h4>

                    <p>{product.description}</p>

                    <div className='price'>
                        Rs. {product.price}
                    </div>

                    <div className='btn-group'>
                        <button
                            className='back-btn'
                            onClick={() => navigate("/userDashboard")}
                        >
                            Go Back
                        </button>

                        <button className='cart-btn' onClick={()=>{dispatch(addItem(product)); alert("Item adda to cart")}}>
                            Add To Cart
                        </button>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default ProductDetails