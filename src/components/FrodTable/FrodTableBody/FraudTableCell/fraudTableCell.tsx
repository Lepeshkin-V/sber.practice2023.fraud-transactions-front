import { TransactionType } from "../../../../common/types";
import { NavLink } from "react-router-dom";

interface FraudTableCellProps {
    transaction: TransactionType;
}

const FraudTableCell = (props: FraudTableCellProps) => {
    return (
            <tr>
                <td>{props.transaction.id}</td>
                <td>{props.transaction.date}</td>
                <td>{props.transaction.account}</td>
                <td>{props.transaction.client}</td>
                <td>{props.transaction.oper_type}</td>
                <td>{props.transaction.amount}</td>
                <td>{props.transaction.oper_result}</td>
                <td>{props.transaction.address}</td>
            </tr>
    );

};
export default FraudTableCell;