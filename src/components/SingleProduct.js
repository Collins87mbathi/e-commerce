import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { CartState } from '../Context/Context';




const SingleProduct = ({ prod }) => {
  
    const { state: {cart}, dispatch, } = CartState(); 

    return (
        <div className="products">
          <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={prod.img} />
  <Card.Body>
      <div className='content'>
    <Card.Title>{prod.title}</Card.Title>
    <Card.Text>
    <h4>{prod.company}</h4>
    <span>${prod.price}</span>
    
    </Card.Text>
    </div>
    <div className="buttons">
    <Button onClick={()=> dispatch({type: "ADD_TO_CART",payload: prod,})} className="primary" >ADD</Button>
    <Button onClick={()=> dispatch({type: "REMOVE_FROM_CART",payload: prod,})} className="danger">REMOVE</Button>
    


    </div>

  </Card.Body>
</Card>
        </div>
    )
}

export default SingleProduct




/*onClick={()=> dispatch({type: "ADD_TO_CART",payload: prod,})}*/