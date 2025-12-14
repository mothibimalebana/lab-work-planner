import type { Schedule } from "../src/assets/mockData";

export type modeValue = "Shifts" | "Bookings";
export type role = "assistant" | "supervisor";



export type TableProps = {
    mode: modeValue,
    schedule: Schedule,
};