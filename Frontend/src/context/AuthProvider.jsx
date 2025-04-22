import React, { createContext, useContext, useState } from "react";

export const AuthContext = createContext();//inbuilt in react
export default function AuthProvider({ children }) { //every comp is it's child like app.jsx main.jsx
  const initialAuthUser = localStorage.getItem("Users");//to get data from local storage of browser so that it can be used in all the other folders
  const [authUser, setAuthUser] = useState(
    initialAuthUser ? JSON.parse(initialAuthUser) : undefined
  );
  return (
    <AuthContext.Provider value={[authUser, setAuthUser]}>
      {children}
    </AuthContext.Provider>
  );
}
export const useAuth = () => useContext(AuthContext);//This API  is mainly done so that user can use it globally
