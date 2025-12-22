import { useState, type ReactNode } from "react";
import { appSchedule, updateSchedule } from "../assets/mockData";
import { AppDataContext } from "../assets/context/ScheduleContext";




const AppDataProvider = ({children}: {children: ReactNode})  => {

const [schedule, setSchedule] = useState(appSchedule);
const [ newSchedule, setNewSchedule ] = useState(updateSchedule);


const value = {
    schedule,
    setSchedule,
    newSchedule,
    setNewSchedule,
};

return(
    <AppDataContext.Provider value={value}>
    {children}
    </AppDataContext.Provider>
)
}

export default AppDataProvider