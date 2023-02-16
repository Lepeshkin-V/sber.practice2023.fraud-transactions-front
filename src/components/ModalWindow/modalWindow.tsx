import { ReactElement, useEffect } from "react";
import { TransactionType } from "../../common/types";

interface ModalWindowProps {
    visible: boolean,
    title: string,
    content: ReactElement|string,
    onClose: () => void
}

const ModalWindow = ({
    visible = false,
    title = '',
    content = '',
    onClose
}: ModalWindowProps) => {

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
        <div onClick={onClose}>
            <div onClick={(e) => e.stopPropagation()}>
                <div>
                    <h3>Заголовок</h3>
                </div>

            </div>
        </div>
    );
}

export default ModalWindow;