import style from '../buttons.module.css'
import {BsSearch} from 'react-icons/bs'
import { useNavigate, useParams } from 'react-router-dom';

const FrodFilter = () => {
    const { limit} = useParams();
    const lim = Number(limit);
    const navigation = useNavigate();
    const paginationNavigate = (fraud: number, num: number, lim: number) => {
        navigation({
            pathname: `../fraud/${fraud}/limit/${lim}/page/${num}`
        });
};
    return (
        <button onClick={() =>{paginationNavigate(1, 1, lim)}} className={style.buttons}>Только подозрительные <BsSearch /></button>
    )
}

export default FrodFilter;
