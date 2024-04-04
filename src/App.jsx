import { NextUIProvider } from "@nextui-org/react"
import { Route, Routes, useNavigate } from "react-router-dom"
import MainLayout from "./Layout/MainLayout"
import Home from "./Pages/Home/Home"
import ContactUs from "./Pages/ContactUs/ContactUs"
import ImageGallery from "./Pages/ImageGallery/ImageGallery"





function App() {
  const navigate = useNavigate()

  return (
    <>
      <NextUIProvider navigate={navigate}>
        <Routes>
          <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/imageGallery" element={<ImageGallery />} />
          </Route>
        </Routes>

      </NextUIProvider>
    </>
  )
}

export default App
