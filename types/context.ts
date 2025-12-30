import type { Slot, Students } from "../src/assets/mockData";

export type AppDataContextType = {
    schedule: Map<string, Map<string, Slot>>,
    setSchedule: React.Dispatch<React.SetStateAction<Map<string, Map<string, Slot>>>>,
    schoolSchedule: Map<string, Map<string, Slot>>,
    newSchedule: Map<string, Map<string, Slot>>,
    setNewSchedule: React.Dispatch<React.SetStateAction<Map<string, Map<string, Slot>>>>,
    students: Students[],
    setStudents: React.Dispatch<React.SetStateAction<Students[]>>,
    warnings: Map<string, string>,
    setWarning: React.Dispatch<React.SetStateAction<Map<string, string>>>,
}
