export type FormMode = "employee" | "modules";

export type role = "assistant" | "supervisor";

export type lab = 1 | 2 | 3

export type shift =  {
    isShift: boolean;
    supervisor: string;
    assistants: string;
    attentded?: boolean;
    donated?: boolean;
    role: role;
    lab: lab;
}

export type module = {
    moduleID: number,
    id: number,
    code: string,
}

export type classBooking = {
    lecturer: string,
    lab: lab,
    module: module,
}

export type slot = {
    slotID: number;
    isClass: boolean;
    isBooked: boolean;
    isUnavailable: boolean;
    isBlocked: boolean;
    blockingModules: module[];
    shift?: shift;
    unavailable: boolean;
    class?: module[];
    booking?:classBooking
}

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
    unavailable: slot[];
    modulesID: number;
    shifts: slot[];
}

// Mock Modules
export const mockModules: module[] = [
    { moduleID: 1, id: 0, code: "SMTA021" },
    { moduleID: 2, id: 1, code: "SAPA021" },
    { moduleID: 3, id: 2, code: "SCOA021" },
    { moduleID: 4, id: 3, code: "SSTA021" },
    { moduleID: 5, id: 4, code: "SPHA021" },
    { moduleID: 6, id: 5, code: "SPHB021" },
    { moduleID: 7, id: 0, code: "SMTA022" },
    { moduleID: 8, id: 1, code: "SAPA022" }
];

// Mock Shifts
const mockShift1: shift = {
    isShift: true,
    supervisor: "John Smith",
    assistants: "Sarah Johnson, Michael Brown",
    attentded: true,
    donated: false,
    role: "supervisor",
    lab: 1
};

const mockShift2: shift = {
    isShift: true,
    supervisor: "Emily Davis",
    assistants: "David Wilson",
    attentded: false,
    donated: true,
    role: "supervisor",
    lab: 2
};

const mockShift3: shift = {
    isShift: false,
    supervisor: "",
    assistants: "",
    role: "assistant",
    lab: 3
};

const mockShift4: shift = {
    isShift: true,
    supervisor: "John Smith",
    assistants: "Emily Davis",
    attentded: true,
    donated: false,
    role: "supervisor",
    lab: 3
};

const mockShift5: shift = {
    isShift: true,
    supervisor: "Sarah Johnson",
    assistants: "David Wilson, Michael Brown",
    attentded: false,
    donated: true,
    role: "supervisor",
    lab: 3
};

// Individual slots for student data
const slot0: slot = {
    slotID: 0,
    isBooked: false,
    isUnavailable: false,
    isBlocked: true,
    blockingModules: [mockModules[0], mockModules[1]],
    shift: mockShift1,
    unavailable: false,
    isClass: true,
    class: [mockModules[0], mockModules[1]],
};

const slot1: slot = {
    slotID: 1,
    isBooked: false,
    isUnavailable: true,
    isBlocked: false,
    blockingModules: [],
    shift: mockShift3,
    unavailable: true,
    isClass: true,
    class: [mockModules[2]]
};

const slot2: slot = {
    slotID: 2,
    isBooked: false,
    isUnavailable: false,
    isBlocked: false,
    blockingModules: [],
    shift: mockShift3,
    unavailable: false,
    isClass: true,
    class: [mockModules[3], mockModules[4]]
};

const slot3: slot = {
    slotID: 3,
    isBooked: false,
    isUnavailable: false,
    isBlocked: true,
    blockingModules: [mockModules[2], mockModules[3]],
    shift: mockShift2,
    unavailable: false,
    isClass: true,
    class: [mockModules[5]]
};

const slot4: slot = {
    slotID: 4,
    isBooked: false,
    isUnavailable: false,
    isBlocked: false,
    blockingModules: [],
    shift: mockShift3,
    unavailable: false,
    isClass: true,
    class: [mockModules[6], mockModules[7]]
};

const slot5: slot = {
    slotID: 5,
    isBooked: false,
    isUnavailable: true,
    isBlocked: false,
    blockingModules: [],
    shift: mockShift3,
    unavailable: true,
    isClass: true,
    class: [mockModules[0], mockModules[2]]
};

const slot6: slot = {
    slotID: 6,
    isBooked: false,
    isUnavailable: false,
    isBlocked: true,
    blockingModules: [mockModules[4]],
    shift: mockShift4,
    unavailable: false,
    isClass: true,
    class: [mockModules[3], mockModules[5], mockModules[7]]
};

const slot7: slot = {
    slotID: 7,
    isBooked: false,
    isUnavailable: false,
    isBlocked: false,
    blockingModules: [],
    shift: mockShift3,
    unavailable: false,
    isClass: true,
    class: [mockModules[0]]
};

