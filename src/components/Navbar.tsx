import { Link } from "react-router";
import { notificationIcon, settingsIcon, universityIcon } from "../assets/SVG";
import SVGElement from "./SVGElement";

/**
 * Navbar will help navigate between different pages on the main app component
 * @params - none
 * @returns -Nav JSX with link to timetable, dashboard, form, notifications, settings 
 */
const Navbar = ( ) => {
    return (
        <div className="nav-bar">
            <div className="left flex">
                <div className="svg">
                    <SVGElement element={universityIcon.element}/>
                </div>
                <div className="timetable">
                    <Link to="/Timetable" >Timetable</Link>
                </div>
                <div className="/Dashboard">
                    <Link to="/Dashboard" >Dashboard</Link>
                </div>
                <div className="Form">
                    <Link to="/Form">Form</Link>
                </div>
            </div>
            <div className="right flex">
                <div className="notifications">
                    <Link to="/Notifications">{notificationIcon.element}</Link>
                </div>
                <div className="settings">
                    <Link to="/Settings">{settingsIcon.element}</Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar