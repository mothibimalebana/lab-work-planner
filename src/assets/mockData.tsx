export type FormMode = "employee" | "modules";

export type role = "assistant" | "supervisor";

export type lab = 1 | 2 | 3

export type Shift = {
    supervisor: Students[];
    assistants: Students[] ;
    attentded?: boolean;
    donated?: boolean;
    role?: role;
    lab: lab;
}

export type Module = {
    code: string,
    id: number,
    enrolledStudents: Students[]
    classTimes: Slot[]
}

export type classBooking = {
    lecturer: string,
    lab: lab,
    Module: Module,
}

export type Slot = {
    slotID: number;
    isClass: boolean;
    isBooked: boolean;
    isUnavailable: boolean;
    unavailable: Students[];
    isShift: boolean;
    isBlocked: boolean;
    blockingModules: Module[];
    Shift: Shift;
    booking?: classBooking
}

export type Schedule = [
    [Slot, Slot, Slot, Slot, Slot, Slot, Slot],
    [Slot, Slot, Slot, Slot, Slot, Slot, Slot],
    [Slot, Slot, Slot, Slot, Slot, Slot, Slot],
    [Slot, Slot, Slot, Slot, Slot, Slot, Slot],
    [Slot, Slot, Slot, Slot, Slot, Slot, Slot]
];

export type Students = {
    studentNo: number | null;
    fullName: string | null;
    role: role | null;
    modules: Module[] | null;
    shifts: Slot[] | [];
}

// Mock Modules (no dependencies)
export const mockModules: Module[] = [
    { code: "SMTA021", id: 0, enrolledStudents: [], classTimes: [] },
    { code: "SAPA021", id: 1, enrolledStudents: [], classTimes: [] },
    { code: "SCOA021", id: 2, enrolledStudents: [], classTimes: [] },
    { code: "SSTA021", id: 3, enrolledStudents: [], classTimes: [] },
    { code: "SPHA021", id: 4, enrolledStudents: [], classTimes: [] },
    { code: "SPHB021", id: 5, enrolledStudents: [], classTimes: [] },
    { code: "SMTA022", id: 6, enrolledStudents: [], classTimes: [] },
    { code: "SAPA022", id: 7, enrolledStudents: [], classTimes: [] }
];

// Mock Students (use empty arrays for shifts initially)
export const mockStudents: Students[] = [
    {
        studentNo: 12345678,
        fullName: "Matlatsi Moholola",
        role: "supervisor",
        modules: [mockModules[0], mockModules[1]],
        shifts: [] // Will be filled after slots are created
    },
    {
        studentNo: 23456789,
        fullName: "Pitsi Phihlela",
        role: "assistant",
        modules: [mockModules[2], mockModules[3]],
        shifts: [] // Will be filled after slots are created
    },
    {
        studentNo: 34567890,
        fullName: "Thabiso Kgatla",
        role: "assistant",
        modules: [mockModules[4], mockModules[5]],
        shifts: [] // Will be filled after slots are created
    },
    {
        studentNo: 45678901,
        fullName: "Themba Sechaba",
        role: "supervisor",
        modules: [mockModules[6], mockModules[7]],
        shifts: [] // Will be filled after slots are created
    },
    {
        studentNo: 56789012,
        fullName: "John Doe",
        role: "assistant",
        modules: [mockModules[0], mockModules[2]],
        shifts: [] // Will be filled after slots are created
    },
];

// Mock Shifts (now mockStudents is defined)
export const mockShift1: Shift = {
    supervisor: [mockStudents[0]],
    assistants: [mockStudents[1], mockStudents[2], mockStudents[4]],
    attentded: true,
    donated: false,
    role: "supervisor",
    lab: 1
};

export const mockShift2: Shift = {
    supervisor: [mockStudents[3]],
    assistants: [ mockStudents[2] ],
    attentded: false,
    donated: true,
    role: "supervisor",
    lab: 2
};

export const mockShift3: Shift = {
    supervisor: [mockStudents[0]],
    assistants: [mockStudents[1], mockStudents[3], mockStudents[4]],
    role: "assistant",
    lab: 3
};

