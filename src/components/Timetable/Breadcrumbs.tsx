import { dropDownIcon, filterIcon, notificationIcon } from "../../assets/svg/SVG";

const BreadCrumbs = () => {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const today = new Date();
    const date = today.toLocaleDateString();
    const dd = date.slice(0,2);
    const mm = months[Number(date.slice(3,5)) - 1];
    const yyyy = date.slice(6)
    const dateString = dd + ' ' + ' ' + mm + ' '  + yyyy
    console.log(dd, mm, yyyy)

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
            <div className="month"></div>
            <div className="salaryDashboard"></div>
            <div className="chips"></div>
        </div>
    )
}

export default BreadCrumbs