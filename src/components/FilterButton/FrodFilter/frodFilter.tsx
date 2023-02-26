import style from './frodFilter.module.css'
import {BsSearch} from 'react-icons/bs'
import transactionsStore from '../../../strore/transactionsStore'

const FrodFilter = () => {
    return (
        <button onClick={() =>transactionsStore.frodOnly()} className={style.frodButton}>Только подозрительные <BsSearch /></button>
    )
}

export default FrodFilter;
