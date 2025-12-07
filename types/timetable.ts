export type modeValue = "Shifts" | "Bookings";
export type role = "assistant" | "supervisor";

type LabScheduleSlot = {
    shift: boolean;
    attended: boolean;
    supervisor: string | null;
    assistants: string[] | null;
    lab: number | null;
    role: role;

};

// Or if you want to be more explicit about the 5 weeks and 7 days:
export type schedule = [
    [LabScheduleSlot, LabScheduleSlot, LabScheduleSlot, LabScheduleSlot, LabScheduleSlot, LabScheduleSlot, LabScheduleSlot],
    [LabScheduleSlot, LabScheduleSlot, LabScheduleSlot, LabScheduleSlot, LabScheduleSlot, LabScheduleSlot, LabScheduleSlot],
    [LabScheduleSlot, LabScheduleSlot, LabScheduleSlot, LabScheduleSlot, LabScheduleSlot, LabScheduleSlot, LabScheduleSlot],
    [LabScheduleSlot, LabScheduleSlot, LabScheduleSlot, LabScheduleSlot, LabScheduleSlot, LabScheduleSlot, LabScheduleSlot],
    [LabScheduleSlot, LabScheduleSlot, LabScheduleSlot, LabScheduleSlot, LabScheduleSlot, LabScheduleSlot, LabScheduleSlot]
];

export type TableProps = {
    mode: modeValue,
    schedule: schedule
};