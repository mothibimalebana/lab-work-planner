import { createContext, useState, type ReactNode } from "react";
import { appSchedule, updateSchedule } from "../mockData";
import type { AppDataContextType } from "../../../types/context";


const AppDataContext = createContext<AppDataContextType | undefined>(undefined);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
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