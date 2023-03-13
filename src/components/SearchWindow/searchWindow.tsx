import { useEffect } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import SearchField from "./searchField/searchField";
import style from './searchWindow.module.css'

interface SearchWindowProps {
    visible: boolean,
    onClose: () => void
}

const SearchWindow = ({
    visible = false,
    onClose
}: SearchWindowProps) => {

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
    if (!visible) return null;
    return (
        <div onClick={onClose} className={style.outer_area}>
            <div onClick={(e) => e.stopPropagation()} className={style.modal_window}>
                <div className={style.modal_title}>
                    <h3>Поиск</h3>
                    <span className={style.modal_close} onClick={onClose}>
                        < AiFillCloseCircle style={{ color: '#8E8D8a', fontSize: '35px' }} />
                    </span>
                </div>
                <SearchField />
                <div className={style.modal_footer}>
                    <button onClick={onClose} className={style.button_close}>Закрыть</button>
                </div>

            </div>
        </div>
    )
}

export default SearchWindow;