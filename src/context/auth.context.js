import { useEffect,useState,createContext } from "react";
import {verifyEp} from "../services/auth.services"

const AuthContext = createContext();


function AuthProviderWrapper(props){

    const [isLoggedIn,setIsLoggedIn] = useState(false);
    const [isLoading,setIsLoading] = useState(true)
    const [user,setUser] = useState(null)

    const storeToken = (token)=>{
        localStorage.setItem("authToken",token)
    }

    const removeToken = ()=>{
        localStorage.removeItem("authToken")
    }

    const authenticateUser = async ()=>{
        try {
             //Obtener el stored token del localStorage
            const storedToken = localStorage.getItem("authToken")

            if(storedToken){
                //aqui va alog
                const { data } = await verifyEp()
                //response.data
                setIsLoggedIn(true)
                setIsLoading(false)
                setUser(data)
            }else{
                //diremos que no hay usuario
                setIsLoggedIn(false)
                setIsLoading(false)
                setUser(null)
            }
        } catch (error) {
            setIsLoggedIn(false)
            setIsLoading(false)
            setUser(null)
        }
       
    }

    const logOutUser = ()=>{
        removeToken()
        authenticateUser()
    }

    useEffect( ()=>{
        authenticateUser()
    },[] )

    return (
        <AuthContext.Provider value={{
            isLoading,
            isLoggedIn,
            user,
            storeToken,
            logOutUser,
            authenticateUser
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}


export {AuthContext,AuthProviderWrapper}