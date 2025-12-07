import { useState } from "react";
import BreadCrumbs from "../components/Breadcrumbs"
import Table from "../components/Table";
import type { modeValue } from "../../types/timetable";
import { FiveBySeven } from "../assets/mockData.tsx/timetable";


const Timetable = () => {
    const [mode, setMode] = useState<modeValue>("Shifts");

    return(
        <div className="timetable">
            <BreadCrumbs mode={mode} setMode={setMode}/>
            <Table mode={mode} schedule={FiveBySeven}/>
        </div>
    )
}

export default Timetable;