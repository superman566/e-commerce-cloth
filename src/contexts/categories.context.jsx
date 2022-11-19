import { createContext, useState , useEffect } from "react";
import { getCategoriesAndProducts } from "../utils/firebase/firebase.utils";

export const categoriesContext = createContext({
  categoriesMap: []
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});

  useEffect(()=>{
    const getCategoriesMap = async () => {
      const newCategoriesMap = await getCategoriesAndProducts();
      setCategoriesMap(newCategoriesMap);
      console.log('categoryMap->', newCategoriesMap);
    }
    getCategoriesMap();
  }, []);

  const value = {
    categoriesMap
  };
  return (
    <categoriesContext.Provider value={value}>
      {children}
    </categoriesContext.Provider>
  );
}
