import React, { useState } from 'react'
import CheckoutProduct from './CheckoutProduct';
import './Payment.css'
import { useStateValue } from './StateProvider'
import {Link} from 'react-router-dom';

function Payment() {
    const [{basket, user}, dispatch] = useStateValue();
    return (
        <div className='payment'>
            <div className="payment__container">
                <h1>Checkout (<Link to='/Checkout'>{basket.length} items</Link>)</h1>

                {/* delivery address */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment__address">
                        <p>{user?.email}</p>  
                        <p>123 react lane</p>
                        <p>los angles, CA</p>
                    </div>                    
                </div>

                {/* review items  */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review items and Delivery</h3>
                    </div>
                    <div className="payment__items">
                        {basket.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                </div>

                {/* payment method */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment__details">
                        {/* strip magic will go */}
                                
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Payment