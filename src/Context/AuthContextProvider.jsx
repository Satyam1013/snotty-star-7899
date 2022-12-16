import React, { createContext, useState } from 'react'

export const AuthContext = createContext();

const AuthContextProvider = ({children}) => {

    const [authState, setAuthState] = useState(false);

    const loginUser = () => {
    setAuthState(true);
    }
    const logoutUser = () => {
    setAuthState(false)};
    
  return (
   <AuthContext.Provider value={{authState, loginUser, logoutUser}}>
    {children}
   </AuthContext.Provider>
  )
}

export default AuthContextProvider
