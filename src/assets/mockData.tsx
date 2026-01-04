
export type FormMode = "employee" | "modules";
export type role = "assistant" | "supervisor";
export type lab = 1 | 2 | 3;

export const assistantScheduleMap = new Map();
export const schoolScheduleMap = new Map();

export type warning = Map<string, string>

export type warnings = warning[];

export type Shift = {
    supervisor: Students[];
    assistants: Students[] ;
    attentded?: boolean;
    donated?: boolean;
    role?: role;
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
    isBooked: boolean;
    isUnavailable: boolean;
    unavailable: Students[];
    isBlocked: boolean;
    blockingModules: Map<string, Module>[];
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
    studentNo: number ;
    fullName: string ;
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

export const enrolledModules = new Map()
enrolledModules.set("secondYearMain", new Map<string, string>());
enrolledModules.set("secondYearMain", new Map<string, string>([
    // Semester 1 Modules
    ["SMTA021", "Advanced Calculus"],
    ["SAPA021", "Ordinary and Partial Differential Equations"],
    ["SCOA021", "Data Structures"],
    ["SSTA021", "Theory of Distributions"],
    ["SPHA021", "Classical Mechanics"],
    ["SPHB021", "Modern Physics"],
    
    // Semester 2 Modules
    ["SMTA022", "Advanced Calculus"],
    ["SAPA022", "Numerical Analysis"],
    ["SCOA022", "Computer Architecture"],
    ["SSTA022", "Statistical Inference"],
    ["SPHA022", "Electrodynamics and Electronics"],
    ["SPHB022", "Waves and Physical Optics"]
]));
enrolledModules.set("secondYearExtended", new Map<string, string>());
enrolledModules.set("secondYearMain", new Map<string, string>([
    // Semester 1
    ["SMTA021", "Advanced Calculus"],
    ["SAPA021", "Ordinary and Partial Differential Equations"],
    ["SCOA021", "Data Structures"],
    ["SSTA021", "Theory of Distributions"],
    ["SPHA021", "Classical Mechanics"],
    ["SPHB021", "Modern Physics"],
    // Semester 2
    ["SMTA022", "Advanced Calculus"],
    ["SAPA022", "Numerical Analysis"],
    ["SCOA022", "Computer Architecture"],
    ["SSTA022", "Statistical Inference"],
    ["SPHA022", "Electrodynamics and Electronics"],
    ["SPHB022", "Waves and Physical Optics"]
]));

// All Year 2 Extended Programme
enrolledModules.set("secondYearExtended", new Map<string, string>([
    // Semester 1
    ["SCSC000", "Computing Concepts And Algorithms"],
    ["SHEL000", "Health Education And Life Competencies I"],
    ["SMTH000", "Pre-Calculus And Differential Calculus"],
    ["SPHS000", "Introduction To General Physics 1A"],
    ["SSTS000", "Descriptive Statistics"],
    // Semester 2
    ["SCOB000", "Data Organization, AI"],
    ["SHEB000", "Health Education And Life Competencies II"],
    ["SMTB000", "Introductory Algebra And Integral Calculus"],
    ["SPHB000", "Introduction To General Physics 1B"],
    ["SSTB000", "Introduction To Statistical Inference"]
]));

// All Year 3 Regular Programme
enrolledModules.set("thirdYearMain", new Map<string, string>([
    // Semester 1
    ["SPA031", "Fluid Mechanics"],
    ["SCOA031", "Introduction to Database Systems"],
    ["SCOB031", "Operating Systems"],
    ["SMTA031", "Mathematical Analysis I"],
    ["SMTB031", "Abstract Algebra"],
    ["SPHA031", "Quantum Mechanics"],
    ["SPHB031", "Thermodynamics and Statistical Mechanics"],
    ["SSTA031", "Time Series Analysis"],
    ["SSTB031", "Applied Linear Regression"],
    // Semester 2
    ["SAPA032", "Mathematical Theory of Electromagnetism and Special Theory of Relativity"],
    ["SCOA032", "Artificial Intelligence"],
    ["SCOB032", "Computer Networks"],
    ["SMTA032", "Complex Analysis"],
    ["SMTB032", "Mathematical Analysis II"],
    ["SPHA032", "Solid State Physics"],
    ["SPHB032", "Electrodynamics and Electronics"],
    ["SSTA032", "Design and Analysis of Experiments"],
    ["SSTB032", "Multivariate Statistical Methods"],
    ["SSTC032", "Sampling Theory"]
]))

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

export const Shift1: Shift = {
    supervisor: [],
    assistants: [],
    
};

export const shift2: Shift = {
    supervisor: [],
    assistants: [],
    
};

export const shift3: Shift = {
    supervisor: [],
    assistants: [],
    
};

export const shift4: Shift = {
    supervisor: [],
    assistants: [],
    
};

export const shift5: Shift = {
    supervisor: [],
    assistants: [],
    
};

export const shift6: Shift = {
    supervisor: [],
    assistants: [],
    
};

export const shift7: Shift = {
    supervisor: [],
    assistants: [],
    
};

export const shift8: Shift = {
    supervisor: [],
    assistants: [],
    
};

export const shift9: Shift = {
    supervisor: [],
    assistants: [],
    
};

export const shift10: Shift = {
    supervisor: [],
    assistants: [],
    
};

export const shift11: Shift = {
    supervisor: [],
    assistants: [],
    
};

export const shift12: Shift = {
    supervisor: [],
    assistants: [],
    
};

export const shift13: Shift = {
    supervisor: [],
    assistants: [],
    
};

export const shift14: Shift = {
    supervisor: [],
    assistants: [],
    
};

export const shift15: Shift = {
    supervisor: [],
    assistants: [],
    
};

export const shift16: Shift = {
    supervisor: [],
    assistants: [],
    
};

export const shift17: Shift = {
    supervisor: [],
    assistants: [],
    
};

export const shift18: Shift = {
    supervisor: [],
    assistants: [],
    
};

export const shift19: Shift = {
    supervisor: [],
    assistants: [],
    
};

export const shift20: Shift = {
    supervisor: [],
    assistants: [],
    
};

export const shift21: Shift = {
    supervisor: [],
    assistants: [],
    
};

export const shift22: Shift = {
    supervisor: [],
    assistants: [],
    
};

export const shift23: Shift = {
    supervisor: [],
    assistants: [],
    
};

export const shift24: Shift = {
    supervisor: [],
    assistants: [],
    
};

export const shift25: Shift = {
    supervisor: [],
    assistants: [],
    
};

export const shift26: Shift = {
    supervisor: [],
    assistants: [],
    
};

export const shift27: Shift = {
    supervisor: [],
    assistants: [],
    
};

export const shift28: Shift = {
    supervisor: [],
    assistants: [],
    
};

export const shift29: Shift = {
    supervisor: [],
    assistants: [],
    
};

export const shift30: Shift = {
    supervisor: [],
    assistants: [],
    
};

export const shift31: Shift = {
    supervisor: [],
    assistants: [],
    
};

export const shift32: Shift = {
    supervisor: [],
    assistants: [],
    
};

export const shift33: Shift = {
    supervisor: [],
    assistants: [],
    
};

export const shift34: Shift = {
    supervisor: [],
    assistants: [],
    
};

export const shift35: Shift = {
    supervisor: [],
    assistants: [],
    
};

export const mockBooking: classBooking = {
    lecturer: "Mr Mokwele",
    lab: 2,
    Module:modules[0][2],
}

// Individual slots with static unavailable students
export const emptySlot: Slot = {
    slotID: 0,
    isBooked: true,
    isUnavailable: true,
    isBlocked: false,
    blockingModules: [],
    Shift: Shift1,
    booking: mockBooking,
    unavailable: [],
};

const slot0: Slot = {
    slotID: 0,
    isBooked: true,
    isUnavailable: true,
    isBlocked: false,
    blockingModules: [enrolledModules.get("secondYearMain").get("SMTA021"), enrolledModules.get("secondYearMain").get("SAPA021")],
    Shift: Shift1,
    unavailable: [],
};

export const slot1: Slot = {
    slotID: 1,
    isBooked: false,
    isUnavailable: false,
    isBlocked: false,
    blockingModules: [],
    Shift: shift2,  
    unavailable: []
};

const slot2: Slot = {
    slotID: 2,
    isBooked: false,
    isUnavailable: false,
    isBlocked: false,
    blockingModules: [],
    Shift: shift3,
    
    unavailable: []
};

const slot3: Slot = {
    slotID: 3,
    isBooked: false,
    isUnavailable: false,
    isBlocked: false,
    blockingModules: [],
    Shift: shift4,
    unavailable: []
};

const slot4: Slot = {
    slotID: 4,
    isBooked: false,
    isUnavailable: false,
    isBlocked: false,
    blockingModules: [],
    Shift: shift5,
    
    unavailable: []
};

const slot5: Slot = {
    slotID: 5,
    isBooked: false,
    isUnavailable: false,
    isBlocked: false,
    blockingModules: [],
    Shift: shift6,
    unavailable: []
};

const slot6: Slot = {
    slotID: 6,
    isBooked: false,
    isUnavailable: false,
    isBlocked: false,
    blockingModules: [],
    Shift: shift7,
    unavailable: []
};

const slot7: Slot = {
    slotID: 7,
    isBooked: false,
    isUnavailable: false,
    isBlocked: false,
    blockingModules: [],
    Shift: shift8,
    unavailable: []
};

const slot8: Slot = {
    slotID: 8,
    isBooked: false,
    isUnavailable: false,
    isBlocked: false,
    blockingModules: [],
    Shift: shift9,
    unavailable: []
};

const slot9: Slot = {
    slotID: 9,
    isBooked: false,
    isUnavailable: true,
    isBlocked: false,
    blockingModules: [],
    Shift: shift10,
    unavailable: []
};

const slot10: Slot = {
    slotID: 10,
    isBooked: false,
    isUnavailable: false,
    isBlocked: false,
    blockingModules: [],
    Shift: shift11,
    unavailable: []
};

const slot11: Slot = {
    slotID: 11,
    isBooked: false,
    isUnavailable: false,
    isBlocked: false,
    blockingModules: [],
    Shift: shift12,
    unavailable: []
};

const slot12: Slot = {
    slotID: 12,
    isBooked: false,
    isUnavailable: false,
    isBlocked: false,
    blockingModules: [],
    Shift: shift13,
    unavailable: []
};

const slot13: Slot = {
    slotID: 13,
    isBooked: false,
    isUnavailable: false,
    isBlocked: false,
    blockingModules: [],
    Shift: shift14,
    unavailable: []
};

const slot14: Slot = {
    slotID: 14,
    isBooked: false,
    isUnavailable: false,
    isBlocked: false,
    blockingModules: [],
    Shift: shift15,
    unavailable: []
};

const slot15: Slot = {
    slotID: 15,
    isBooked: false,
    isUnavailable: false,
    isBlocked: false,
    blockingModules: [],
    Shift: shift16,
    unavailable: []
};

const slot16: Slot = {
    slotID: 16,
    isBooked: false,
    isUnavailable: false,
    isBlocked: false,
    blockingModules: [],
    Shift: shift17,
    unavailable: []
};

const slot17: Slot = {
    slotID: 17,
    isBooked: false,
    isUnavailable: false,
    isBlocked: false,
    blockingModules: [],
    Shift: shift18,
    unavailable: []
};

const slot18: Slot = {
    slotID: 18,
    isBooked: false,
    isUnavailable: false,
    isBlocked: false,
    blockingModules: [],
    Shift: shift19,
    
    unavailable: []
};

const slot19: Slot = {
    slotID: 19,
    isBooked: false,
    isUnavailable: false,
    
    isBlocked: false,
    blockingModules: [],
    Shift: shift20,
    
    unavailable: []
};

const slot20: Slot = {
    slotID: 20,
    isBooked: false,
    isUnavailable: false,
    isBlocked: true,
    blockingModules: [],
    Shift: shift21,
    unavailable: []
};

const slot21: Slot = {
    slotID: 21,
    isBooked: false,
    isUnavailable: false,
    
    isBlocked: false,
    blockingModules: [],
    Shift: shift22,
    
    unavailable: []
};

const slot22: Slot = {
    slotID: 22,
    isBooked: false,
    isUnavailable: false,
    
    isBlocked: false,
    blockingModules: [],
    Shift: shift23,
    
    unavailable: []
};

const slot23: Slot = {
    slotID: 23,
    isBooked: false,
    isUnavailable: false,
    
    isBlocked: false,
    blockingModules: [],
    Shift: shift24,
    
    unavailable: []
};

const slot24: Slot = {
    slotID: 24,
    isBooked: false,
    isUnavailable: false,
    
    isBlocked: false,
    blockingModules: [],
    Shift: shift25,
    
    unavailable: []
};

const slot25: Slot = {
    slotID: 25,
    isBooked: false,
    isUnavailable: false,
    isBlocked: true,
    blockingModules: [],
    Shift: shift26,
    unavailable: []
};

const slot26: Slot = {
    slotID: 26,
    isBooked: false,
    isUnavailable: false,
    isBlocked: false,
    blockingModules: [],
    Shift: shift27,
    unavailable: []
};

const slot27: Slot = {
    slotID: 27,
    isBooked: false,
    isUnavailable: false,
    isBlocked: false,
    blockingModules: [],
    Shift: shift28,
    unavailable: []
};

const slot28: Slot = {
    slotID: 28,
    isBooked: false,
    isUnavailable: false,
    isBlocked: false,
    blockingModules: [],
    Shift: shift29,
    unavailable: []
};

const slot29: Slot = {
    slotID: 29,
    isBooked: false,
    isUnavailable: false,
    isBlocked: false,
    blockingModules: [],
    Shift: shift30,
    
    unavailable: []
};

const slot30: Slot = {
    slotID: 30,
    isBooked: false,
    isUnavailable: false,
    
    isBlocked: false,
    blockingModules: [],
    Shift: shift31,
    
    unavailable: []
};

const slot31: Slot = {
    slotID: 31,
    isBooked: false,
    isUnavailable: false,
    
    isBlocked: false,
    blockingModules: [],
    Shift: shift32,
    
    unavailable: []
};

const slot32: Slot = {
    slotID: 32,
    isBooked: false,
    isUnavailable: false,
    
    isBlocked: false,
    blockingModules: [],
    Shift: shift33,
    
    unavailable: []
};

const slot33: Slot = {
    slotID: 33,
    isBooked: false,
    isUnavailable: false,
    
    isBlocked: false,
    blockingModules: [],
    Shift: shift34,
    
    unavailable: []
};

const slot34: Slot = {
    slotID: 34,
    isBooked: false,
    isUnavailable: false,
    isBlocked: false,
    blockingModules: [],
    Shift: shift35,
    unavailable: []
};

assistantScheduleMap.set("08h00-11h00", new Map<string, Slot>());
assistantScheduleMap.get("08h00-11h00").set("Monday", slot0);
assistantScheduleMap.get("08h00-11h00").set("Tuesday", slot1);
assistantScheduleMap.get("08h00-11h00").set("Wednsday", slot2);
assistantScheduleMap.get("08h00-11h00").set("Thursday", slot3);
assistantScheduleMap.get("08h00-11h00").set("Friday", slot4);
assistantScheduleMap.get("08h00-11h00").set("Saturday", slot5);
assistantScheduleMap.get("08h00-11h00").set("Sunday", slot6);
assistantScheduleMap.set("11h00-14h00", new Map());
assistantScheduleMap.get("11h00-14h00").set("Monday", slot7);
assistantScheduleMap.get("11h00-14h00").set("Tuesday", slot8);
assistantScheduleMap.get("11h00-14h00").set("Wednsday", slot9);
assistantScheduleMap.get("11h00-14h00").set("Thursday", slot10);
assistantScheduleMap.get("11h00-14h00").set("Friday", slot11);
assistantScheduleMap.get("11h00-14h00").set("Saturday", slot12);
assistantScheduleMap.get("11h00-14h00").set("Sunday", slot13);
assistantScheduleMap.set("14h00-17h00", new Map());
assistantScheduleMap.get("14h00-17h00").set("Monday", slot14);
assistantScheduleMap.get("14h00-17h00").set("Tuesday", slot15);
assistantScheduleMap.get("14h00-17h00").set("Wednsday", slot16);
assistantScheduleMap.get("14h00-17h00").set("Thursday", slot17);
assistantScheduleMap.get("14h00-17h00").set("Friday", slot18);
assistantScheduleMap.get("14h00-17h00").set("Saturday", slot19);
assistantScheduleMap.get("14h00-17h00").set("Sunday", slot20);
assistantScheduleMap.set("17h00-20h00", new Map());
assistantScheduleMap.get("17h00-20h00").set("Monday", slot21);
assistantScheduleMap.get("17h00-20h00").set("Tuesday", slot22);
assistantScheduleMap.get("17h00-20h00").set("Wednsday", slot23);
assistantScheduleMap.get("17h00-20h00").set("Thursday", slot24);
assistantScheduleMap.get("17h00-20h00").set("Friday", slot25);
assistantScheduleMap.get("17h00-20h00").set("Saturday", slot26);
assistantScheduleMap.get("17h00-20h00").set("Sunday", slot27);
assistantScheduleMap.set("20h00-00h00", new Map());
assistantScheduleMap.get("20h00-00h00").set("Monday", slot28);
assistantScheduleMap.get("20h00-00h00").set("Tuesday", slot29);
assistantScheduleMap.get("20h00-00h00").set("Wednsday", slot30);
assistantScheduleMap.get("20h00-00h00").set("Thursday", slot31);
assistantScheduleMap.get("20h00-00h00").set("Friday", slot32);
assistantScheduleMap.get("20h00-00h00").set("Saturday", slot33);
assistantScheduleMap.get("20h00-00h00").set("Sunday", slot34);

schoolScheduleMap.set("07h30-09h10", new Map());
schoolScheduleMap.set("09h10-11h00", new Map());
schoolScheduleMap.set("11h10-12h50", new Map());
schoolScheduleMap.set("13h00-14h40", new Map());
schoolScheduleMap.set("14h50-16h30", new Map());
schoolScheduleMap.set("16h40-18h20", new Map());


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

