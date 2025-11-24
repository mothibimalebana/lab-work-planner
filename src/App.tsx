import { Outlet } from "react-router"
import Header from "./components/Header"
import Navbar from "./components/Navbar"

function App() {

  return (
    <div className="app overflow-x-hidden">
      <Navbar/>
      <Header/>
      <Outlet/>
    </div>
  )
}

export default App
