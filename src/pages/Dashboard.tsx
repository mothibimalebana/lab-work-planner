import exclamation from "../assets/svg/exclamation.svg"
import up from "../assets/svg/up.svg"
import people from "../assets/svg/people.svg"
import student from "../assets/svg/student.svg"
import overview from "../assets/svg/overview.svg"
import supervisor from "../assets/svg/supervisor.svg"
import generate from "../assets/svg/Generate.svg"
import view from "../assets/svg/view.svg"
import type { BreadCarouselProps, dashboardCard } from "../../types/dashboard"
import type { DashboardMode, DashboardProps, dashboardTimetable } from '../../types/student' 
import { useState } from "react"
import ViewEmployee from "./pop-up/Dashboard"
import { generateSchedule } from "../../algorithms/GenerateSchedule"
import { appSchedule, mockStudents, type Students } from "../assets/mockData"
import { useNavigate } from "react-router"
import { useAppData } from "../assets/context/ScheduleContext"

/**
 * Card component, takes input of assisntant info and returns a card component with active, inactive and total number of employees.
 */
function Card( {activeAssistants = 3, activeSupervisors = 1, inactive = 31, totalNumber = 35}:dashboardCard ){
    activeAssistants = mockStudents.filter((eachStudent) => eachStudent.role === "assistant").length;
    activeSupervisors = mockStudents.filter((eachStudent) => eachStudent.role === "supervisor").length;
    totalNumber = mockStudents.map((eachStudent) => eachStudent).length
    inactive = totalNumber - (activeAssistants + activeSupervisors);
    return(
        <div className="cards flex justify-between">
                {/**Active Lab Assistants Card */}
                <div className="dash-card" >
                    <div className="top flex justify-between">
                        <div className="left">
                            <p>Total Lab Assistants</p>
                        </div>
                        <div className="right flex items-center justify-between">
                            <img src={student} alt="grad cap" />
                        </div>
                    </div>
                    <div className="bottom">
                        <div className="top"><h4 className="font-bold text-2xl">{activeAssistants}</h4></div>
                        <div className="bottom text-[0.75rem]"><p>assistants active in system</p></div>
                    </div>
                </div>

                {/**Active Lab Supervisors Card*/}
                <div className="dash-card">
                    <div className="top flex justify-between">
                        <div className="left"><p>Total Lab Supervisors</p></div>
                        <div className="right flex items-center justify-between"><img src={people} alt="grad cap" /></div>
                    </div>
                    <div className="bottom">
                        <div className="top"><h4 className="font-bold text-2xl">{activeSupervisors}</h4></div>
                        <div className="bottom text-[0.75rem]"><p>currently managing labs</p></div>
                    </div>
                </div>
            
                {/**Inactive Employees Card */}
                <div className="dash-card">
                    <div className="top flex justify-between">
                        <div className="left"><p>Inactive Employees</p></div>
                        <div className="right flex items-center justify-between"><img src={exclamation} alt="grad cap" /></div>
                    </div>
                    <div className="bottom">
                        <div className="top"><h4 className="font-bold text-2xl">{inactive}</h4></div>
                        <div className="bottom text-[0.75rem]"><p>Missed a shift</p></div>
                    </div>
                </div>

                {/***Total number of employees Card*/}
                <div className="dash-card">
                    <div className="top flex justify-between">
                        <div className="left"><p>Total number of users</p></div>
                        <div className="right flex items-center justify-between"><img src={up} alt="grad cap" /></div>
                    </div>
                    <div className="bottom">
                        <div className="top"><h4 className="font-bold text-2xl">{totalNumber}</h4></div>
                        <div className="bottom text-[0.75rem]"><p>In the system</p></div>
                    </div>
                </div>
        </div>
    )
}

//Toggling to overview on the carousel will display:
function Overview(){
    const navigate = useNavigate();
    const {setNewSchedule, setWarning} = useAppData();

    const generateNewSchedule = () => {
        const {newSchedule, warnings} = generateSchedule(appSchedule);
        setNewSchedule(() => newSchedule);
        setWarning(warnings);
        
        navigate("/generate"); 
    }
    

    return(
        <div className="overview bg-white py-9 px-12 font-[Arimo] flex flex-col items-center gap-3.5 justify-between">
            <img src={generate} alt="Generate AI" width="64rem" height="64rem"/>
            <h2 className="font-semibold text-[#101828] text-[1.02175rem]">No Schedule generated yet</h2>
            <p className="w-[24rem] text-[#4A5565]">
                Click "Generate AI Schedule" to automatically
                create an optimized work schedule for all lab 
                assistants based on their availability and 
                enrolled modules.
            </p>
            <button onClick={generateNewSchedule} className="green-button w-fit rounded-2xl"><img className="w-[0.90731rem] h-[0.90731rem]" src={generate} alt="genarate ai button"/> <p>Generate Timetable</p></button>
        </div>
    )
}

function DashboardTable( { mode = 'overview', data = mockStudents }: dashboardTimetable ){
    //student to be displayed when 'view' is clicked
    const [employee, setEmployee] = useState<Students | "">();
    const [viewEmployee, setViewEmployee] = useState<boolean>(false);

    //function to pop up student
    const getEmployeeDetails = ( student: Students ) => {
        setEmployee(student);
        setViewEmployee(true);        
    }

    return(
        
        <div className="dashboardTable flex flex-col w-full">
            {
            mode === 'overview' 
            ?
            <Overview/>
            :
            <div className="alt bg-white border border-solid rounded-[0.87rem] py-[1.49125rem] px-[1.49125rem] border-[rgba(0,0,0,0.10)]">
                {/* Displays the clicked student */}
                {employee && viewEmployee && <ViewEmployee student={employee} view={viewEmployee} setView={setViewEmployee} setEmployee={setEmployee}/> }       

                {/**Table headers */}
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
                        <tbody>
                            <tr>
                                <th className="text-left text-[0.99413rem]! text-[#0A0A0A] py-3 font-normal rounded-lg font-[Arimo] border-b border-b-solid border-b-[#E5E8EB]" >Name</th>
                            </tr>
                            {
                            data.filter((eachStudent) => mode === "assistants" ? eachStudent.role === "assistant" : eachStudent.role === "supervisor").map((eachStudent, id) => {
                                return(
                                    <tr key={id} className="rounded-lg font-[Arimo] border-b border-b-solid border-b-[#E5E8EB]">
                                        <td className="w-full! justify-between items-center flex text-left font-normal text-[0.99413rem]! text-[#0A0A0A]">
                                            <div className="data">
                                                <h6>{eachStudent.fullName}</h6>
                                                <p>{eachStudent.modules?.length} modules enrolled</p>
                                            </div>
                                            <div className="view flex justify-center">
                                                <button onClick={() => getEmployeeDetails(eachStudent)} className="w-25! border-none! flex justify-center items-center gap-1.5 hover:bg-[#F3F3F5]">
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
function ButtonCarousel( { active = 'overview' , setActive}:BreadCarouselProps ){

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
                inactive={inactiveEmployees}
                totalNumber={totalEmployees}
                />
            </div>
            <div className="nav">
                <ButtonCarousel active={mode} setActive={setMode}/>
            </div>
            <div className="table w-full mt-8">
                <DashboardTable 
                    mode={mode} 
                    data={mockStudents}
                />
            </div>
        </div>
    )
}



export default Dashboard