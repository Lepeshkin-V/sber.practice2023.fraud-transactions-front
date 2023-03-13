import style from '../buttons.module.css'
import { RxHamburgerMenu } from 'react-icons/rx'
import { useNavigate, useParams } from 'react-router-dom';

const FraudFilter = () => {
    const { limit} = useParams();
    const lim = Number(limit);
    const navigation = useNavigate();
    const paginationNavigate = (fraud: number, num: number, lim: number) => {
        navigation({
            pathname: `../fraud/${fraud}/limit/${lim}/page/${num}`
        });
};
    return (
        <button onClick={() =>{paginationNavigate(1, 1, lim)}} className={style.buttons}>Только подозрительные <RxHamburgerMenu /></button>
    )
}

export default FraudFilter;
