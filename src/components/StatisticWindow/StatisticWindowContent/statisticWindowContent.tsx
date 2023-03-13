import { observer } from "mobx-react-lite";
import statisticStore from "../../../strore/statisticStore";

const StatisticWindowContent = observer(() => {
    return (
        <div>
            <p>Общее количество транзакций: {statisticStore.totalData}</p>
            <p>Общее количество fraud: {statisticStore.allFraud}</p>
            <p>1 уровень: {statisticStore.level1}</p>
            <p>2 уровень: {statisticStore.level2}</p>
            <p>3 уровень: {statisticStore.level3}</p>
            <p>Быстрая смена локаций: {statisticStore.fastChangeLoc}</p>
            <p>Высокая ночная активность: {statisticStore.nightActivity}</p>
            <p>Просрочен паспорт: {statisticStore.errPass}</p>
            <p>Большое количество транзакций: {statisticStore.manyTransactions}</p>
            <p>Большое количество отказов: {statisticStore.manyRejects}</p>
            <p>Чрезмерная частота транзакций: {statisticStore.fastTransactions}</p>
        </div>
    );
})

export default StatisticWindowContent;