import { useEffect } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import scoresStore from "../../strore/scoresStore";
import style from './changeScoresWindow.module.css'
import ChangeScoresWindowContent from "./ChangeScoresWindowContent/changeScoresWindowContent";

interface ChangeScoresWindowProps {
    visible: boolean,
    onClose: () => void
}

const ChangeScoresWindow = ({
    visible = false,
    onClose
}: ChangeScoresWindowProps) => {

    const onKeyDown = ({ key }: KeyboardEvent) => {
        switch (key) {
            case 'Escape':
                onClose();
                break;
        }
    }
    useEffect(() => {
        scoresStore.getScores();
        document.addEventListener('keydown', onKeyDown)
        return () => document.removeEventListener('keydown', onKeyDown)
    });
    if (!visible) return null;
    return (
        <div onClick={onClose} className={style.outer_area}>
            <div onClick={(e) => e.stopPropagation()} className={style.modal_window}>
                <div className={style.modal_title}>
                    <h3>Изменение весов</h3>
                    <span className={style.modal_close} onClick={onClose}>
                        < AiFillCloseCircle style={{ color: '#8E8D8a', fontSize: '35px' }} />
                    </span>
                </div>
                <ChangeScoresWindowContent/>
                <div className={style.modal_footer}>
                    <button onClick={onClose} className={style.button_close}>Закрыть</button>
                </div>

            </div>
        </div>
    )
}

export default ChangeScoresWindow;