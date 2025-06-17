const DateFrame = () => {
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const d = new Date();
    const currMonth = d.getMonth();

    return (
        <>
        <div className="dateFrame pt-[20px] flex justify-between bg-[#FBFBFB] text-[#6C6C6C] w-full">
            {months.map(month =>{
               return month == months[currMonth] ? <div className="currMonth bg-[#FFF] px-[10px]"><p className="bg-[#FFF] text-[#000]">{month}</p></div> : <p className="text-[#6C6C6C] px-[10px]">{month}</p>
            })}
        </div>
        </>
    )
}
export default DateFrame