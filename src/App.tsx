import { Outlet } from "react-router"
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import phoneError from "/home/mothibi/workspace/github.com/mothibimalebana/lab-work-planner-local/src/assets/svg/phone-error-svgrepo-com.svg"


function App() {

  return (
    <div className="app">
      <div className="desktop hidden md:flex flex-col overflow-x-hidden">
        <Navbar/>
        <Header/>
        <Outlet/>
      </div>
      <div className="mobile flex flex-col md:hidden">
        <div className="icon"><img src={phoneError} alt="disconnected phone"/></div>
        <div className="p text-2xl"><h1>The application is not available on mobile devices, yet!</h1></div>
      </div>
    </div>
  )
}

export default App
