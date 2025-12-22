import type { Schedule, Students } from "../src/assets/mockData";

export type outletContextProp = {
    schedule: Schedule,
    setSchedule: (schedule: Schedule) => void,

    students: Students[],
    setStudents: (students: Students[]) => void,

    newSchedule: Schedule,
}

export type AppDataContextType = {
    schedule: Schedule,
    setSchedule: React.Dispatch<React.SetStateAction<Schedule>>,
    newSchedule: Schedule,
    setNewSchedule: React.Dispatch<React.SetStateAction<Schedule>>,
}