export const mockShift4: Shift = {
    supervisor: [mockStudents[3]],
    assistants: [ mockStudents[2] ],
    attentded: true,
    donated: false,
    role: "supervisor",
    lab: 3
};

export const mockShift5: Shift = {
    supervisor: [mockStudents[0]],
    assistants: [ mockStudents[2], mockStudents[4]],
    attentded: false,
    donated: true,
    role: "supervisor",
    lab: 3
};

export const emptyShift: Shift = {
    supervisor: [],
    assistants: [],
    attentded: false,
    donated: false,
    role: "assistant",
    lab: 1,
}

export const mockBooking: classBooking = {
    lecturer: "Mr Mokwele",
    lab: 2,
    Module: mockModules[2],
}

// Individual slots with static unavailable students
const slot0: Slot = {
    slotID: 0,
    isBooked: true,
    isUnavailable: true,
    isShift: false,
    isBlocked: false,
    blockingModules: [mockModules[0], mockModules[1]],
    Shift: emptyShift,
    isClass: true,
    booking: mockBooking,
    unavailable: [mockStudents[0], mockStudents[1], mockStudents[2]] // Static unavailable students
};

const slot1: Slot = {
    slotID: 1,
    isBooked: false,
    isUnavailable: true,
    isShift: true,
    isBlocked: false,
    blockingModules: [],
    Shift: emptyShift,
    isClass: false,
    unavailable: [mockStudents[3], mockStudents[4]] // Static unavailable students
};

const slot2: Slot = {
    slotID: 2,
    isBooked: false,
    isUnavailable: false,
    isShift: false,
    isBlocked: false,
    blockingModules: [],
    Shift: mockShift3,
    isClass: true,
    unavailable: [mockStudents[0]] // Static unavailable students
};

const slot3: Slot = {
    slotID: 3,
    isBooked: false,
    isUnavailable: false,
    isShift: false,
    isBlocked: false,
    blockingModules: [],
    Shift: mockShift3,
    isClass: true,
    unavailable: [mockStudents[1], mockStudents[2], mockStudents[3]] // Static unavailable students
};

const slot4: Slot = {
    slotID: 4,
    isBooked: false,
    isUnavailable: false,
    isShift: false,
    isBlocked: false,
    blockingModules: [],
    Shift: mockShift3,
    isClass: true,
    unavailable: [mockStudents[0], mockStudents[4]] // Static unavailable students
};

const slot5: Slot = {
    slotID: 5,
    isBooked: false,
    isUnavailable: false,
    isShift: false,
    isBlocked: false,
    blockingModules: [],
    Shift: mockShift3,
    isClass: true,
    unavailable: [mockStudents[2], mockStudents[3]] // Static unavailable students
};

const slot6: Slot = {
    slotID: 6,
    isBooked: false,
    isUnavailable: false,
    isShift: false,
    isBlocked: false,
    blockingModules: [],
    Shift: mockShift3,
    isClass: true,
    unavailable: [mockStudents[1], mockStudents[4]] // Static unavailable students
};

const slot7: Slot = {
    slotID: 7,
    isBooked: false,
    isUnavailable: false,
    isShift: true,
    isBlocked: false,
    blockingModules: [],
    Shift: mockShift3,
    isClass: true,
    unavailable: [mockStudents[0], mockStudents[2], mockStudents[3]] // Static unavailable students
};

const slot8: Slot = {
    slotID: 8,
    isBooked: false,
    isUnavailable: false,
    isShift: false,
    isBlocked: false,
    blockingModules: [],
    Shift: mockShift3,
    isClass: true,
    unavailable: [mockStudents[1]] // Static unavailable students
};

const slot9: Slot = {
    slotID: 9,
    isBooked: false,
    isUnavailable: true,
    isShift: true,
    isBlocked: false,
    blockingModules: [],
    Shift: mockShift3,
    isClass: false,
    unavailable: [mockStudents[0], mockStudents[1], mockStudents[2], mockStudents[3], mockStudents[4]] // Static unavailable students
};

