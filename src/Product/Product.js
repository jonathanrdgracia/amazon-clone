import React,{useEffect} from 'react'
import '../css/product.css'
import { useStateValue } from '../StateProvider'
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function Product({id,title, price, img, rating}) {
    const [{basket}, dispatch] = useStateValue ()

   useEffect(()=>{
        console.log(basket);
   },[basket])

    const addToBasket=()=> {
        toast.success('🛒 Product added inside the basket', {
            position: "bottom-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
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
            <button onClick={addToBasket}>Add to basket</button>
            <ToastContainer />
        </div>
    )
}

export default Product
