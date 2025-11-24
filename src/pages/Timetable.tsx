import { useState } from "react";
import BreadCrumbs from "../components/Breadcrumbs"
import Primitive from "../components/Primitive";

const Timetable = () => {
    const [mode, setMode] = useState('Lab Assistant');

    return(
        <div className="timetable">
            <BreadCrumbs mode={mode} setMode={setMode}/>
            <Primitive/>
        </div>
    )
}

export default Timetable;