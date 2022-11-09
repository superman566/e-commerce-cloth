import { useContext } from "react";
import { ReactComponent as ShopBag } from "../../assets/shopping-bag.svg";
import { cartContext } from "../../contexts/cart.context";
import "./cart-icon.styles.scss";

const CartIcon = () => {
  const {
    cartCount,
    isCartOpen, 
    setIsCartOpen
  } = useContext(cartContext);
  
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
  <div className="cart-icon-container" onClick={toggleIsCartOpen}>
    <ShopBag className="shopping-icon" />
    <span className="item-count">{cartCount}</span>
  </div>
  ); 
};

export default CartIcon;
