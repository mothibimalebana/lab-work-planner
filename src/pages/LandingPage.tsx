import { aiLogo, arrowLogo, logOut, universityIcon } from "../assets/svg/SVG"

const LandingPage = () => {
    return (
        <div className="landing-page">
                <div className="nav flex border bg-[#FFF] p-[0.5rem_1rem] border-solid border-[#E5E8EB] justify-between">
                    <div className="left flex gap-6">
                        {universityIcon.element}
                        <p className="flex items-center text-[1.125rem] text-[#021E35]">Lab Work Planner</p>
                    </div>
                    <div className="right flex gap-2 items-center">
                        {logOut.element}
                        <p className="text-[#6C6C6C] text-[0.875rem]">Login</p>
                    </div>
                </div>
            <div className="header flex flex-col items-center mt-7.5">
                <div className="breadCrumbs flex flex-col">
                    <div className="top mb-3 self-center flex w-fit h-10.5 rounded-2xl border border-solid border-[#E5E8EB] bg-[rgba(142,184,190,0.20)] p-[0.5625rem_1.0625rem]">
                        {aiLogo.element}
                        <p>AI Powered Scheduling System</p>
                    </div>
                    <div className="middle gap-6 flex flex-col self-center">
                        <h1 className="w-fit text-[#021E35] text-[3rem]">Lab Work Planner</h1>
                        <p className="w-100 self-center text-[#6C6C6C]">A smart, automated lab scheduling system designed for University Computer Science departments</p>
                    </div>
                    <div className="bottom mt-4 self-center flex items-center gap-7">
                        <button className="view rounded-sm flex gap-1.5 h-full text-center bg-[#021E35] items-center">
                        <p className="text-white flex items-center h-full">View Timetable</p>
                        <div className="svg bg-[#021E35]">{arrowLogo.element}</div>
                        </button>
                        <button className="w-52">Submit Availability</button>
                    </div>
                </div>
            </div>
            <div className="main">
                <div className="container">
                    
                </div>
                <div className="container"></div>
                <div className="container"></div>
            </div>
            <div className="footer">

            </div>
        </div>
    )
}

export default LandingPage