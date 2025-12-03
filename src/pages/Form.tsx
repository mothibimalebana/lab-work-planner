function Registration(){
    const schedule = [
    [
        { shift: false, attended: false, supervisor: null, lab: null },
        { shift: false, attended: false, supervisor: null, lab: null },
        { shift: false, attended: false, supervisor: null, lab: null },
        { shift: false, attended: false, supervisor: null, lab: null },
        { shift: false, attended: false, supervisor: null, lab: null },
        { shift: false, attended: false, supervisor: null, lab: null },
        { shift: false, attended: false, supervisor: null, lab: null }
    ],
    [
        { shift: false, attended: false, supervisor: null, lab: null },
        { shift: false, attended: false, supervisor: null, lab: null },
        { shift: false, attended: false, supervisor: null, lab: null },
        { shift: false, attended: false, supervisor: null, lab: null },
        { shift: false, attended: false, supervisor: null, lab: null },
        { shift: false, attended: false, supervisor: null, lab: null },
        { shift: false, attended: false, supervisor: null, lab: null }
    ],
    [
        { shift: false, attended: false, supervisor: null, lab: null },
        { shift: false, attended: false, supervisor: null, lab: null },
        { shift: false, attended: false, supervisor: null, lab: null },
        { shift: false, attended: false, supervisor: null, lab: null },
        { shift: false, attended: false, supervisor: null, lab: null },
        { shift: false, attended: false, supervisor: null, lab: null },
        { shift: false, attended: false, supervisor: null, lab: null }
    ],
    [
        { shift: false, attended: false, supervisor: null, lab: null },
        { shift: false, attended: false, supervisor: null, lab: null },
        { shift: false, attended: false, supervisor: null, lab: null },
        { shift: false, attended: false, supervisor: null, lab: null },
        { shift: false, attended: false, supervisor: null, lab: null },
        { shift: false, attended: false, supervisor: null, lab: null },
        { shift: false, attended: false, supervisor: null, lab: null }
    ],
    [
        { shift: false, attended: false, supervisor: null, lab: null },
        { shift: false, attended: false, supervisor: null, lab: null },
        { shift: false, attended: false, supervisor: null, lab: null },
        { shift: false, attended: false, supervisor: null, lab: null },
        { shift: false, attended: false, supervisor: null, lab: null },
        { shift: false, attended: false, supervisor: null, lab: null },
        { shift: false, attended: false, supervisor: null, lab: null }
    ]
    ];


    return(
        <div className="registration px-[5.12rem] font-[Arimo] mt-6">
            <div className="form bg-white px-8 py-5 rounded-[0.73163rem]! border border-solid border-[rgba(0,0,0,0.10)]!">
                <form action="# flex flex-col">
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

                    </div>
                    <div className="availability mb-5">
                        <div className="key">

                        </div>
                        <div className="text mb-5">
                            <p>***Click on available slots to mark additional times when you're unavailable</p>
                        </div>
                        <div className="table w-[ mt-2.5">
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
                                        {schedule[0].map((shift) => shift.shift ? <td className="h-[2.59031rem]! w-[4.43731rem]!"><div className="working h-[2.59031rem]! flex w-[4.43731rem]!1  rounded-lg border border-solid border-[#337E89] bg-[rgba(142,184,190,0.20)]"><div className="cell p-[0.65rem] text-[0.74513rem]"> <h6>Lab Assistant</h6> <p>{shift.supervisor}</p> <p>Lab: {shift.lab}</p> </div></div></td> : <td className="h-[2.59031rem]! w-[4.43731rem]!"><div className="freeSlot bg-[#DCFCE7] border border-solid  border-[#05DF72] h-[2.59031rem]! text-left w-[4.43731rem]! text-[#99A1AF] rounded-lg  cell p-[0.65rem] text-[0.74513rem] hover:bg-[#8CFFB4]"></div></td>)}
                                    </tr>
                                    <tr className="rounded-lg font-[Arimo] border-b border-b-solid border-b-[#E5E8EB]">
                                        <td className="w-[4.43731rem]!  text-left font-normal">11:00 <br />14:00</td>
                                        {schedule[1].map((shift) => shift.shift ? <td className="h-[2.59031rem]! w-[4.43731rem]!"><div className="working h-[2.59031rem]! flex w-[4.43731rem]!  rounded-lg border border-solid border-[#337E89] bg-[rgba(142,184,190,0.20)] "><div className="cell p-[0.65rem] text-[0.74513rem]"> <h6>Lab Assistant</h6> <p>{shift.supervisor}</p> <p>Lab: {shift.lab}</p> </div></div></td> : <td className="h-[2.59031rem]! w-[4.43731rem]!"><div className="freeSlot bg-[#DCFCE7] border border-solid  border-[#05DF72] h-[2.59031rem]! text-left w-[4.43731rem]! text-[#99A1AF] rounded-lg cell p-[0.65rem] text-[0.74513rem] hover:bg-[#8CFFB4]"></div></td>)}
                                    </tr>
                                    <tr className="rounded-lg font-[Arimo] border-b border-b-solid border-b-[#E5E8EB]">
                                        <td className="w-[4.43731rem]!  text-left font-normal">14:00 <br />17:00</td>
                                        {schedule[2].map((shift) => shift.shift ? <td className="h-[2.59031rem]! w-[4.43731rem]!"><div className="working h-[2.59031rem]! flex w-[4.43731rem]!  rounded-lg border border-solid border-[#337E89] bg-[rgba(142,184,190,0.20)] "><div className="cell p-[0.65rem] text-[0.74513rem]"> <h6>Lab Assistant</h6> <p>{shift.supervisor}</p> <p>Lab: {shift.lab}</p> </div></div></td> : <td className="h-[2.59031rem]! w-[4.43731rem]!"><div className="freeSlot bg-[#DCFCE7] border border-solid  border-[#05DF72] h-[2.59031rem]! text-left w-[4.43731rem]! text-[#99A1AF] rounded-lg cell p-[0.65rem] text-[0.74513rem] hover:bg-[#8CFFB4]"></div></td>)}

                                    </tr>
                                    <tr className="rounded-lg font-[Arimo] border-b border-b-solid border-b-[#E5E8EB]">
                                        <td className="w-[4.43731rem]! text-left font-normal">17:00 <br />20:00</td>
                                        {schedule[3].map((shift) => shift.shift ? <td className="h-[2.59031rem]! w-[4.43731rem]!"><div className="cell p-[0.65rem] text-[0.74513rem]"> <h6>Lab Assistant</h6> <p>{shift.supervisor}</p> <p>Lab: {shift.lab}</p> </div></td> : <td><div className="freeSlot bg-[#DCFCE7] h-[2.59031rem]! text-left w-[4.43731rem]! text-[#99A1AF] rounded-lg border border-solid border-[#05DF72] cell p-[0.65rem] text-[0.74513rem]"></div></td>)}
                                    </tr>
                                    <tr className="rounded-lg font-[Arimo] border-b border-b-solid border-b-[#E5E8EB]">
                                        <td className="w-[4.43731rem]! text-left font-normal">20:00 <br />00:00</td>
                                        {schedule[4].map((shift) => shift.shift ? <td className="h-[2.59031rem]! w-[4.43731rem]!"><div className="working h-[2.59031rem]! flex w-[4.43731rem]!  rounded-lg border border-solid border-[#337E89] bg-[rgba(142,184,190,0.20)] "><div className="cell p-[0.65rem] text-[0.74513rem]"> <h6>Lab Assistant</h6> <p>{shift.supervisor}</p> <p>Lab: {shift.lab}</p> </div></div></td> : <td className="h-[2.59031rem]! w-[4.43731rem]!"><div className="freeSlot h-[2.59031rem]! text-left w-[4.43731rem]! text-[#99A1AF] rounded-lg border bg-[#DCFCE7] border-solid border-[#05DF72] cell p-[0.65rem] text-[0.74513rem]"></div></td>)}
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="summary bg-[#EFF6FF]">
                            <h4>Summary</h4>
                            <p>Available slots: {} / 35</p>
                            <p>Blocked by classes: {}</p>
                            <p>Marked unavailable: {}</p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Registration