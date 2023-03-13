import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import DropFilter from "../../components/Buttons/DropFilter/dropFilter";
import ModalWindow from "../../components/ModalWindow/modalWindow";
import Pagination from "../../components/Pagination/pagination";
import TransactionsTable from "../../components/TransactionsTable/transactionsTable"
import transactionsStore from "../../strore/transactionsStore";
import style from "./home.module.css"
import StatisticB from "../../components/Buttons/StatisticB/statisticB";
import TransactionsLimit from "../../components/Pagination/transactionsLimit/transactionsLimit";
import Loader from "../../components/Loader/loader";
import Dropdown from "../../components/Dropdawn/dropdown";
import statisticStore from "../../strore/statisticStore";
import SearchFilter from "../../components/Buttons/SearchFilter/searchFilter";
import queryString from 'query-string'
import DownloadCsv from "../../components/Buttons/DownloadCsv/downloadCsv";
import ChangeScores from "../../components/Buttons/ChangeScores/changeSrores";

const Home = observer(() => {
    const { fraud, limit, page } = useParams();
    const { search } = useLocation();
    const client = queryString.parse(search).client;
    if (page) {
        useEffect(() => {
            if (transactionsStore.transactionsLimit !== Number(limit)) {
                transactionsStore.setLimitTransaction(Number(limit));
            }
            const startTransaction = (Number(page) - 1) * transactionsStore.transactionsLimit;
            transactionsStore.setStartTransaction(startTransaction);
            transactionsStore.setFraud((Number(fraud)));
            if (statisticStore.isStatistic === true) {
                statisticStore.setStatistic(false);
            }
            if (client) {
                transactionsStore.setClient(String(client));
                transactionsStore.searchFilters();
            }
            else { transactionsStore.getTransactions(); }

        }, [fraud, limit, page, client]);
    }
    if (transactionsStore.loading === true) {
        return <Loader />
    }

    const ButtonsBlock = () => {
        return (
            <div className={style.buttons_block}>
                <ChangeScores />
                <DownloadCsv />
                <SearchFilter />
                <StatisticB />
                <Dropdown />
                <DropFilter />
            </div>
        );
    }

    const EmptyTransactionsOrNo = () => {
        if (transactionsStore.transactionsList.length === 0) {
            return (
                <div className={style.main_block}>
                    <ButtonsBlock />
                    <h1 className={style.no_transactions}>Записи не найдены</h1>
                    < ModalWindow />
                </div>

            );
        }
        else {
            if (transactionsStore.client.length > 0) {
                return (
                    <div className={style.main_block}>
                        <ButtonsBlock />
                        <TransactionsTable />
                        < ModalWindow />
                    </div>
                );
            }
            else {
                return (
                    <div className={style.main_block}>
                        <ButtonsBlock />
                        <TransactionsTable />
                        < ModalWindow />
                        <div className={style.pagination}>
                            <TransactionsLimit />
                            <Pagination maxPages={transactionsStore.pageLimit} />
                        </div>
                    </div>
                );
            }

        }
    }

    return (
        <EmptyTransactionsOrNo />
    );
})
export default Home;