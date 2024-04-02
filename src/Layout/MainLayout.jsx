import React from 'react'
import Header from '../UI/Header'
import { Outlet } from 'react-router-dom'
import PreFooter from '../UI/PreFooter'

const MainLayout = () => {
  return (
    <>
     <Header />
     <Outlet /> 
     <footer>
        <PreFooter />
     </footer>
    </>
  )
}

export default MainLayout
