export type FormMode = "employee" | "modules";

export type role = "assistant" | "supervisor";

export type lab = 1 | 2 | 3

export type warning = {
    slotID: number,
    msg: string
}

export type warnings = warning[];

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
    moduleID: number,
    name: string,

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
    modules: Module[];
    shifts: Slot[] | [];
}

const modules: Module[][] = [
    // ===== YEAR 2 - REGULAR PROGRAMME =====
    // Semester 1
    [
        {moduleID: 1, name: "Advanced Calculus", code: "SMTA021"},
        {moduleID: 2, name: "Ordinary and Partial Differential Equations", code: "SAPA021"},
        {moduleID: 3, name: "Data Structures", code: "SCOA021"},
        {moduleID: 4, name: "Theory of Distributions", code: "SSTA021"},
        {moduleID: 5, name: "Classical Mechanics", code: "SPHA021"},
        {moduleID: 6, name: "Modern Physics", code: "SPHB021"},
    ],
    
    // Semester 2
    [
        {moduleID: 7, name: "Advanced Calculus", code: "SMTA022"},
        {moduleID: 8, name: "Numerical Analysis", code: "SAPA022"},
        {moduleID: 9, name: "Computer Architecture", code: "SCOA022"},
        {moduleID: 10, name: "Statistical Inference", code: "SSTA022"},
        {moduleID: 11, name: "Electrodynamics and Electronics", code: "SPHA022"},
        {moduleID: 12, name: "Waves and Physical Optics", code: "SPHB022"},
    ],
    
    // ===== YEAR 2 - EXTENDED PROGRAMME (BSCE01) =====
    [
        {moduleID: 13, name: "Computing Concepts And Algorithms", code: "SCSC000"},
        {moduleID: 14, name: "Health Education And Life Competencies I", code: "SHEL000"},
        {moduleID: 15, name: "Pre-Calculus And Differential Calculus", code: "SMTH000"},
        {moduleID: 16, name: "Introduction To General Physics 1A", code: "SPHS000"},
        {moduleID: 17, name: "Descriptive Statistics", code: "SSTS000"},
    ],
    
    // Year 2 of Extended Programme (equivalent to Year 1 foundation continuation)
    [
        {moduleID: 18, name: "Data Organization, AI", code: "SCOB000"},
        {moduleID: 19, name: "Health Education And Life Competencies II", code: "SHEB000"},
        {moduleID: 20, name: "Introductory Algebra And Integral Calculus", code: "SMTB000"},
        {moduleID: 21, name: "Introduction To General Physics 1B", code: "SPHB000"},
        {moduleID: 22, name: "Introduction To Statistical Inference", code: "SSTB000"},
    ],
    
    
    // ===== YEAR 3 - REGULAR PROGRAMME =====
    // Semester 1
    [
        {moduleID: 23, name: "Fluid Mechanics", code: "SPA031"},
        {moduleID: 24, name: "Introduction to Database Systems", code: "SCOA031"},
        {moduleID: 25, name: "Operating Systems", code: "SCOB031"},
        {moduleID: 26, name: "Mathematical Analysis I", code: "SMTA031"},
        {moduleID: 27, name: "Abstract Algebra", code: "SMTB031"},
        {moduleID: 28, name: "Quantum Mechanics", code: "SPHA031"},
        {moduleID: 29, name: "Thermodynamics and Statistical Mechanics", code: "SPHB031"},
        {moduleID: 30, name: "Time Series Analysis", code: "SSTA031"},
        {moduleID: 31, name: "Applied Linear Regression", code: "SSTB031"},
    ],
    
    // Semester 2
    [
        {moduleID: 32, name: "Mathematical Theory of Electromagnetism and Special Theory of Relativity", code: "SAPA032"},
        {moduleID: 33, name: "Artificial Intelligence", code: "SCOA032"},
        {moduleID: 34, name: "Computer Networks", code: "SCOB032"},
        {moduleID: 35, name: "Complex Analysis", code: "SMTA032"},
        {moduleID: 36, name: "Mathematical Analysis II", code: "SMTB032"},
        {moduleID: 37, name: "Solid State Physics", code: "SPHA032"},
        {moduleID: 38, name: "Electrodynamics and Electronics", code: "SPHB032"},
        {moduleID: 39, name: "Design and Analysis of Experiments", code: "SSTA032"},
        {moduleID: 40, name: "Multivariate Statistical Methods", code: "SSTB032"},
        {moduleID: 41, name: "Sampling Theory", code: "SSTC032"},
    ],
    
];

