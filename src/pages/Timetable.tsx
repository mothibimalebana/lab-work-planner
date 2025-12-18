import { useState } from "react";
import BreadCrumbs from "../components/Breadcrumbs"
import Table from "../components/Table";
import type { modeValue } from "../../types/timetable";
import { appOutletContext } from "../assets/context/appContext";



const Timetable = () => {
    const [mode, setMode] = useState<modeValue>("Shifts");
    const { schedule } = appOutletContext();

    return(
        <div className="timetable">
            <BreadCrumbs mode={mode} setMode={setMode}/>
            <Table mode={mode} schedule={schedule} />
        </div>
    )
}

export default Timetable;