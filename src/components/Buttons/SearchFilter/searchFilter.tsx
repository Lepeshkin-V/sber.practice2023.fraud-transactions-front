import { useState } from 'react';
import SearchWindow from '../../SearchWindow/searchWindow';
import style from '../buttons.module.css';
import {BsSearch} from 'react-icons/bs'

const SearchFilter = () => {
    const [isVisible, setModal] = useState(false);
    const onClose = () => setModal(false);
    return (
        <div>
            <button onClick={() => setModal(true)} className={style.buttons}>Поиск <BsSearch /></button>
            <SearchWindow visible = {isVisible} onClose = {onClose} />
        </div>
    )
}

export default SearchFilter;