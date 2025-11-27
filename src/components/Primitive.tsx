

const Primitive = (  ) => {
  /**
   * @params - The Primitive component takes a nested array, with each cell representing a slot on the timetable
   * return - The timetable component
   */
    const schedule = [
        [
          { shift: true, attended: true, supervisor: 'Moholola M', lab: 2},
          { shift: false, attended: false },
          { shift: false, attended: false },
          { shift: false, attended: false },
          { shift: false, attended: false },
          { shift: false, attended: false },
          { shift: false, attended: false }
        ],
        [
          { shift: false, attended: false },
          { shift: false, attended: false },
          { shift: true, attended: true, supervisor: 'Moholola M', lab: 2},
          { shift: false, attended: false },
          { shift: true, attended: true, supervisor: 'Moholola M', lab: 2},
          { shift: false, attended: false },
          { shift: true, attended: true, supervisor: 'Moholola M', lab: 2}
        ],
        [
          { shift: false, attended: false },
          { shift: false, attended: false },
          { shift: true, attended: true, supervisor: 'Moholola M', lab: 2},
          { shift: false, attended: false },
          { shift: true, attended: true, supervisor: 'Moholola M', lab: 2},
          { shift: false, attended: false },
          { shift: true, attended: true, supervisor: 'Moholola M', lab: 2}
        ],
        [
          { shift: false, attended: false },
          { shift: false, attended: false },
          { shift: false, attended: false },
          { shift: false, attended: false },
          { shift: false, attended: false },
          { shift: false, attended: false },
          { shift: false, attended: false }
        ],
        [
          { shift: false, attended: false },
          { shift: true, attended: false },
          { shift: false, attended: false },
          { shift: false, attended: false },
          { shift: false, attended: false },
          { shift: false, attended: false },
          { shift: false, attended: false }
        ]
      ];

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
                        <td className="w-fit bg-[rgba(236,236,240,0.30)] text-left font-normal">08:00 <br />11:00</td>
                        {schedule[0].map((shift) => shift.shift ? <td className="mx-auto"><div className="working h-full flex  rounded-lg border border-solid border-[#337E89] bg-[rgba(142,184,190,0.20)]"><div className="cell p-[0.65rem] text-[0.74513rem]"> <h6>Lab Assistant</h6> <p>{shift.supervisor}</p> <p>Lab: {shift.lab}</p> </div></div></td> : <td><div className="freeSlot h-[80%] text-left text-[#99A1AF] rounded-lg border border-solid border-[#E5E8EB] cell p-[0.65rem] text-[0.74513rem]">Free slot</div></td>)}
                    </tr>
                    <tr className="rounded-lg font-[Arimo] border-b border-b-solid border-b-[#E5E8EB]">
                        <td className="w-fit bg-[rgba(236,236,240,0.30)]  text-left font-normal">11:00 <br />14:00</td>
                        {schedule[1].map((shift) => shift.shift ? <td><div className="working h-full flex  rounded-lg border border-solid border-[#337E89] bg-[rgba(142,184,190,0.20)] "><div className="cell p-[0.65rem] text-[0.74513rem]"> <h6>Lab Assistant</h6> <p>{shift.supervisor}</p> <p>Lab: {shift.lab}</p> </div></div></td> : <td><div className="freeSlot h-[80%] text-left text-[#99A1AF] rounded-lg border border-solid border-[#E5E8EB] cell p-[0.65rem] text-[0.74513rem]">Free slot</div></td>)}
                    </tr>
                    <tr className="rounded-lg font-[Arimo] border-b border-b-solid border-b-[#E5E8EB]">
                        <td className="w-fit bg-[rgba(236,236,240,0.30)]  text-left font-normal">14:00 <br />17:00</td>
                        {schedule[2].map((shift) => shift.shift ? <td><div className="working h-full flex  rounded-lg border border-solid border-[#337E89] bg-[rgba(142,184,190,0.20)] "><div className="cell p-[0.65rem] text-[0.74513rem]"> <h6>Lab Assistant</h6> <p>{shift.supervisor}</p> <p>Lab: {shift.lab}</p> </div></div></td> : <td><div className="freeSlot h-[80%] text-left text-[#99A1AF] rounded-lg border border-solid border-[#E5E8EB] cell p-[0.65rem] text-[0.74513rem]">Free slot</div></td>)}

                    </tr>
                    <tr className="rounded-lg font-[Arimo] border-b border-b-solid border-b-[#E5E8EB]">
                        <td className="w-fit bg-[rgba(236,236,240,0.30)]  text-left font-normal">17:00 <br />20:00</td>
                        {schedule[3].map((shift) => shift.shift ? <td><div className="cell p-[0.65rem] text-[0.74513rem]"> <h6>Lab Assistant</h6> <p>{shift.supervisor}</p> <p>Lab: {shift.lab}</p> </div></td> : <td><div className="freeSlot h-[80%] text-left text-[#99A1AF] rounded-lg border border-solid border-[#E5E8EB] cell p-[0.65rem] text-[0.74513rem]">Free slot</div></td>)}
                    </tr>
                    <tr className="rounded-lg font-[Arimo] border-b border-b-solid border-b-[#E5E8EB]">
                        <td className="w-fit bg-[rgba(236,236,240,0.30)]  text-left font-normal">20:00 <br />00:00</td>
                        {schedule[4].map((shift) => shift.shift ? <td><div className="working h-full flex  rounded-lg border border-solid border-[#337E89] bg-[rgba(142,184,190,0.20)] "><div className="cell p-[0.65rem] text-[0.74513rem]"> <h6>Lab Assistant</h6> <p>{shift.supervisor}</p> <p>Lab: {shift.lab}</p> </div></div></td> : <td><div className="freeSlot h-[80%] text-left text-[#99A1AF] rounded-lg border border-solid border-[#E5E8EB] cell p-[0.65rem] text-[0.74513rem]">Free slot</div></td>)}
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Primitive