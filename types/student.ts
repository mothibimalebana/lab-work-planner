import type { Students } from "../src/assets/mockData";

export type DashboardProps = {
    activeAssistants?: number;
    activeSupervisors?: number;
    inactiveEmployees?:  number;
    totalEmployees?: number;
    dashboardMode: 'overview'
};

export type DashboardMode = "overview" | "assistants" | "supervisors";
export type jobTitle = 'Lab Assistant' | 'Lab Supervisor';
export type schoolLevel = "undergraduate" | "postgraduate";

export type dashboardTimetable = {
    mode: DashboardMode,
    data: Students[]
}

export type schoolData = {
    fullName: string
    modules: string[]
    availability: number,
    level: schoolLevel,
}
export type schoolDataPopUp = {
    fullName: string | null | undefined;
    modules: string[] | null | undefined;
    availability: number | null | undefined;
    level?: schoolLevel,
    view: boolean | null | undefined;
    title: jobTitle | null | undefined;
    setView?: (value: boolean) => void;
}