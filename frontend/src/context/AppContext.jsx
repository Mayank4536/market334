import { createContext, useState } from "react";
import { profiles } from "../assets/assets";

export const AppContext = createContext()

const AppContextProvider = (props)=>{

    const currency = '₹'
    //Here we add a state variable for cross_icon in Login page
    const [showLogin,setShowLogin] = useState(false)


    const value = {
        profiles,
        showLogin,setShowLogin
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )

}

export default AppContextProvider