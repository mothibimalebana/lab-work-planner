import type { modeValue } from "../../types/timetable";
import { dropDownIcon, greenEllipseIcon, hourMilestone, notificationIcon, redEllipseIcon, salaryMilestone } from "../assets/svg/SVG";

interface BreadCrumbsProps {
    hours?: number;
    rate?: number;
    setMode: (mode:modeValue) => void;
    mode: modeValue;

}

const BreadCrumbs = ({ hours = 0, rate = 36.5, setMode, mode }: BreadCrumbsProps) => {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    
    // Get date of that particular day
    const today = new Date(); //get today's date
    const date = today.toLocaleDateString(); //convert today's date to a mm/dd/yyyy format
    const splitDate = date.split('/') //get dd, mm, yyyy individually
    const dd = splitDate[1];
    const mm = months[Number(splitDate[0]) - 1];
    const yyyy = date.slice(5);
    const dateString = dd + ' ' + ' ' + mm + ' '  + yyyy;

    //Switch between Shifts view and Bookings
    const changeMode = () => {
        if (mode === "Shifts") {
            const newMode: modeValue = "Bookings";
            setMode(newMode)
            
        } else {
            const newMode: modeValue = "Shifts";
            setMode(newMode)
        }
    }

    return (
        <div className="breadCrumbs flex flex-col px-[5.12rem] h-full w-full">
            <div className="top flex justify-between">
                <div className="date font-bold text-[1.875rem]">{dateString}</div>
                <div className="btns flex gap-[0.87rem]">
                    <button className="blue-button">
                        <div className="icon">{notificationIcon.element}</div>
                        <p className="font-normal">Updates</p>
                    </button>
                </div>
            </div>
            <div className="month flex justify-evenly py-2 px-4 mt-3 rounded-sm bg-[#FBFBFB] border border-solid border-[#E5E8EB] divide-x-2 divide-solid divide-[#E5E8EB]">
                {months.map((month) => {
                    return(
                    <div key={month} className={ `w-fit flex-1 ${mm === month ? `monthCarousel flex items-center h-4 text-[1rem] px-[0.7rem]`: `monthCarousel flex items-center text-[1rem] h-4`}`}>
                        <p className={  `flex-1 ${mm === month ? `text-black shadow-[0_2px_4px_0_rgba(112,112,112,0.15)] h-5.5 rounded-sm  px-5 bg-white` : `text-[#6C6C6C] h-5.5 text-[1rem] px-[1.2rem]`}`}>{month}</p>
                    </div>
                    )
                })}
            </div>
            <div className="salaryDashboard rounded-sm py-6 px-4 border border-solid border-[#E5E8EB] bg-white flex justify-between mt-7 text-[0.75rem]">
                <div className="salarInfo flex gap-[1.8rem]">
                    <div className="hours  flex flex-col justify-between pr-6 border-r border-r-[#E5E8EB] rounded-[0.0625rem] border-r-solid">
                        <div className="p">Total Hours WorkedThis Month:</div>
                        <div className="info flex items-center h-6">
                            <div className="w-full flex-1 hoursMilestone">{hourMilestone(hours)}</div>
                            <p className="text-[1.25rem] font-bold">{`${hours}/80`}<span className="text-[">h</span></p>
                        </div>
                    </div>
                    <div className="salary flex">
                        <div className="info flex w-full flex-1 flex-col justify-between ">
                            <div className="div"><p>Employee working time</p></div>
                            <div className="info flex items-center h-6">
                                {salaryMilestone(hours)}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="total col-start-3 col-end-4">
                    <p className="text-[#6C6C6C]">Total for <span className="text-black font-normal">{mm}:</span></p>
                    <h3 className="text-black font-semibold text-[1.25rem]">R{hours * rate}</h3>
                </div>
            </div>
            <div className="chips flex items-center mt-3 justify-between">
                <div className="Chips">
                    {
                    mode === 'Shifts' ? 
                    (<div className="present rounded-sm flex bg-white border border-solid border-[#E5E8EB] p-2 items-center gap-0.5">
                        <div className="icon">{greenEllipseIcon.element}</div>
                        <p>Shift</p>
                    </div>
                    ) 
                    :
                    (
                    <div className="absent rounded-sm flex bg-white border border-solid border-[#E5E8EB] p-2 items-center gap-0.5">
                        <div className="icon">{redEllipseIcon.element}</div>
                        <p>Booked</p>
                    </div>
                    )
                    }
                </div>
                <div className="mode items-center">
                    <button onClick={changeMode} className="white-button text-black">
                        <p>{mode}</p>
                        <div className="dropDown">{dropDownIcon.element}</div>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default BreadCrumbs