// Mock Students (use empty arrays for shifts initially)
export const mockStudents: Students[] = [
    {
        studentNo: 12345678,
        fullName: "Matlatsi Moholola",
        role: "supervisor",
        modules: [],
        shifts: [] // Will be filled after slots are created
    },
    {
        studentNo: 23456789,
        fullName: "Pitsi Phihlela",
        role: "assistant",
        modules: [],
        shifts: [] // Will be filled after slots are created
    },
    {
        studentNo: 34567890,
        fullName: "Thabiso Kgatla",
        role: "assistant",
        modules: [],
        shifts: [] // Will be filled after slots are created
    },
    {
        studentNo: 45678901,
        fullName: "Themba Sechaba",
        role: "supervisor",
        modules: [],
        shifts: [] // Will be filled after slots are created
    },
    {
        studentNo: 56789012,
        fullName: "John Doe",
        role: "assistant",
        modules: [],
        shifts: [] // Will be filled after slots are created
    },
];

export const mockShift1: Shift = {
    supervisor: [],
    assistants: [],
    lab: 1
};

export const mockShift2: Shift = {
    supervisor: [],
    assistants: [],
    lab: 1
};

export const mockShift3: Shift = {
    supervisor: [],
    assistants: [],
    lab: 1
};

export const mockShift4: Shift = {
    supervisor: [],
    assistants: [],
    lab: 1
};

export const mockShift5: Shift = {
    supervisor: [],
    assistants: [],
    lab: 1
};

export const mockShift6: Shift = {
    supervisor: [],
    assistants: [],
    lab: 1
};

export const mockShift7: Shift = {
    supervisor: [],
    assistants: [],
    lab: 1
};

export const mockShift8: Shift = {
    supervisor: [],
    assistants: [],
    lab: 2
};

export const mockShift9: Shift = {
    supervisor: [],
    assistants: [],
    lab: 2
};

export const mockShift10: Shift = {
    supervisor: [],
    assistants: [],
    lab: 2
};

export const mockShift11: Shift = {
    supervisor: [],
    assistants: [],
    lab: 2
};

export const mockShift12: Shift = {
    supervisor: [],
    assistants: [],
    lab: 2
};

export const mockShift13: Shift = {
    supervisor: [],
    assistants: [],
    lab: 2
};

export const mockShift14: Shift = {
    supervisor: [],
    assistants: [],
    lab: 2
};

export const mockShift15: Shift = {
    supervisor: [],
    assistants: [],
    lab: 2
};

export const mockShift16: Shift = {
    supervisor: [],
    assistants: [],
    lab: 3
};

export const mockShift17: Shift = {
    supervisor: [],
    assistants: [],
    lab: 3
};

export const mockShift18: Shift = {
    supervisor: [],
    assistants: [],
    lab: 3
};

export const mockShift19: Shift = {
    supervisor: [],
    assistants: [],
    lab: 3
};

export const mockShift20: Shift = {
    supervisor: [],
    assistants: [],
    lab: 3
};

export const mockShift21: Shift = {
    supervisor: [],
    assistants: [],
    lab: 3
};

export const mockShift22: Shift = {
    supervisor: [],
    assistants: [],
    lab: 3
};

export const mockShift23: Shift = {
    supervisor: [],
    assistants: [],
    lab: 1
};

export const mockShift24: Shift = {
    supervisor: [],
    assistants: [],
    lab: 1
};

