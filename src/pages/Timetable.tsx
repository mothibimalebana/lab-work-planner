import { useState } from "react";
import BreadCrumbs from "../components/Breadcrumbs"
import Table from "../components/Table";
import type { modeValue } from "../../types/timetable";
import { useAppData } from "../assets/context/ScheduleContext";



const Timetable = () => {
    const [mode, setMode] = useState<modeValue>("Shifts");
    const {schedule} = useAppData();

    return(
        <div className="timetable mb-20">
            <BreadCrumbs mode={mode} setMode={setMode}/>
            <Table mode={mode} schedule={schedule} />
        </div>
    )
}

export default Timetable;