import { useState, type ReactNode } from "react";
import { assistantScheduleMap, schoolScheduleMap, type warning } from "../assets/mockData";
import { AppDataContext } from "../assets/context/ScheduleContext";




const AppDataProvider = ({children}: {children: ReactNode})  => {

const [schedule, setSchedule] = useState(assistantScheduleMap);
const [schoolSchedule, setSchoolSchedule ] = useState(schoolScheduleMap)
const [newSchedule, setNewSchedule] = useState(structuredClone(schedule));
const [warnings, setWarning] = useState<warning[] | []>([])


const value = {
    schedule,
    setSchedule,
    schoolSchedule,
    setSchoolSchedule,
    newSchedule,
    setNewSchedule,
    warnings,
    setWarning,
};

return(
    <AppDataContext.Provider value={value}>
    {children}
    </AppDataContext.Provider>
)
}

export default AppDataProvider