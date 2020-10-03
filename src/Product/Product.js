import React,{useEffect} from 'react'
import '../css/product.css'
import { useStateValue } from '../StateProvider'

function Product({id,title, price, img, rating}) {
    const [{basket}, dispatch] = useStateValue ()

   useEffect(()=>{
        console.log(basket);
   },[basket])

    const addToBasket=()=> {
        dispatch({
            type:'ADD_TO_BASKET',
            payload:{
                id:id,
                title: title,
                image: img,
                price: price,
                rating: rating,
            }
        })
    }
    return (
        <div className='product'>
            <div className='product__info'>
                <p>{title}</p>
                <p className='product__price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className='product__rating' >
                   {
                       Array(rating)
                       .fill()
                       .map((_,i)=>(
                            <p>⭐</p>
                       ))
                   }
                </div>
            </div>
            <img
                src={img} 
            />
            <button
                onClick={addToBasket}>Add to bascket</button>
        </div>
    )
}

export default Product
