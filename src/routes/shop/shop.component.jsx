import { useContext } from "react";
import { ProductCard } from "../../components/product-card/product-card.component";
import { productsContext } from "../../contexts/products.context";

import "./shop.styles.scss";

const Shop = () => {
  const { products } = useContext(productsContext);
  return (
    <div className="product-container">
      {
        products.map(product => (
        <ProductCard key={product.id} product={product} />
        ))
      }
    </div>
  );
};

export default Shop;