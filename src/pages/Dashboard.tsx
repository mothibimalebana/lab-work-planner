import exclamation from "../assets/svg/exclamation.svg"
import up from "../assets/svg/up.svg"
import people from "../assets/svg/people.svg"
import student from "../assets/svg/student.svg"
import overview from "../assets/svg/overview.svg"
import supervisor from "../assets/svg/supervisor.svg"
import view from "../assets/svg/view.svg"

import type { DashboardMode, DashboardProps, dashboardTimetable, jobTitle, schoolData, schoolDataPopUp } from '../../types/student' 
import { useState } from "react"
import ViewEmployee from "./pop-up/Dashboard"

/**
 * Card component, takes input of assisntant info and returns a card component with active, inactive and total number of employees.
 */
function Card( {activeAssistants = 3, activeSupervisors = 1, inactiveEmployees = 31, totalEmployees = 35} ){
    return(
        <div className="cards flex justify-between">
                {/**Active Lab Assistants */}
                <div className="card flex bg-white flex-col justify-between  w-70 h-36 p-6 rounded-lg border border-solid border-[rgba(0,0,0,0.10)]">
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
                <div className="card flex bg-white flex-col justify-between w-70 h-36 p-6 rounded-lg border border-solid border-[rgba(0,0,0,0.10)]">
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
                <div className="card flex bg-white flex-col justify-between w-70 h-36 p-6 rounded-lg border border-solid border-[rgba(0,0,0,0.10)]">
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
                <div className="card flex bg-white flex-col justify-between w-70 h-36 p-6 rounded-lg border border-solid border-[rgba(0,0,0,0.10)]">
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

function Overview({ data }: dashboardTimetable){
    return(
        <div className="overview font-[Arimo] flex justify-between">
            <div className="assistants bg-white min-w-[49%] border border-solid text-[0.995rem] rounded-[0.87rem] py-[1.49125rem] px-[1.49125rem] border-[rgba(0,0,0,0.10)]">
                <div className="header flex justify-between">
                    <div className="title">
                        <h5 className="text-[0.99413rem]! text-[#0A0A0A] leading-[0.99413rem]!">Lab Assistant Manegment</h5>
                        <p className="text-[0.99413rem]! text-[#717182]">View and manage all assistants</p>
                    </div>
                </div>
                <div className="content overflow-y-auto">
                    <table className="w-full rounded-md  bg-white">
                        <tbody>
                            {data.map((eachStudent) => {
                                return(
                                    <tr key={eachStudent.fullName} className="rounded-lg font-[Arimo] border-b border-b-solid border-b-[#E5E8EB]">
                                        <td className="w-fit text-left font-normal">
                                            <h6>{eachStudent.fullName}</h6>
                                            <p>{eachStudent.modules.length} modules enrolled</p>
                                        </td>
                                    </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="supervisors bg-white min-w-[49%] border border-solid text-[0.995rem] rounded-[0.87rem] py-[1.49125rem] px-[1.49125rem] border-[rgba(0,0,0,0.10)]">
                <div className="header flex justify-between">
                    <div className="title">
                        <h5 className="text-[0.99413rem]! text-[#0A0A0A] leading-[0.99413rem]!">Lab Supervisor Manegment</h5>
                        <p className="text-[0.99413rem]! text-[#717182]">View and manage all supervisor</p>
                    </div>
                </div>
                <div className="content overflow-y-auto">
                    <table className="w-full rounded-md  bg-white">
                        <tbody>
                            {data.map((eachStudent) => {
                                return(
                                    <tr key={eachStudent.fullName} className="rounded-lg font-[Arimo] border-b border-b-solid border-b-[#E5E8EB]">
                                        <td className="w-fit text-left font-normal">
                                            <h6>{eachStudent.fullName}</h6>
                                            <p>{eachStudent.modules.length} modules enrolled</p>
                                        </td>
                                    </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
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
        const [employee, setEmployee] = useState<schoolDataPopUp | null>(null);
        const [viewEmployee, setViewEmployee] = useState<boolean>(false);
        const [searchItem, setSearchItem] = useState<string>("")

        //function to pop up modal
        function onClick(employee: schoolData, view: boolean, title: jobTitle){
            setViewEmployee(true);
            const employeeData = {...employee, view, title}
            setEmployee(employeeData)
        }

        //search button
        const filteredItems = data.filter((item) => item.fullName.toLowerCase().includes(searchItem?.toLowerCase()))

    return(
        
        <div className="dashboardTable flex flex-col w-full">
            {
            mode === 'overview' 
            ?
            <Overview 
                mode={mode}
                data=
                {
                    [
                        {fullName: 'Mothibi Malebana', modules: ['SCOA032', 'SSTB032'], availability: 35, level: 'undergraduate' },
                        {fullName: 'Mot Malebana', modules: ['SCOA031', 'SSTB021'], availability: 35, level: 'undergraduate' },
                        {fullName: 'Mothibi Mana', modules: ['SCOA0321', 'SSTB231'], availability: 35, level: 'undergraduate' },
                        {fullName: 'Mothibi Malebana', modules: ['SCOA032', 'SSB031'], availability: 35, level: 'postgraduate' },
                        {fullName: 'Moti bana', modules: ['SCOA032', 'SSTB032'], availability: 35, level: 'undergraduate' },
                    ]
                }
            />
            :
            <div className="alt bg-white border border-solid rounded-[0.87rem] py-[1.49125rem] px-[1.49125rem] border-[rgba(0,0,0,0.10)]">
                {employee && viewEmployee && <ViewEmployee fullName={employee.fullName} modules={employee.modules} availability={employee.availability} view={viewEmployee} title="Lab Assistant" setView={setViewEmployee} /> }       
                <div className="header flex justify-between">
                    <div className="title">
                        <h5 className="text-[0.99413rem]! text-[#0A0A0A] leading-[0.99413rem]!">
                            {
                                mode === 'assistants' && 'Lab Assistant Manegment'
                                ||
                                mode === 'supervisors' && 'Lab Supervisor Manegment'
                            }
                        </h5>
                        <p className="text-[0.99413rem]! text-[#717182]">
                            {
                                mode === 'assistants' && 'View and manage all assistants'
                                ||
                                mode === 'supervisors' && 'View and manage all supervisors' 
                            }
                        </p>
                    </div>
                </div>
                <div className="content overflow-y-auto w-full">
                    <table className="w-full rounded-md mt-3 bg-white">
                        { 
                        mode === 'assistants' 
                            ?
                                <tbody>
                                    <tr>
                                        <th className="text-left text-[0.99413rem]! text-[#0A0A0A] py-3 font-normal rounded-lg font-[Arimo] border-b border-b-solid border-b-[#E5E8EB]" >Name</th>
                                    </tr>
                                    {
                                    data.map((eachStudent) => {
                                        return(
                                            <tr key={eachStudent.fullName} className="rounded-lg font-[Arimo] border-b border-b-solid border-b-[#E5E8EB]">
                                                <td className="w-full! justify-between items-center flex text-left font-normal text-[0.99413rem]! text-[#0A0A0A]">
                                                    <div className="data">
                                                        <h6>{eachStudent.fullName}</h6>
                                                        <p>{eachStudent.modules.length} modules enrolled</p>
                                                    </div>
                                                    <div className="view flex justify-center">
                                                        <button onClick={() => onClick && onClick(eachStudent, viewEmployee, "Lab Assistant")} className="w-25! border-none! flex justify-center items-center gap-1.5 hover:bg-[#F3F3F5]">
                                                            <img src={view} alt="eye logo" />
                                                            <p className="text-[0.86988rem]">view</p>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            :
                                <tbody>
                                    <tr>
                                        <th className="text-left text-[0.99413rem]! text-[#0A0A0A] py-3 font-normal rounded-lg font-[Arimo] border-b border-b-solid border-b-[#E5E8EB]" >Name</th>
                                    </tr>
                                    {
                                    data.map((eachStudent) => {
                                        return(
                                            <tr key={eachStudent.fullName} className="rounded-lg font-[Arimo] border-b border-b-solid border-b-[#E5E8EB]">
                                                <td className="w-full! justify-between items-center flex text-left font-normal text-[0.99413rem]! text-[#0A0A0A]">
                                                    <div className="data">
                                                        <h6>{eachStudent.fullName}</h6>
                                                        <p>{eachStudent.modules.length} modules enrolled</p>
                                                    </div>
                                                    <div className="view flex justify-center">
                                                        <button className=" w-25! border-none! flex justify-center items-center gap-1.5 hover:bg-[#F3F3F5]">
                                                            <img src={view} alt="eye logo" />
                                                            <p className="text-[0.86988rem]">view</p>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                        }
                    </table>
                </div>
            </div>
            }
        </div>
    )
}

/**
 * 
 * Button carousel to toggle between 'overview', 'lab assistants' and 'lab supervisors'
 */
function ButtonCarousel( { active = 'overview' , setActive} ){

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
    const [mode, setMode] = useState<DashboardMode>(dashboardMode);
    
    return(
        <div className="dashboard px-[5.12rem] pb-20 w-full mt-14">
            <div className="header">
                <Card
                activeAssistants={activeAssistants}
                activeSupervisors={activeSupervisors}
                inactiveEmployees={inactiveEmployees}
                totalEmployees={totalEmployees}
                />
            </div>
            <div className="nav">
                <ButtonCarousel active={mode} setActive={setMode}/>
            </div>
            <div className="table w-full mt-8">
                <DashboardTable 
                    mode={mode} 
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