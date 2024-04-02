import { NextUIProvider } from "@nextui-org/react"
import { Route, Routes, useNavigate } from "react-router-dom"
import MainLayout from "./Layout/MainLayout"
import Home from "./Pages/Home/Home"





function App() {
  const navigate = useNavigate()

  return (
    <>
      <NextUIProvider navigate={navigate}>
        <Routes>
          <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          </Route>
        </Routes>

      </NextUIProvider>
    </>
  )
}

export default App
