export type modeValue = "Lab Assistant" | "Bookings";
type role = "assistant" | "supervisor";

type LabScheduleSlot = {
    shift: boolean;
    attended: boolean;
    supervisor: string | null;
    Assistants: string | null;
    lab: string | null;
    role: role;

};

// Or if you want to be more explicit about the 5 weeks and 7 days:
type schedule = [
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