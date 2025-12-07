import { useState } from "react";
import BreadCrumbs from "../components/Breadcrumbs"
// import Table from "../components/Table";
import { type modeValue } from "../../types/timetable";

const Timetable = () => {
    const [mode, setMode] = useState<modeValue>("Lab Assistant");

    return(
        <div className="timetable">
            <BreadCrumbs mode={mode} setMode={setMode}/>
            {/* <Table mode={mode}/> */}
        </div>
    )
}

export default Timetable;