import "./category.styles.scss";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { categoriesContext } from "../../contexts/categories.context";
import { useState } from "react";
import { useEffect } from "react";
import { ProductCard } from "../../components/product-card/product-card.component";

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(categoriesContext);
  const [products, setProducts] = useState();

  useEffect(()=> {
    const newProduct = categoriesMap.size>0 ? categoriesMap.get(category): null;
    setProducts(newProduct);
  }, [category, categoriesMap]);
  return (
    <div className="category-container">
    {
      products && products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))
    }
    </div>
  );
};

export default Category;