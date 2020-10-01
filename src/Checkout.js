import React from 'react'
import './css/Checkout.css'
import SubTotal from './SubTotal'

function Checkout() {
    return (
        <div className='checkout'>
           <div className="checkout__left">
            <div className="checkout__ad">
                <img src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt=""/>
                <div className="checkout__title">
                    <h2>Your chopping bascket</h2>
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
