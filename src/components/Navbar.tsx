import { Link } from "react-router-dom";
import { notificationIcon, settingsIcon, universityIcon } from "../assets/svg/SVG";
import SVGElement from "./SVGElement";

/**
 * Navbar will help navigate between different pages on the main app component
 * @returns Nav JSX with Link to timetable, dashboard, form, notifications, settings 
 * 
 * The Navbar links to the following: /Timetable, /Form, /Notifications, /Settings.
 * This component is always at the top of the Table, Dashboard Component
 */

const Navbar = () => {
    return (
        <div className="nav-bar hidden md:flex justify-between bg-[#021E35] px-[5.12rem] min-h-17">
            <div className="left flex gap-4 items-center">
                <div className="svg">
                    <SVGElement element={universityIcon.element} />
                </div>
                <div className="timetable">
                    <Link to="/app/timetable">Timetable</Link>
                </div>
                <div className="dashboard">
                    <Link to="/app/dashboard">Dashboard</Link>
                </div>
                <div className="form">
                    <Link to="/app/orm">Form</Link>
                </div>
            </div>
            <div className="right flex gap-4 items-center">
                <div className="notifications">
                    <Link to="/Notifications">{notificationIcon.element}</Link>
                </div>
                <div className="settings">
                    <Link to="/Settings">{settingsIcon.element}</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;