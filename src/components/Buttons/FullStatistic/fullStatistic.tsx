import { useState } from 'react';
import statisticStore from '../../../strore/statisticStore';
import StatisticWindow from '../../StatisticWindow/statisticWindow';
import style from '../buttons.module.css';


const FullStatistic = () => {
    const [isVisible, setModal] = useState(false);
    const onClose = () => setModal(false);
    const getFullStatistic = () => {
        setModal(true);
        statisticStore.getLevelStatistic();
    }
    return (
        <div>
            <button onClick={() => getFullStatistic() } className={style.buttons}>Общая статистика</button>
            <StatisticWindow visible = {isVisible} onClose = {onClose} />
        </div>
    )
}

export default FullStatistic;