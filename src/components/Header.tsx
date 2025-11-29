const Header = () => {
    const page = window.location.pathname.slice(1)
    console.log(page)
    return(
        <div className="md:header px-[5.12rem] mt-7">
            <div className="breadCrumbs">
                <h3 className={`text-black text-[0.875rem] font-bold`}><span className="text-[#DCDCDC]">{`Lab Work Planner >`}</span> { page } </h3>
            </div>
        </div>
    )
}

export default Header