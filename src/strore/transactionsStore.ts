import { TransactionType, SortConfigType } from './../common/types';
import { action, makeAutoObservable } from "mobx";
import { transactions } from '../common/data';
import columnsTable from '../common/columns';
import { template_sortConfig } from '../common/templates';

class TransactionsStore {
    transactionsList: TransactionType[];
    sortConfig: SortConfigType;

    constructor() {
        makeAutoObservable(this)
        this.transactionsList = transactions;
        this.sortConfig = template_sortConfig;
    }

    @action dropFilters() {
        this.transactionsList = transactions;
    }

    @action frodOnly() {
        this.transactionsList = this.transactionsList.filter(t => (t.count_patterns ? t.count_patterns : 0) >= 3);

        this.transactionsList.sort((a, b) => {
            if (a['count_patterns'] && b['count_patterns']) {
                if (a['count_patterns'] < b['count_patterns']) {
                    return 1;
                }
                if (a['count_patterns'] > b['count_patterns']) {
                    return -1;
                }
            }
            return 0;
        });
    }

    @action sortTransaction(sortedField: columnsTable) {

        if (this.sortConfig.key === sortedField && this.sortConfig.direction === true) {
            this.sortConfig.direction = false;
        }
        else {
            if (this.sortConfig.key === sortedField && this.sortConfig.direction === false) {
                this.sortConfig.direction = true;
            }
            else {
                this.sortConfig.key = sortedField;
                this.sortConfig.direction = true;
            }
        }
        this.transactionsList.sort((a, b) => {
            if (a[sortedField] < b[sortedField]) {
                return this.sortConfig.direction === true ? -1 : 1;
            }
            if (a[sortedField] > b[sortedField]) {
                return this.sortConfig.direction === true ? 1 : -1;
            }
            return 0;
        });
    }
}

export default new TransactionsStore()