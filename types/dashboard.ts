export type dashboardMode = "overview" | "assistants" | "supervisors";

export type BreadCarouselProps = {
    active: dashboardMode;
    setActive: (mode: dashboardMode) => void
}

export type dashboardCard = {
    activeAssistants?: number;
    activeSupervisors?: number;
    inactive?:number;
    totalNumber?: number;
}

export type assistants = {
    fullName: string;
    modules: string[];
    unavailable: [][]; 
}