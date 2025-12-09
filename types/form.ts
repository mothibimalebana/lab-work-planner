export type FormMode = "employee" | "modules";

export type FormCarousel = {
    mode: FormMode;
    setMode: (mode:FormMode) => void;
}