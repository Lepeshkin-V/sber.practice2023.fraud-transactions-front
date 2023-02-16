import FraudTableCell from "./FraudTableCell/fraudTableCell";
import { transactions } from "../../../common/data"

const FraudTableBody = () => {
    const renderTable = () => {
        return transactions.map((t) => {
            return <FraudTableCell key={t.id} transaction={t} />
        });
    }

    return (
        <tbody>
            {renderTable()}
        </tbody>
    );
}
export default FraudTableBody;