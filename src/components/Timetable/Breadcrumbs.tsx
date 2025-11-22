import { dropDownIcon, filterIcon, hourMilestone, notificationIcon, salaryMilestone } from "../../assets/svg/SVG";

const BreadCrumbs = () => {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const today = new Date();
    const date = today.toLocaleDateString();
    const dd = date.slice(0,2);
    const mm = months[Number(date.slice(3,5)) - 1];
    const yyyy = date.slice(6)
    const dateString = dd + ' ' + ' ' + mm + ' '  + yyyy

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
            <div className="month flex justify-evenly py-2 px-4 mt-3 rounded-sm bg-[#FBFBFB] border-[1px_solid_#E5E8EB] divide-x-2 divide-solid divide-[#E5E8EB]">
                {months.map((month) => {
                    return mm === month ? <div className="monthCarousel flex items-center h-4 text-[1rem] px-[1.2rem]"><p className="text-black shadow-[0_2px_4px_0_rgba(112,112,112,0.15)] h-5.5 rounded-sm  px-4 bg-white">{month}</p></div> : <div className="monthCarousel flex items-center text-[1rem] h-4"><p className="text-[#6C6C6C] h-5.5 text-[1rem] px-[1.2rem]">{month}</p></div>
                })}
            </div>
            <div className="salaryDashboard grid">
                <div className="hours">
                    <div className="p">Total Hours Worked:</div>
                    <div className="info">
                        {hourMilestone.element}
                    </div>
                </div>
                <div className="salary">
                    <div className="info">
                        <p>Employee working time</p>
                        {salaryMilestone.element}
                    </div>
                    <div className="total">
                        <p className="text-[#6C6C6C]">Total for <span className="text-black font-bold">April:</span></p>
                        <h3 className="text-black font-semibold text-[1.25rem]">R219</h3>
                    </div>
                </div>
            </div>
            <div className="chips"></div>
        </div>
    )
}

export default BreadCrumbs