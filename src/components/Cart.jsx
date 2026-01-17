import React from 'react'

const Cart = ({displayCart}) => {
  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {displayCart.map((name, index)=> (
          <li key={index}>{`${name} is in your cart`}</li>
        ))}
      </ul>
    </div>
  )
}

export default Cart
