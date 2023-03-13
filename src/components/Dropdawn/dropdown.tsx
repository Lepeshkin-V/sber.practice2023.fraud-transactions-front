import { useNavigate, useParams } from "react-router-dom";
import FraudFilter from "../Buttons/FraudFilter/fraudFilter";
import style from './dropdown.module.css';

const Dropdown = () => {
    const { limit } = useParams();
    const lim = Number(limit);
    const navigation = useNavigate();
    const paginationNavigate = (fraud: number, num: number, lim: number) => {
        navigation({
            pathname: `../fraud/${fraud}/limit/${lim}/page/${num}`
        });
    };
    return (
        <div className={style.dropdown_block}>
            <FraudFilter />
            <div className={style.dropdown_content}>
                <button onClick={() => paginationNavigate(2, 1, lim)}>1 уровень</button>
                <button onClick={() => paginationNavigate(3, 1, lim)}>2 уровень</button>
                <button onClick={() => paginationNavigate(4, 1, lim)}>3 уровень</button>
                <button onClick={() => paginationNavigate(5, 1, lim)}>Быстрая смена локаций</button>
                <button onClick={() => paginationNavigate(6, 1, lim)}>Высокая ночная активность</button>
                <button onClick={() => paginationNavigate(7, 1, lim)}>Просрочен паспорт</button>
                <button onClick={() => paginationNavigate(8, 1, lim)}>Большое количество транзакций</button>
                <button onClick={() => paginationNavigate(9, 1, lim)}>Большое количество отказов</button>
                <button onClick={() => paginationNavigate(10, 1, lim)}>Чрезмерная частота транзакций</button>
            </div>
        </div>
    )
}

export default Dropdown;