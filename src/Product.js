import React from 'react';
import './Product.css';
import { useStateValue } from './StateProvider';

// title, image, price, rating -> import from Home.js
function Product({ id, title, image, price, rating}) {
    const [{basket}, dispatch] = useStateValue(); // this line is very important
    // var pop_title, pop_image, pop_rating, pop_price;

    // console.log("this is basket", basket);
    const addToBasket = () => {
        // dispatch the item into the data layer
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        },
        // pop_image = image,
        // pop_price = price,
        // pop_title = title,
        // pop_rating = rating,
        )
    }
    // console.log('dsfsfsdfsdfsds----new')
    // console.log(pop_price);

  return (
    <div className='product'>
        <div className="product__info">
            <p> {title} </p>
            <p className='product__price'>
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className="product__rating">
                {Array(rating)
                .fill()
                .map((_, i) => (
                    <p>⭐</p>
                ))}
            </div>
        </div>

        <img className='product__image' src={image} alt="" />
        
        <button className='product__button' onClick={addToBasket}>Add to Basket</button>

        {/* new lines for pop up basket */}
        {/* <div className="product__popup">
            <div className="product__popup__header">
                <div className="product__popup__header__title">Product Added!</div>
                <button className='product__popup__close'>&times;</button>
            </div>
            <div className="product__popup__image">
                <img src={image} alt="" />
            </div>
            <div className="product__popup__title">{title}</div>
            <div className="product__popup__price">{price}</div>
            <div className="product__popup__rating">{rating}</div>
        </div> */}
        
    </div>
  );
}

export default Product