const slot8: slot = {
    slotID: 8,
    isBooked: false,
    isUnavailable: false,
    isBlocked: true,
    blockingModules: [mockModules[1], mockModules[6]],
    shift: mockShift1,
    unavailable: false,
    isClass: true,
    class: [mockModules[1], mockModules[2]]
};

const slot9: slot = {
    slotID: 9,
    isBooked: false,
    isUnavailable: true,
    isBlocked: false,
    blockingModules: [],
    shift: mockShift3,
    unavailable: true,
    isClass: false
};

const slot10: slot = {
    slotID: 10,
    isBooked: false,
    isUnavailable: false,
    isBlocked: false,
    blockingModules: [],
    shift: mockShift3,
    unavailable: false,
    isClass: true,
    class: [mockModules[3], mockModules[4]]
};

const slot11: slot = {
    slotID: 11,
    isBooked: false,
    isUnavailable: false,
    isBlocked: true,
    blockingModules: [mockModules[0]],
    shift: mockShift2,
    unavailable: false,
    isClass: true,
    class: [mockModules[5]]
};

const slot12: slot = {
    slotID: 12,
    isBooked: false,
    isUnavailable: false,
    isBlocked: false,
    blockingModules: [],
    shift: mockShift3,
    unavailable: false,
    isClass: true,
    class: [mockModules[6]]
};

const slot13: slot = {
    slotID: 13,
    isBooked: false,
    isUnavailable: true,
    isBlocked: false,
    blockingModules: [],
    shift: mockShift3,
    unavailable: true,
    isClass: true,
    class: [mockModules[7]]
};

const slot14: slot = {
    slotID: 14,
    isBooked: false,
    isUnavailable: true,
    isBlocked: false,
    blockingModules: [],
    shift: mockShift3,
    unavailable: true,
    isClass: true,
    class: [mockModules[0]]
};

const slot15: slot = {
    slotID: 15,
    isBooked: false,
    isUnavailable: false,
    isBlocked: false,
    blockingModules: [],
    shift: mockShift3,
    unavailable: false,
    isClass: true,
    class: [mockModules[1], mockModules[3]]
};

const slot16: slot = {
    slotID: 16,
    isBooked: false,
    isUnavailable: false,
    isBlocked: true,
    blockingModules: [mockModules[5], mockModules[7]],
    shift: mockShift4,
    unavailable: false,
    isClass: true,
    class: [mockModules[2], mockModules[4]]
};

const slot17: slot = {
    slotID: 17,
    isBooked: false,
    isUnavailable: false,
    isBlocked: true,
    blockingModules: [mockModules[2]],
    shift: mockShift1,
    unavailable: false,
    isClass: true,
    class: [mockModules[5]]
};

const slot18: slot = {
    slotID: 18,
    isBooked: false,
    isUnavailable: true,
    isBlocked: false,
    blockingModules: [],
    shift: mockShift3,
    unavailable: true,
    isClass: true,
    class: [mockModules[6]]
};

const slot19: slot = {
    slotID: 19,
    isBooked: false,
    isUnavailable: false,
    isBlocked: false,
    blockingModules: [],
    shift: mockShift3,
    unavailable: false,
    isClass: true,
    class: [mockModules[7], mockModules[0]]
};

const slot20: slot = {
    slotID: 20,
    isBooked: false,
    isUnavailable: false,
    isBlocked: true,
    blockingModules: [mockModules[3], mockModules[4]],
    shift: mockShift2,
    unavailable: false,
    isClass: true,
    class: [mockModules[1], mockModules[2]]
};

const slot21: slot = {
    slotID: 21,
    isBooked: false,
    isUnavailable: false,
    isBlocked: false,
    blockingModules: [],
    shift: mockShift3,
    unavailable: false,
    isClass: true,
    class: [mockModules[3]]
};

const slot22: slot = {
    slotID: 22,
    isBooked: false,
    isUnavailable: false,
    isBlocked: true,
    blockingModules: [mockModules[1]],
    shift: mockShift5,
    unavailable: false,
    isClass: true,
    class: [mockModules[4], mockModules[5]]
};

const slot23: slot = {
    slotID: 23,
    isBooked: false,
    isUnavailable: true,
    isBlocked: false,
    blockingModules: [],
    shift: mockShift3,
    unavailable: true,
    isClass: true,
    class: [mockModules[6]]
};

const slot24: slot = {
    slotID: 24,
    isBooked: false,
    isUnavailable: false,
    isBlocked: false,
    blockingModules: [],
    shift: mockShift3,
    unavailable: false,
    isClass: true,
    class: [mockModules[7]]
};

