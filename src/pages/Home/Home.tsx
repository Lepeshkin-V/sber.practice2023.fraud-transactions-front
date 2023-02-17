import TransactionsTable from "../../components/TransactionsTable/transactionsTable"
import style from "./home.module.css"

const Home = () => {
    return (
        <div className={style.main_block}>
            <h1>Приложение для отслеживания мошеннических банковских операций</h1>
            <TransactionsTable />
            
        </div>
    );
}

export default Home;