import { Fragment, useContext } from "react";
import CategoryPreview from "../../components/category-preview/category-preview.component";
import { categoriesContext } from "../../contexts/categories.context";

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(categoriesContext);
  const categoriesTitle = categoriesMap.size >0? Array.from(categoriesMap.keys()): [];
  return (
    <Fragment>
      {
        categoriesTitle.map( title => (
          <CategoryPreview 
          key={title} 
          title={title} 
          products={ categoriesMap.get(title)} 
          />
        ))
      }
    </Fragment>
    
  );
};

export default CategoriesPreview;