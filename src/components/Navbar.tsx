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
                <button className="blue-button border-none!">
                    <Link onClick={() => setLink("Timetable")} to="/app/timetable" className="hover:border-b border-b-solid border-b-white">Timetable</Link>
                </button>
                <button className="blue-button border-none!">
                    <Link onClick={() => setLink("Dashboard")} to="/app/dashboard" className="hover:border-b border-b-solid border-b-white">Dashboard</Link>
                </button>
                <button className="blue-button border-none!">
                    <Link onClick={() => setLink("Form")} to="/app/form" className="hover:border-b border-b-solid border-b-white">Form</Link>
                </button>
            </div>
            <div className="right flex gap-4 items-center">
                <button className="blue-button border-none!">
                    <Link to="/Notifications">{notificationIcon.element}</Link>
                </button>
                <button className="blue-button border-none!">
                    <Link to="/Settings">{settingsIcon.element}</Link>
                </button>
            </div>
        </div>
    );
};

export default Navbar;