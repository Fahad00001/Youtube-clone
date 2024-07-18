import { createContext, useContext, useEffect, useState } from "react";
import { fetchData } from "../Utils/Rapidapi";

export const AuthContext=createContext();
export default function Authprovider({children}){

    const[loading, SetLoading]=useState(false)
    const[data,setData]=useState([])
    const [value,setValue]=useState("New")

    useEffect(()=>{
        fetchAllData(value)
    },[value])

    const fetchAllData=(query)=>{
        SetLoading(true)
        fetchData(`search/?q=${query}`).then(({contents})=>{
            console.log(contents);
            setData(contents);
            SetLoading(false);
        });
    };
    return(
        <AuthContext.Provider value={{loading,data,value,setValue}}>
            {children}
        </AuthContext.Provider>
    );

}


export const useAuth = () => useContext(AuthContext);