import TransactionsTableCell from "./TransactionsTableCell/transactionsTableCell"
import ModalWindow from "../../ModalWindow/modalWindow";
import transactionsStore from "../../../strore/transactionsStore"
import { observer } from "mobx-react-lite";

const TransactionsTableBody = observer(() => {
    const renderTable = () => {
        return transactionsStore.transactionsList.map((t) => {
            return <TransactionsTableCell key={t.id} transaction={t}/>      
        });
    }

    return (
        <tbody>
            {renderTable()}
            < ModalWindow />
        </tbody>
    );
})
export default TransactionsTableBody;