export const mockShift25: Shift = {
    supervisor: [],
    assistants: [],
    lab: 2
};

export const mockShift26: Shift = {
    supervisor: [],
    assistants: [],
    lab: 2
};

export const mockShift27: Shift = {
    supervisor: [],
    assistants: [],
    lab: 3
};

export const mockShift28: Shift = {
    supervisor: [],
    assistants: [],
    lab: 3
};

export const mockShift29: Shift = {
    supervisor: [],
    assistants: [],
    lab: 1
};

export const mockShift30: Shift = {
    supervisor: [],
    assistants: [],
    lab: 2
};

export const mockShift31: Shift = {
    supervisor: [],
    assistants: [],
    lab: 3
};

export const mockShift32: Shift = {
    supervisor: [],
    assistants: [],
    lab: 1
};

export const mockShift33: Shift = {
    supervisor: [],
    assistants: [],
    lab: 2
};

export const mockShift34: Shift = {
    supervisor: [],
    assistants: [],
    lab: 3
};

export const mockShift35: Shift = {
    supervisor: [],
    assistants: [],
    lab: 1
};

export const mockBooking: classBooking = {
    lecturer: "Mr Mokwele",
    lab: 2,
    Module:modules[0][2],
}

// Individual slots with static unavailable students

const slot0: Slot = {
    slotID: 0,
    isBooked: true,
    isUnavailable: true,
    isShift: false,
    isBlocked: false,
    blockingModules: [modules[0][0],modules[0][1]],
    Shift: mockShift1,
    isClass: true,
    booking: mockBooking,
    unavailable: [mockStudents[0], mockStudents[1], mockStudents[2]]
};
export const emptySlot: Slot = {
    slotID: 0,
    isBooked: false,
    isShift: false,
    isClass: false,
    isUnavailable: false,
    blockingModules: [],
    Shift: mockShift1,
    unavailable: [],
    isBlocked: false
    
}

export const slot1: Slot = {
    slotID: 1,
    isBooked: false,
    isUnavailable: true,
    isShift: true,
    isBlocked: false,
    blockingModules: [],
    Shift: mockShift2,
    isClass: false,
    unavailable: [mockStudents[3], mockStudents[4]]
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
    unavailable: [mockStudents[0]]
};

const slot3: Slot = {
    slotID: 3,
    isBooked: false,
    isUnavailable: false,
    isShift: false,
    isBlocked: false,
    blockingModules: [],
    Shift: mockShift4,
    isClass: true,
    unavailable: [mockStudents[1], mockStudents[2], mockStudents[3]]
};

const slot4: Slot = {
    slotID: 4,
    isBooked: false,
    isUnavailable: false,
    isShift: false,
    isBlocked: false,
    blockingModules: [],
    Shift: mockShift5,
    isClass: true,
    unavailable: [mockStudents[0], mockStudents[4]]
};

const slot5: Slot = {
    slotID: 5,
    isBooked: false,
    isUnavailable: false,
    isShift: false,
    isBlocked: false,
    blockingModules: [],
    Shift: mockShift6,
    isClass: true,
    unavailable: [mockStudents[2], mockStudents[3]]
};

const slot6: Slot = {
    slotID: 6,
    isBooked: false,
    isUnavailable: false,
    isShift: false,
    isBlocked: false,
    blockingModules: [],
    Shift: mockShift7,
    isClass: true,
    unavailable: [mockStudents[1], mockStudents[4]]
};

const slot7: Slot = {
    slotID: 7,
    isBooked: false,
    isUnavailable: false,
    isShift: true,
    isBlocked: false,
    blockingModules: [],
    Shift: mockShift8,
    isClass: true,
    unavailable: [mockStudents[0], mockStudents[2], mockStudents[3]]
};

const slot8: Slot = {
    slotID: 8,
    isBooked: false,
    isUnavailable: false,
    isShift: false,
    isBlocked: false,
    blockingModules: [],
    Shift: mockShift9,
    isClass: true,
    unavailable: [mockStudents[1]]
};

