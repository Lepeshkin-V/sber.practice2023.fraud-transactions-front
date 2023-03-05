import style from '../buttons.module.css'
import { GiHistogram } from 'react-icons/gi'
import { NavLink } from 'react-router-dom';

const StatisticB = () => {
    return (
        <NavLink to={"/statistic"}>
            <button className={style.buttons}>Статистика <GiHistogram /></button>
        </NavLink>
    )
}

export default StatisticB;