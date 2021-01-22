import React from 'react'
import './Amazon.css'
import { useStateValue } from './StateProvider';



function Product({id, title, image, price, rating, hideButton}) {
    const [{ basket, user }, dispatch] = useStateValue();
    
    const addToBasket =() => {
        //dispatch  items into data layer
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        });
    };
   
    return (
        <div className="product">
           <div className="product_info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating)
                    .fill()
                    .map((_, i) => (
                        <p>🌟</p>
                    ))}
                </div>
           </div>
            <img src={image} alt="" /> 
            
           <button onClick={addToBasket}>Add to Basket</button>        
        </div>
    )
}

export default Product
