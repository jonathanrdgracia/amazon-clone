import React, {forwardRef} from 'react'
import '../css/CheckoutProduct.css'
import { useStateValue } from '../StateProvider'

const CheckoutProduct = forwardRef(({id, image,title, price, rating,index},ref) => {
    const [{ basket }, dispatch] = useStateValue()
    console.log(ref);
    const removeFromBasket = () =>{
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            payload: index,
        })
    }
    
    return (
        <div ref = {ref} className='checkoutProduct'>
        
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
})

export default CheckoutProduct
