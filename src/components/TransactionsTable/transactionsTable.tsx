import Table from 'react-bootstrap/Table';
import TransactionsTableHeader from './TransactionsTableHeader/transactionsTableHeader';
import TransactionsTableBody from './TransactionsTableBody/transactionsTableBody';
import style from './transactionsTable.module.css'

const TransactionsTable = () => {
    return (
        <Table striped bordered hover className={style.table}>
            <TransactionsTableHeader />
            <TransactionsTableBody />
        </Table>
    );
}

export default TransactionsTable;