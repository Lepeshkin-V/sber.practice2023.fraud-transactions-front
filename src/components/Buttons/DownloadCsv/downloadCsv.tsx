import style from '../buttons.module.css'
import { FaFileCsv } from 'react-icons/fa'
import transactionsStore from '../../../strore/transactionsStore';
const DownloadCsv = () => {
    return (
        <button onClick={() => transactionsStore.downloadCsv()} className={style.buttons}>Загрузка<FaFileCsv style={{ fontSize: 20, color: '#8E8D8A' }} /></button>
    );
}

export default DownloadCsv;