import BreadCrumbs from "../components/BreadCrumbs";
import CurrDate from "../components/Date";

const Home = () => {
    return(
        <>
            <div className="home flex pl-[20px] flex-col pr-[20px]">
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
            </div>
        </>
    )
}
export default Home