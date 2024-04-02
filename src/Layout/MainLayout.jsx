import React from 'react'
import Header from '../UI/Header'
import { Outlet } from 'react-router-dom'
import PreFooter from '../UI/PreFooter'
import Footer from '../UI/Footer'

const MainLayout = () => {
  return (
    <>
     <Header />
     <Outlet /> 
    <PreFooter />
    <Footer />
    </>
  )
}

export default MainLayout
