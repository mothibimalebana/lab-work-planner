import { aiLogo, arrowLogo, logOut, universityIcon } from "../assets/svg/SVG"
import swoosh from "../assets/svg/swoosh.svg"
import AI from "../assets/svg/AI.svg"
import safe from "../assets/svg/Safe.svg"
import people from "../assets/svg/People.svg"
import clock from "../assets/svg/Clock.svg"
import calendar from "../assets/svg/Calendar.svg"




const LandingPage = () => {
    return (
        <div className="landing-page">
                <div className="nav flex border bg-[#FFF] p-[0.5rem_1rem] border-solid border-[#E5E8EB] justify-between">
                    <div className="left flex gap-6">
                        {universityIcon.element}
                        <p className="flex items-center text-[1.125rem] text-[#021E35]">Lab Work Planner</p>
                    </div>
                    <button className="right flex gap-2 items-center">
                        {logOut.element}
                        <p className="text-[#6C6C6C] text-[0.875rem]">Login</p>
                    </button>
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
                        <button className="w-52 text-[#337E89] outline outline-solid outline-[#337E89]">Submit Availability</button>
                    </div>
                </div>
            </div>
            <div className="main">
                <div className="card-container flex justify-between mx-5 mt-20 mb-20">  
                    <div className="card border bg-white border-solid border-[#E5E8EB] rounded-sm p-6 flex flex-col w-[19.666rem]">
                        <div className="icon mb-[1.12rem] rounded-sm bg-[rgba(142,184,190,0.20)] w-12 h-12 p-[0.75rem]">
                            <img src={swoosh} alt="tick" />
                        </div>
                        <div className="header text-[#021E35] mb-[0.44rem] font-bold">
                            <h5>Automatic Conflict Prevention</h5>
                        </div>
                        <div className="cardInfo">
                            <p>Select your enrolled modules and the system automatically blocks out your class times</p>
                        </div>
                    </div>
                    <div className="card border bg-white border-solid border-[#E5E8EB] rounded-sm p-6 flex flex-col w-[19.666rem]">
                        <div className="icon mb-[1.12rem] rounded-sm bg-[rgba(142,184,190,0.20)] w-12 h-12 p-[0.75rem]">
                            <img src={AI} alt="magic icon" />
                        </div>
                        <div className="header text-[#021E35] mb-[0.44rem] font-bold">
                            <h5>AI Powered Scheduling</h5>
                        </div>
                        <div className="cardInfo">
                            <p>Generates optimal schedules with exactly 3 assistants per slot and even workload distribution</p>
                        </div>
                    </div>
                    <div className="card border bg-white border-solid border-[#E5E8EB] rounded-sm p-6 flex flex-col w-[19.666rem]">
                        <div className="icon mb-[1.12rem] rounded-sm bg-[rgba(142,184,190,0.20)] w-12 h-12 p-[0.75rem]">
                            <img src={clock} alt="" />
                        </div>
                        <div className="header text-[#021E35] mb-[0.44rem] font-bold">
                            <h5>Manual Override</h5>
                        </div>
                        <div className="cardInfo">
                            <p>Supervisors can click any time slot to manually adjust assignments for edge cases</p>
                        </div>
                    </div>  
                </div>
                <div className="container flex flex-col">
                    <div className="header text-[#021E35] text-3xl self-center font-bold"><h2>Your Role:</h2></div>
                    <div className="card-container flex justify-between mx-5 mt-5">  
                        <div className="card border bg-white border-solid border-[#E5E8EB] rounded-sm p-6 flex flex-col w-[19.666rem]">
                            <div className="icon flex justify-center items-center rounded-sm mb-[1.12rem] rounded-sm bg-[#337E89] w-16 h-16 p-4">
                                <img src={people} alt="tick" />
                            </div>
                            <div className="header text-[#021E35] mb-[0.44rem] font-bold">
                                <h5>Lab Assistant</h5>
                            </div>
                            <div className="cardInfo">
                                <p>Submit your enrolled modules and availability preferences</p>
                            </div>
                            <div className="bullets">
                                
                            </div>
                        </div>
                        <div className="card border bg-white border-solid border-[#E5E8EB] rounded-sm p-6 flex flex-col w-[19.666rem]">
                            <div className="icon mb-[1.12rem] rounded-sm bg-[rgba(142,184,190,0.20)] w-12 h-12 p-[0.75rem]">
                                <img src={AI} alt="magic icon" />
                            </div>
                            <div className="header text-[#021E35] mb-[0.44rem] font-bold">
                                <h5>AI Powered Scheduling</h5>
                            </div>
                            <div className="cardInfo">
                                <p>Generates optimal schedules with exactly 3 assistants per slot and even workload distribution</p>
                            </div>
                        </div>
                        <div className="card border bg-white border-solid border-[#E5E8EB] rounded-sm p-6 flex flex-col w-[19.666rem]">
                            <div className="icon mb-[1.12rem] rounded-sm bg-[rgba(142,184,190,0.20)] w-12 h-12 p-[0.75rem]">
                                <img src={clock} alt="" />
                            </div>
                            <div className="header text-[#021E35] mb-[0.44rem] font-bold">
                                <h5>Manual Override</h5>
                            </div>
                            <div className="cardInfo">
                                <p>Supervisors can click any time slot to manually adjust assignments for edge cases</p>
                            </div>
                        </div>  
                    </div>
                </div>
                <div className="container"></div>
            </div>
            <div className="footer">

            </div>
        </div>
    )
}

export default LandingPage