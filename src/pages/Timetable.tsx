import { useState } from "react";
import BreadCrumbs from "../components/Breadcrumbs"
import Primitive from "../components/Primitive";
import Bookings from "../components/Bookings";
import type { timetableMode } from "../../types/timetable"

const Timetable = () => {
    const [mode, setMode] = useState('Lab Assistant');

    return(
        <div className="timetable">
            <BreadCrumbs mode={mode} setMode={setMode}/>
            {mode === 'Lab Assistant' ? <Primitive/> : <Bookings/>}
        </div>
    )
}

export default Timetable;