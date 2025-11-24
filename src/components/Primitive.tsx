

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
        <div className="table px-[5.12rem] w-full">
            <table className="w-full">
                <tbody>
                    <tr>
                        <th>Time</th>
                        <th>Monday</th>
                        <th>Tuesday</th>
                        <th>Wednsday</th>
                        <th>Thursday</th>
                        <th>Friday</th>
                        <th>Saturday</th>
                        <th>Sunday</th>
                    </tr>
                    <tr>
                        <td>08:00 <br />11:00</td>
                        {schedule[0].map((shift) => shift.shift ? <td><div className="cell">Working</div></td> : <td><div className="cell">Free slot</div></td>)}
                    </tr>
                    <tr>
                        <td>11:00 <br />14:00</td>
                        {schedule[1].map((shift) => shift.shift ? <td><div className="cell">Working</div></td> : <td><div className="cell">Free slot</div></td>)}
                    </tr>
                    <tr>
                        <td>14:00 <br />17:00</td>
                        {schedule[2].map((shift) => shift.shift ? <td><div className="cell">Working</div></td> : <td><div className="cell">Free slot</div></td>)}

                    </tr>
                    <tr>
                        <td>17:00 <br />20:00</td>
                        {schedule[3].map((shift) => shift.shift ? <td><div className="cell">Working</div></td> : <td><div className="cell">Free slot</div></td>)}
                    </tr>
                    <tr>
                        <td>20:00 <br />00:00</td>
                        {schedule[4].map((shift) => shift.shift ? <td><div className="cell">Working</div></td> : <td><div className="cell">Free slot</div></td>)}
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Primitive