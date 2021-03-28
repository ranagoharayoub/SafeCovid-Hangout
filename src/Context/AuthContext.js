import { createContext, useContext, useReducer } from "react";

const AuthContext = createContext(null)

export const AuthProvider = ({reducer,initialState,children}) =>(
    <AuthContext.Provider  value = {useReducer(reducer, initialState)}>
        {/* {console.log(reducer)} */}
        {children}
    </AuthContext.Provider>
)

export const useStateValue = () => useContext(AuthContext)
