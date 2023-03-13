import { TransactionType, SortConfigType } from './../common/types';
import { flow, makeAutoObservable } from "mobx";
import { columnsTable } from '../common/enums';
import { template_sortConfig } from '../common/templates';

class TransactionsStore {

    transactionsList: TransactionType[] = [];
    sortConfig: SortConfigType = template_sortConfig;
    transactionsLimit: number = 10;
    pageLimit: number = 1;
    loading: boolean = false;
    error: string | undefined = undefined;
    startTransaction: number = 0;
    isFraud: number = 0;
    url: string = '';
    totalData: number = 0;
    startDate: string = '';
    endDate: string = '';
    client: string = '';

    constructor() {
        makeAutoObservable(this)
    }

    setClient(client: string) {
        this.client = client;
    }

    setStartTransaction(startTransaction: number) {
        this.startTransaction = startTransaction
    }

    setLimitTransaction(transactionsLimit: number) {
        this.transactionsLimit = transactionsLimit;
    }

    setFraud(isFraud: number) {
        this.isFraud = isFraud;
    }

    setPageLimit(pageLimit: number) {
        this.pageLimit = pageLimit;
    }

    getTransactions = flow(function* (this: TransactionsStore, sortedField?: columnsTable) {
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
        if (this.isFraud > 0 && this.isFraud < 5) {
            this.url = `http://127.0.0.1:5000/frauds/page?start=${this.startTransaction}&limit=${this.transactionsLimit}&types=${this.isFraud - 1}`;
        }
        if (this.isFraud >= 5) {
            this.url = `http://127.0.0.1:5000/frauds/types?start=${this.startTransaction}&limit=${this.transactionsLimit}&fraud_id=${this.isFraud - 4}`
        }
        try {
            this.loading = true;
            this.error = undefined;
            const response = yield fetch(this.url);
            const transactions = yield response.json();
            this.transactionsList = transactions.transactions;
            this.pageLimit = transactions.totalPage;
            this.totalData = transactions.totalData;
        } catch (error) {
            if (typeof error === 'string') this.error = error;
        } finally {
            this.loading = false;
        }
    })

    searchFilters = flow(function* (this: TransactionsStore) {
        try {
            this.loading = true;
            this.error = undefined;
            const response = yield fetch(`http://127.0.0.1:5000/search?clied_id=${this.client}`);
            const transactions = yield response.json();
            this.transactionsList = transactions;
        } catch (error) {
            if (typeof error === 'string') this.error = error;
        } finally {
            this.loading = false;
        }
    })

    downloadCsv = () => {
        try {
            this.loading = true;
            this.error = undefined;
            const link = document.createElement('a');
            link.href = `http://127.0.0.1:5000/transactions/csv`;
            document.body.appendChild(link);
            link.click();
            if (link.parentNode)
                link.parentNode.removeChild(link);
        } catch (error) {
            if (typeof error === 'string') this.error = error;
        } finally {
            this.loading = false;
        }
    }

    dropFilters() {
        this.client = '';
        this.isFraud = 0;
        this.sortConfig = template_sortConfig;
        this.getTransactions()
    }
}

const store = new TransactionsStore();

export default store;
