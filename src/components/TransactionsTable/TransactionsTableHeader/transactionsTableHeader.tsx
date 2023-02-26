import { observer } from "mobx-react-lite";
import { columnsTable } from "../../../common/enums";
import transactionsStore from "../../../strore/transactionsStore";
import style from "./transactionsTableHeader.module.css";

const TransactionsTableHeader = observer(() => {

    const direction = (columnName: columnsTable, name: string) => {
        if (columnName !== transactionsStore.sortConfig.key) {
            return <th onClick={() => transactionsStore.sortTransaction(columnName)}>{name}</th>
        } else {
            if (columnName === transactionsStore.sortConfig.key && transactionsStore.sortConfig.direction === true) {
                return <th onClick={() => transactionsStore.sortTransaction(columnName)}>{name} ↓</th>
            }
            else {
                if (columnName === transactionsStore.sortConfig.key && transactionsStore.sortConfig.direction === false) {
                    return <th onClick={() => transactionsStore.sortTransaction(columnName)}>{name} ↑</th>
                }
            }
        }

    }

    return (
        <thead className={style.table_title}>
            <tr>
                {direction(columnsTable.id, 'id')}
                {direction(columnsTable.date, 'Date')}
                {direction(columnsTable.account, 'Account')}
                {direction(columnsTable.client, 'Client')}
                {direction(columnsTable.passport_valid_to, 'Passport valid to')}
                {direction(columnsTable.phone, 'Phone')}
                {direction(columnsTable.oper_type, 'Type')}
                {direction(columnsTable.amount, 'Amount')}
                {direction(columnsTable.oper_result, 'Result')}
                {direction(columnsTable.city, 'City')}
                {direction(columnsTable.count_tr_day, 'Count by day')}
                {direction(columnsTable.count_tr_hour, 'Count by hour')}
                {direction(columnsTable.count_reject_1_hour, 'Count reject 1 hour')}
                {direction(columnsTable.time_last_tr, 'Time last')}
            </tr>
        </thead>
    );
})

export default TransactionsTableHeader;