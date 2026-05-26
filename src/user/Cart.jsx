import React from 'react'
import { useSelector } from 'react-redux'
import './Cart.css'

function Cart() {

    let cart = useSelector((state) => state.cart.cart);

    let totalPrice = useSelector((state) => state.cart.totalPrice);

    let result = cart.map((item) => {

        return (

            <div className='cart-card' key={item.id}>

                <img src={item.image} alt="" className='image' />

                <div className='cart-content'>

                    <h1>{item.title}</h1>

                    <h5>{item.category}</h5>

                    <h4>Rs. {item.price}</h4>

                </div>

            </div>

        )
    })

    return (

        <div className='cart-container'>

            <div className='cart-products'>

                {result}

            </div>

            <div className='summary-box'>

                <h1>Cart Summary</h1>

                <h2>Total = Rs. {totalPrice}</h2>

                <button
                    className='buy-btn'
                    onClick={() => {
                        alert("Order placed successfully")
                    }}
                >
                    Buy Now
                </button>

            </div>

        </div>
    )
}

export default Cart