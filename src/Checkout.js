import React from 'react'
import './css/Checkout.css'
import CheckoutProduct from './Product/CheckoutProduct'
import { useStateValue } from './StateProvider'
import SubTotal from './SubTotal'
import FlipMove from 'react-flip-move';

function Checkout() {
    const[{basket,user}, dispatch] = useStateValue()

    const customLeaveAnimation = {
        from: { transform: 'scale(1, 1)' },
        to:   { transform: 'scale(0.5, 1) translateY(-20px)' }
      };

    return (
        <div className='checkout'>
           <div className="checkout__left">
            <div className="checkout__ad">
                <img src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt=""/>
                <div className="checkout__title">
                    {user && (<h3>Hello, {user?.email}</h3>)}
                    <h2>Your chopping bascket</h2>
                    <FlipMove 
                        staggerDurationBy="30"
                        duration={500}
                        enterAnimation='accordianVertical'
                        leaveAnimation='accordianVertical'
                        typeName="ul"
                         >
                        {basket.map(({id,title,image,price, rating},i)=>(
                            <CheckoutProduct
                                key = { i }
                                index = { i }
                                id = { id }
                                title = { title }
                                image  = { image }
                                price = { price }
                                rating = {rating }
                            />
                        ))}
                    </FlipMove>
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
