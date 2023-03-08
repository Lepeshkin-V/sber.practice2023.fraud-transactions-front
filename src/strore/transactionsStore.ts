import { TransactionType, SortConfigType } from './../common/types';
import { action, makeAutoObservable, runInAction } from "mobx";
import { columnsTable } from '../common/enums';
import { template_sortConfig } from '../common/templates';
import sub from 'date-fns/sub'
import moment from 'moment';

class TransactionsStore {
    transactionsList: TransactionType[];
    sortConfig: SortConfigType;
    transactionsLimit: number;
    pageLimit: number;
    loading: boolean;
    error: string | undefined;
    startTransaction: number;
    isFraud: number;
    url: string;
    totalData: number;
    startDate: string;
    endDate: string;

    constructor() {
        makeAutoObservable(this)
        this.transactionsList = [];
        this.sortConfig = template_sortConfig;
        this.transactionsLimit = 10;
        this.pageLimit = 1;
        this.loading = false;
        this.error = undefined;
        this.startTransaction = 1;
        this.isFraud = 0;
        this.url = '';
        this.totalData = 0;
        this.startDate = '';
        this.endDate = '';
    }

    @action setStartTransaction(startTransaction: number) {
        this.startTransaction = startTransaction
    }

    @action setLimitTransaction(transactionsLimit: number) {
        this.transactionsLimit = transactionsLimit;
    }

    @action setFraud(isFraud: number) {
        this.isFraud = isFraud;
    }

    @action getStartDate = async () => {
        try {
            this.loading = true;
            this.error = undefined;
            const response = await fetch(`http://127.0.0.1:5000/transaction/page?start=${1}&limit=${1}&order=${2}&direction=${1}`);
            const transactions = await response.json();
            runInAction(() => {
                const endDate = new Date(transactions.transactions[0].date);
                this.endDate = moment(endDate).format('YYYY-MM-DD HH:mm:ss')
                this.startDate = moment(sub(endDate, { days:8 })).format('YYYY-MM-DD HH:mm:ss')
                return {start: this.startDate, end: this.endDate}
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

    @action getTransactions = async (sortedField?: columnsTable) => {
        if (sortedField) {
            if (this.sortConfig.key === sortedField && this.sortConfig.direction === 0) {
                this.sortConfig.direction = 1;
            }
            else {
                if (this.sortConfig.key === sortedField && this.sortConfig.direction === 1) {
                    this.sortConfig.direction = 0;
                }
                else {
                    this.sortConfig.key = sortedField;
                    this.sortConfig.direction = 0;
                }
            }
        }
        if (!this.isFraud) {
            this.url = `http://127.0.0.1:5000/transaction/page?start=${this.startTransaction}&limit=${this.transactionsLimit}&order=${this.sortConfig.key}&direction=${this.sortConfig.direction}`;
        }
        else {
            this.url = `http://127.0.0.1:5000/frauds/page?start=${this.startTransaction}&limit=${this.transactionsLimit}`;
        }
        try {
            this.loading = true;
            this.error = undefined;
            const response = await fetch(this.url);
            const transactions = await response.json();
            runInAction(() => {
                this.transactionsList = transactions.transactions;
                this.pageLimit = transactions.totalPage;
                this.totalData = transactions.totalData;
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
        this.isFraud = 0;
        this.sortConfig = template_sortConfig;
        this.getTransactions()
    }
}

const store = new TransactionsStore();

export default store;
