const Header = () => {
    const page = window.location.pathname.slice(1)
    return(
        <div className="header px-[5.12rem]">
            <div className="breadCrumbs">
                <h3 className={`text-black text-[0.875rem]`}><span className="text-[#DCDCDC]">{`Lab Work Planner >`}</span> { page } </h3>
            </div>
        </div>
    )
}

export default Header