import BreadCrumbs from "../components/BreadCrumbs";

const Home = () => {
    return(
        <>
            <div className="home flex pt-[27px] flex-col">
                <BreadCrumbs currPage="TimeTable" />
            </div>
        </>
    )
}
export default Home;