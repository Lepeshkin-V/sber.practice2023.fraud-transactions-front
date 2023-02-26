import { template_transaction } from './../common/templates';
import { action, makeAutoObservable } from "mobx";
import { TransactionType } from '../common/types';
import { columnsTable } from '../common/enums';

class modalWindowStore {
    visible: boolean ;
    title: number;
    content: TransactionType;
    note: columnsTable[];

    constructor() {
        makeAutoObservable(this)
        this.visible = false;
        this.title = 0;
        this.content = template_transaction;
        this.note = [];
    }

    @action setVisible(isVisible: boolean) {
        this.visible = isVisible;
    }

    @action setTitle(title: number) {
        this.title = title;
    }

    @action setContent(content: TransactionType) {
        this.content = content;
    }

    @action addNote(columnsTable: columnsTable){
        this.note.push(columnsTable);
    }
}

const store = new modalWindowStore()

export default store;
