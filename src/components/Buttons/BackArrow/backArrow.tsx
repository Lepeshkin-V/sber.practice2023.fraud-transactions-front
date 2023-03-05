import { NavLink } from "react-router-dom"
import { IoArrowUndoSharp } from 'react-icons/io5'
import style from '../buttons.module.css'

interface PropsArrow {
    page: number
}

const BackArrow = (props: PropsArrow) => {
    return (
    <NavLink to={`/home/page/${props.page}`}>
        <button className={style.buttons}><IoArrowUndoSharp size={30}/></button>
    </NavLink>
    );
}

export default BackArrow;