import React from 'react'
import '../css/product.css'
function Product({title, price, img, rating}) {
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
            <button>Add to bascket</button>
        </div>
    )
}

export default Product
