import Header  from "../../components/Header/Header"
import FrodTable from "../../components/FrodTable/fraudTable"
import style from "./home.module.css"

const Home = () => {
    return (
        <div className={style.main_block}>
            <h1>Приложение для отслеживания мошеннических банковских операций</h1>
            <FrodTable />
        </div>
    );
}

export default Home;