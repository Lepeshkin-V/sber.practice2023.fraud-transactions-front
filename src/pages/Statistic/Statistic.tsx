import BackArrow from "../../components/Buttons/BackArrow/backArrow";
import transactionsStore from "../../strore/transactionsStore";
import style from "./statistic.module.css"
import ChartStat from "../../components/Charts/chartStat";
import ChartFraud from "../../components/Charts/chartFraud";
import { useEffect } from "react";
import statisticStore from "../../strore/statisticStore";
import { observer } from "mobx-react-lite";
import Loader from "../../components/Loader/loader";
import FullStatistic from "../../components/Buttons/FullStatistic/fullStatistic";

const Statistic = observer(() => {
    const page = transactionsStore.startTransaction / transactionsStore.transactionsLimit + 1;

    useEffect(() => {
        if (statisticStore.isStatistic === false) {
            statisticStore.setStatistic(true);
        }
        statisticStore.getStatistic();
    }, []);
    if (statisticStore.loading === true) {
        return <Loader />;
    }
    return (
        <div className={style.statistic_block}>
            <div className={style.buttons_bar}>
                <BackArrow page={page} limit={transactionsStore.transactionsLimit} isFraud={transactionsStore.isFraud} />
                <FullStatistic />
            </div>
            <ChartStat />
            <ChartFraud />
        </div>
    )
});

export default Statistic;