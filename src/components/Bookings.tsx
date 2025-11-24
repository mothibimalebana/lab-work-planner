

const Bookings = (  ) => {
    const schedule = [
        [
          {booked: false},
          {booked: false},
          {booked: false},
          {booked: false},
          {booked: false},
          {booked: false},
          {booked: false}
        ],
        [
          {booked: false},
          {booked: false},
          {booked: false},
          {booked: false},
          {booked: false},
          {booked: false},
          {booked: false}
        ],
        [
          {booked: false},
          {booked: false},
          {booked: false},
          {booked: false},
          {booked: false},
          {booked: false},
          {booked: false}
        ],
        [
          {booked: false},
          {booked: false},
          {booked: false},
          {booked: false},
          {booked: false},
          {booked: false},
          {booked: false}
        ],
        [
          {booked: false},
          {booked: true, class: 'SC0A222', lecture: 'Mokwele', lab: 1 },
          {booked: false},
          {booked: false},
          {booked: false},
          {booked: false},
          {booked: false}
        ]
      ];

    console.log(schedule[0])
    return (
        <div className="table px-[5.12rem] w-full mt-2.5">
            <table className="w-full rounded-md border border-solid border-[#E5E8EB] bg-white">
                <tbody>
                    <tr className="rounded-lg border-b border-b-solid border-b-[#E5E8EB]">
                    <th className="pl-[0.65rem] w-[2.13rem] bg-[rgba(236,236,240,0.30)]  text-left font-normal">Time</th>
                    <th className="bg-[rgba(236,236,240,0.30)] text-[#0A0A0A] font-dm-sans text-[0.85163rem] not-italic font-normal leading-[1.27744rem] w-8.5 h-[2.59031rem] text-left">Monday</th>
                        <th className="bg-[rgba(236,236,240,0.30)] text-[#0A0A0A] font-dm-sans text-[0.85163rem] not-italic font-normal leading-[1.27744rem] w-8.5 h-[2.59031rem] text-left">Tuesday</th>
                        <th className="bg-[rgba(236,236,240,0.30)] text-[#0A0A0A] font-dm-sans text-[0.85163rem] not-italic font-normal leading-[1.27744rem] w-8.5 h-[2.59031rem] text-left">Wednsday</th>
                        <th className="bg-[rgba(236,236,240,0.30)] text-[#0A0A0A] font-dm-sans text-[0.85163rem] not-italic font-normal leading-[1.27744rem] w-8.5 h-[2.59031rem] text-left">Thursday</th>
                        <th className="bg-[rgba(236,236,240,0.30)] text-[#0A0A0A] font-dm-sans text-[0.85163rem] not-italic font-normal leading-[1.27744rem] w-8.5 h-[2.59031rem] text-left">Friday</th>
                        <th className="bg-[rgba(236,236,240,0.30)] text-[#0A0A0A] font-dm-sans text-[0.85163rem] not-italic font-normal leading-[1.27744rem] w-8.5 h-[2.59031rem] text-left">Saturday</th>
                        <th className="bg-[rgba(236,236,240,0.30)] text-[#0A0A0A] font-dm-sans text-[0.85163rem] not-italic font-normal leading-[1.27744rem] w-8.5 h-[2.59031rem] text-left">Sunday</th>
                    </tr>
                    <tr className="rounded-lg border-b border-b-solid border-b-[#E5E8EB]">
                        <td className="w-[2.13rem] bg-[rgba(236,236,240,0.30)]  text-left font-normal">08:00 <br />11:00</td>
                        {schedule[0].map((booked) => booked.booked ? <td className="mx-auto"><div className="working h-full flex  rounded-lg border border-solid border-[#EC1717] bg-[rgba(236,23,23,0.30)]"><div className="cell p-[0.65rem] text-[0.74513rem]"> <h6>{booked.class}</h6> <p>{booked.lecture}</p> <p>Lab: {booked.lab}</p> </div></div></td> : <td><div className="freeSlot h-[80%] text-left text-[#99A1AF] rounded-lg border border-solid border-[#E5E8EB] cell p-[0.65rem] text-[0.74513rem]">Free slot</div></td>)}
                    </tr>
                    <tr className="rounded-lg border-b border-b-solid border-b-[#E5E8EB]">
                        <td className="w-[2.13rem] bg-[rgba(236,236,240,0.30)]  text-left font-normal">11:00 <br />14:00</td>
                        {schedule[1].map((booked) => booked.booked ? <td><div className="working h-full flex  rounded-lg border border-solid border-[#EC1717] bg-[rgba(236,23,23,0.30)] "><div className="cell p-[0.65rem] text-[0.74513rem]"> <h6>{booked.class}</h6> <p>{booked.lecture}</p> <p>Lab: {booked.lab}</p> </div></div></td> : <td><div className="freeSlot h-[80%] text-left text-[#99A1AF] rounded-lg border border-solid border-[#E5E8EB] cell p-[0.65rem] text-[0.74513rem]">Free slot</div></td>)}
                    </tr>
                    <tr className="rounded-lg border-b border-b-solid border-b-[#E5E8EB]">
                        <td className="w-[2.13rem] bg-[rgba(236,236,240,0.30)]  text-left font-normal">14:00 <br />17:00</td>
                        {schedule[2].map((booked) => booked.booked ? <td><div className="working h-full flex  rounded-lg border border-solid border-[#EC1717] bg-[rgba(236,23,23,0.30)] "><div className="cell p-[0.65rem] text-[0.74513rem]"> <h6>{booked.class}</h6> <p>{booked.lecture}</p> <p>Lab: {booked.lab}</p> </div></div></td> : <td><div className="freeSlot h-[80%] text-left text-[#99A1AF] rounded-lg border border-solid border-[#E5E8EB] cell p-[0.65rem] text-[0.74513rem]">Free slot</div></td>)}

                    </tr>
                    <tr className="rounded-lg border-b border-b-solid border-b-[#E5E8EB]">
                        <td className="w-[2.13rem] bg-[rgba(236,236,240,0.30)]  text-left font-normal">17:00 <br />20:00</td>
                        {schedule[3].map((booked) => booked.booked ? <td><div className="cell p-[0.65rem] text-[0.74513rem]"> <h6>{booked.class}</h6> <p>{booked.lecture}</p> <p>Lab: {booked.lab}</p> </div></td> : <td><div className="freeSlot h-[80%] text-left text-[#99A1AF] rounded-lg border border-solid border-[#E5E8EB] cell p-[0.65rem] text-[0.74513rem]">Free slot</div></td>)}
                    </tr>
                    <tr className="rounded-lg border-b border-b-solid border-b-[#E5E8EB]">
                        <td className="w-[2.13rem] bg-[rgba(236,236,240,0.30)]  text-left font-normal">20:00 <br />00:00</td>
                        {schedule[4].map((booked) => booked.booked ? <td><div className="working h-full flex  rounded-lg border border-solid border-[#EC1717] bg-[rgba(236,23,23,0.30)] "><div className="cell p-[0.65rem] text-[0.74513rem]"> <h6>{booked.class}</h6> <p>{booked.lecture}</p> <p>Lab: {booked.lab}</p> </div></div></td> : <td><div className="freeSlot h-[80%] text-left text-[#99A1AF] rounded-lg border border-solid border-[#E5E8EB] cell p-[0.65rem] text-[0.74513rem]">Free slot</div></td>)}
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Bookings