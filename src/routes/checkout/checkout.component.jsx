import { useContext } from "react";
import { cartContext } from "../../contexts/cart.context";

import "./checkout.styles.scss";

const Checkout = () => {
  const {
    cartItems
  } = useContext(cartContext);
  console.log(cartItems);
  return (
    <div>
      checkout page
    </div>
  );
};

export default Checkout;
