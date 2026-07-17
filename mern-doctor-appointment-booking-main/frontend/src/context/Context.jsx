import React from "react";
import { createContext, useState } from "react";
import { doctors } from "../assets/assets";


// eslint-disable-next-line react-refresh/only-export-components
export const AppContext = createContext()

const AppContextProvider = ({ children }) => {


   const [isLogin, setIsLogin] = useState(localStorage.getItem('token') ? true : false)
   const [state, setState] = useState('sign up')
   const [token, setToken] = useState(localStorage.getItem('token') ? localStorage.getItem('token') : false)
   const backendUrl = 'http://localhost:5000'
   const value = {
      state, setState,
      doctors,
      backendUrl,
      token, setToken,
      setIsLogin,
      isLogin
   }


   return (
      <AppContext.Provider value={value}>
         {children}
      </AppContext.Provider>
   );
};

export default AppContextProvider;