const slot10: Slot = {
    slotID: 10,
    isBooked: false,
    isUnavailable: false,
    isShift: false,
    isBlocked: false,
    blockingModules: [],
    Shift: mockShift3,
    isClass: true,
    unavailable: [mockStudents[4]] // Static unavailable students
};

const slot11: Slot = {
    slotID: 11,
    isBooked: false,
    isUnavailable: false,
    isShift: false,
    isBlocked: false,
    blockingModules: [],
    Shift: mockShift3,
    isClass: true,
    unavailable: [mockStudents[0], mockStudents[3]] // Static unavailable students
};

const slot12: Slot = {
    slotID: 12,
    isBooked: false,
    isUnavailable: false,
    isShift: false,
    isBlocked: false,
    blockingModules: [],
    Shift: mockShift3,
    isClass: true,
    unavailable: [mockStudents[1], mockStudents[2]] // Static unavailable students
};

const slot13: Slot = {
    slotID: 13,
    isBooked: false,
    isUnavailable: false,
    isShift: false,
    isBlocked: false,
    blockingModules: [],
    Shift: mockShift3,
    isClass: true,
    unavailable: [mockStudents[0], mockStudents[1], mockStudents[4]] // Static unavailable students
};

const slot14: Slot = {
    slotID: 14,
    isBooked: false,
    isUnavailable: false,
    isShift: false,
    isBlocked: false,
    blockingModules: [],
    Shift: mockShift3,
    isClass: true,
    unavailable: [mockStudents[2], mockStudents[3]] // Static unavailable students
};

const slot15: Slot = {
    slotID: 15,
    isBooked: false,
    isUnavailable: false,
    isShift: false,
    isBlocked: false,
    blockingModules: [],
    Shift: mockShift3,
    isClass: true,
    unavailable: [mockStudents[0], mockStudents[4]] // Static unavailable students
};

const slot16: Slot = {
    slotID: 16,
    isBooked: false,
    isUnavailable: false,
    isShift: false,
    isBlocked: false,
    blockingModules: [],
    Shift: mockShift3,
    isClass: true,
    unavailable: [mockStudents[1], mockStudents[3]] // Static unavailable students
};

const slot17: Slot = {
    slotID: 17,
    isBooked: false,
    isUnavailable: false,
    isShift: false,
    isBlocked: false,
    blockingModules: [],
    Shift: mockShift3,
    isClass: true,
    unavailable: [mockStudents[2]] // Static unavailable students
};

const slot18: Slot = {
    slotID: 18,
    isBooked: false,
    isUnavailable: false,
    isShift: false,
    isBlocked: false,
    blockingModules: [],
    Shift: mockShift3,
    isClass: true,
    unavailable: [mockStudents[0], mockStudents[1], mockStudents[2]] // Static unavailable students
};

const slot19: Slot = {
    slotID: 19,
    isBooked: false,
    isUnavailable: false,
    isShift: false,
    isBlocked: false,
    blockingModules: [],
    Shift: mockShift3,
    isClass: true,
    unavailable: [mockStudents[3], mockStudents[4]] // Static unavailable students
};

const slot20: Slot = {
    slotID: 20,
    isBooked: false,
    isUnavailable: false,
    isShift: true,
    isBlocked: true,
    blockingModules: [mockModules[3], mockModules[4]],
    Shift: mockShift2,
    isClass: true,
    unavailable: [mockStudents[0], mockStudents[2], mockStudents[4]] // Static unavailable students
};

const slot21: Slot = {
    slotID: 21,
    isBooked: false,
    isUnavailable: false,
    isShift: false,
    isBlocked: false,
    blockingModules: [],
    Shift: mockShift3,
    isClass: true,
    unavailable: [mockStudents[1], mockStudents[3]] // Static unavailable students
};

const slot22: Slot = {
    slotID: 22,
    isBooked: false,
    isUnavailable: false,
    isShift: false,
    isBlocked: false,
    blockingModules: [],
    Shift: mockShift3,
    isClass: true,
    unavailable: [mockStudents[0]] // Static unavailable students
};

