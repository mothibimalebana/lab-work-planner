import { aiLogo, arrowLogo, logOut, universityIcon } from "../assets/svg/SVG"
import swoosh from "../assets/svg/swoosh.svg"
import AI from "../assets/svg/AI.svg"
import people from "../assets/svg/People.svg"
import clock from "../assets/svg/Clock.svg"
import greenBullet from "../assets/svg/greenBullet.svg"
import blueBullet from "../assets/svg/blueBullet.svg"
import greyB from "../assets/svg/greyB.svg"





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
                            <div className="icon self-center justify-center items-center mb-[1.12rem] rounded-sm bg-[#337E89] w-16 h-16 p-4">
                                <img src={people} alt="tick" />
                            </div>
                            <div className="header self-center text-[#021E35] mb-[0.44rem] font-medium">
                                <h5>Lab Assistant</h5>
                            </div>
                            <div className="cardInfo mb-5">
                                <p className="text-[#6C6C6C]">Submit your enrolled modules and availability preferences</p>
                            </div>
                            <div className="bullets">
                                <ul>
                                    <li className="li-icon flex items-center gap-2"><img className="self-center" src={greenBullet} alt="" /> <p className="li-text text-[0.875rem] text-[#6C6C6C]">Select enrolled modules</p></li>
                                    <li className="li-icon flex items-center gap-2"><img className="self-center" src={greenBullet} alt="" /> <p className="li-text text-[0.875rem] text-[#6C6C6C]">Mark additional unavailable times</p></li>
                                    <li className="li-icon flex items-center gap-2"><img className="self-center" src={greenBullet} alt="" /> <p className="li-text text-[0.875rem] text-[#6C6C6C]">View your assigned shifts</p></li>
                                </ul>
                            </div>
                            <div className="button mt-8">
                                <button className="role-btn text-white bg-[#337E89] w-full">Submit Availability</button>
                            </div>
                        </div>
                        <div className="card border bg-white border-solid border-[#E5E8EB] rounded-sm p-6 flex flex-col w-[19.666rem]">
                            <div className="icon self-center justify-center items-center mb-[1.12rem] rounded-sm bg-[#021E35] w-16 h-16 p-4">
                                <img src={people} alt="tick" />
                            </div>
                            <div className="header self-center text-[#021E35] mb-[0.44rem] font-medium">
                                <h5>Lab Supervisor</h5>
                            </div>
                            <div className="cardInfo mb-5">
                                <p className="text-[#6C6C6C]">Generate schedules and manage shift assignments</p>
                            </div>
                            <div className="bullets">
                                <ul>
                                    <li className="li-icon flex items-center gap-2"><img className="self-center" src={blueBullet} alt="" /> <p className="li-text text-[0.875rem] text-[#6C6C6C]">Generate AI schedules instantly</p></li>
                                    <li className="li-icon flex items-center gap-2"><img className="self-center" src={blueBullet} alt="" /> <p className="li-text text-[0.875rem] text-[#6C6C6C]">Edit assignments manually</p></li>
                                    <li className="li-icon flex items-center gap-2"><img className="self-center" src={blueBullet} alt="" /> <p className="li-text text-[0.875rem] text-[#6C6C6C]">View analytics and reports</p></li>
                                </ul>
                            </div>
                            <div className="button mt-8">
                                <button className="role-btn text-white bg-[#021E35] w-full">Supervisor Dashboard</button>
                            </div>
                        </div>
                        <div className="card border bg-white border-solid border-[#E5E8EB] rounded-sm p-6 flex flex-col w-[19.666rem]">
                            <div className="icon self-center justify-center items-center mb-[1.12rem] rounded-sm bg-[#6C6C6C] w-16 h-16 p-4">
                                <img src={people} alt="tick" />
                            </div>
                            <div className="header self-center text-[#021E35] mb-[0.44rem] font-medium">
                                <h5>Lab Assistant</h5>
                            </div>
                            <div className="cardInfo mb-5">
                                <p className="text-[#6C6C6C]">Oversee system and import data from Google Forms</p>
                            </div>
                            <div className="bullets">
                                <ul>
                                    <li className="li-icon flex items-center gap-2"><img className="self-center" src={greyB} alt="" /> <p className="li-text text-[0.875rem] text-[#6C6C6C]">Import CSV from Google Forms</p></li>
                                    <li className="li-icon flex items-center gap-2"><img className="self-center" src={greyB} alt="" /> <p className="li-text text-[0.875rem] text-[#6C6C6C]">Manage all users</p></li>
                                    <li className="li-icon flex items-center gap-2"><img className="self-center" src={greyB} alt="" /> <p className="li-text text-[0.875rem] text-[#6C6C6C]">System-wide analytics</p></li>
                                </ul>
                            </div>
                            <div className="button mt-8">
                                <button className="role-btn text-white bg-[#6C6C6C] w-full">Admin Dashboard</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container mt-20 flex flex-col">
                <div className="header mb-8 text-[#021E35] text-3xl self-center font-bold"><h2>How It Works:</h2></div>
                    <div className="circles-container flex justify-between mx-5 mt-5">  
                        <div className="info flex flex-col">
                            <h3 className="circle mb-4 self-center bg-[#337E89] rounded-full text-white w-12 h-12 flex justify-center items-center" >1</h3>
                            <h5 className="self-center mb-2 text-[#021E35] font-medium">Submit Modules</h5>
                            <p className="w-44 text-center">Lab assistants select their enrolled modules</p>
                        </div>
                        <div className="info flex flex-col">
                            <h3 className="circle mb-4 self-center bg-[#337E89] rounded-full text-white w-12 h-12 flex justify-center items-center" >2</h3>
                            <h5 className="self-center mb-2 text-[#021E35] font-medium">Auto-Block Classes</h5>
                            <p className="w-44 flex text-center">System blocks out class times automatically</p>
                        </div>
                        <div className="info flex flex-col">
                            <h3 className="circle mb-4 self-center bg-[#337E89] rounded-full text-white w-12 h-12 flex justify-center items-center" >3</h3>
                            <h5 className="self-center mb-2 text-[#021E35] font-medium">AI Scheduling</h5>
                            <p className="w-44 text-center">Algorithm assigns 3 assistants per shift</p>
                        </div>
                        <div className="info flex flex-col">
                            <h3 className="circle mb-4 self-center bg-[#337E89] rounded-full text-white w-12 h-12 flex justify-center items-center" >4</h3>
                            <h5 className="self-center mb-2 text-[#021E35] font-medium">Review & Publish</h5>
                            <p className="w-44 text-center">Supervisors review and publish the schedule</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer">

            </div>
        </div>
    )
}

export default LandingPage