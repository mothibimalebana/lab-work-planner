import { useState, type ReactNode } from "react";
import { appSchedule, updateSchedule, type warning } from "../assets/mockData";
import { AppDataContext } from "../assets/context/ScheduleContext";




const AppDataProvider = ({children}: {children: ReactNode})  => {

const [schedule, setSchedule] = useState(appSchedule);
const [newSchedule, setNewSchedule] = useState(updateSchedule);
const [warnings, setWarning] = useState<warning[] | []>([])


const value = {
    schedule,
    setSchedule,
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