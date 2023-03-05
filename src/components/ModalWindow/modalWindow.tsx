import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import modalWindowStore from "../../strore/modalWindowStore";
import ContentModalWindow from "./ContentModalWindow/contentModalWindow";
import style from "./modalWindow.module.css"
import { AiFillCloseCircle } from 'react-icons/ai'
import { FaExclamationTriangle } from 'react-icons/fa'
import { BsCheckCircleFill } from 'react-icons/bs'

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

    const frodDesignate = (countFrod: number) => {
        if (countFrod  >= 3) {
            return <FaExclamationTriangle style={{ color: '#E85A4F', paddingBottom: 5, }} />
        }
        else
            return <BsCheckCircleFill style={{ color: '#8E8D8a', paddingBottom: 5, fontSize:25 }} />
    }

    return (
        <div onClick={onClose} className={style.outer_area}>
            <div onClick={(e) => e.stopPropagation()} className={style.modal_window}>

                <div className={style.modal_title}>
                    <h3>Транзакция № {modalWindowStore.title} {frodDesignate(modalWindowStore.content.fraud.length)}</h3>
                    <span className={style.modal_close} onClick={onClose}>
                        < AiFillCloseCircle style={{ color: '#8E8D8a', fontSize: '35px' }} />
                    </span>
                </div>
                <ContentModalWindow transaction={modalWindowStore.content} />
                <div className={style.modal_footer}>
                    <button onClick={onClose} className={style.button_close}>Закрыть</button>
                </div>

            </div>
        </div>
    );
})

export default ModalWindow;