import { TransactionType } from "../../../../common/types";
import modalWindowStore from "../../../../strore/modalWindowStore";
import style from "./transactionsTableCell.module.css"
interface TransactionsTableCellProps {
    transaction: TransactionType,
}

const TransactionsTableCell = (props: TransactionsTableCellProps) => {

    const onOpen = () => {
        modalWindowStore.setVisible(true);
        modalWindowStore.setTitle(props.transaction.id)
        modalWindowStore.setContent(props.transaction)
    }

    /*const frodPatterns = () => {
        let countfrodPatterns = 0;
        if (props.transaction.date > props.transaction.passport_valid_to)
            countfrodPatterns += 1;
        if (props.transaction.time_last_tr <= 30)
            countfrodPatterns += 1;
        if (props.transaction.count_reject_1_hour >= 3)
            countfrodPatterns += 1;
        if (props.transaction.changing_the_city === 1 && props.transaction.time_last_tr < 1800)
            countfrodPatterns += 1;
        if (props.transaction.count_tr_day >= 15 || props.transaction.count_tr_hour >= 7)
            countfrodPatterns += 1;
    }*/

    const frodDesignate = (countFrod?: number) => {
        switch (countFrod) {
            case 3:
                return style.frod3
            case 4:
                return style.frod4
            case 5:
                return style.frod5
            default:
                return ""
        }
    }
    return (
        <tr onClick={onOpen} className={frodDesignate(props.transaction.count_patterns)}>
            <td>{props.transaction.id}</td>
            <td>{new Date(props.transaction.date).toLocaleString()}</td>
            <td>{props.transaction.account}</td>
            <td>{props.transaction.client}</td>
            <td>{new Date(props.transaction.passport_valid_to).toLocaleDateString()}</td>
            <td>{props.transaction.phone}</td>
            <td>{props.transaction.oper_type}</td>
            <td>{props.transaction.amount}</td>
            <td>{props.transaction.oper_result}</td>
            <td>{props.transaction.terminal_type}</td>
            <td>{props.transaction.city}</td>
            <td>{props.transaction.age}</td>
            <td>{props.transaction.count_tr_day}</td>
            <td>{props.transaction.count_tr_hour}</td>
            <td>{props.transaction.count_reject_1_hour}</td>
            <td>{props.transaction.time_last_tr}</td>
            <td>{props.transaction.changing_the_city}</td>
        </tr>
    );
}
export default TransactionsTableCell;