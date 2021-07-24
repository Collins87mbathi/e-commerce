import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {FaShoppingCart} from 'react-icons/fa'
import { CartState } from '../Context/Context'


const Header = () => {

    const {state : {cart}, } = CartState();

    return (
        <Navbar style={{ height:80}}>
            <Container className="container">
         <Navbar.Brand className='navbar'><Link to ="/">Perez Commerce</Link></Navbar.Brand>
         <div className='nav-container'>
           <div className='logo'> 
           <Link to= '/cart'>
             <FaShoppingCart/>
           </Link>
           </div>
          <div className='amount-container'>
            <p className='total-amount'>{cart.length}</p>
          </div>
        </div>
         </Container>
      </Navbar>
    )
}

export default Header


