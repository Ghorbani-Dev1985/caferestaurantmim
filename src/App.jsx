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
import Blogs from "./Pages/Blogs/Blogs"
import Blog from "./Pages/Blog/Blog"





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
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blog/:id" element={<Blog />} />
          </Route>
        </Routes>

      </NextUIProvider>
    </>
  )
}

export default App