const slot23: Slot = {
    slotID: 23,
    isBooked: false,
    isUnavailable: false,
    isShift: false,
    isBlocked: false,
    blockingModules: [],
    Shift: mockShift3,
    isClass: true,
    unavailable: [mockStudents[2], mockStudents[3], mockStudents[4]] // Static unavailable students
};

const slot24: Slot = {
    slotID: 24,
    isBooked: false,
    isUnavailable: false,
    isShift: true,
    isBlocked: false,
    blockingModules: [],
    Shift: mockShift3,
    isClass: true,
    unavailable: [mockStudents[0], mockStudents[1]] // Static unavailable students
};

const slot25: Slot = {
    slotID: 25,
    isBooked: false,
    isUnavailable: false,
    isShift: true,
    isBlocked: true,
    blockingModules: [mockModules[6]],
    Shift: mockShift2,
    isClass: true,
    unavailable: [mockStudents[2], mockStudents[3], mockStudents[4]] // Static unavailable students
};

const slot26: Slot = {
    slotID: 26,
    isBooked: false,
    isUnavailable: false,
    isShift: false,
    isBlocked: false,
    blockingModules: [],
    Shift: mockShift3,
    isClass: true,
    unavailable: [mockStudents[0], mockStudents[1]] // Static unavailable students
};

const slot27: Slot = {
    slotID: 27,
    isBooked: false,
    isUnavailable: false,
    isShift: false,
    isBlocked: false,
    blockingModules: [],
    Shift: mockShift3,
    isClass: true,
    unavailable: [mockStudents[2]] // Static unavailable students
};

const slot28: Slot = {
    slotID: 28,
    isBooked: false,
    isUnavailable: false,
    isShift: false,
    isBlocked: false,
    blockingModules: [],
    Shift: mockShift3,
    isClass: true,
    unavailable: [mockStudents[3], mockStudents[4]] // Static unavailable students
};

const slot29: Slot = {
    slotID: 29,
    isBooked: false,
    isUnavailable: false,
    isShift: false,
    isBlocked: false,
    blockingModules: [],
    Shift: mockShift3,
    isClass: true,
    unavailable: [mockStudents[0], mockStudents[1], mockStudents[2]] // Static unavailable students
};

const slot30: Slot = {
    slotID: 30,
    isBooked: false,
    isUnavailable: false,
    isShift: false,
    isBlocked: false,
    blockingModules: [],
    Shift: mockShift3,
    isClass: true,
    unavailable: [mockStudents[3]] // Static unavailable students
};

const slot31: Slot = {
    slotID: 31,
    isBooked: false,
    isUnavailable: false,
    isShift: false,
    isBlocked: false,
    blockingModules: [],
    Shift: mockShift3,
    isClass: true,
    unavailable: [mockStudents[0], mockStudents[4]] // Static unavailable students
};

const slot32: Slot = {
    slotID: 32,
    isBooked: false,
    isUnavailable: false,
    isShift: false,
    isBlocked: false,
    blockingModules: [],
    Shift: mockShift3,
    isClass: true,
    unavailable: [mockStudents[1], mockStudents[2], mockStudents[3]] // Static unavailable students
};

const slot33: Slot = {
    slotID: 33,
    isBooked: false,
    isUnavailable: false,
    isShift: false,
    isBlocked: false,
    blockingModules: [],
    Shift: mockShift3,
    isClass: true,
    unavailable: [mockStudents[0]] // Static unavailable students
};

const slot34: Slot = {
    slotID: 34,
    isBooked: false,
    isUnavailable: false,
    isShift: false,
    isBlocked: false,
    blockingModules: [],
    Shift: mockShift3,
    isClass: true,
    unavailable: [mockStudents[1], mockStudents[2], mockStudents[3], mockStudents[4]] // Static unavailable students
};

// Now update student shifts with the actual slots
mockStudents[0].shifts = [slot0, slot1, slot2];
mockStudents[1].shifts = [slot3, slot4, slot5];
mockStudents[2].shifts = [slot6];
mockStudents[3].shifts = [slot9, slot10];
mockStudents[4].shifts = [slot12 ];

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

export const appSchedule: Schedule = [
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
]