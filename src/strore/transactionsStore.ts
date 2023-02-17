import { TransactionType } from './../common/types';
import { computed, makeAutoObservable, observable } from "mobx";
import { transactions } from '../common/data';

class TransactionsStore {
    transactionsList: TransactionType[] = transactions;

    constructor() {
        makeAutoObservable(this)
    }


}

export default new TransactionsStore()