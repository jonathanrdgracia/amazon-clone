export const initialState = {
    basket:[]
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
        case 'REMOVE_FROM_BASKET':

            //* 1) Look through the position index
            const index = state.basket.findIndex(
                (basketIndex) => basketIndex.id == action.payload
            )
            //* 2) Spread the data
            let newBasket = [...state.basket]
            
            //* 3) Remove index´s position 
            if(index >= 0) newBasket.splice(index,1)

            return{
                ...state,
                basket: newBasket
            }
    }
}

export default reducer;