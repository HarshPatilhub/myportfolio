import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    themeMode: "light",
    darkMode: ()=>{},
    lightMode: ()=>{}
})

export const ThemeContextProvider = ThemeContext.Provider


//create our custom hooks to use it

export default function useTheme(){
    return  useContext(ThemeContext)
}