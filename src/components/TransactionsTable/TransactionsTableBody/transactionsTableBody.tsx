import TransactionsTableCell from "./TransactionsTableCell/transactionsTableCell"
import ModalWindow from "../../ModalWindow/modalWindow";
import transactionsStore from "../../../strore/transactionsStore"
import { observer } from "mobx-react-lite";
import style from "./transactionsTableBody.module.css"
import { useState } from "react";

const TransactionsTableBody = observer(() => {
    const transactions = transactionsStore.transactionsList;
    

    let sortedProducts = [...transactions];
    

    const renderTable = () => {
        return sortedProducts.map((t) => {
            return <TransactionsTableCell key={t.id} transaction={t}/>      
        });
    }

    return (
        <tbody className={style.table_body}>
            {renderTable()}
            < ModalWindow />
        </tbody>
    );
})
export default TransactionsTableBody;