import { useEffect } from "react";
import { useState,useContext } from "react";
import { createContext } from "react";


//ThemeContext
const ThemeContext = createContext();

//custom usetheme hook

export const useTheme = () => {
    return useContext(ThemeContext);
};

//ThemeProvider

export const ThemeProvider = ({children})=>{
    const [isdarkMode, setisDarkMode] = useState(false)

    const toggleChange = ()=>{
        setisDarkMode((prevstate) => !prevstate)
    }

    const theme = isdarkMode? 'dark' : 'light';

    useEffect(()=>{
        document.documentElement.setAttribute("data-theme", theme)

    },[isdarkMode])

    return (
        <ThemeContext.Provider value={{theme,toggleChange}}>
                {children}
        </ThemeContext.Provider>
    )
}

