export const cartReducer = (state, action) => {
    switch (action.type) {
      
    case "ADD_TO_CART" :
        
     return { ...state, cart: [...state.cart, { ...action.payload }] };
    
    case "REMOVE_FROM_CART" :
        return {
            ...state,
            cart: state.cart.filter((c) => c.id !== action.payload.id),
        };
        case "REMOVE" :
            return {
                ...state,
                cart: state.cart.filter((c) => c.id !== action.payload),
            };

     
   
        default:
            return state;

    }
}