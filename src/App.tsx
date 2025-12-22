import { Outlet } from "react-router"
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import phoneError from "./assets/svg/phone-error-svgrepo-com.svg"
import { useState } from "react";


function App() {  
  //Get
  const getPathname = window.location.pathname.slice(5);
  const pathNameStr = getPathname[0].toUpperCase() + getPathname.slice(1);

  const [pathname, setPathname] = useState(pathNameStr);

  return (
    <div className="app">
      <div className="desktop hidden md:flex flex-col overflow-x-hidden">
        <Navbar setLink={setPathname}/>
        <Header page={pathname}/>
        <Outlet/>
      </div>
      <div className="mobile flex flex-col md:hidden">
        <div className="icon"><img src={phoneError} alt="disconnected phone"/></div>
        <div className="p text-2xl"><h1>The application is not available on mobile devices yet</h1></div>
      </div>
    </div>
  )
}



export default App
