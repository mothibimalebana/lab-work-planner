export type DashboardProps = {
    activeAssistants?: number;
    activeSupervisors?: number;
    inactiveEmployees?:  number;
    totalEmployees?: number;
    dashboardMode: 'overview'
};

export type DashboardMode = "overview" | "assistants" | "supervisors";
