import { NextUIProvider } from "@nextui-org/react"
import { useNavigate } from "react-router-dom"
import Header from "./UI/Header"




function App() {
  const navigate = useNavigate()

  return (
    <>
      <NextUIProvider navigate={navigate}>
          <Header />
      </NextUIProvider>
    </>
  )
}

export default App
