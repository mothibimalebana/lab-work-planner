import type {  role, TableProps } from '../../types/timetable'

const Table = ({mode, schedule, bookings }:TableProps) => {
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
                            schedule[0].map( (shift, id) => (
                                <td key={id} className={shift.isClass ? "mx-auto" : ""}>
                                    <div className={shift.isClass ? "working h-full flex  rounded-lg border border-solid border-[#337E89] bg-[rgba(142,184,190,0.20)]" : "freeSlot h-[80%] text-left text-[#99A1AF] rounded-lg border border-solid border-[#E5E8EB] cell p-[0.65rem] text-[0.74513rem]" }>
                                        { shift.shift ? <div className="cell p-[0.65rem] leading-[1.0645rem] text-[#337E89] text-[0.74513rem]"> 
                                            <h6 className='text-[0.74513rem]'>
                                                {`Lab ${shift.shift.role}`}
                                            </h6>
                                             <p className='text-[0.85163remrem]'>
                                                {shift.shift.supervisor}
                                            </p>
                                             <p className='text-[0.85163rem]'>Lab: {shift.shift.lab}</p> 
                                        </div>
                                        :
                                            <p className='flex justify-start'>Free slot</p>
                                        }
                                    </div>
                                </td>
                                )
                            )
                        :
                            bookings[0].map( (slot, id) => (
                                <td key={id} className={ slot.isClass ? "mx-auto" : ""}>
                                    <div className={slot.isClass ? "working border-[#EC1717] h-full flex  rounded-lg border border-solid bg-[rgba(236,23,23,0.1)]text-[0.74513rem]" : "freeSlot h-[80%] text-left text-[#99A1AF] rounded-lg border border-solid border-[#E5E8EB] cell p-[0.65rem] text-[0.74513rem]" }>
                                        { slot.class ? <div className="cell p-[0.65rem] leading-[1.0645rem] text-[#B46161] text-[0.74513rem]"> 
                                            <h6 className='text-[0.74513rem]'>
                                                {slot.shift.supervisor}
                                            </h6>
                                             <p className='text-[0.85163remrem]'>
                                                {slot.shift.supervisor}
                                            </p>
                                             <p className='text-[0.85163rem]'>Lab: {slot.shift.supervisor}</p> 
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
                    <tr className="rounded-lg font-[Arimo] border-b border-b-solid border-b-[#E5E8EB]">
                        <td className="w-fit bg-[rgba(236,236,240,0.30)]  text-left font-normal">{mode === "Shifts" ? (role === "assistant" ? <p>11:00 <br />14:00</p> : <p>12:00 <br />16:00</p> ) :  <p>09:20 <br />11:00</p>}</td>
                       {
                        mode === "Shifts"
                        ?
                            schedule[1].map( (shift, id) => (
                                <td key={id} className={shift.shift ? "mx-auto" : ""}>
                                    <div className={shift.shift ? "working h-full flex  rounded-lg border border-solid border-[#337E89] bg-[rgba(142,184,190,0.20)]" : "freeSlot h-[80%] text-left text-[#99A1AF] rounded-lg border border-solid border-[#E5E8EB] cell p-[0.65rem] text-[0.74513rem]" }>
                                        { shift.shift ? <div className="cell p-[0.65rem] leading-[1.0645rem] text-[#337E89] text-[0.74513rem]"> 
                                            <h6 className='text-[0.74513rem]'>
                                                {`Lab ${shift.shift.role}`}
                                            </h6>
                                             <p className='text-[0.85163remrem]'>
                                                {shift.shift.supervisor}
                                            </p>
                                             <p className='text-[0.85163rem]'>Lab: {shift.shift.lab}</p> 
                                        </div>
                                        :
                                            <p className='flex justify-start'>Free slot</p>
                                        }
                                    </div>
                                </td>
                                )
                            )
                        :
                            bookings[1].map( (slot, id) => (
                                <td key={id} className={ slot.class ? "mx-auto" : ""}>
                                    <div className={slot.class ? "working border-[#EC1717] h-full flex  rounded-lg border border-solid bg-[rgba(236,23,23,0.1)]text-[0.74513rem]" : "freeSlot h-[80%] text-left text-[#99A1AF] rounded-lg border border-solid border-[#E5E8EB] cell p-[0.65rem] text-[0.74513rem]" }>
                                        { slot.class ? <div className="cell p-[0.65rem] leading-[1.0645rem] text-[#B46161] text-[0.74513rem]"> 
                                            <h6 className='text-[0.74513rem]'>
                                                {slot.shift.}
                                            </h6>
                                             <p className='text-[0.85163remrem]'>
                                                {slot.lecture}
                                            </p>
                                             <p className='text-[0.85163rem]'>Lab: {slot.lab}</p> 
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
                    <tr className="rounded-lg font-[Arimo] border-b border-b-solid border-b-[#E5E8EB]">
                        <td className="w-fit bg-[rgba(236,236,240,0.30)]  text-left font-normal">{mode === "Shifts" ? (role === "assistant" ? <p>14:00 <br />17:00</p> : <p>16:00 <br />20:00</p> ) :  <p>11:10 <br />12:50</p>}</td>
                       {
                        mode === "Shifts"
                        ?
                            schedule[2].map( (shift, id) => (
                                <td key={id} className={shift.shift ? "mx-auto" : ""}>
                                    <div className={shift.shift ? "working h-full flex  rounded-lg border border-solid border-[#337E89] bg-[rgba(142,184,190,0.20)]" : "freeSlot h-[80%] text-left text-[#99A1AF] rounded-lg border border-solid border-[#E5E8EB] cell p-[0.65rem] text-[0.74513rem]" }>
                                        { shift.shift ? <div className="cell p-[0.65rem] leading-[1.0645rem] text-[#337E89] text-[0.74513rem]"> 
                                            <h6 className='text-[0.74513rem]'>
                                                {`Lab ${shift.shift.role}`}
                                            </h6>
                                             <p className='text-[0.85163remrem]'>
                                                {shift.shift.supervisor}
                                            </p>
                                             <p className='text-[0.85163rem]'>Lab: {shift.shift.lab}</p> 
                                        </div>
                                        :
                                            <p className='flex justify-start'>Free slot</p>
                                        }
                                    </div>
                                </td>
                                )
                            )
                        :
                            bookings[2].map( (slot, id) => (
                                <td key={id} className={ slot.class ? "mx-auto" : ""}>
                                    <div className={slot.class ? "working border-[#EC1717] h-full flex  rounded-lg border border-solid bg-[rgba(236,23,23,0.1)]text-[0.74513rem]" : "freeSlot h-[80%] text-left text-[#99A1AF] rounded-lg border border-solid border-[#E5E8EB] cell p-[0.65rem] text-[0.74513rem]" }>
                                        { slot.class ? <div className="cell p-[0.65rem] leading-[1.0645rem] text-[#B46161] text-[0.74513rem]"> 
                                            <h6 className='text-[0.74513rem]'>
                                                {slot.module}
                                            </h6>
                                             <p className='text-[0.85163remrem]'>
                                                {slot.lecture}
                                            </p>
                                             <p className='text-[0.85163rem]'>Lab: {slot.lab}</p> 
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
                    <tr className="rounded-lg font-[Arimo] border-b border-b-solid border-b-[#E5E8EB]">
                        <td className="w-fit bg-[rgba(236,236,240,0.30)]  text-left font-normal">{mode === "Shifts" ? (role === "assistant" ? <p>20:00 <br />20:00</p> : <p>00:00 <br />12:00</p> ) :  <p>13:00 <br /> 14:40 </p>}</td>
                       {
                        mode === "Shifts"
                        ?
                            schedule[3].map( (shift, id) => (
                                <td key={id} className={shift.shift ? "mx-auto" : ""}>
                                    <div className={shift.shift ? "working h-full flex  rounded-lg border border-solid border-[#337E89] bg-[rgba(142,184,190,0.20)]" : "freeSlot h-[80%] text-left text-[#99A1AF] rounded-lg border border-solid border-[#E5E8EB] cell p-[0.65rem] text-[0.74513rem]" }>
                                        { shift.shift ? <div className="cell p-[0.65rem] leading-[1.0645rem] text-[#337E89] text-[0.74513rem]"> 
                                            <h6 className='text-[0.74513rem]'>
                                                {`Lab ${shift.shift.role}`}
                                            </h6>
                                             <p className='text-[0.85163remrem]'>
                                                {shift.shift.supervisor}
                                            </p>
                                             <p className='text-[0.85163rem]'>Lab: {shift.shift.lab}</p> 
                                        </div>
                                        :
                                            <p className='flex justify-start'>Free slot</p>
                                        }
                                    </div>
                                </td>
                                )
                            )
                        :
                            bookings[3].map( (slot, id) => (
                                <td key={id} className={ slot.class ? "mx-auto" : ""}>
                                    <div className={slot.class ? "working border-[#EC1717] h-full flex  rounded-lg border border-solid bg-[rgba(236,23,23,0.1)]text-[0.74513rem]" : "freeSlot h-[80%] text-left text-[#99A1AF] rounded-lg border border-solid border-[#E5E8EB] cell p-[0.65rem] text-[0.74513rem]" }>
                                        { slot.class ? <div className="cell p-[0.65rem] leading-[1.0645rem] text-[#B46161] text-[0.74513rem]"> 
                                            <h6 className='text-[0.74513rem]'>
                                                {slot.module}
                                            </h6>
                                             <p className='text-[0.85163remrem]'>
                                                {slot.lecture}
                                            </p>
                                             <p className='text-[0.85163rem]'>Lab: {slot.lab}</p> 
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
                    <tr className="rounded-lg font-[Arimo] border-b border-b-solid border-b-[#E5E8EB]">
                        <td className="w-fit bg-[rgba(236,236,240,0.30)]  text-left font-normal">{mode === "Shifts" ? (role === "assistant" ? <p>20:00 <br />00:00</p> : "") :  <p> 14:50 <br /> 16:30</p>}</td>
                       {
                        mode === "Shifts"
                        ?
                            schedule[4].map( (shift, id) => (
                                <td key={id} className={shift.shift ? "mx-auto" : ""}>
                                    <div className={shift.shift ? "working h-full flex  rounded-lg border border-solid border-[#337E89] bg-[rgba(142,184,190,0.20)]" : "freeSlot h-[80%] text-left text-[#99A1AF] rounded-lg border border-solid border-[#E5E8EB] cell p-[0.65rem] text-[0.74513rem]" }>
                                        { shift.shift ? <div className="cell p-[0.65rem] leading-[1.0645rem] text-[#337E89] text-[0.74513rem]"> 
                                            <h6 className='text-[0.74513rem]'>
                                                {`Lab ${shift.shift.role}`}
                                            </h6>
                                             <p className='text-[0.85163remrem]'>
                                                {shift.shift.supervisor}
                                            </p>
                                             <p className='text-[0.85163rem]'>Lab: {shift.shift.lab}</p> 
                                        </div>
                                        :
                                            <p className='flex justify-start'>Free slot</p>
                                        }
                                    </div>
                                </td>
                                )
                            )
                        :
                            bookings[4].map( (slot, id) => (
                                <td key={id} className={ slot.class ? "mx-auto" : ""}>
                                    <div className={slot.class ? "working border-[#EC1717] h-full flex  rounded-lg border border-solid bg-[rgba(236,23,23,0.1)]text-[0.74513rem]" : "freeSlot h-[80%] text-left text-[#99A1AF] rounded-lg border border-solid border-[#E5E8EB] cell p-[0.65rem] text-[0.74513rem]" }>
                                        { slot.class ? <div className="cell p-[0.65rem] leading-[1.0645rem] text-[#B46161] text-[0.74513rem]"> 
                                            <h6 className='text-[0.74513rem]'>
                                                {slot.module}
                                            </h6>
                                             <p className='text-[0.85163remrem]'>
                                                {slot.lecture}
                                            </p>
                                             <p className='text-[0.85163rem]'>Lab: {slot.lab}</p> 
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