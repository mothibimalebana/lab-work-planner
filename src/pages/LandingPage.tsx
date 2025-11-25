import { aiLogo, logOut, universityIcon } from "../assets/svg/SVG"

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
            <div className="header flex justify-center mt-7.5">
                <div className="breadCrumbs flex w-fit h-10.5 rounded-2xl border border-solid border-[#E5E8EB] bg-[rgba(142_184_190_0.20)] p-[0.5625rem_1.0625rem]">
                    {aiLogo.element}
                    <p>AI Powered Scheduling System</p>
                </div>
            </div>
            <div className="main">

            </div>
            <div className="footer">

            </div>
        </div>
    )
}

export default LandingPage