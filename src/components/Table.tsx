import type {  role, TableProps } from '../../types/timetable'

const Table = ({mode, schedule }:TableProps) => {
    const role: role = "assistant"
  /**
   * @params - The Primitive component takes a nested array, with each cell representing a slot on the timetable
   * return - The timetable component
   */
    return (
        <div className="table px-[5.12rem] w-full mt-2.5">
            <table className="w-full rounded-md border border-solid border-[#E5E8EB] bg-white">
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
                        <td className="w-fit bg-[rgba(236,236,240,0.30)] text-left font-normal">{mode === "Shifts" ? ( role == "assistant" ? <p>08:00 <br />11:00</p> : <p>08:00 <br />12:00</p> ) :  <p>07:30 <br />09:10</p>}</td>
                            {
                                mode === "Shifts"
                                    ?
                                    Array.from(schedule.get("08h00-11h00")?.entries() || []).map(([time, slot]) => (
                                        <td key={time} className={slot.Shift.assistants.length > 0 ? "mx-auto" : ""}>
                                            <div className={slot.Shift.assistants.length > 0 ? "working h-full flex rounded-lg border border-solid border-[#337E89] bg-[rgba(142,184,190,0.20)]" : "freeSlot h-[80%] text-left text-[#99A1AF] rounded-lg border border-solid border-[#E5E8EB] cell p-[0.65rem] text-[0.74513rem]"}>
                                                {slot.Shift.assistants.length > 0 
                                                ? 
                                                    (
                                                        <div className="cell p-[0.65rem] leading-[1.0645rem] text-[#337E89] text-[0.74513rem]">
                                                            <h6 className='text-[0.74513rem]'>
                                                                {`Lab Supervisor`}
                                                            </h6>
                                                            <p className='text-[0.85163rem]'>
                                                                {`${slot?.Shift?.supervisor ?? 'N/A'}`}
                                                            </p>
                                                            <p className='text-[0.85163rem]'>Lab: 1</p>
                                                        </div>
                                                    ) 
                                                : 
                                                    (
                                                        <p className='flex justify-start'>Free slot</p>
                                                    )
                                                }
                                            </div>
                                        </td>
                                    ))
                                    :
                                    Array.from(schedule.get("11h00-14h00")?.entries() || []).map( ([time, slot]) => (
                                        <td key={time} className={ slot.isBooked ? "mx-auto" : ""}>
                                            <div className={slot.isBooked ? "working border-[#EC1717] h-full flex  rounded-lg border border-solid bg-[rgba(236,23,23,0.1)] text-[0.74513rem]" : "freeSlot h-[80%] text-left text-[#99A1AF] rounded-lg border border-solid border-[#E5E8EB] cell p-[0.65rem] text-[0.74513rem]" }>
                                                { slot.isBooked ? <div className="cell p-[0.65rem] leading-[1.0645rem] text-[#B46161] text-[0.74513rem]"> 
                                                    <h6 className='text-[0.74513rem]'>
                                                        <p>{`${slot.booking?.lecturer}`}</p>
                                                    </h6>
                                                    <p className='text-[0.85163remrem]'>
                                                        {`${slot.booking?.Module.code}`}
                                                    </p>
                                                    <p className='text-[0.85163rem]'>{`Lab: ${slot.booking?.lab}`}</p> 
                                                </div>
                                                :
                                                    <p className='flex justify-start'>Free slot</p>
                                                }
                                            </div>
                                        </td>
                                        )
                                    )
                            }
                    </tr>
                </tbody>
            </table>
        </div>
    )
}


export default Table