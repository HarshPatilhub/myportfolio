import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'
import Footers from './components/Footers'
import { ThemeContextProvider } from './contexts/Theme'
import gsap from 'gsap/gsap-core'
import { CursorProvider } from './contexts/Cursor'
import Cursor from './components/Cursor'


const App = () => {

  const [themeMode,setthemeMode] = useState("bg-black")
  const [showCursor,setShowCursor] = useState(false)

  const lightMode = ()=>{
    setthemeMode("bg-white")
  }
  const darkMode = ()=>{
    setthemeMode("bg-black")
  }

  //actual change in theme
  useEffect(()=>{
    document.querySelector("html").classList.remove("bg-white","bg-black")
    document.querySelector("html").classList.add(themeMode)

    gsap.to(".ball", {
      xPercent: -50,
      yPercent: -50,
    })
    const target = gsap.utils.toArray(".ball")
    window.addEventListener("mousemove",(e)=>{
      gsap.to(target,{
        duration: 0.5,
        x: e.clientX,
        y: e.clientY,
        ease: "power1.out",
        overwrite: "auto",
        stagger: 0.02,
      })
    })
    
  }, [themeMode])
  
  return (
    <ThemeContextProvider value={{themeMode,lightMode,darkMode}}>
      <CursorProvider value= {{showCursor,setShowCursor}}>
      <>
     <div className= {` w-full transition-all ${themeMode} duration-500 ease-linear `}>
     <Header/>
     <Outlet/>
     <Footers/>
     </div>
    </>
      </CursorProvider>
    </ThemeContextProvider>
  )
}

export default App