const slot25: slot = {
    slotID: 25,
    isBooked: false,
    isUnavailable: false,
    isBlocked: true,
    blockingModules: [mockModules[6]],
    shift: mockShift2,
    unavailable: false,
    isClass: true,
    class: [mockModules[0], mockModules[1]]
};

const slot26: slot = {
    slotID: 26,
    isBooked: false,
    isUnavailable: false,
    isBlocked: false,
    blockingModules: [],
    shift: mockShift3,
    unavailable: false,
    isClass: true,
    class: [mockModules[2]]
};

const slot27: slot = {
    slotID: 27,
    isBooked: false,
    isUnavailable: true,
    isBlocked: false,
    blockingModules: [],
    shift: mockShift3,
    unavailable: true,
    isClass: true,
    class: [mockModules[3], mockModules[4]]
};

const slot28: slot = {
    slotID: 28,
    isBooked: false,
    isUnavailable: false,
    isBlocked: true,
    blockingModules: [mockModules[0], mockModules[5]],
    shift: mockShift4,
    unavailable: false,
    isClass: true,
    class: [mockModules[5]]
};

const slot29: slot = {
    slotID: 29,
    isBooked: false,
    isUnavailable: true,
    isBlocked: false,
    blockingModules: [],
    shift: mockShift3,
    unavailable: true,
    isClass: false
};

const slot30: slot = {
    slotID: 30,
    isBooked: false,
    isUnavailable: false,
    isBlocked: false,
    blockingModules: [],
    shift: mockShift3,
    unavailable: false,
    isClass: true,
    class: [mockModules[6], mockModules[7]]
};

const slot31: slot = {
    slotID: 31,
    isBooked: false,
    isUnavailable: false,
    isBlocked: true,
    blockingModules: [mockModules[2], mockModules[3], mockModules[4]],
    shift: mockShift1,
    unavailable: false,
    isClass: true,
    class: [mockModules[0], mockModules[2]]
};

const slot32: slot = {
    slotID: 32,
    isBooked: false,
    isUnavailable: true,
    isBlocked: false,
    blockingModules: [],
    shift: mockShift3,
    unavailable: true,
    isClass: true,
    class: [mockModules[1]]
};

const slot33: slot = {
    slotID: 33,
    isBooked: false,
    isUnavailable: false,
    isBlocked: false,
    blockingModules: [],
    shift: mockShift3,
    unavailable: false,
    isClass: true,
    class: [mockModules[3], mockModules[4]]
};

const slot34: slot = {
    slotID: 34,
    isBooked: false,
    isUnavailable: false,
    isBlocked: true,
    blockingModules: [mockModules[1], mockModules[7]],
    shift: mockShift5,
    unavailable: false,
    isClass: true,
    class: [mockModules[5], mockModules[6], mockModules[7]]
};

// Mock Schedule
export const mockSchedule: Schedule = [
    // Week 1 (Monday to Sunday)
    [slot0, slot1, slot2, slot3, slot4, slot5, slot6],
    // Week 2
    [slot7, slot8, slot9, slot10, slot11, slot12, slot13],
    // Week 3
    [slot14, slot15, slot16, slot17, slot18, slot19, slot20],
    // Week 4
    [slot21, slot22, slot23, slot24, slot25, slot26, slot27],
    // Week 5
    [slot28, slot29, slot30, slot31, slot32, slot33, slot34]
];

// Mock Students
export const mockStudents: students[] = [
    {
        studentNo: 12345678,
        fullName: "Matlatsi Moholola",
        role: "supervisor",
        modules: [mockModules[0], mockModules[1]],
        unavailable: [slot0, slot10, slot20],
        modulesID: 1,
        shifts: [slot0, slot1, slot2]
    },
    {
        studentNo: 23456789,
        fullName: "Pitsi Phihlela",
        role: "assistant",
        modules: [mockModules[2], mockModules[3]],
        unavailable: [slot5, slot15, slot25],
        modulesID: 3,
        shifts: [slot3, slot4, slot5]
    },
    {
        studentNo: 34567890,
        fullName: "Thabiso Kgatla",
        role: "assistant",
        modules: [mockModules[4], mockModules[5]],
        unavailable: [slot2, slot12, slot22],
        modulesID: 5,
        shifts: [slot6, slot7, slot8]
    },
    {
        studentNo: 45678901,
        fullName: "Themba Sechaba",
        role: "supervisor",
        modules: [mockModules[6], mockModules[7]],
        unavailable: [slot8, slot18, slot28],
        modulesID: 7,
        shifts: [slot9, slot10, slot11]
    },
    {
        studentNo: 56789012,
        fullName: "John Doe",
        role: "assistant",
        modules: [mockModules[0], mockModules[2]],
        unavailable: [slot3, slot13, slot23],
        modulesID: 2,
        shifts: [slot12, slot13, slot14]
    }
];
