import { template_transaction } from './../common/templates';
import { makeAutoObservable } from "mobx";
import { TransactionType } from '../common/types';
import { columnsTable } from '../common/enums';

class modalWindowStore {
    visible: boolean = false;
    title: number = 0;
    content: TransactionType = template_transaction;
    note: columnsTable[] = [];

    constructor() {
        makeAutoObservable(this)
    }

    setVisible(isVisible: boolean) {
        this.visible = isVisible;
    }

    setTitle(title: number) {
        this.title = title;
    }

    setContent(content: TransactionType) {
        this.content = content;
    }

    addNote(columnsTable: columnsTable){
        this.note.push(columnsTable);
    }
}

const store = new modalWindowStore()

export default store;
