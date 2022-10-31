import { onAuthUserChangeListener } from "../utils/firebase/firebase.utils";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

// Actual value you want to access
export const userContext = createContext({
  currUser: null,
  setCurrUser: ()=> null,
});

export const UserProvider = ({children}) => {
  const [currUser, setCurrUser] = useState(null);
  useEffect(()=>{
    const unsubscribe = onAuthUserChangeListener((user)=>{
      setCurrUser(user);
    });
    return unsubscribe;
  }, []);

  const value = { 
    currUser, 
    setCurrUser 
  };
  return (
    <userContext.Provider value={value}>
      {children}
    </userContext.Provider>
  )
}