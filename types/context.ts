import type { Slot, warnings } from "../src/assets/mockData";

export type AppDataContextType = {
    schedule: Map<string, Map<string, Slot>>,
    setSchedule: React.Dispatch<React.SetStateAction<Map<string, Map<string, Slot>>>>,
    schoolSchedule: Map<string, Map<string, Slot>>,
    newSchedule: Map<string, Map<string, Slot>>,
    setNewSchedule: React.Dispatch<React.SetStateAction<Map<string, Map<string, Slot>>>>,
    warnings: warnings,
    setWarning: React.Dispatch<React.SetStateAction<warnings>>,
}
