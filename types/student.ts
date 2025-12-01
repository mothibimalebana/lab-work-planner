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
export type schoolDataPopUp = {
    fullName: string
    modules: string[]
    availability: number,
    level?: schoolLevel,
    view: false
    title: jobTitle,
}