const slot9: Slot = {
    slotID: 9,
    isBooked: false,
    isUnavailable: true,
    isShift: true,
    isBlocked: false,
    blockingModules: [],
    Shift: mockShift10,
    isClass: false,
    unavailable: [mockStudents[0], mockStudents[1], mockStudents[2], mockStudents[3], mockStudents[4]]
};

const slot10: Slot = {
    slotID: 10,
    isBooked: false,
    isUnavailable: false,
    isShift: false,
    isBlocked: false,
    blockingModules: [],
    Shift: mockShift11,
    isClass: true,
    unavailable: [mockStudents[4]]
};

const slot11: Slot = {
    slotID: 11,
    isBooked: false,
    isUnavailable: false,
    isShift: false,
    isBlocked: false,
    blockingModules: [],
    Shift: mockShift12,
    isClass: true,
    unavailable: [mockStudents[0], mockStudents[3]]
};

const slot12: Slot = {
    slotID: 12,
    isBooked: false,
    isUnavailable: false,
    isShift: false,
    isBlocked: false,
    blockingModules: [],
    Shift: mockShift13,
    isClass: true,
    unavailable: [mockStudents[1], mockStudents[2]]
};

const slot13: Slot = {
    slotID: 13,
    isBooked: false,
    isUnavailable: false,
    isShift: false,
    isBlocked: false,
    blockingModules: [],
    Shift: mockShift14,
    isClass: true,
    unavailable: [mockStudents[0], mockStudents[1], mockStudents[4]]
};

const slot14: Slot = {
    slotID: 14,
    isBooked: false,
    isUnavailable: false,
    isShift: false,
    isBlocked: false,
    blockingModules: [],
    Shift: mockShift15,
    isClass: true,
    unavailable: [mockStudents[2], mockStudents[3]]
};

const slot15: Slot = {
    slotID: 15,
    isBooked: false,
    isUnavailable: false,
    isShift: false,
    isBlocked: false,
    blockingModules: [],
    Shift: mockShift16,
    isClass: true,
    unavailable: [mockStudents[0], mockStudents[4]]
};

const slot16: Slot = {
    slotID: 16,
    isBooked: false,
    isUnavailable: false,
    isShift: false,
    isBlocked: false,
    blockingModules: [],
    Shift: mockShift17,
    isClass: true,
    unavailable: [mockStudents[1], mockStudents[3]]
};

const slot17: Slot = {
    slotID: 17,
    isBooked: false,
    isUnavailable: false,
    isShift: false,
    isBlocked: false,
    blockingModules: [],
    Shift: mockShift18,
    isClass: true,
    unavailable: [mockStudents[2]]
};

const slot18: Slot = {
    slotID: 18,
    isBooked: false,
    isUnavailable: false,
    isShift: false,
    isBlocked: false,
    blockingModules: [],
    Shift: mockShift19,
    isClass: true,
    unavailable: [mockStudents[0], mockStudents[1], mockStudents[2]]
};

const slot19: Slot = {
    slotID: 19,
    isBooked: false,
    isUnavailable: false,
    isShift: false,
    isBlocked: false,
    blockingModules: [],
    Shift: mockShift20,
    isClass: true,
    unavailable: [mockStudents[3], mockStudents[4]]
};

const slot20: Slot = {
    slotID: 20,
    isBooked: false,
    isUnavailable: false,
    isShift: true,
    isBlocked: true,
    blockingModules: [modules[0][3],modules[0][4]],
    Shift: mockShift21,
    isClass: true,
    unavailable: [mockStudents[0], mockStudents[2], mockStudents[4]]
};

const slot21: Slot = {
    slotID: 21,
    isBooked: false,
    isUnavailable: false,
    isShift: false,
    isBlocked: false,
    blockingModules: [],
    Shift: mockShift22,
    isClass: true,
    unavailable: [mockStudents[1], mockStudents[3]]
};

