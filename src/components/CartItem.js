import React from 'react'
import FormatPrice from "../Helpers/FormatPrice";
import CartQuantity from './CartQuantity';
import { FaTrash } from "react-icons/fa";
import { useCartContext } from "../context/cartcontext";

const CartItem = ({id, name, image, color, price, quantity}) => {
    const { removeItem } = useCartContext();
    const decrease = () => {
       //amount > 1 ? setAmount(amount - 1) : setAmount(1);
    };
  
    const increase = () => {
       //amount < stock ? setAsmount(amount + 1) : setAmount(stock);
    };

  return (
    <div className="cart_heading grid grid-five-column">
    <div className="cart-image--name">
      <div>
        <figure>
          <img src={image} alt={id} />
        </figure>
      </div>
      <div>
        <p>{name}</p>
        <div className="color-div">
          <p>color:</p>
          <div
            className="color-style"
            style={{ backgroundColor: color, color: color }}></div>
        </div>
      </div>
    </div>
    {/* price   */}
    <div className="cart-hide">
      <p>
        <FormatPrice price={price} />
      </p>
    </div>

    
    <CartQuantity 
        quantity = {quantity}
        increase = {increase}
        decrease = {decrease}
        />

    {/* //Subtotal */}
    <div className="cart-hide">
      <p>
        <FormatPrice price={price * quantity} />
      </p>
    </div>

    <div>
      <FaTrash className="remove_icon" onClick={() => removeItem(id)} />
    </div>
  </div>
  );
};

export default CartItem;
