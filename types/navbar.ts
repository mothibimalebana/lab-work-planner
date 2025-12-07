export type navLink = "Dashboard" | "Timetable" | "Form";


export interface navLinkState  {
    link?: navLink
    setLink: (link: navLink) => void
};