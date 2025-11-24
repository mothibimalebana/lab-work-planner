import { dropDownIcon, filterIcon, greenEllipseIcon, hourMilestone, notificationIcon, redEllipseIcon, salaryMilestone } from "../assets/svg/SVG";

interface BreadCrumbsProps {
    hours?: number;
    setMode: (mode: string) => void;
    mode: string;
}

const BreadCrumbs = ({ hours = 0, setMode, mode }: BreadCrumbsProps) => {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const today = new Date();
    const date = today.toLocaleDateString();
    const dd = date.slice(0,2);
    const mm = months[Number(date.slice(3,5)) - 1];
    const yyyy = date.slice(6);
    const dateString = dd + ' ' + ' ' + mm + ' '  + yyyy

    const changeMode = () => {
        if (mode === 'Lab Assistant') {
            setMode('Bookings');
        } else {
            setMode('Lab Assistant');
        }
    }

    return (
        <div className="md:breadCrumbs flex flex-col px-[5.12rem] h-full w-full">
            <div className="top flex justify-between">
                <div className="date font-bold text-[1.875rem]">{dateString}</div>
                <div className="btns flex gap-[0.87rem]">
                    <button className="flex text-center items-center gap-2.5">
                        <div className="icon">{filterIcon.element}</div>
                        <p><b>Filters</b></p>
                        <div className="icon">{dropDownIcon.element}</div>
                    </button>
                    <button className="flex text-center text-white bg-[#021E35] items-center gap-2.5">
                        <div className="icon">{notificationIcon.element}</div>
                        <p><b>Updates</b></p>
                    </button>
                </div>
            </div>
            <div className="month flex justify-evenly py-2 px-4 mt-3 rounded-sm bg-[#FBFBFB] border border-solid border-[#E5E8EB] divide-x-2 divide-solid divide-[#E5E8EB]">
                {months.map((month) => {
                    return mm === month ? <div className="monthCarousel flex items-center h-4 text-[1rem] px-[1.2rem]"><p className="text-black shadow-[0_2px_4px_0_rgba(112,112,112,0.15)] h-5.5 rounded-sm  px-4 bg-white">{month}</p></div> : <div className="monthCarousel flex items-center text-[1rem] h-4"><p className="text-[#6C6C6C] h-5.5 text-[1rem] px-[1.2rem]">{month}</p></div>
                })}
            </div>
            <div className="salaryDashboard rounded-sm py-6 px-4 border border-solid border-[#E5E8EB] bg-white flex justify-between mt-7 text-[0.75rem]">
                <div className="salarInfo flex gap-[1.8rem]">
                    <div className="hours  flex flex-col justify-between pr-6 border-r border-r-[#E5E8EB] rounded-[0.0625rem] border-r-solid">
                        <div className="p">Total Hours WorkedThis Month:</div>
                        <div className="info flex items-center h-6">
                            <div className="hoursMilestone">{hourMilestone(hours)}</div>
                            <p className="text-[1.25rem] font-bold">{`${hours}/80`}<span className="text-[">h</span></p>
                        </div>
                    </div>
                    <div className="salary flex">
                        <div className="info flex flex-col justify-between ">
                            <div className="div"><p>Employee working time</p></div>
                            <div className="info flex items-center h-6">
                                {salaryMilestone(hours)}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="total col-start-3 col-end-4">
                    <p className="text-[#6C6C6C]">Total for <span className="text-black font-bold">{mm}:</span></p>
                    <h3 className="text-black font-semibold text-[1.25rem]">R219</h3>
                </div>
            </div>
            <div className="chips flex items-center mt-3 justify-between">
                <div className="attendanceChips flex gap-3.5">
                    <div className="present rounded-sm flex bg-[#F8F8F9] border border-solid border-[#E5E8EB] p-2 items-center gap-0.5">
                        <div className="icon">{greenEllipseIcon.element}</div>
                        <p>Shift</p>
                    </div>
                    <div className="absent rounded-sm flex bg-[#F8F8F9] border border-solid border-[#E5E8EB] p-2 items-center gap-0.5">
                        <div className="icon">{redEllipseIcon.element}</div>
                        <p>Absent</p>
                    </div>
                </div>
                <div className="mode items-center">
                    <div onClick={changeMode} className="mode rounded-sm flex bg-[#F8F8F9] border border-solid border-[#E5E8EB] p-2 items-center gap-0.5">
                        <p>{mode}</p>
                        <div className="dropDown">{dropDownIcon.element}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BreadCrumbs