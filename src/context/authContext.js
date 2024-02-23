import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

//Context provider
export const AuthContextProvider = ({children})=>{
    //Declare currentUser variable
    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null
    );

    //Function calls the login backend function, sends the correct inputs, and sets the current user logged in
    const login = async(inputs)=>{
        const res = await axios.post("http://localhost:8801/api/auth/login", inputs, {
            withCredentials: true,
        });
        setCurrentUser(res.data);
    };

    //Function calls the logout backend function, and sets the current user to null
    const logout = async(inputs)=>{
        const res = await axios.post("http://localhost:8801/api/auth/logout", {
            withCredentials: true,
        });
        setCurrentUser(null);
    };

    //Saves thes current user in local storage
    useEffect(()=>{
        localStorage.setItem("user", JSON.stringify(currentUser));
    },[currentUser]);

    //Acts as a blueprint for where the context is supposed to be used
    return (
        <AuthContext.Provider value={{ currentUser, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};