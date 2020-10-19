import React from 'react'
import '../css/CheckoutProduct.css'
import { useStateValue } from '../StateProvider'

const CheckoutProduct = ({id, image,title, price, rating}) => {
    const [{ basket }, dispatch] = useStateValue()

    const removeFromBasket = () =>{
        console.log(` ID: ${id}`);
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }
    return (
        <div className='checkoutProduct'>
            <img className='checkoutProduct__image' src={image} />
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <smal>$</smal>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {Array(rating)
                        .fill()
                        .map((_)=>(
                            <p>🌟</p>
                    ))}
                </div>
                <button onClick={ removeFromBasket }>Remove from bascket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
