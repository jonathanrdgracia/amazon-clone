import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
export const initialState = {
    basket:[],
    user: null,
}
    export const getBasketTotal=(basket)=>
        basket?.reduce((amount,curr) => curr.price + amount,0)

const reducer = (state, action)=>{
    
    switch (action.type){
        
        case 'ADD_TO_BASKET':
           
            return {
                ...state,
                basket: [action.payload ,...state.basket]
            }
        case 'SET_USER':
            return{
                ...state,
                user: action.user,
            }
        case 'REMOVE_FROM_BASKET':

            // //* 1) Look through the position index
            // const index = state.basket.findIndex(
            //     (basketIndex) => basketIndex.id === action.id
            // )
            // //* 2) Spread the data in a new var
            // let newBasket = [...state.basket]

            // console.log(index);
            // //* 3) Remove index´s position 
            // if(index >= 0) newBasket.splice(index,1)

            let newBasket = [...state.basket]
            newBasket.splice(action.payload,1)
            console.log(action.payload);
            return{
                ...state,
                basket: newBasket
            }
    }
}

export default reducer;