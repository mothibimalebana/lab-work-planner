import { useState } from "react";
import x from "../assets/svg/x.svg";
import { enrolledModules } from "../assets/mockData";
import supervisor from "../assets/svg/supervisor.svg"
import student from "../assets/svg/student.svg"
import { useAppData } from "../assets/context/ScheduleContext";
import { type Slot } from "../assets/mockData";
// import { mockModules } from "../assets/mockData";


function ButtonCarousel( { active = 'assistants' , setActive}:{active: string, setActive: (page: string) => void} ){

    //functions to facilitate toggling between different options
    const switchToAssistant = () => { setActive("assistants") };
    const switchToSupervisor = () => { setActive("supervisors")};

    return(
        <div className="buttonCarousel rounded-[0.86988rem]! my-8 flex items-center justify-between font-[Arimo] text-[#0A0A0A] text-[0.86988rem] w-fit bg-[#ECECF0]">
            <button onClick={switchToAssistant} className={active === 'assistants' ? 'flex justify-center items-center gap-[0.87rem] w-fit px-[0.27913rem_9.6805rem_0.3305rem_9.21825rem] h-[1.85969rem]! text-[0.86988rem] text-[#0A0A0A] font-Arimo bg-[#FFFFFF] rounded-[0.86988rem]!' : 'w-fit h-[1.85969rem]! flex justify-center items-center gap-[0.87rem] px-[0.27913rem_9.6805rem_0.3305rem_9.21825rem] bg-[#ECECF0] rounded-[0.86988rem]!'}><img src={student} className="h-[0.99319rem]! w-[0.99319rem]!" alt="student page" /><p>Lab Assistants</p></button>
            <button onClick={switchToSupervisor} className={active === 'supervisors' ? 'flex justify-center items-center gap-[0.87rem] w-fit px-[0.27913rem_9.6805rem_0.3305rem_9.21825rem] h-[1.85969rem]! text-[0.86988rem] text-[#0A0A0A] font-Arimo bg-[#FFFFFF] rounded-[0.86988rem]!' : 'w-fit h-[1.85969rem]! flex justify-center items-center gap-[0.87rem] px-[0.27913rem_9.6805rem_0.3305rem_9.21825rem] bg-[#ECECF0] rounded-[0.86988rem]!'}><img src={supervisor} className="h-[0.99319rem]! w-[0.99319rem]!" alt="" /><p>Lab Bookings</p></button>
        </div>
    )
}

