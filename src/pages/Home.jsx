import BreadCrumbs from "../components/BreadCrumbs";
import CurrDate from "../components/Date";

const Home = () => {
    return(
        <>
            <div className="home flex pl-[20px] flex-col">
                <div className="breadCrumbs pt-[27px]">
                    <BreadCrumbs currPage="TimeTable" />
                </div>
                <div className="header pt-[16px]">
                    <CurrDate/>
                </div>
            </div>
        </>
    )
}
export default Home;