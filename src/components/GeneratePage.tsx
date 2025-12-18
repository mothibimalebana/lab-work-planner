import { Link } from "react-router";
import back from "../assets/svg/Bacj.svg";
import { updateSchedule } from "../assets/mockData"
import warning from "../assets/svg/warning.svg"
import edit_Icon from "../assets/svg/edit_Icon.svg"

export const GeneratePage = () => {

    
    return(
        <div className="generate-container flex flex-col bg-[background: linear-gradient(135deg,#F8FAFC_0%,#FFF_50%,#F0FDFA_100%),#FFF]">
            <div className="generate h-full justify-center font-[Arimo] text-[#0A0A0A]">

                {/* Back Button */}
                <button className="white-button flex mx-[5.12rem] w-fit"><Link className="flex gap-1.5 items-center text-[#0A0A0A]! font-[Arimo] text-md font-normal!" to="/app/dashboard"><img src={back} alt="" /> <p>Back</p></Link></button>

                    {/* Warnings */}
                    <div className="warning border border-solid border-[#E5E8EB] mx-[5.12rem] text-[#717182] text-[0.85rem] bg-white mt-6 px-6 py-2.5 rounded-md">
                        <h3 className="text-[#717182] font-bold flex items-center1 gap-1 text-[0.875rem]"><img src={warning} alt="danger sign" /> Schedule Warnings: </h3>
                        <p>Only 1 assistant(s) available for Friday 17:00 - 20:00 (need 3)</p>
                        <p>Only 1 assistant(s) available for Friday 17:00 - 20:00 (need 3)</p>
                        <p>Only 1 assistant(s) available for Friday 17:00 - 20:00 (need 3)</p>
                        <p>Only 1 assistant(s) available for Friday 17:00 - 20:00 (need 3)</p>
                    </div>

                    {/* Generate work schedule table */}
                    <div className="table px-[5.12rem] w-full mt-2.5">
                        <div className="flex flex-col gap-7  px-4 py-6 rounded-md border border-solid border-[#E5E8EB] bg-white">
                            <div className="table-headings flex justify-between">
                                <div className="left">
                                    <h4 className="flex text-[#0A0A0A]">Generate Work Schedule</h4>
                                    <p className="text-[#717182]">AI-optimized schedule with 3 assistant(s) per time slot</p>
                                </div>
                                <div className="right">
                                    <button className="white-green-button"><img src={edit_Icon} alt="edit icon" /> Edit Schedule</button>
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
                                            updateSchedule[0].map( (shift, id) => (
                                                <td key={id} className="mx-auto">
                                                    <div className="working h-fit flex flex-col">
                                                        <div className="cell flex flex-col gap-1.5 p-[0.65rem] leading-[1.0645rem] text-[#337E89] text-[0.74513rem]"> 
                                                            {/* {
                                                                shift.Shift.assistants.map((assistant) => (
                                                                padding: 0.28025rem 2.47363rem 0.40431rem 0.59325rem;
                                                                <p key={assistant.studentNo} className="text-[#016630]">{assistant.fullName}</p>
                                                            ))
                                                            } */}
                                                                <p className="text-[#016630] text-[0.65rem] py-1.5 pr-10 pl-1 rounded-sm border border-solid bg-[#DCFCE7] border-[#7BF1A8]">Name 1</p>
                                                                <p className="text-[#016630] text-[0.65rem] py-1.5 pr-10 pl-1 rounded-sm border border-solid bg-[#DCFCE7] border-[#7BF1A8]">Name 1</p>
                                                                <p className="text-[#016630] text-[0.65rem] py-1.5 pr-10 pl-1 rounded-sm border border-solid bg-[#DCFCE7] border-[#7BF1A8]">Name 1</p>

                                                        </div>
                                                    </div>
                                                </td>
                                                )
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

export default GeneratePage