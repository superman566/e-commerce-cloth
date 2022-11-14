import { createContext, useEffect, useState } from "react";

export const cartContext = createContext({
  cartCount: 0,
  totalPrice: 0,
  isCartOpen: false,
  setIsCartOpen: ()=>{},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  clearItemFromCart: () => {}
});

export const CartProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems ] = useState([]);

  useEffect(()=> {
    const newCount = cartItems.reduce((total, item)=> total + item.quantity, 0);
    setCartCount(newCount);
  }, [cartItems]);

  useEffect(()=> {
    const newTotalPrice = cartItems.reduce((total,item)=>total + item.quantity*item.price , 0);
    setTotalPrice(newTotalPrice);
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

  const removeItemFromCart = (productToRemove) => {
    let newCartItems = [];
    const existingItem = cartItems.find(item => item.id === productToRemove.id);
    if(!existingItem) return;
    if(existingItem.quantity <= 1) {
      newCartItems = cartItems.filter(item => item.id !== productToRemove.id);
    } else {
      newCartItems = cartItems.map(item => (item.id === productToRemove.id)? {...item, quantity: item.quantity-1} : item);
    }
    setCartItems(newCartItems);
  };

  const clearItemFromCart = (productToClear) => {
    let newCartItems = [];
    const existingItem = cartItems.find(item => item.id === productToClear.id);
    if(!existingItem) return;
    newCartItems = cartItems.filter(item => item.id !== productToClear.id);
    setCartItems(newCartItems);
  };

  const value = {
    cartCount,
    totalPrice,
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    removeItemFromCart,
    clearItemFromCart
  };
  return (
    <cartContext.Provider value={value}>
      {children}
    </cartContext.Provider>
  );
}; 
