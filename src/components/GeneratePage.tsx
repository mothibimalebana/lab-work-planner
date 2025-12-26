import { Link } from "react-router";
import back from "../assets/svg/Bacj.svg";
import warning from "../assets/svg/warning.svg"
import edit_Icon from "../assets/svg/edit_Icon.svg"
import x from "../assets/svg/x-black.svg";
import save from "../assets/svg/save.svg";
import edit_white from "../assets/svg/edit-white.svg";
import people from "../assets/svg/people.svg";
import { emptySlot, type Slot } from "../assets/mockData";
import { useState } from "react";
import { useAppData } from "../assets/context/ScheduleContext";



export const GeneratePage = () => {
    const {newSchedule, warnings} = useAppData();

    const [edit, setEdit] = useState(true);
    const [view, setView] = useState(false);
    const [slot, setSlot] = useState(emptySlot);
    const [timeDay, setTimeDay] = useState("");

    const scheduleArray = Array.from(newSchedule.entries() || []);

    const adjustTimeTable = (slot: Slot, timeDay: string) => {
        setView(true);
        setSlot(slot);
        setTimeDay(timeDay)
    }

    const closeAdjustTimeTable = () => {
        setView(false);
        setSlot(emptySlot);
    }

    console.log(warnings);

    
    return(
        <div className="generate-container flex flex-col bg-[background: linear-gradient(135deg,#F8FAFC_0%,#FFF_50%,#F0FDFA_100%),#FFF]">
            {/* if edit mode and view is true, display the pop up of clicked student */}
            {(edit && view) &&  <PopUp slot={slot} timeDay={timeDay} closePopUp={closeAdjustTimeTable}/>}

            <div className="generate h-full justify-center font-[Arimo] text-[#0A0A0A]">
                {/* Back Button */}
                <button className="white-button flex mx-[5.12rem] w-fit"><Link className="flex gap-1.5 items-center text-[#0A0A0A]! font-[Arimo] text-md font-normal!" to="/app/dashboard"><img src={back} alt="" /> <p>Back</p></Link></button>

                    {/* Warnings Section*/}
                    {
                     edit
                        ?
                            <div className="warning text-[#1C398E] border border-solid border-[#BEDBFF] mx-[5.12rem] text-[0.85rem] bg-[#EFF6FF] mt-6 px-6 py-2.5 rounded-md">
                                <h3 className="font-bold flex items-center1 gap-1 text-[0.875rem]"><img src={edit_Icon} alt="danger sign" /> Edit Mode Active </h3>
                                <p>Click on any time slot to add or remove lab assistants. The system will show you available assistants and warn you about conflicts.</p>
                            </div>
                        :
                            <div className="warning border border-solid border-[#E5E8EB] mx-[5.12rem] text-[#717182] text-[0.85rem] bg-white mt-6 px-6 py-2.5 rounded-md h-[9.59769rem] overflow-y-auto">
                                <h3 className="text-[#717182] font-bold flex items-center1 gap-1 text-[0.875rem]"><img src={warning} alt="danger sign" /> Schedule Warnings: </h3>
                                <div className="warning-messages">{warnings.map((eachWarning, id) => <div key={id}>{eachWarning.slotID}: {eachWarning.msg.map((warningMsg, id) => <p key={id}>• {warningMsg}</p>)}</div>)}</div>
                            </div>
                            
                    }
                    
                    {/* Generate work schedule table */}
                    <div className="table px-[5.12rem] w-full mt-2.5">
                        <div className="flex flex-col gap-7  px-4 py-6 rounded-md border border-solid border-[#E5E8EB] bg-white">
                            <div className="table-headings flex justify-between">
                                <div className="left">
                                    <h4 className="flex text-[#0A0A0A]">Generate Work Schedule</h4>
                                    <p className="text-[#717182]">AI-optimized schedule with 3 assistant(s) per time slot</p>
                                </div>
                                <div className="right">
                                    {
                                        edit 
                                        ?
                                        <div className="confirm-exit-buttons flex gap-2.5">
                                            <button onClick={() => setEdit(!edit)} className="white-button"><img src={x} alt="edit icon"/>Cancel</button>
                                            <button className="green-button"><img src={save} alt="edit icon" />Save Changes</button>
                                        </div>
                                        :
                                        <button onClick={() => setEdit(!edit)} className="white-green-button"><img src={edit_Icon} alt="edit icon" /> Edit Schedule</button>

                                    }
                                </div>
                            </div>
                            <table className="w-full flex flex-col ">
                                <tbody>
                                    <tr className="rounded-lg border-b border-b-solid border-b-[#E5E8EB]">
                                    <th className="pl-[0.65rem] w-fit bg-[rgba(236,236,240,0.30)]  text-left font-normal">Time</th>
                                        <th className="bg-[rgba(236,236,240,0.30)] text-[#0A0A0A] font-dm-sans text-[0.85163rem] not-italic font-normal leading-[1.27744rem] w-8.5 h-[2.59031rem] text-left">Monday</th>
                                        <th className="bg-[rgba(236,236,240,0.30)] text-[#0A0A0A] font-dm-sans text-[0.85163rem] not-italic font-normal leading-[1.27744rem] w-8.5 h-[2.59031rem] text-left">Tuesday</th>
                                        <th className="bg-[rgba(236,236,240,0.30)] text-[#0A0A0A] font-dm-sans text-[0.85163rem] not-italic font-normal leading-[1.27744rem] w-8.5 h-[2.59031rem] text-left">Wednsday</th>
                                        <th className="bg-[rgba(236,236,240,0.30)] text-[#0A0A0A] font-dm-sans text-[0.85163rem] not-italic font-normal leading-[1.27744rem] w-8.5 h-[2.59031rem] text-left">Thursday</th>
                                        <th className="bg-[rgba(236,236,240,0.30)] text-[#0A0A0A] font-dm-sans text-[0.85163rem] not-italic font-normal leading-[1.27744rem] w-8.5 h-[2.59031rem] text-left">Friday</th>
                                        <th className="bg-[rgba(236,236,240,0.30)] text-[#0A0A0A] font-dm-sans text-[0.85163rem] not-italic font-normal leading-[1.27744rem] w-8.5 h-[2.59031rem] text-left">Saturday</th>
                                        <th className="bg-[rgba(236,236,240,0.30)] text-[#0A0A0A] font-dm-sans text-[0.85163rem] not-italic font-normal leading-[1.27744rem] w-8.5 h-[2.59031rem] text-left">Sunday</th>
                                    </tr>
                                    <tr className="rounded-lg font-[Arimo] border-b border-b-solid border-b-[#E5E8EB]">
                                        <td className="w-fit text-left font-normal">{<p>08:00 <br />11:00</p>}</td>
                                        {
                                            Array.from(scheduleArray[0][1].entries() || []).map( ( [day, slot]) => 
                                                <td key={day + scheduleArray[0][0]} className="mx-auto">
                                                    <div onClick={() => adjustTimeTable(slot, day+ " • " +scheduleArray[0][0])} className="working h-fit flex flex-col">
                                                        <div className={`cell flex flex-col relative gap-1.5 p-[0.65rem] leading-[1.0645rem] text-[#337E89] text-[0.74513rem] ${edit && 'hover:cursor-pointer'}`}> 
                                                            {
                                                                edit
                                                                ?           
                                                                <>
                                                                    <div className="edit text-[#016630]  text-[0.65rem] py-1.5 pr-0 pl-1 rounded-sm border border-solid bg-[#DCFCE7] border-[#7BF1A8]">
                                                                            <div className="cont ">
                                                                                <div className="edit-circle absolute top-0 right-0 bg-[#337E89] rounded-full px-1 py-1">
                                                                                    <img src={edit_white} width={0.01} alt="edit logo" className="relative z-5 w-3 object-contain" />
                                                                                </div>
                                                                                <p>{slot?.Shift?.assistants[0]?.fullName ?? 'Empty slot'}</p>
                                                                            </div>
                                                                    </div>
                                                                </>
                                                                :
                                                                    <p className="text-[#016630] relative text-[0.65rem] py-1.5 pl-1 rounded-sm border border-solid bg-[#DCFCE7] border-[#7BF1A8]">{slot?.Shift?.assistants[0]?.fullName ?? 'Empty slot'}</p>
                                                            }
                                                                <p className="text-[#016630] text-[0.65rem] py-1.5 pl-1 rounded-sm border border-solid bg-[#DCFCE7] border-[#7BF1A8]">{slot?.Shift?.assistants[1]?.fullName ?? 'Empty slot'}</p>
                                                                <p className="text-[#016630] text-[0.65rem] py-1.5 pl-1 rounded-sm border border-solid bg-[#DCFCE7] border-[#7BF1A8]">{slot?.Shift?.assistants[2]?.fullName ?? 'Empty slot'}</p>
                                                        </div>
                                                    </div>
                                                </td>
                                            )
                                            
                                        }
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
            </div>
        </div>
    ) 
}




