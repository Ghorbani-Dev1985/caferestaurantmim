import { NextUIProvider } from "@nextui-org/react"
import { useNavigate } from "react-router-dom"




function App() {
  const navigate = useNavigate()

  return (
    <>
      <NextUIProvider navigate={navigate}>

      </NextUIProvider>
    </>
  )
}

export default App
