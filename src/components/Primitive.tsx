

const Primitive = (  ) => {
    const schedule = [
        [
          { shift: true, attended: true },
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
          { shift: true, attended: true },
          { shift: false, attended: false },
          { shift: true, attended: true },
          { shift: false, attended: false },
          { shift: true, attended: true }
        ],
        [
          { shift: false, attended: false },
          { shift: false, attended: false },
          { shift: true, attended: true },
          { shift: false, attended: false },
          { shift: true, attended: true },
          { shift: false, attended: false },
          { shift: true, attended: true }
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

    console.log(schedule[0])
    return (
        <div className="table px-[5.12rem] w-full mt-2.5">
            <table className="w-full rounded-md border border-solid border-[#E5E8EB] bg-white">
                <tbody>
                    <tr className="rounded-lg">
                    <th className="w-[2.13rem] bg-[rgba(236,236,240,0.30)] p-[1.73425rem_0.01363rem_1.61369rem_0.62906rem] text-left font-normal">Time</th>
                        <th className="bg-[rgba(236,236,240,0.30)] text-[#0A0A0A] font-dm-sans text-[0.85163rem] not-italic font-normal leading-[1.27744rem] w-8.5 h-[2.59031rem] p-[0.69194rem_6.81881rem_0.58588rem_0.63869rem] text-left pl-[0.63rem] pr-[2.21rem] pt-[1.73rem] pb-[1.61rem]">Monday</th>
                        <th className="bg-[rgba(236,236,240,0.30)] text-[#0A0A0A] font-dm-sans text-[0.85163rem] not-italic font-normal leading-[1.27744rem] w-8.5 h-[2.59031rem] p-[0.69194rem_6.81881rem_0.58588rem_0.63869rem] text-left pl-[0.63rem] pr-[2.21rem] pt-[1.73rem] pb-[1.61rem]">Tuesday</th>
                        <th className="bg-[rgba(236,236,240,0.30)] text-[#0A0A0A] font-dm-sans text-[0.85163rem] not-italic font-normal leading-[1.27744rem] w-8.5 h-[2.59031rem] p-[0.69194rem_6.81881rem_0.58588rem_0.63869rem] text-left pl-[0.63rem] pr-[2.21rem] pt-[1.73rem] pb-[1.61rem]">Wednsday</th>
                        <th className="bg-[rgba(236,236,240,0.30)] text-[#0A0A0A] font-dm-sans text-[0.85163rem] not-italic font-normal leading-[1.27744rem] w-8.5 h-[2.59031rem] p-[0.69194rem_6.81881rem_0.58588rem_0.63869rem] text-left pl-[0.63rem] pr-[2.21rem] pt-[1.73rem] pb-[1.61rem]">Thursday</th>
                        <th className="bg-[rgba(236,236,240,0.30)] text-[#0A0A0A] font-dm-sans text-[0.85163rem] not-italic font-normal leading-[1.27744rem] w-8.5 h-[2.59031rem] p-[0.69194rem_6.81881rem_0.58588rem_0.63869rem] text-left pl-[0.63rem] pr-[2.21rem] pt-[1.73rem] pb-[1.61rem]">Friday</th>
                        <th className="bg-[rgba(236,236,240,0.30)] text-[#0A0A0A] font-dm-sans text-[0.85163rem] not-italic font-normal leading-[1.27744rem] w-8.5 h-[2.59031rem] p-[0.69194rem_6.81881rem_0.58588rem_0.63869rem] text-left pl-[0.63rem] pr-[2.21rem] pt-[1.73rem] pb-[1.61rem]">Saturday</th>
                        <th className="bg-[rgba(236,236,240,0.30)] text-[#0A0A0A] font-dm-sans text-[0.85163rem] not-italic font-normal leading-[1.27744rem] w-8.5 h-[2.59031rem] p-[0.69194rem_6.81881rem_0.58588rem_0.63869rem] text-left pl-[0.63rem] pr-[2.21rem] pt-[1.73rem] pb-[1.61rem]">Sunday</th>
                    </tr>
                    <tr>
                        <td className="w-[2.13rem] bg-[rgba(236,236,240,0.30)] p-[1.73425rem_0.01363rem_1.61369rem_0.62906rem] text-left font-normal">08:00 <br />11:00</td>
                        {schedule[0].map((shift) => shift.shift ? <td><div className="cell">Working</div></td> : <td><div className="cell">Free slot</div></td>)}
                    </tr>
                    <tr>
                        <td className="w-[2.13rem] bg-[rgba(236,236,240,0.30)] p-[1.73425rem_0.01363rem_1.61369rem_0.62906rem] text-left font-normal">11:00 <br />14:00</td>
                        {schedule[1].map((shift) => shift.shift ? <td><div className="cell">Working</div></td> : <td><div className="cell">Free slot</div></td>)}
                    </tr>
                    <tr >
                        <td className="w-[2.13rem] bg-[rgba(236,236,240,0.30)] p-[1.73425rem_0.01363rem_1.61369rem_0.62906rem] text-left font-normal">14:00 <br />17:00</td>
                        {schedule[2].map((shift) => shift.shift ? <td><div className="cell">Working</div></td> : <td><div className="cell">Free slot</div></td>)}

                    </tr>
                    <tr>
                        <td className="w-[2.13rem] bg-[rgba(236,236,240,0.30)] p-[1.73425rem_0.01363rem_1.61369rem_0.62906rem] text-left font-normal">17:00 <br />20:00</td>
                        {schedule[3].map((shift) => shift.shift ? <td><div className="cell">Working</div></td> : <td><div className="cell">Free slot</div></td>)}
                    </tr>
                    <tr>
                        <td className="w-[2.13rem] bg-[rgba(236,236,240,0.30)] p-[1.73425rem_0.01363rem_1.61369rem_0.62906rem] text-left font-normal">20:00 <br />00:00</td>
                        {schedule[4].map((shift) => shift.shift ? <td><div className="cell">Working</div></td> : <td><div className="cell">Free slot</div></td>)}
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Primitive