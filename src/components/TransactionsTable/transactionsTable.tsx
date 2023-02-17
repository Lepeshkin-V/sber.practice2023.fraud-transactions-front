import Table from 'react-bootstrap/Table';
import TransactionsTableHeader from './TransactionsTableHeader/transactionsTableHeader';
import TransactionsTableBody from './TransactionsTableBody/transactionsTableBody';

const TransactionsTable = () => {
    return (
        <Table striped bordered hover>
            <TransactionsTableHeader />
            <TransactionsTableBody />
        </Table>
    );
}

export default TransactionsTable;