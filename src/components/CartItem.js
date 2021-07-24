import React from 'react'
import { CartState } from '../Context/Context'

const CartItem = ({id,img,price,title}) => {

    const {  dispatch,} = CartState();
    return (
        <article className='cart-item'>
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className='item-price'>${price}</h4>
        {/* remove button */}
        <button
          className='remove-btn'
          onClick={()=> dispatch({type: "REMOVE",payload: id,})}
        >
          remove
        </button>
      </div>
      </article>
    )
}

export default CartItem
