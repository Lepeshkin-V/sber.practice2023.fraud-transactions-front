import { TransactionType, SortConfigType } from './../common/types';
import { action, makeAutoObservable } from "mobx";
import { transactions } from '../common/data';
import { columnsTable } from '../common/enums';
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
        this.sortConfig = template_sortConfig;
    }

    @action frodOnly() {
        this.transactionsList = this.transactionsList.filter(t => t.frauds.length >= 3);

        if (this.sortConfig.key === 'frauds' && this.sortConfig.direction === true) {
            this.sortConfig.direction = false;
        }
        else {
            if (this.sortConfig.key === 'frauds' && this.sortConfig.direction === false) {
                this.sortConfig.direction = true;
            }
            else {
                this.sortConfig.key = 'frauds';
                this.sortConfig.direction = true;
            }
        }

        this.transactionsList.sort((a, b) => {
            if (a['frauds'].length && b['frauds'].length) {
                if (a['frauds'].length < b['frauds'].length) {
                    return this.sortConfig.direction === true ? 1 : -1;
                }
                if (a['frauds'].length > b['frauds'].length) {
                    return this.sortConfig.direction === true ? -1 : 1;
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

const store = new TransactionsStore();

export default store;
