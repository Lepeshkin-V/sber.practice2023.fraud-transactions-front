import Table from 'react-bootstrap/Table';
import FraudTableHeader from './FraudTableHeader/frodTableHeader';
import FraudTableBody from './FrodTableBody/fraudTableBody';

const FraudTable = () => {
    return (
        <Table striped bordered hover>
            <FraudTableHeader />
            <FraudTableBody />
        </Table>
    );
}

export default FraudTable;