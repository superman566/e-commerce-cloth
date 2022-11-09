import { createContext, useEffect, useState } from "react";

export const cartContext = createContext({
  cartCount: 0,
  isCartOpen: false,
  setIsCartOpen: ()=>{},
  cartItems: [],
  addItemToCart: ()=> {}
});

export const CartProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(0);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems ] = useState([]);

  useEffect(()=> {
    const newCount = cartItems.reduce((total, item)=> total + item.quantity, 0);
    setCartCount(newCount);
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    let newCartItems = [];
    // find if cartItems contains productToAdd
    const existingItem = cartItems.find(item => item.id === productToAdd.id);
    if(existingItem) {
      // if found, increment quantity
      newCartItems = cartItems.map(item => (item.id === productToAdd.id)? {...item, quantity: item.quantity+1} : item);
    } else {
      // if not found create a new cartItem
      newCartItems = [...cartItems, {...productToAdd, quantity: 1}];
    }
    console.log('add new product to cart---->', newCartItems);
    setCartItems(newCartItems);
  };

  const value = {
    cartCount,
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart
  };
  return (
    <cartContext.Provider value={value}>
      {children}
    </cartContext.Provider>
  );
}; 
