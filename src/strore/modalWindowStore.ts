import { action, computed, makeAutoObservable, observable } from "mobx";
import { ReactElement } from "react";

class modalWindowStore {
    visible: boolean = false;
    title: string = '';
    content: ReactElement|string = '';

    constructor() {
        makeAutoObservable(this)
    }

    @action setVisible(isVisible: boolean) {
        this.visible = isVisible;
        console.log(this.visible);
    }

    @action setTitle(title: string) {
        this.title = title;
        console.log(this.title)
    }

    @action setContent(content: ReactElement|string) {
        this.content = content;
        console.log(this.content)
    }
}

export default new modalWindowStore();