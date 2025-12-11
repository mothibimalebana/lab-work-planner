import type { Schedule } from "../src/assets/mockData";

export type modeValue = "Shifts" | "Bookings";
export type role = "assistant" | "supervisor";

type LabScheduleSlot = {
    shift: boolean;
    supervisor: string | null;
    assistants: string[] | null;
    lab: number | null;
    role: role;
    classesID: number[];
};



// Or if you want to be more explicit about the 5 weeks and 7 days:
export type schedule = [
    [LabScheduleSlot, LabScheduleSlot, LabScheduleSlot, LabScheduleSlot, LabScheduleSlot, LabScheduleSlot, LabScheduleSlot],
    [LabScheduleSlot, LabScheduleSlot, LabScheduleSlot, LabScheduleSlot, LabScheduleSlot, LabScheduleSlot, LabScheduleSlot],
    [LabScheduleSlot, LabScheduleSlot, LabScheduleSlot, LabScheduleSlot, LabScheduleSlot, LabScheduleSlot, LabScheduleSlot],
    [LabScheduleSlot, LabScheduleSlot, LabScheduleSlot, LabScheduleSlot, LabScheduleSlot, LabScheduleSlot, LabScheduleSlot],
    [LabScheduleSlot, LabScheduleSlot, LabScheduleSlot, LabScheduleSlot, LabScheduleSlot, LabScheduleSlot, LabScheduleSlot]
];

type BookingScheduleSlot = {
    class: boolean;
    lecture: string;
    lab: number[];
    module: string;

}

export type bookings = [
    [BookingScheduleSlot, BookingScheduleSlot, BookingScheduleSlot, BookingScheduleSlot, BookingScheduleSlot, BookingScheduleSlot, BookingScheduleSlot],
    [BookingScheduleSlot, BookingScheduleSlot, BookingScheduleSlot, BookingScheduleSlot, BookingScheduleSlot, BookingScheduleSlot, BookingScheduleSlot],
    [BookingScheduleSlot, BookingScheduleSlot, BookingScheduleSlot, BookingScheduleSlot, BookingScheduleSlot, BookingScheduleSlot, BookingScheduleSlot],
    [BookingScheduleSlot, BookingScheduleSlot, BookingScheduleSlot, BookingScheduleSlot, BookingScheduleSlot, BookingScheduleSlot, BookingScheduleSlot],
    [BookingScheduleSlot, BookingScheduleSlot, BookingScheduleSlot, BookingScheduleSlot, BookingScheduleSlot, BookingScheduleSlot, BookingScheduleSlot],
]

export type TableProps = {
    mode: modeValue,
    schedule: Schedule,
    bookings: Schedule,
};