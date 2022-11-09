import Button from "../button/button.component";
import { useContext } from "react";
import { cartContext } from "../../contexts/cart.context";

import "./product-card.styles.scss";

export const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(cartContext);

  const addProductToCartHandler = () => {
    addItemToCart(product);
  };

  return (
  <div className="product-card-container">
    <img src={imageUrl} alt={`${name}`}/>
    <div className="footer">
      <span className="name">{name}</span>
      <span className="price">{price}</span>
    </div>
    <Button buttonType='inverted' onClick={addProductToCartHandler} >Add to Cart</Button>
  </div>
  )
}
