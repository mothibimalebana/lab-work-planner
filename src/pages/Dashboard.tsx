import student from "../assets/svg/student.svg"
import exclamation from "../assets/svg/exclamation.svg"
import up from "../assets/svg/up.svg"
import people from "../assets/svg/people.svg"
import overview from "../assets/svg/overview.svg"
import type { DashboardMode, DashboardProps } from '../../types/student' 
import { useState } from "react"



function Cards( {activeAssistants = 3, activeSupervisors = 1, inactiveEmployees = 31, totalEmployees = 35}:DashboardProps ){
    return(
        <div className="cards flex justify-between">
                {/**Active Lab Assistants */}
                <div className="card flex flex-col justify-between alig w-60 h-36 p-6 rounded-lg border border-solid border-[rgba(0,0,0,0.10)]">
                    <div className="top flex justify-between">
                        <div className="left"><p>Total Lab Assistants</p></div>
                        <div className="right flex items-center justify-between"><img src={student} alt="grad cap" /></div>
                    </div>
                    <div className="bottom">
                        <div className="top"><h4 className="font-bold text-2xl">{activeAssistants}</h4></div>
                        <div className="bottom text-[0.75rem]"><p>assistants active in system</p></div>
                    </div>
                </div>

                {/**Active Lab Supervisors */}
                <div className="card flex flex-col justify-between w-60 h-36 p-6 rounded-lg border border-solid border-[rgba(0,0,0,0.10)]">
                    <div className="top flex justify-between">
                        <div className="left"><p>Total Lab Supervisors</p></div>
                        <div className="right flex items-center justify-between"><img src={people} alt="grad cap" /></div>
                    </div>
                    <div className="bottom">
                        <div className="top"><h4 className="font-bold text-2xl">{activeSupervisors}</h4></div>
                        <div className="bottom text-[0.75rem]"><p>currently managing labs</p></div>
                    </div>
                </div>
            
                {/**Inactive Employees */}
                <div className="card flex flex-col justify-between w-60 h-36 p-6 rounded-lg border border-solid border-[rgba(0,0,0,0.10)]">
                    <div className="top flex justify-between">
                        <div className="left"><p>Inactive Employees</p></div>
                        <div className="right flex items-center justify-between"><img src={exclamation} alt="grad cap" /></div>
                    </div>
                    <div className="bottom">
                        <div className="top"><h4 className="font-bold text-2xl">{inactiveEmployees}</h4></div>
                        <div className="bottom text-[0.75rem]"><p>Missed a shift</p></div>
                    </div>
                </div>

                {/***Total number of employees*/}
                <div className="card flex flex-col justify-between w-60 h-36 p-6 rounded-lg border border-solid border-[rgba(0,0,0,0.10)]">
                    <div className="top flex justify-between">
                        <div className="left"><p>Total number of users</p></div>
                        <div className="right flex items-center justify-between"><img src={up} alt="grad cap" /></div>
                    </div>
                    <div className="bottom">
                        <div className="top"><h4 className="font-bold text-2xl">{totalEmployees}</h4></div>
                        <div className="bottom text-[0.75rem]"><p>In the system</p></div>
                    </div>
                </div>
        </div>
    )
}

function ButtonCarousel( { mode = 'overview' }: {mode: DashboardMode} ){
    const [active, setActive] = useState(mode);
    const switchToOverview = () => { setActive("overview") };
    const switchToAssistant = () => { setActive("assistants") };
    const switchToSupervisor = () => { setActive("supervisors")};
    return(
        <div className="buttonCarousel rounded-xl mt-8 flex justify-between font-[Arimo] text-[#0A0A0A] text-[0.86988rem] w-full bg-[#ECECF0]">
            { active === 'overview' ?  <button onClick={switchToOverview} className="w-[26.6rem] bg-[#FFFFFF]">Overview</button> : <button onClick={switchToOverview} className="w-[20rem] bg-[#ECECF0]">Overview</button> }
            { active === 'assistants' ? <button onClick={switchToAssistant} className="w-[26.6rem] bg-[#FFFFFF]">Lab Assistants </button> : <button onClick={switchToAssistant} className="w-[20rem] bg-[#ECECF0]">Lab Assistants</button> }
            { active === 'supervisors' ? <button onClick={switchToSupervisor} className="w-[26.6rem] bg-[#FFFFFF]">Lab Supervisor </button> : <button onClick={switchToSupervisor} className="w-[20rem] bg-[#ECECF0]">Lab Supervisor</button> }
        </div>
    )
}


function Dashboard( {activeAssistants = 3, activeSupervisors = 1, inactiveEmployees = 31, totalEmployees = 35}:DashboardProps )  {

    return(
        <div className="dashboard px-[5.12rem] w-full mt-14">
            <div className="header">
                <Cards
                activeAssistants={activeAssistants}
                activeSupervisors={activeSupervisors}
                inactiveEmployees={inactiveEmployees}
                totalEmployees={totalEmployees}
                />
                <ButtonCarousel mode="overview"/>
            </div>
            <div className="nav"></div>
            <div className="table"></div>
        </div>
    )
}

export default Dashboard