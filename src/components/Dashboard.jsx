const Dashboard = ({hoursWorked = 80, studentRate = 36.50}) => {
    const maxHours = 80;
    const maxSalary = 80 * studentRate;
    const currSalary = hoursWorked * studentRate;
    return (
        <>
        <div className="dashboard bg-[#FFF] border-[1px_solid_#E5E8EB] rounded-4px flex-row grid grid-cols-8 justify-between px-[30px] py-[20px] mt-[28px]">
            <div className="timeDashboard flex flex-col col-start-1 col-end-3 justify-evenly">
                <p className="text-[#6C6C6C] text-[16px]">Total hours for the month</p>
                <div className="progress flex items-center gap-[10px]">
                    <svg width="130" height="6" viewBox="0 0 130 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="130" height="6" rx="3" fill="#8EB8BE" fill-opacity="0.2"/>
                        <rect width={hoursWorked * 1.625} height="6" rx="3" fill="#337E89"/>
                    </svg>
                    <div className="salary-text flex flex-col items-start justify-end"> 
                        <div className="totalSalary flex flex-col items-center justify-between">
                            <h3 className="text-[#000000] text-[20px] leading-[30px]">{hoursWorked}/{80}<span className="h text-[16px]">h</span></h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="salaryDashboard flex flex-col col-start-3 col-end-8 justify-evenly">
                <p className="text-[#6C6C6C] text-[16px]">Total of salary for this month</p>
                <div className="progress flex items-center justify-between">
                    <svg width="832" heig832ht="6" viewBox="0 0 832 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="832" height="6" rx="3" fill="#8EB8BE" fill-opacity="0.2"/>
                        <rect width={((hoursWorked / maxHours) * 100) * 8.32} height="6" rx="3" fill="#337E89"/>
                    </svg>
                </div>
            </div>
            <div className="salary-text flex flex-col col-start-8 justify-evenly"> 
                <div className="totalSalary flex flex-col items-center justify-between">
                    <p className="text-[#6C6C6C]">Total for April</p>
                    <h3 className="text-[#000000] text-[20px] leading-[30px]">{hoursWorked*studentRate}/{80 *studentRate}<span className="h text-[16px]">h</span></h3>
                </div>
            </div>
        </div>
        </>
    )
}

export default Dashboard