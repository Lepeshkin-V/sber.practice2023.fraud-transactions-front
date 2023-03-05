import transactionsStore from "../../../strore/transactionsStore";
import style from '../buttons.module.css'
import { BiReset } from 'react-icons/bi'

const DropFilter = () => {
    return (
        <button onClick={() => transactionsStore.dropFilters()} className={style.buttons}>Сброс <BiReset style={{fontSize:20}}/></button>
    );
}

export default DropFilter;