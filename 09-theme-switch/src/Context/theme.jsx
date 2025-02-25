import React, { createContext, useContext } from "react";


export  const ThemeContext = createContext({
    themeMode: "light",
    darkTheme : ()=>{},
    lightTheme : ()=>{}
})

export const Themeprovider = ThemeContext.Provider

export default function usetheme() {
    return useContext(ThemeContext)
}