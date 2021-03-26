import { createContext, useContext, useReducer } from "react";

const AuthContext = createContext(null)

export const AuthProvider = ({reducer,initialState,children}) =>(
    <AuthContext.Provider  value = {useReducer(reducer, initialState)}>
        {children}
    </AuthContext.Provider>
)

export const useStateValue = () => useContext(AuthContext)
