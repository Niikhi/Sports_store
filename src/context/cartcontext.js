import { createContext, useContext, useReducer,useEffect } from "react";
import reducer from "../reducer/cartReducer"

const CartContext = createContext();

const getLocalCartData = () => {
    let newCartData = localStorage.getItem("myCart");
    if(newCartData === []) return [];
    else return JSON.parse(newCartData);
}

const initialstate = {
    //cart: [],
    cart:getLocalCartData(),
    total_item:"",
    total_amount:"",
    shipping_fee:500,
}

const CartProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer,initialstate);


    const addToCart = (id, color, quantity, product) => {
        dispatch({type:"ADD_TO_CART",payload:{id, color, quantity, product}});
    }

    const removeItem = (id) => {
        dispatch({ type: "REMOVE_ITEM", payload: id });
      };

    const clearCart = () => {
        dispatch({ type:"CLEAR_CART"})
    }


    //local storage
    useEffect( () => {
        localStorage.setItem("myCart",JSON.stringify(state.cart))
    },[state.cart]);






    return <CartContext.Provider value={{...state, addToCart, removeItem,clearCart}}>
        {children}
    </CartContext.Provider>
};


const useCartContext = () => {
    return useContext(CartContext);
  }

export {CartProvider,useCartContext};