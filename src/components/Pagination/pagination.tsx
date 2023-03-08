import {
    useNavigate,
    useParams} from "react-router-dom";
import styles from './pagination.module.css';

interface PaginationProps {
    maxPages: number;
}

const Pagination = ({ maxPages }: PaginationProps) => {
    const { fraud, limit, page } = useParams();
    const fr = Number(fraud);
    const lim = Number(limit);
    const active = Number(page);
    const pagesToShow = 7;
    const navigation = useNavigate();

    if (maxPages === 1 || maxPages === 0) {
        return <div />;
    }

    const paginationNavigate = (fraud: number, num: number, lim: number) => {
            navigation({
                pathname: `../fraud/${fraud}/limit/${lim}/page/${num}`
            });
    };

    const arrayMaker = () => {
        if (maxPages <= pagesToShow) {
            return [...Array(maxPages).keys()].map((e) => e + 1);
        }
        if (active <= (pagesToShow - (pagesToShow % 2)) / 2) {
            return [...Array(pagesToShow).keys()].map((e) => e + 1);
        }
        if (active > maxPages - pagesToShow / 2) {
            return [...Array(pagesToShow).keys()].map(
                (e) => maxPages - (pagesToShow - e - 1)
            );
        }
        return [...Array(pagesToShow).keys()].map(
            (e) => e - (pagesToShow - (pagesToShow % 2)) / 2 + active
        );
    };

    const pages = arrayMaker();

    return (
        <nav className={styles.pag}>
            <ul className={styles.pagContainer}>
                {active !== 1 ? (
                    <li>
                        <div className={styles.pagElem} onClick={() => paginationNavigate(fr, 1, lim)}>
                            {'<<'}
                        </div>
                    </li>
                ) : null}
                {pages.map((elem) => (
                    <li key={elem}>
                        <div className={elem === active
                            ? `${styles.pagElem} ${styles.active}`
                            : styles.pagElem} onClick={() => paginationNavigate(fr, elem, lim)}>
                            {elem}
                        </div>
                    </li>
                ))}
                {active !== maxPages ? (
                    <li>
                        <div className={styles.pagElem} onClick={() => paginationNavigate(fr, maxPages, lim)}>
                            {'>>'}
                        </div>
                    </li>
                ) : null}
            </ul>
        </nav>
    )
}

export default Pagination;