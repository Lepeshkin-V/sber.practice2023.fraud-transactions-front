import BackArrow from "../../components/Buttons/BackArrow/backArrow";
import transactionsStore from "../../strore/transactionsStore";
import style from "./statistic.module.css"
import Chart from "../../components/Chart/chart";

const Statistic = () => {
    const page = (transactionsStore.startTransaction - 1) / transactionsStore.transactionsLimit + 1;
    
    return (
        <div className={style.statistic_block}>
            <BackArrow page={page} />
            <Chart />
        </div>
    )
}

export default Statistic;