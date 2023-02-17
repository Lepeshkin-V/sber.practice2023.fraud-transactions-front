import { observer } from "mobx-react-lite";
import { ReactElement, useEffect } from "react";
import { TransactionType } from "../../common/types";
import modalWindowStore from "../../strore/modalWindowStore";
import style from "./modalWindow.module.css"

interface ModalWindowProps {
    visible: boolean,
    title: string,
    content: ReactElement|string,
    onClose: () => void
}

const ModalWindow = observer(() => {
    const onClose = () => {
        modalWindowStore.setVisible(false);
    }

    const onKeyDown = ({ key }: KeyboardEvent) => {
        switch (key) {
            case 'Escape':
              onClose();
              break;
          }
    }

    useEffect(() => {
        document.addEventListener('keydown', onKeyDown)
        return () => document.removeEventListener('keydown', onKeyDown)
      });

    if (!modalWindowStore.visible) return null;

    return (
        <div onClick={onClose} className = {style.outer_area}>
            <div onClick={(e) => e.stopPropagation()} className = {style.modal_window}>
                <div>
                    <h3>Клиент номер {modalWindowStore.title}</h3>
                </div>
                {modalWindowStore.content}
            </div>
        </div>
    );
})

export default ModalWindow;