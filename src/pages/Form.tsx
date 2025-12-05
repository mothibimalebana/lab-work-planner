import { useState } from "react";
import x from "../assets/svg/x.svg"
import modules from "../assets/modules";

function Registration(){

    const schedule = [
    [
        { class: false, unavailable: false, id: 0, timeDay: 1 },
        { class: false, unavailable: false, id: 1, timeDay: 2 },
        { class: false, unavailable: false, id: 2, timeDay: 3 },
        { class: false, unavailable: false, id: 3, timeDay: 4 },
        { class: false, unavailable: false, id: 4, timeDay: 5 },
        { class: false, unavailable: false, id: 5, timeDay: 6 },
        { class: false, unavailable: false, id: 6, timeDay: 7 },
    ],
    [
        { class: false, unavailable: false, id: 0, timeDay: 8 },
        { class: false, unavailable: false, id: 1, timeDay: 9 },
        { class: false, unavailable: false, id: 2, timeDay: 10 },
        { class: false, unavailable: false, id: 3, timeDay: 11 },
        { class: false, unavailable: false, id: 4, timeDay: 12 },
        { class: false, unavailable: false, id: 5, timeDay: 13 },
        { class: false, unavailable: false, id: 6, timeDay: 14 },
    ],
    [
        { class: false, unavailable: false, id: 0, timeDay: 15 },
        { class: false, unavailable: false, id: 1, timeDay: 16 },
        { class: false, unavailable: false, id: 2, timeDay: 17 },
        { class: false, unavailable: false, id: 3, timeDay: 18 },
        { class: false, unavailable: false, id: 4, timeDay: 19 },
        { class: false, unavailable: false, id: 5, timeDay: 20 },
        { class: false, unavailable: false, id: 6, timeDay: 21 },
    ],
    [
        { class: false, unavailable: false, id: 0, timeDay: 22 },
        { class: false, unavailable: false, id: 1, timeDay: 23 },
        { class: false, unavailable: false, id: 2, timeDay: 24 },
        { class: false, unavailable: false, id: 3, timeDay: 25 },
        { class: false, unavailable: false, id: 4, timeDay: 26 },
        { class: false, unavailable: false, id: 5, timeDay: 27 },
        { class: false, unavailable: false, id: 6, timeDay: 28 },
    ],
    [
        { class: false, unavailable: false, id: 0, timeDay: 29 },
        { class: false, unavailable: false, id: 1, timeDay: 30 },
        { class: false, unavailable: false, id: 2, timeDay: 31 },
        { class: false, unavailable: false, id: 3, timeDay: 32 },
        { class: false, unavailable: false, id: 4, timeDay: 33 },
        { class: false, unavailable: false, id: 5, timeDay: 34 },
        { class: false, unavailable: false, id: 6, timeDay: 35 },
    ]
];
    const [myTimeTable, setMyTimeTable] = useState(schedule);

    // const [freeSlots, setFreeSlots] = useState(35);
    // const [classes, setClasses] = useState(35);
    // const [marked, unavailable] = useState(0);

    const updateSchedule = (index: number, secondIndex: number) => {
        if(myTimeTable[index][secondIndex].unavailable === true){
            const newTimetable = [...myTimeTable];
            newTimetable[index][secondIndex].unavailable = false;
            setMyTimeTable(newTimetable);
        } else{
            const newTimetable = [...myTimeTable];
            newTimetable[index][secondIndex].unavailable = true;
            setMyTimeTable(newTimetable);
        }
    }

    const moduleUpdatesSchedule = (index: number, secondIndex: number) => {
        const updateList:any = [];
        modules[index][secondIndex].slot.map((timeDayId, index) => schedule.map((day) => day.map((slot, secondIndex) => {timeDayId === slot.timeDay ? updateList.push([index, secondIndex]) : null }) ));
        
        const newTimetable = [...myTimeTable];
        updateList.map( (change:any) => newTimetable[change[0]][change[1]].class = !newTimetable[change[0]][change[1]].class )
        console.log(updateList)
        setMyTimeTable(newTimetable)

    }

    const onSubmit = (event: Event) => {
        event.preventDefault();
    }


    return(
        <div className="registration px-[5.12rem] font-[Arimo] mt-6">
            <div className="form bg-white px-8 py-5 rounded-[0.73163rem]! border border-solid border-[rgba(0,0,0,0.10)]!">
                <form method="POST" className="flex flex-col">
                    <div className="head mb-5">
                        <h6 className="font-normal">Lab Assistant Form</h6>
                        <p className="text-[#717182]">Select your enrolled modules and mark any additional times you're unavailable</p>
                    </div>
                    <div className="name mb-5">
                        <h4 className="font-bold text-[1.64069rem]">Your Details</h4>
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
                            <label htmlFor="role" className="font-bold text-[1.64069rem]">Role</label>
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
                        <h4 className="text-[#0A0A0A] font-bold text-2xl">Your enrolled modules</h4>
                        <p className="text-[#4A5565] font-normal text-2">
                            Select the modules you are currently enrolled in. You will NOT be allocated shifts during these class times.
                        </p>
                        <ul className="flex flex-col">
                            <div className="second-year-main mb-6 flex flex-col">
                                <h2 className="text-[#4A5565] font-normal text-[1.5rem]">2nd Year Main:</h2>
                                <div className="modules grid grid-cols-3 font-[Arimo]">
                                    {modules[0].map((module) => <li key={module.code} className="flex gap-2 text-[#0A0A0A]"><input onChange={() => moduleUpdatesSchedule(0, module.id)} className="px-3 py-1" type="checkbox" name={module.code}/>{module.code}</li>)} 
                                    {modules[1].map((module) => <li key={module.code} className="flex gap-2 text-[#0A0A0A]"><input className="px-3 py-1" type="checkbox" name={module.code}/>{module.code}</li>)} 
                                </div>
                            </div>
                            <div className="second-year-main mb-6 flex flex-col">
                                <h2 className="text-[#4A5565] font-normal text-[1.5rem]">2nd Year Extended:</h2>
                                <div className="modules grid grid-cols-3 font-[Arimo]">
                                    {modules[2].map((module) => <li key={module.code} className="flex gap-2 text-[#0A0A0A]"><input className="px-3 py-1" type="checkbox" name={module.code}/>{module.code}</li>)} 
                                    {modules[3].map((module) => <li key={module.code} className="flex gap-2 text-[#0A0A0A]"><input className="px-3 py-1" type="checkbox" name={module.code}/>{module.code}</li>)} 
                                </div>
                            </div>
                            <div className="second-year-main mb-6 flex flex-col">
                                <h2 className="text-[#4A5565] font-normal text-[1.5rem]">Final year:</h2>
                                <div className="modules grid grid-cols-3 font-[Arimo]">
                                    {modules[4].map((module) => <li key={module.code} className="flex gap-2 text-[#0A0A0A]"><input className="px-3 py-1" type="checkbox" name={module.code}/>{module.code}</li>)} 
                                    {modules[5].map((module) => <li key={module.code} className="flex gap-2 text-[#0A0A0A]"><input className="px-3 py-1" type="checkbox" name={module.code}/>{module.code}</li>)} 
                                </div>
                            </div>
                        </ul>

                    </div>
                    <div className="availability mb-5">
                        <div className="key">

                        </div>
                        <div className="text mb-5">
                            <h4>Availabilty schedule</h4>
                            <p>***Click on available slots to mark additional times when you're unavailable</p>
                            <div className="keys">
                                {/* Orange Key */}
                                <div className="key"></div>
                                <div className="text"></div>
                                {/** Red Key */}
                                <div className="key"></div>
                                <div className="text"></div>
                                { /**Green Key */}
                                <div className="key"></div>
                                <div className="text"></div>
                            </div>
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
                                            {myTimeTable[0].map((shift) => (
                                                <td key={shift.id} className="h-[2.59031rem]! w-[4.43731rem]!">
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
                    <button onSubmit={() => onSubmit} type="submit" className="flex w-fit bg-[#337E89] px-3 py-1 text-white">Submit Availability</button>
                </form>
            </div>
        </div>
    )
}

export default Registration