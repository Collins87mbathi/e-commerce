import React, { useReducer,useContext,} from 'react'
import { createContext } from 'react';
import {storeProducts} from '../data';

import { cartReducer } from './Reducer';



const cart = createContext();


const Context = ({children}) => {   


  const [state, dispatch] = useReducer(cartReducer, {
   product:storeProducts,
   cart: [],
} );






    return (
       <cart.Provider value= {{ state, dispatch }}>
           {children}
       </cart.Provider>
    )
}

export default Context

export const CartState = () => {
  return useContext(cart);
}