import React from 'react'
import {Outlet } from 'react-router-dom'
import Header from './componenta/Header/Header'
import  Footer  from "./componenta/Footer/Footer"


function App() {


  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  ) 
}

export default App