function Form(){
    const {newSchedule, setNewSchedule} = useAppData();
    const arraySchedule = Array.from(newSchedule.entries());
    const [myTimeTable, setMyTimeTable] = useState(newSchedule);
    const diffTimeTable = myTimeTable;
    console.log(diffTimeTable.get("08h00-11h00")?.get("Monday"));



    const modul: string[] = Array.from(enrolledModules.get("secondYearMain").entries() || []);
    const secondYearExtended: string[] = Array.from(enrolledModules.get("secondYearExtended").entries() || []);
    const thirdYearMain: string[] = Array.from(enrolledModules.get("thirdYearMain").entries() || []);
    const [active, setActive] = useState("");

    const updateSchedule = (time: string, day: string) => {
        const newTimeTable: Map<string, Map<string, Slot>> = myTimeTable;
        const updatedSlot = newTimeTable.get(time)!.get(day);
        
        if(myTimeTable.get(time)!.get(day)!.isUnavailable === true){

            updatedSlot!.isUnavailable = false;
            newTimeTable.get(time)?.set(day, updatedSlot!);
            setNewSchedule(newTimeTable);
            


        } else{
            updatedSlot!.isUnavailable = true;
            newTimeTable.get(time)?.set(day, updatedSlot!);
            setNewSchedule(newTimeTable);
        }
    }

    const onSubmit = (formData: FormData) => {
        
    }


    return(
        <div className="registration px-[5.12rem] font-[Arimo] mt-6">
            <ButtonCarousel active={active} setActive={setActive}/>
            <div className="form bg-white px-8 py-5 rounded-[0.73163rem]! border border-solid border-[rgba(0,0,0,0.10)]!">
                <form action={onSubmit} className="flex flex-col">
                    <div className="head mb-5">
                        <h6 className="font-normal">Lab Assistant Form</h6>
                        <p className="text-[#717182]">Select your enrolled modules and mark any additional times you're unavailable</p>
                    </div>
                    <div className="name mb-5">
                        <h4 className="font-bold text-[1.64069rem] mb-3.5">Your Details</h4>
                        <fieldset className="flex flex-col">
                            <label htmlFor="fullName"><h5>Your full name</h5></label>
                            <input className="bg-[#F3F3F5] px-4 py-2 rounded-md" type="text" name="fullName" placeholder="Enter your full name" />
                        </fieldset>
                        <fieldset className="flex flex-col">
                            <label htmlFor="email">Your email address</label>
                            <input className="bg-[#F3F3F5] px-4 py-2 rounded-md" type="email" name="email" placeholder="john.doe@myturf.ul.ac.za"/>
                        </fieldset>
                        <fieldset className="flex flex-col">
                            <label htmlFor="password">Enter your password</label>
                            <input className="bg-[#F3F3F5] px-4 py-2 rounded-md" type="password" name="password" placeholder="••••••••" />
                        </fieldset>
                        <fieldset className="flex flex-col">
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <input className="bg-[#F3F3F5] px-4 py-2 rounded-md" type="password" name="confirmPassword" placeholder="••••••••" />
                        </fieldset>
                        <fieldset className="flex flex-col mb-6">
                            <label htmlFor="role" className="font-bold text-[1.64069rem] mb-3.5 mt-6.5">Role</label>
                            <select name="role" className="bg-[#F3F3F5] px-4 py-2 rounded-md">
                                <option value="assistant">Lab Assistant</option>
                                <option value="supervisor">Lab Supervisor</option>
                            </select>
                        </fieldset>
                        <fieldset className="flex flex-col">
                            <label htmlFor="studentID">Student Number</label>
                            <input className="bg-[#F3F3F5] px-4 py-2 rounded-md" type="text" name="studentID" />
                        </fieldset>
                    </div>
                    <div className="modules mb-5">
                        <h4 className="text-[#0A0A0A] font-bold text-2xl mb-3.5">Your enrolled modules</h4>
                        <p className="text-[#4A5565] font-normal text-2">
                            Select the modules you are currently enrolled in. You will NOT be allocated shifts during these class times.
                        </p>
                        <ul className="flex flex-col">
                            <div className="second-year-main mb-6 flex flex-col">
                                <h2 className="text-[#4A5565] font-normal text-[1.5rem]">2nd Year Main:</h2>
                                <div className="modules grid grid-cols-2 font-[Arimo]">
                                    {
                                        modul.map((eachModule, )  => 
                                            <li key={eachModule[0]} className="flex gap-2 h-fit text-[#0A0A0A] text-[0.9rem]">
                                                <input className="px-3 py-1  w-4 h-4 self-center p-[0.10] accent-[#030213] disabled:accent-[#F3F3F5][#030213] border-[1.5px] border-solid border-[#030213]" type="checkbox" name={eachModule}/>
                                                {eachModule[0]} - {eachModule[1]}
                                            </li>
                                        )
                                    }
                                </div>
                            </div>
                            <div className="second-year-main mb-6 flex flex-col">
                                <h2 className="text-[#4A5565] font-normal text-[1.5rem]">2nd Year Extended:</h2>
                                <div className="modules grid grid-cols-2 font-[Arimo]">
                                    {
                                        secondYearExtended.map((eachModule, )  => 
                                            <li key={eachModule[0]} className="flex gap-2 h-fit text-[#0A0A0A] text-[0.9rem]">
                                                <input className="px-3 py-1  w-4 h-4 self-center p-[0.10] accent-[#030213] disabled:accent-[#F3F3F5][#030213] border-[1.5px] border-solid border-[#030213]" type="checkbox" name={eachModule}/>
                                                {eachModule[0]} - {eachModule[1]}
                                            </li>
                                        )
                                    }
                                </div>
                            </div>
                            <div className="second-year-main mb-6 flex flex-col">
                                <h2 className="text-[#4A5565] font-normal text-[1.5rem]">Final year:</h2>
                                <div className="modules grid grid-cols-2 font-[Arimo]">
                                    {
                                        thirdYearMain.map((eachModule, )  => 
                                            <li key={eachModule[0]} className="flex gap-2 h-fit text-[#0A0A0A] text-[0.9rem]">
                                                <input className="px-3 py-1  w-4 h-4 self-center p-[0.10] accent-[#030213] disabled:accent-[#F3F3F5][#030213] border-[1.5px] border-solid border-[#030213]" type="checkbox" name={eachModule}/>
                                                {eachModule[0]} - {eachModule[1]}
                                            </li>
                                        )
                                    }
                                </div>
                            </div>
                        </ul>

                    </div>
                    <div className="availability mb-5">
                        <div className="key">

                        </div>
                        <div className="text mb-5">
                            <h4 className="mb-1.5 font-bold  text-[#0A0A0A] text-[1.4069rem]">Availabilty schedule:</h4>
                            <div className="keys flex gap-2.5">
                                {/* Red Key */}
                                <div className="red flex items-center gap-0.5">
                                    <div className="key w-[0.83619rem] h-[0.83619rem] rounded-sm bg-[#FFE2E2] border border-solid border-[#FF6467]"></div>
                                    <p className="red text-[#4A5565]">Class time(Unavailable)</p>
                                </div>
                                {/** Orange Key */}
                                <div className="red flex items-center gap-0.5">
                                    <div className="key w-[0.83619rem] h-[0.83619rem] rounded-sm bg-[#FFEDD4] border border-solid border-[#FF8904]"></div>
                                    <p className="red  text-[#4A5565]">Marked Unavailable</p>
                                </div>
                                { /**Green Key */}
                                <div className="red flex items-center gap-0.5">
                                    <div className="key w-[0.83619rem] h-[0.83619rem] rounded-sm bg-[#DCFCE7] border border-solid border-[#05DF72]"></div>
                                    <p className="red  text-[#4A5565]">Available</p>
                                </div>
                            </div>
                            <p className="mt-5 text-[#4A5565]">Click on available slots to mark additional times when you're unavailable</p>
                        </div>
                        <div className="flex flex-col mt-2.5">
                            <table className="w-full text-[0.62713rem] rounded-md border border-solid border-[#E5E8EB] bg-white">
                                <tbody>
                                    <tr className="rounded-lg border-b border-b-solid border-b-[#E5E8EB]">
                                    <th className="pl-[0.65rem] bg-[rgba(236,236,240,0.30)]  text-left font-normal">Time</th>
                                        <th className="bg-[rgba(236,236,240,0.30)] text-[#0A0A0A] font-dm-sans not-italic font-normal leading-[1.27744rem] h-[2.59031rem]! text-left w-[4.43731rem]!">Monday</th>
                                        <th className="bg-[rgba(236,236,240,0.30)] text-[#0A0A0A] font-dm-sans not-italic font-normal leading-[1.27744rem] h-[2.59031rem]! text-left w-[4.43731rem]!">Tuesday</th>
                                        <th className="bg-[rgba(236,236,240,0.30)] text-[#0A0A0A] font-dm-sans not-italic font-normal leading-[1.27744rem] h-[2.59031rem]! text-left w-[4.43731rem]!">Wednsday</th>
                                        <th className="bg-[rgba(236,236,240,0.30)] text-[#0A0A0A] font-dm-sans not-italic font-normal leading-[1.27744rem] h-[2.59031rem]! text-left w-[4.43731rem]!">Thursday</th>
                                        <th className="bg-[rgba(236,236,240,0.30)] text-[#0A0A0A] font-dm-sans not-italic font-normal leading-[1.27744rem] h-[2.59031rem]! text-left w-[4.43731rem]!">Friday</th>
                                        <th className="bg-[rgba(236,236,240,0.30)] text-[#0A0A0A] font-dm-sans not-italic font-normal leading-[1.27744rem] h-[2.59031rem]! text-left w-[4.43731rem]!">Saturday</th>
                                        <th className="bg-[rgba(236,236,240,0.30)] text-[#0A0A0A] font-dm-sans not-italic font-normal leading-[1.27744rem] h-[2.59031rem]! text-left w-[4.43731rem]!">Sunday</th>
                                    </tr>
                                    <tr className="rounded-lg font-[Arimo] border-b border-b-solid border-b-[#E5E8EB]">
                                        <td className="w-[4.43731rem]! text-left font-normal">08:00 <br />11:00</td>
                                            {Array.from(arraySchedule[0][1].entries()).map(([string, slot], id) => (
                                                <td key={id} className="h-[2.59031rem]! w-[4.43731rem]!">
                                                    <div 
                                                        onClick={() => updateSchedule(0, shift.id)}

                                                        className={`h-[2.59031rem]! text-left w-[4.43731rem]! flex justify-center items-center text-[#99A1AF] rounded-lg cell p-[0.65rem] text-[0.74513rem] 
                                                            ${
                                                                shift.class
                                                                ? 'bg-[#FFE2E2] border border-solid border-[#FF6467]' 
                                                                : ( shift.unavailable ? 'bg-[#FFEDD4] border border-solid border-[#FF8904]' : 'bg-[#DCFCE7] border border-solid border-[#05DF72] hover:bg-[#8CFFB4]')
                                                            }`}
                                                    >
                                                        {shift.class && <img src={x}/> }
                                                    </div>
                                                </td>
                                            ))}
                                    </tr>
                                    <tr className="rounded-lg font-[Arimo] border-b border-b-solid border-b-[#E5E8EB]">
                                        <td className="w-[4.43731rem]! text-left font-normal">11:00 <br />14:00</td>
                                            {myTimeTable[1].map((shift) => (
                                                <td key={shift.id} className="h-[2.59031rem]! w-[4.43731rem]!">
                                                    <div 
                                                        onClick={() => updateSchedule(1, shift.id)}
                                                        className={`h-[2.59031rem]! text-left w-[4.43731rem]! flex justify-center items-center text-[#99A1AF] rounded-lg cell p-[0.65rem] text-[0.74513rem] 
                                                            ${
                                                                shift.class
                                                                ? 'bg-[#FFE2E2] border border-solid border-[#FF6467]' 
                                                                : ( shift.unavailable ? 'bg-[#FFEDD4] border border-solid border-[#FF8904]' : 'bg-[#DCFCE7] border border-solid border-[#05DF72] hover:bg-[#8CFFB4]')
                                                            }`}
                                                    >
                                                        {shift.class && <img src={x}/> }
                                                    </div>
                                                </td>
                                            ))}
                                    </tr>
                                    <tr className="rounded-lg font-[Arimo] border-b border-b-solid border-b-[#E5E8EB]">
                                        <td className="w-[4.43731rem]!  text-left font-normal">14:00 <br />17:00</td>
                                            {myTimeTable[2].map((shift) => (
                                                <td key={shift.id} className="h-[2.59031rem]! w-[4.43731rem]!">
                                                    <div 
                                                        onClick={() => updateSchedule(2, shift.id)}
                                                        className={`h-[2.59031rem]! text-left w-[4.43731rem]! flex justify-center items-center text-[#99A1AF] rounded-lg cell p-[0.65rem] text-[0.74513rem] 
                                                            ${
                                                                shift.class
                                                                ? 'bg-[#FFE2E2] border border-solid border-[#FF6467]' 
                                                                : ( shift.unavailable ? 'bg-[#FFEDD4] border border-solid border-[#FF8904]' : 'bg-[#DCFCE7] border border-solid border-[#05DF72] hover:bg-[#8CFFB4]')
                                                            }`}
                                                    >
                                                        {shift.class && <img src={x}/> }
                                                    </div>
                                                </td>
                                            ))}
                                    </tr>
                                    <tr className="rounded-lg font-[Arimo] border-b border-b-solid border-b-[#E5E8EB]">
                                        <td className="w-[4.43731rem]! text-left font-normal">17:00 <br />20:00</td>
                                            {myTimeTable[3].map((shift) => (
                                                <td key={shift.id} className="h-[2.59031rem]! w-[4.43731rem]!">
                                                    <div 
                                                        onClick={() => updateSchedule(3, shift.id)}
                                                        className={`h-[2.59031rem]! text-left w-[4.43731rem]! flex justify-center items-center text-[#99A1AF] rounded-lg cell p-[0.65rem] text-[0.74513rem] 
                                                            ${
                                                                shift.class
                                                                ? 'bg-[#FFE2E2] border border-solid border-[#FF6467]' 
                                                                : ( shift.unavailable ? 'bg-[#FFEDD4] border border-solid border-[#FF8904]' : 'bg-[#DCFCE7] border border-solid border-[#05DF72] hover:bg-[#8CFFB4]')
                                                            }`}
                                                    >
                                                        {shift.class && <img src={x}/> }
                                                    </div>
                                                </td>
                                            ))}
                                    </tr>
                                    <tr className="rounded-lg font-[Arimo] border-b border-b-solid border-b-[#E5E8EB]">
                                        <td className="w-[4.43731rem]! text-left font-normal">20:00 <br />00:00</td>
                                            {myTimeTable[4].map((shift) => (
                                                <td key={shift.id} className="h-[2.59031rem]! w-[4.43731rem]!">
                                                    <div 
                                                        onClick={() => updateSchedule(4, shift.id)}
                                                        className={`h-[2.59031rem]! text-left w-[4.43731rem]! flex justify-center items-center text-[#99A1AF] rounded-lg cell p-[0.65rem] text-[0.74513rem] 
                                                            ${
                                                                shift.class
                                                                ? 'bg-[#FFE2E2] border border-solid border-[#FF6467]' 
                                                                : ( shift.unavailable ? 'bg-[#FFEDD4] border border-solid border-[#FF8904]' : 'bg-[#DCFCE7] border border-solid border-[#05DF72] hover:bg-[#8CFFB4]')
                                                            }`}
                                                    >
                                                        {shift.class && <img src={x}/> }
                                                    </div>
                                                </td>
                                            ))}
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* <div className="summary mt-14 px-6 py-3 rounded-[0.52263rem] bg-[#EFF6FF] border border-solid border-[#BEDBFF] text-[#1C398E]">
                            <h4 className="font-bold">Summary</h4>
                            <p>Available slots: {freeSlots} / 35</p>
                            <p>Blocked by classes: {classes}</p>
                            <p>Marked unavailable: {marked}</p>
                        </div> */}
                    </div>
                    <button onSubmit={() => onSubmit} type="submit" className="flex w-fit bg-[#337E89] px-2 py-1 text-white">Submit Availability</button>
                </form>
            </div>
        </div>
    )
}

export default Form