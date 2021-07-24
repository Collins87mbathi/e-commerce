import React, { useEffect, useState } from 'react'
import { CartState } from '../Context/Context'
import CartItem from './CartItem';

const Cart = () => {

    const {state : { cart }} = CartState();
    const [total, setTotal] = useState();

    useEffect(()=>{
        setTotal(cart.reduce((acc,curr)=> acc + Number(curr.price) , 0))
     },[cart])

    if (cart.length === 0) {
        return (
          <section className='cart'>
            {/* cart header */}
            <header>
              <h2>My Items</h2>
              <h4 className='empty-cart'>is currently empty</h4>
            </header>
          </section>
        )
      }
      return (
        <section className='cart'>
          {/* cart header */}
          <header>
            <h2>My Items</h2>
          </header>
          {/* cart items */}
          <div>
            {cart.map((item) => {
              return <CartItem key={item.id} {...item} />
            })}
          </div>
          {/* cart footer */}
          <footer>
            <hr />
            <div className='cart-total'>
              <h4>
                total <span>${total}</span>
              </h4>
            </div>
      </footer>
    </section>
  )
}
export default Cart
