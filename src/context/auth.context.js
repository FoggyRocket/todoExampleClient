import { useEffect,useState,createContext } from "react";


const AuthContext = createContext();


function AuthProviderWrapper(props){

    return (
        <AuthContext.Provider>
            {props.children}
        </AuthContext.Provider>
    )
}


export {AuthContext,AuthProviderWrapper}