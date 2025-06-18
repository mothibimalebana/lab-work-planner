const DateFrame = () => {
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const d = new Date();
    const currMonth = d.getMonth();

    return (
        <>
        <div className="dateFrame mt-[24px] py-[4px] flex border-2 rounded-[4px]  border-[#E5E8EB] justify-between bg-[#FBFBFB] text-[#6C6C6C]">
            {months.map(month =>{
               return month == months[currMonth] ? <div className="currMonth mx-[1rem] w-full bg-[#FFF] rounded-[4px] px-[10px]"><p className="bg-[#FFF] shadow-[0px_2px_4px_0px_rgba(112, 112, 112, 0.15)] text-center text-[#000]">{month}</p></div> : <p className="text-[#6C6C6C] text-center border-x-1 w-full border-x-[#E5E8EB]  px-[10px]">{month}</p>
            })}
        </div>
        </>
    )
}
export default DateFrame