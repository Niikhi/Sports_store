import React from 'react'
import { FaMinus, FaPlus } from "react-icons/fa";

const CartQuantity = ({quantity, increase, decrease }) => {
  return (
    <div className='cart-button'>
       <div className='quantity-toggle'>
        <button onClick={() => decrease()}>  <FaMinus /> </button>
        <div className='quantity-style'>
            {quantity}
        </div>
        <button onClick={() => increase()}><FaPlus /> </button>
       </div>
    </div>
  )
}



export default CartQuantity
