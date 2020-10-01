import React from 'react'
import './css/SubTotal.css'
import CurrencyFormat from 'react-currency-format'

function SubTotal() {
    return (
        <div className='subtotal'>
            <CurrencyFormat
                renderText={(text)=>(
                    <>
                        <p>
                            Subtotal (0 items): <strong>0</strong>
                        </p>
                        <small className='subtotal__gift'>
                            <input type='checkbox'/>
                            This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={0}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'$'}
            />
            <button>Proceed to checkbox</button>
        </div>
    )
}

export default SubTotal
