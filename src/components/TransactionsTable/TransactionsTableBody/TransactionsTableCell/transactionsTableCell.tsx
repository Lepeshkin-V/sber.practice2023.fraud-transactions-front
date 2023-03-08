import { FraudType, TransactionType } from "../../../../common/types";
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

    const frodDesignate = (fraud: FraudType[]) => {
        let sumFraud = 0;
        fraud.forEach(f => {
            sumFraud += f.scores;
        })
        if(sumFraud >= 0.6 && sumFraud <0.9){
            return style.fraud4
        }
        if(sumFraud >= 0.9 && sumFraud <1.5){
            return style.fraud5
        }
        if(sumFraud >= 1.5){
            return style.fraud6
        }
        return ""
    }
    
    return (
        <tr onClick={onOpen} className={frodDesignate(props.transaction.fraud)}>
            <td>{props.transaction.id}</td>
            <td>{new Date(props.transaction.date).toLocaleString()}</td>
            <td>{props.transaction.account}</td>
            <td>{props.transaction.client}</td>
            <td>{new Date(props.transaction.passport_valid_to).toLocaleDateString()}</td>
            <td>{props.transaction.phone}</td>
            <td>{props.transaction.oper_type}</td>
            <td>{props.transaction.amount}</td>
            <td>{props.transaction.oper_result}</td>
            <td>{props.transaction.city}</td>
            <td>{props.transaction.count_tr_day}</td>
            <td>{props.transaction.count_tr_hour}</td>
            <td>{props.transaction.count_reject_1_hour}</td>
            <td>{props.transaction.time_last_tr}</td>
        </tr>
    );
}
export default TransactionsTableCell;