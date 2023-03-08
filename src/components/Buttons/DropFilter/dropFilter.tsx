import style from '../buttons.module.css'
import { BiReset } from 'react-icons/bi'
import { useNavigate, useParams } from "react-router-dom";
import transactionsStore from '../../../strore/transactionsStore';

const DropFilter = () => {
    const { limit, page } = useParams();
    const lim = Number(limit);
    const active = Number(page);
    const navigation = useNavigate();
    const paginationNavigate = (fraud: number, num: number, lim: number) => {
        navigation({
            pathname: `../fraud/${fraud}/limit/${lim}/page/${num}`
        });
        transactionsStore.dropFilters();
};
    return (
        <button onClick={() => paginationNavigate(0, active, lim)} className={style.buttons}>Сброс <BiReset style={{fontSize:20}}/></button>
    );
}

export default DropFilter;
