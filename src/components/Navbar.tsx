import { Link } from "react-router-dom";
import { notificationIcon, settingsIcon, universityIcon } from "../assets/svg/SVG";
import SVGElement from "./SVGElement";
import type { navLinkState} from "../../types/navbar"




const Navbar = ({setLink}: navLinkState) => {
    return (
        <div className="nav-bar hidden md:flex justify-between bg-[#021E35] px-[5.12rem] min-h-17">
            <div className="left flex gap-4 items-center">
                <div className="svg">
                   <Link to="/">
                        <SVGElement element={universityIcon.element} />
                   </Link>
                </div>
                <div className="timetable">
                    <Link onClick={() => setLink("Timetable")} to="/app/timetable">Timetable</Link>
                </div>
                <div className="dashboard">
                    <Link onClick={() => setLink("Dashboard")} to="/app/dashboard">Dashboard</Link>
                </div>
                <div className="form">
                    <Link onClick={() => setLink("Form")} to="/app/form">Form</Link>
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