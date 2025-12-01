import exclamation from "../assets/svg/exclamation.svg"
import up from "../assets/svg/up.svg"
import people from "../assets/svg/people.svg"
import student from "../assets/svg/student.svg"
import overview from "../assets/svg/overview.svg"
import supervisor from "../assets/svg/supervisor.svg"
import searchIcon from "../assets/svg/searchIcon.svg"
import type { DashboardMode, DashboardProps, dashboardTimetable } from '../../types/student' 
import { useState } from "react"

/**
 * Card component, takes input of assisntant info and returns a card component with active, inactive and total number of employees.
 */
function Card( {activeAssistants = 3, activeSupervisors = 1, inactiveEmployees = 31, totalEmployees = 35} ){
    return(
        <div className="cards flex justify-between">
                {/**Active Lab Assistants */}
                <div className="card flex flex-col justify-between  w-60 h-36 p-6 rounded-lg border border-solid border-[rgba(0,0,0,0.10)]">
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

function DashboardTable(
    {
        mode = 'overview',
        data = 
        [
            {fullName: 'Mothibi Malebana', modules: ['SCOA032', 'SSTB032'], availability: 35, level: 'undergraduate' },
            {fullName: 'Mot Malebana', modules: ['SCOA031', 'SSTB021'], availability: 35, level: 'undergraduate' },
            {fullName: 'Mothibi Mana', modules: ['SCOA0321', 'SSTB231'], availability: 35, level: 'undergraduate' },
            {fullName: 'Mothibi Malebana', modules: ['SCOA032', 'SSB031'], availability: 35, level: 'postgraduate' },
            {fullName: 'Moti bana', modules: ['SCOA032', 'SSTB032'], availability: 35, level: 'undergraduate' },
        ]
        }
        :
        dashboardTimetable
    )
    {
    return(
        
        <div className="dashboardTable flex flex-col w-full">
            <div className="header flex justify-between">
                <div className="title">
                    <h5 className="text-[0.99413rem]! font-semibold leading-[0.99413rem]!">
                        {
                            mode === 'overview' && 'Overview'
                            ||
                            mode === 'assistants' && 'Lab Assistant Manegment'
                            ||
                            mode === 'supervisors' && 'Lab Supervisor Manegment'
                        }
                    </h5>
                    <p className="text-[0.99413rem]!">
                        {
                            mode === 'overview' && 'Registered assistants and supervisors'
                            ||
                            mode === 'assistants' && 'View and manage all assistants'
                            ||
                            mode === 'supervisors' && 'View and manage all supervisors' 
                        }
                    </p>
                </div>
                <div className="search flex gap-2 items-center w-[15.9055rem] rounded-md! bg-[#F3F3F5] h-[2.23688rem]! p-[0.24856rem_0.74563rem_0.24856rem_1.98831rem]">
                    <img src={searchIcon} className="flex w-[0.99319rem] h-[0.99319rem]" alt="search icon" />
                    <input placeholder={`Search...`} type="search" name="search"/>
                </div>
            </div>
            <div className="content">

            </div>
        </div>
    )
}

/**
 * 
 * Button carousel to toggle between 'overview', 'lab assistants' and 'lab supervisors'
 */
function ButtonCarousel( { mode = 'overview' }: {mode: DashboardMode} ){
    const [active, setActive] = useState(mode);

    //functions to facilitate toggling between different options
    const switchToOverview = () => { setActive("overview") };
    const switchToAssistant = () => { setActive("assistants") };
    const switchToSupervisor = () => { setActive("supervisors")};

    return(
        <div className="buttonCarousel rounded-[0.86988rem]! mt-8 flex items-center justify-between font-[Arimo] text-[#0A0A0A] text-[0.86988rem] w-full bg-[#ECECF0]">
            <button onClick={switchToOverview} className={active === 'overview' ? 'flex justify-center items-center gap-[0.87rem] w-[26.38638rem] px-[0.27913rem_9.6805rem_0.3305rem_9.21825rem] h-[1.85969rem]! text-[0.86988rem] text-[#0A0A0A] font-Arimo bg-[#FFFFFF] rounded-[0.86988rem]!' : 'w-[26.38638rem] h-[1.85969rem]! flex justify-center items-center gap-[0.87rem] px-[0.27913rem_9.6805rem_0.3305rem_9.21825rem] bg-[#ECECF0] rounded-[0.86988rem]!'}><img src={overview} className="h-[0.99319rem]! w-[0.99319rem]!" alt="overview page" /> <p>Overview</p></button>
            <button onClick={switchToAssistant} className={active === 'assistants' ? 'flex justify-center items-center gap-[0.87rem] w-[26.38638rem] px-[0.27913rem_9.6805rem_0.3305rem_9.21825rem] h-[1.85969rem]! text-[0.86988rem] text-[#0A0A0A] font-Arimo bg-[#FFFFFF] rounded-[0.86988rem]!' : 'w-[26.38638rem] h-[1.85969rem]! flex justify-center items-center gap-[0.87rem] px-[0.27913rem_9.6805rem_0.3305rem_9.21825rem] bg-[#ECECF0] rounded-[0.86988rem]!'}><img src={student} className="h-[0.99319rem]! w-[0.99319rem]!" alt="student page" /><p>Lab Assistants</p></button>
            <button onClick={switchToSupervisor} className={active === 'supervisors' ? 'flex justify-center items-center gap-[0.87rem] w-[26.38638rem] px-[0.27913rem_9.6805rem_0.3305rem_9.21825rem] h-[1.85969rem]! text-[0.86988rem] text-[#0A0A0A] font-Arimo bg-[#FFFFFF] rounded-[0.86988rem]!' : 'w-[26.38638rem] h-[1.85969rem]! flex justify-center items-center gap-[0.87rem] px-[0.27913rem_9.6805rem_0.3305rem_9.21825rem] bg-[#ECECF0] rounded-[0.86988rem]!'}><img src={supervisor} className="h-[0.99319rem]! w-[0.99319rem]!" alt="" /><p>Lab Supervisor</p></button>
        </div>
    )
}

/** Actual Dashboard Page, contains all the components above **/
function Dashboard( {activeAssistants = 3, activeSupervisors = 1, inactiveEmployees = 31, totalEmployees = 35, dashboardMode = 'overview'}:DashboardProps )  {

    return(
        <div className="dashboard px-[5.12rem] w-full mt-14">
            <div className="header">
                <Card
                activeAssistants={activeAssistants}
                activeSupervisors={activeSupervisors}
                inactiveEmployees={inactiveEmployees}
                totalEmployees={totalEmployees}
                />
            </div>
            <div className="nav">
                <ButtonCarousel mode={dashboardMode}/>
            </div>
            <div className="table w-full mt-8">
                <DashboardTable 
                    mode={dashboardMode} 
                    data={
                        [
                            {fullName: 'Mothibi Malebana', modules: ['SCOA032', 'SSTB032'], availability: 35, level: 'undergraduate' },
                            {fullName: 'Mot Malebana', modules: ['SCOA031', 'SSTB021'], availability: 35, level: 'undergraduate' },
                            {fullName: 'Mothibi Mana', modules: ['SCOA0321', 'SSTB231'], availability: 35, level: 'undergraduate' },
                            {fullName: 'Mothibi Malebana', modules: ['SCOA032', 'SSB031'], availability: 35, level: 'postgraduate' },
                            {fullName: 'Moti bana', modules: ['SCOA032', 'SSTB032'], availability: 35, level: 'undergraduate' },
                        ]
                    }
                />
            </div>
        </div>
    )
}



export default Dashboard