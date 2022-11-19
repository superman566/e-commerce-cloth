import { Fragment, useContext } from "react";
import { ProductCard } from "../../components/product-card/product-card.component";
import { categoriesContext } from "../../contexts/categories.context";

import "./shop.styles.scss";

const Shop = () => {
  const { categoriesMap } = useContext(categoriesContext);
  const categoriesTitle = categoriesMap.size >0? Array.from(categoriesMap.keys()): [];
  return (
    <Fragment>
      {
        categoriesTitle.map( title => (
          <Fragment key={title}>
            <h2> {title} </h2>
            <div className="product-container">
            {
              categoriesMap.size >0 &&
              Array.from(categoriesMap.get(title)).map(category => (
                <ProductCard key={category.id} product={category} />
              ))
            }
            </div>
          </Fragment>
        ))
      }
    </Fragment>
    
  );
};

export default Shop;