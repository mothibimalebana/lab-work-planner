import type { Students } from "../src/assets/mockData"

export type ViewEmployeeProps = {
    student: Students | "",
    view: boolean,
    setView: (bool: boolean) => void,
    setEmployee: (student: Students | "") => void
}