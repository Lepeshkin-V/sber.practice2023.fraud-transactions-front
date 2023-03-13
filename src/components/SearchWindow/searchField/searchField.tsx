import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import style from './searchField.module.css';

const SearchField = () => {

    const [client, setClient] = useState('');
    const [search, setSearch] = useSearchParams();

    const Search = (cl: string) => {
        if(cl.length > 0)
        search.set("client", cl);
        setSearch(search);
    }
    return (
        <div className={style.field_block}>
            <div className={style.search_blocks}>
                <label className={style.labels}>id Клиента</label>
                <input type='search' onChange={(e) => setClient(e.target.value)}></input>
            </div>
            <div className={style.b_search}>
                <button onClick={() => Search(client)}>Найти</button>
            </div>
        </div>
    )
}

export default SearchField;