const PopUp = ({ slot, timeDay, closePopUp}: {slot: Slot, timeDay: string, closePopUp: () => void}) => {
    return(
        <div className="pop-up-container absolute inset-0 backdrop-blur-sm transition-opacity flex justify-center items-center bg-[rgba(0,0,0,0.5)] h-full z-10">
            <div className="pop-up flex flex-col gap-2 w-[40%] h-[95%] bg-white py-6 px-6 rounded-md">
                <div className="header flex justify-between items-center">
                    <div className="left flex flex-col gap-1 non-italics font-normal">
                        <div className="top flex gap-2">
                            <img src={people} alt="people icon" />
                            <h3 className="font-bold text-[1.25rem]">Edit Shift Assignment</h3>
                        </div>
                        <div className="bottom"><p className="text-[#717182] text-[0.875rem]">{timeDay}</p></div>
                    </div>
                    
                    <div className="right hover:cursor-pointer"><img onClick={closePopUp} src={x} alt="x icon" /></div>
                </div>
                <div className="content flex flex-col gap-3.5 ">
                    <div className="available">
                        <h3 className="font-bold text-[1rem] text-[#101828]">Available Assistants: </h3>
                        {
                            slot.Shift.assistants.map((assistant, id) => 
                                 <p key={id}>{assistant.fullName}</p>
                        )
                        }

                    </div>
                    <div className="unavailable flex justify-between items-center">
                        <h3 className="font-bold text-[1rem] text-[#101828]">Unavailable Assistants: </h3>
                        <p className="text-[0.875rem] text-[#6A7282]">Click to override and assign anyway</p>
                        <div className="items flex flex-col gap-3.5">
                        {
                            slot.unavailable.map((unavailableAssistant, id) => 
                                 <p key={id}>{unavailableAssistant?.fullName ?? 'Empty'}</p>
                        )
                        }
                        </div>
                    </div>
                </div>
                <div className="buttons"></div>
            </div>
        </div>
    )
}

export default GeneratePage