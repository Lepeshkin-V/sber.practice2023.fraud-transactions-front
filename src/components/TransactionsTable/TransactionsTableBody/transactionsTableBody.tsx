import TransactionsTableCell from "./TransactionsTableCell/transactionsTableCell"
import transactionsStore from "../../../strore/transactionsStore"
import { observer } from "mobx-react-lite";
import style from "./transactionsTableBody.module.css"
import { TransactionType } from "../../../common/types";
import columnsTable from "../../../common/columns";

const TransactionsTableBody = observer(() => {
    const transactions = transactionsStore.transactionsList;

    const frodPatterns = (transaction: TransactionType) => {
        let countFrodPatterns = 0;
        const frauds: columnsTable[] = []
        if (transaction.date > transaction.passport_valid_to){
            countFrodPatterns += 1;
            frauds.push(columnsTable.passport_valid_to);
        }
        if (transaction.time_last_tr <= 30){
            countFrodPatterns += 1;
            frauds.push(columnsTable.time_last_tr);
        }
        if (transaction.count_reject_1_hour >= 3){
            countFrodPatterns += 1;
            frauds.push(columnsTable.count_reject_1_hour);
        }
        if (transaction.changing_the_city === 1 && transaction.time_last_tr < 1800){
            countFrodPatterns += 1;
            frauds.push(columnsTable.changing_the_city);
            frauds.push(columnsTable.time_last_tr);
        }
        if (transaction.count_tr_day >= 15 || transaction.count_tr_hour >= 7){
            countFrodPatterns += 1;
            frauds.push(columnsTable.count_tr_day);
            frauds.push(columnsTable.count_tr_hour);
        }
            
        return countFrodPatterns
    }
    
    const renderTable = () => {
        return transactions.map((t) => {
            t.count_patterns = frodPatterns(t);
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