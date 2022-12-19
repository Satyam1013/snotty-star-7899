import React, { createContext, useState } from 'react'

export const AuthContext = createContext();

const AuthContextProvider = ({children}) => {

    const [authState, setAuthState] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
    const [name,setName] = useState('')

    const handleShowLogin = () => {
    setShowLogin(true)
    }
    const handleShowLogout = () => {
    setShowLogin(false)}
    const loginUser = () => {
    setAuthState(true);
    }
    const logoutUser = () => {
    setAuthState(false)};
    
  return (
   <AuthContext.Provider value={{authState, loginUser, logoutUser, setName,name,handleShowLogin,showLogin,handleShowLogout}}>
    {children}
   </AuthContext.Provider>
  )
}

export default AuthContextProvider
