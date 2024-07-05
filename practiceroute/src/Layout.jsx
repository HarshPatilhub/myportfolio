import React from 'react'
import Header from './components/Header/Header'
import { Outlet } from 'react-router-dom'
import { ThemeProvider } from './components/context/Theme'

const Layout = () => {
  return (
    <ThemeProvider>
        <Header/>
        <Outlet/>
    </ThemeProvider>
  )
}

export default Layout
