import { useNavigate, useParams } from 'react-router-dom';
import transactionsStore from '../../../strore/transactionsStore';
import styles from '../pagination.module.css';
const TransactionsLimit = () => {
    const { fraud, limit, page } = useParams();
    const fr = Number(fraud);
    const lim = Number(limit);
    const active = Number(page);
    const navigation = useNavigate();
    const paginationNavigate = (fraud: number, num: number, lim: number) => {
        if(Math.ceil(transactionsStore.totalData / lim) < num ){
            num = Math.ceil(transactionsStore.totalData / lim)
            transactionsStore.pageLimit = num;
        }
        navigation({
            pathname: `../fraud/${fraud}/limit/${lim}/page/${num}`
        });
    };
    return (
        <nav className={styles.limitT}>
            <ul className={styles.pagContainer}>
                <li key={10}><div className={lim === 10
                    ? `${styles.pagElem} ${styles.active}`
                    : styles.pagElem} onClick={() => paginationNavigate(fr, active, 10)}>10</div></li>
                <li key={25}><div className={lim === 25
                    ? `${styles.pagElem} ${styles.active}`
                    : styles.pagElem} onClick={() => paginationNavigate(fr, active, 25)}>25</div></li>
                <li key={50}><div className={lim === 50
                    ? `${styles.pagElem} ${styles.active}`
                    : styles.pagElem} onClick={() => paginationNavigate(fr, active, 50)}>50</div></li>
            </ul>
        </nav>
    )
}

export default TransactionsLimit;