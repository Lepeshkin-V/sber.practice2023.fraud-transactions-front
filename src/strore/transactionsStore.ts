import { TransactionType, SortConfigType } from './../common/types';
import { action, makeAutoObservable, runInAction } from "mobx";
import { columnsTable } from '../common/enums';
import { template_sortConfig } from '../common/templates';

class TransactionsStore {
    transactionsList: TransactionType[];
    sortConfig: SortConfigType;
    transactionsLimit: number;
    pageLimit: number;
    loading: boolean;
    error: string | undefined;
    startTransaction: number;

    constructor() {
        makeAutoObservable(this)
        this.transactionsList = [];
        this.sortConfig = template_sortConfig;
        this.transactionsLimit = 10;
        this.pageLimit = 1;
        this.loading = false;
        this.error = undefined;
        this.startTransaction = 1;
    }

    @action setStartTransaction(startTransaction: number) {
        this.startTransaction = startTransaction
    }

    @action getTransactions = async () => {
        try {
            this.loading = true;
            this.error = undefined;
            const response = await fetch(`http://127.0.0.1:5000/transaction/page?start=${this.startTransaction}&limit=${this.transactionsLimit}&order=${0}`);
            const transactions = await response.json();
            runInAction(() => {
                this.transactionsList = transactions.transactions;
                this.pageLimit = transactions.totalPage;
            });
        } catch (error) {
            runInAction(() => {
                if (typeof error === 'string') this.error = error;
            });
        } finally {
            runInAction(() => {
                this.loading = false;
            });
        }
    }

    @action dropFilters() {
        this.getTransactions()
        this.sortConfig = template_sortConfig;
    }

    @action frodOnly() {
        this.transactionsList = this.transactionsList.filter(t => t.fraud.length >= 3);

        if (this.sortConfig.key === 15 && this.sortConfig.direction === true) {
            this.sortConfig.direction = false;
        }
        else {
            if (this.sortConfig.key === 15 && this.sortConfig.direction === false) {
                this.sortConfig.direction = true;
            }
            else {
                this.sortConfig.key = 15;
                this.sortConfig.direction = true;
            }
        }

        this.transactionsList.sort((a, b) => {
            if (a['fraud'].length && b['fraud'].length) {
                if (a['fraud'].length < b['fraud'].length) {
                    return this.sortConfig.direction === true ? 1 : -1;
                }
                if (a['fraud'].length > b['fraud'].length) {
                    return this.sortConfig.direction === true ? -1 : 1;
                }
            }
            return 0;
        });
    }

    @action sortTransactions = async (sortedField: columnsTable) => {
        try {
            this.loading = true;
            this.error = undefined;
            const response = await fetch(`http://127.0.0.1:5000/transaction/page?start=${this.startTransaction}&limit=${this.transactionsLimit}`);

            const transactions = await response.json();
            runInAction(() => {
                this.transactionsList = transactions.transactions;
                this.sortConfig.key = sortedField
                this.pageLimit = transactions.totalPage;
            });
        } catch (error) {
            runInAction(() => {
                if (typeof error === 'string') this.error = error;
            });
        } finally {
            runInAction(() => {
                this.loading = false;
            });
        }
    }
}

const store = new TransactionsStore();

export default store;
