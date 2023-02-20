import { TransactionType, SortConfigType } from './../common/types';
import { action, computed, makeAutoObservable, observable } from "mobx";
import { transactions } from '../common/data';
import columnsTable from '../common/columns';
import { sortConfig } from '../common/templates';

class TransactionsStore {
    transactionsList: TransactionType[];
    sortConfig: SortConfigType;

    constructor() {
        makeAutoObservable(this)
        this.transactionsList = transactions;
        this.sortConfig = sortConfig
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

        console.log(this.sortConfig.key);
        console.log(this.sortConfig.direction);

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