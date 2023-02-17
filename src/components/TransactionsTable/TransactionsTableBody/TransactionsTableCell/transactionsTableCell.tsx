import { observer } from "mobx-react-lite";
import { TransactionType } from "../../../../common/types";
import modalWindowStore from "../../../../strore/modalWindowStore";
import style from "./transactionsTableCell.module.css"
interface TransactionsTableCellProps {
    transaction: TransactionType,
}

const TransactionsTableCell = (props: TransactionsTableCellProps) => {
    
    const onOpen = () => {
        modalWindowStore.setVisible(true);
        modalWindowStore.setTitle(props.transaction.client)
    }
    return (
            <tr onClick={onOpen}>
                <td className={style.q}>{props.transaction.id}</td>
                <td>{props.transaction.date}</td>
                <td>{props.transaction.account}</td>
                <td>{props.transaction.client}</td>
                <td>{props.transaction.oper_type}</td>
                <td>{props.transaction.amount}</td>
                <td>{props.transaction.oper_result}</td>
                <td>{props.transaction.address}</td>
            </tr>
    );
}
export default TransactionsTableCell;