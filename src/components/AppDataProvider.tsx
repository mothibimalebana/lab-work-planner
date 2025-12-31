import { useState, type ReactNode } from "react";
import { assistantScheduleMap, mockStudents, schoolScheduleMap, type warning } from "../assets/mockData";
import { AppDataContext } from "../assets/context/ScheduleContext";




const AppDataProvider = ({children}: {children: ReactNode})  => {

const [schedule, setSchedule] = useState(assistantScheduleMap);
const [schoolSchedule, setSchoolSchedule ] = useState(schoolScheduleMap);
const [newSchedule, setNewSchedule] = useState(structuredClone(schedule));
const [students, setStudents] = useState(mockStudents);
const [warnings, setWarning] = useState< warning>(new Map<string, string>());


const value = {
    schedule,
    setSchedule,
    schoolSchedule,
    setSchoolSchedule,
    newSchedule,
    setNewSchedule,
    students,
    setStudents,
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