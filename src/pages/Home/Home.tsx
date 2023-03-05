import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Clock from "../../components/Clock/clock";
import DropFilter from "../../components/Buttons/DropFilter/dropFilter";
import FrodFilter from "../../components/Buttons/FrodFilter/frodFilter";
import ModalWindow from "../../components/ModalWindow/modalWindow";
import Pagination from "../../components/Pagination/pagination";
import TransactionsTable from "../../components/TransactionsTable/transactionsTable"
import transactionsStore from "../../strore/transactionsStore";
import style from "./home.module.css"
import StatisticB from "../../components/Buttons/StatisticB/statisticB";

const Home = observer(() => {
    const { page } = useParams();
    if(page) {
        const startTransaction = (Number(page) - 1) * transactionsStore.transactionsLimit + 1
        transactionsStore.setStartTransaction(startTransaction);
    useEffect(() => {
            transactionsStore.getTransactions();
      }, [page]);
    }
    
    return (
        <div className={style.main_block}>
            <div className={style.buttons_block}>
                <Clock />
                <StatisticB />
                <FrodFilter />
                <DropFilter />
            </div>
            <TransactionsTable />
            < ModalWindow />
            <Pagination maxPages={transactionsStore.pageLimit} />
        </div>
    );
})

export default Home;