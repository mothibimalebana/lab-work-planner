import React, { createContext, useContext, useState } from "react";
import { appSchedule, updateSchedule } from "../mockData";


const AppDataContext = createContext<any>({});

const AppDataProvider = (children: any) => {

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

export const useAppData = () => useContext(AppDataContext);