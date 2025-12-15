import { useState } from "react";
import BreadCrumbs from "../components/Breadcrumbs"
import Table from "../components/Table";
import type { modeValue } from "../../types/timetable";
import { type Schedule } from "../assets/mockData";



const Timetable = ({schedule}: {schedule: Schedule}) => {
    const [mode, setMode] = useState<modeValue>("Shifts");

    return(
        <div className="timetable">
            <BreadCrumbs mode={mode} setMode={setMode}/>
            <Table mode={mode} schedule={schedule} />
        </div>
    )
}

export default Timetable;