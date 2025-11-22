import { Outlet } from "react-router"
import Header from "./components/Header"
import Navbar from "./components/Navbar"

function App() {

  return (
    <>
      <Navbar/>
      <Header/>
      <Outlet/>
    </>
  )
}

export default App
