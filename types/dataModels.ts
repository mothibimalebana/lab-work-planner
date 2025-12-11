export type FormMode = "employee" | "modules";

export type role = "assistant" | "supervisor";

export type shift =  {
    isShift: boolean;
    supervisor: string;
    assistants: string;
    attentded?: boolean;
    donated?: boolean;
    role: role;
    lab: number;
}
export type module = {
    moduleID: number,
    id: number,
    code: string,
    schoolTimeID: number[],
}

export type slot = {
    isUnavailable: boolean;
    isBlocked: boolean;
    blockingModules: number[];
    shift: shift;
    unavailable: boolean;
    class?: module[];
}

// Or if you want to be more explicit about the 5 weeks and 7 days:
export type Schedule = [
    [slot, slot, slot, slot, slot, slot, slot],
    [slot, slot, slot, slot, slot, slot, slot],
    [slot, slot, slot, slot, slot, slot, slot],
    [slot, slot, slot, slot, slot, slot, slot],
    [slot, slot, slot, slot, slot, slot, slot]
];

export type students = {
    studentNo: number;
    fullName: string;
    role: role;
    modules: module[];
    unavailable: number[];
    modulesID: number;
    shifts: number[];
}
