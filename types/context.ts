import type { Schedule, Students } from "../src/assets/mockData";

export type outletContextProp = {
    schedule: Schedule,
    setSchedule: (schedule: Schedule) => void,

    students: Students[],
    setStudents: (students: Students[]) => void,

    newSchedule: Schedule,
}