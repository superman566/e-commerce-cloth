import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { cartContext } from "../../contexts/cart.context";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";

import "./cart-dropdown.styles.scss";

const CartDropdown = () => {
  const { 
    cartItems
  } = useContext(cartContext);

  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate('checkout');
  };
  
  return (
  <div className="cart-dropdown-container">
    <div className="cart-items">
      {
      cartItems.length === 0? 
      (<span className='empty-message'>Your cart is empty</span>) :
      cartItems.map(item => (<CartItem key={item.id} cartItem={item} />))
      }
    </div>
    <Button onClick={goToCheckoutHandler} >Go To Checkout</Button>
  </div>
  );
};

export default CartDropdown;