const slot22: Slot = {
    slotID: 22,
    isBooked: false,
    isUnavailable: false,
    isShift: false,
    isBlocked: false,
    blockingModules: [],
    Shift: mockShift23,
    isClass: true,
    unavailable: [mockStudents[0]]
};

const slot23: Slot = {
    slotID: 23,
    isBooked: false,
    isUnavailable: false,
    isShift: false,
    isBlocked: false,
    blockingModules: [],
    Shift: mockShift24,
    isClass: true,
    unavailable: [mockStudents[2], mockStudents[3], mockStudents[4]]
};

const slot24: Slot = {
    slotID: 24,
    isBooked: false,
    isUnavailable: false,
    isShift: true,
    isBlocked: false,
    blockingModules: [],
    Shift: mockShift25,
    isClass: true,
    unavailable: [mockStudents[0], mockStudents[1]]
};

const slot25: Slot = {
    slotID: 25,
    isBooked: false,
    isUnavailable: false,
    isShift: true,
    isBlocked: true,
    blockingModules: [modules[0][5]],
    Shift: mockShift26,
    isClass: true,
    unavailable: [mockStudents[2], mockStudents[3], mockStudents[4]]
};

const slot26: Slot = {
    slotID: 26,
    isBooked: false,
    isUnavailable: false,
    isShift: false,
    isBlocked: false,
    blockingModules: [],
    Shift: mockShift27,
    isClass: true,
    unavailable: [mockStudents[0], mockStudents[1]]
};

const slot27: Slot = {
    slotID: 27,
    isBooked: false,
    isUnavailable: false,
    isShift: false,
    isBlocked: false,
    blockingModules: [],
    Shift: mockShift28,
    isClass: true,
    unavailable: [mockStudents[2]]
};

const slot28: Slot = {
    slotID: 28,
    isBooked: false,
    isUnavailable: false,
    isShift: false,
    isBlocked: false,
    blockingModules: [],
    Shift: mockShift29,
    isClass: true,
    unavailable: [mockStudents[3], mockStudents[4]]
};

const slot29: Slot = {
    slotID: 29,
    isBooked: false,
    isUnavailable: false,
    isShift: false,
    isBlocked: false,
    blockingModules: [],
    Shift: mockShift30,
    isClass: true,
    unavailable: [mockStudents[0], mockStudents[1], mockStudents[2]]
};

const slot30: Slot = {
    slotID: 30,
    isBooked: false,
    isUnavailable: false,
    isShift: false,
    isBlocked: false,
    blockingModules: [],
    Shift: mockShift31,
    isClass: true,
    unavailable: [mockStudents[3]]
};

const slot31: Slot = {
    slotID: 31,
    isBooked: false,
    isUnavailable: false,
    isShift: false,
    isBlocked: false,
    blockingModules: [],
    Shift: mockShift32,
    isClass: true,
    unavailable: [mockStudents[0], mockStudents[4]]
};

const slot32: Slot = {
    slotID: 32,
    isBooked: false,
    isUnavailable: false,
    isShift: false,
    isBlocked: false,
    blockingModules: [],
    Shift: mockShift33,
    isClass: true,
    unavailable: [mockStudents[1], mockStudents[2], mockStudents[3]]
};

const slot33: Slot = {
    slotID: 33,
    isBooked: false,
    isUnavailable: false,
    isShift: false,
    isBlocked: false,
    blockingModules: [],
    Shift: mockShift34,
    isClass: true,
    unavailable: [mockStudents[0]]
};

const slot34: Slot = {
    slotID: 34,
    isBooked: false,
    isUnavailable: false,
    isShift: false,
    isBlocked: false,
    blockingModules: [],
    Shift: mockShift35,
    isClass: true,
    unavailable: [mockStudents[1], mockStudents[2], mockStudents[3], mockStudents[4]]
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
 
export const updateSchedule: Schedule = [
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