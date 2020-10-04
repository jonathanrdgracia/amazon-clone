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
    }
}

export default reducer;