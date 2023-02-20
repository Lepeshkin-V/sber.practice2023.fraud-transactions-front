import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import modalWindowStore from "../../strore/modalWindowStore";
import ContentModalWindow from "./ContentModalWindow/contentModalWindow";
import style from "./modalWindow.module.css"

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
        <div onClick={onClose} className={style.outer_area}>
            <div onClick={(e) => e.stopPropagation()} className={style.modal_window}>

                <div className={style.modal_title}>
                    <h3>Транзакция № {modalWindowStore.title}</h3>
                </div>
                <ContentModalWindow transaction={modalWindowStore.content} />
                <div className={style.modal_footer}>
                    <button onClick={onClose} className = {style.button_close}>Закрыть</button>
                </div>

            </div>
        </div>
    );
})

export default ModalWindow;