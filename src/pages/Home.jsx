import BreadCrumbs from "../components/BreadCrumbs";
import CurrDate from "../components/Date";
import DateFrame from "../components/DateFrame";

const Home = () => {
    return(
        <>
            <div className="home flex flex-col">
                <div className="breadCrumbs pt-[27px]">
                    <BreadCrumbs currPage="TimeTable" />
                </div>
                <div className="header flex items-center justify-between pt-[16px]">
                    <CurrDate/>
                    <div className="buttons flex">
                        <button className="button bg-[#FFFFFF] rounded-[4px] text-[#000000] h-[40px] w-[140px]">Filter</button>
                        <button className="button bg-[#161127] rounded-[4px] h-[40px] w-[140px]">Updates</button>
                    </div>
                </div>
                <div className="dateframe">
                    <DateFrame/>
                </div>
            </div>
        </>
    )
}
export default Home