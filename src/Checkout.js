import React from 'react'
import './css/Checkout.css'
import CheckoutProduct from './Product/CheckoutProduct'
import { useStateValue } from './StateProvider'
import SubTotal from './SubTotal'

function Checkout() {
    const[{basket}, dispatch] = useStateValue()
    return (
        <div className='checkout'>
           <div className="checkout__left">
            <div className="checkout__ad">
                <img src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt=""/>
                <div className="checkout__title">
                    <h2>Your chopping bascket</h2>

                    {basket.map(({id,title,image,price, rating})=>(
                        <CheckoutProduct
                            id = { id }
                            title = { title }
                            image  = { image }
                            price = { price }
                            rating = {rating }
                         />
                    ))}
                </div>
            </div>
           </div>
           <div className="checkout__right">
                <SubTotal />
           </div>
        </div>
    )
}

export default Checkout
