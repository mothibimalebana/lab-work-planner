const CurrDate = () => {
    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

    const d = new Date();
    const currDay = d.getDate();
    const currMonth = d.getMonth();
    const currYear = d.getFullYear();
    const fullDate = `${currDay} ${month[currMonth]} ${currYear}`;
    return (
        <>
            <div className="date text-[#000000] text-[30px]">
                {fullDate}
            </div>
        </>
    )
}

export default CurrDate