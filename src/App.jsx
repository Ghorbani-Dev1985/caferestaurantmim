import { NextUIProvider } from "@nextui-org/react"
import { Route, Routes, useNavigate } from "react-router-dom"
import MainLayout from "./Layout/MainLayout"
import Home from "./Pages/Home/Home"
import ContactUs from "./Pages/ContactUs/ContactUs"
import ImageGallery from "./Pages/ImageGallery/ImageGallery"
import CafeMenu from "./Pages/CafeMenu/CafeMenu"
import RestaurantMenu from "./Pages/RestaurantMenu/RestaurantMenu"
import Menus from "./Pages/Menus/Menus"
import AboutUs from "./Pages/AboutUs/AboutUs"





function App() {
  const navigate = useNavigate()

  return (
    <>
      <NextUIProvider navigate={navigate}>
        <Routes>
          <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
           <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/restaurantMenu" element={<RestaurantMenu />} />
          <Route path="/cafeMenu" element={<CafeMenu />} />
          <Route path="/imageGallery" element={<ImageGallery />} />
          <Route path="/menus" element={<Menus />} />
          </Route>
        </Routes>

      </NextUIProvider>
    </>
  )
}

export default App
