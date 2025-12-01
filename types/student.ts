export type DashboardProps = {
    activeAssistants?: number;
    activeSupervisors?: number;
    inactiveEmployees?:  number;
    totalEmployees?: number;
    dashboardMode: 'overview'
};

export type DashboardMode = "overview" | "assistants" | "supervisors";
export type schoolLevel = "undergraduate" | "postgraduate";

export type dashboardTimetable = {
    mode: DashboardMode,
    data: {
        fullName: string
        modules: string[]
        availability: number,
        level: schoolLevel,
    }[],
}

export type schoolData = {
    fullName: string
    modules: string[]
    availability: number,
    level: schoolLevel,
}