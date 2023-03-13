import queryString from 'query-string';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import transactionsStore from '../../../strore/transactionsStore';
import ChangeScoresWindow from '../../ChangeScoresWindow/changeScoresWindow';
import style from '../buttons.module.css'

const ChangeScores = () => {
    const [isVisible, setModal] = useState(false);
    const { search } = useLocation();
    const client = queryString.parse(search).client;
    const onClose = () => {
        setModal(false);
        if (client) {
            transactionsStore.setClient(String(client));
            transactionsStore.searchFilters();
        }
        else { transactionsStore.getTransactions(); }
    }

    return (
        <div>
            <button onClick={() => setModal(true)} className={style.buttons}>Изменение весов</button>
            <ChangeScoresWindow visible={isVisible} onClose={onClose} />
        </div>
    );
}

export default ChangeScores;