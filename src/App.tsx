import { Outlet } from "react-router"
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import phoneError from "./assets/svg/phone-error-svgrepo-com.svg"
import { useState } from "react";
import { appSchedule, mockStudents, updateSchedule } from "./assets/mockData";
import type { outletContextProp } from "../types/context";

function App() {  
  const [schedule, setSchedule] = useState(appSchedule);
  const [students, setStudents] = useState(mockStudents);

  const outletContext = {
    schedule: schedule,
    setSchedule: setSchedule,

    students: students,
    setStudents: setStudents,

    newSchedule: updateSchedule,
  }

  const getPage = window.location.pathname.slice(5);
  console.log(getPage);
  const currPage = getPage[0].toUpperCase() + getPage.slice(1);

  const [page, setPage] = useState(currPage);

  return (
    <div className="app">
      <div className="desktop hidden md:flex flex-col overflow-x-hidden">
        <Navbar setLink={setPage}/>
        <Header page={page}/>
        <Outlet context={outletContext satisfies outletContextProp}/>
      </div>
      <div className="mobile flex flex-col md:hidden">
        <div className="icon"><img src={phoneError} alt="disconnected phone"/></div>
        <div className="p text-2xl"><h1>The application is not available on mobile devices yet</h1></div>
      </div>
    </div>
  )
}



export default App
