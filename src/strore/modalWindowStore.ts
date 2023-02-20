import { template_transaction } from './../common/templates';
import { UserType } from './../common/types';
import { transactions } from './../common/data';
import { action, computed, makeAutoObservable, observable } from "mobx";
import { ReactElement } from "react";
import { TransactionType } from '../common/types';

class modalWindowStore {
    visible: boolean ;
    title: string = '';
    content: TransactionType;

    constructor() {
        makeAutoObservable(this)
        this.visible = false;
        this.title = '';
        this.content = template_transaction;  
    }

    @action setVisible(isVisible: boolean) {
        this.visible = isVisible;
    }

    @action setTitle(title: string) {
        this.title = title;
    }

    @action setContent(content: TransactionType) {
        this.content = content;
    }
}

export default new modalWindowStore();