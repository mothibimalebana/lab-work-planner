import { useState } from "react";
import BreadCrumbs from "../components/Breadcrumbs"
import Table from "../components/Table";
import type { modeValue } from "../../types/timetable";
import { mockSchedule } from "../assets/mockData";



const Timetable = () => {
    const [mode, setMode] = useState<modeValue>("Shifts");

    return(
        <div className="timetable">
            <BreadCrumbs mode={mode} setMode={setMode}/>
            <Table mode={mode} schedule={mockSchedule} bookings={mockSchedule} />
        </div>
    )
}

export default Timetable;