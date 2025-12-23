import type { Schedule, warnings } from "../src/assets/mockData";

export type AppDataContextType = {
    schedule: Schedule,
    setSchedule: React.Dispatch<React.SetStateAction<Schedule>>,
    newSchedule: Schedule,
    setNewSchedule: React.Dispatch<React.SetStateAction<Schedule>>,
    warnings: warnings,
    setWarning: React.Dispatch<React.SetStateAction<warnings>>,
}
