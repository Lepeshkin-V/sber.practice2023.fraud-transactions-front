import Clock from "../../components/Clock/clock";
import DropFilter from "../../components/FilterButton/DropFilter/dropFilter";
import FrodFilter from "../../components/FilterButton/FrodFilter/frodFilter";
import ModalWindow from "../../components/ModalWindow/modalWindow";
import TransactionsTable from "../../components/TransactionsTable/transactionsTable"
import style from "./home.module.css"

const Home = () => {
    return (
        <div className={style.main_block}>
            <div className={style.buttons_block}>
                <FrodFilter />
                <Clock />
                <DropFilter />
            </div>
            <TransactionsTable />
            < ModalWindow />
        </div>
    );
}

export default Home;