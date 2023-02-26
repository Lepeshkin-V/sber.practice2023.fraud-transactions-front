import TransactionsTableCell from "./TransactionsTableCell/transactionsTableCell"
import transactionsStore from "../../../strore/transactionsStore"
import { observer } from "mobx-react-lite";
import style from "./transactionsTableBody.module.css"

const TransactionsTableBody = observer(() => {
    const transactions = transactionsStore.transactionsList;
    
    const renderTable = () => {
        return transactions.map((t) => {
            return <TransactionsTableCell key={t.id} transaction={t}/>      
        });
    }

    return (
        <tbody className={style.table_body}>
            {renderTable()}
        </tbody>
    );
})
export default TransactionsTableBody;