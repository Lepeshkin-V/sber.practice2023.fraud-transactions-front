import { observer } from "mobx-react-lite";
import Clock from "../Clock/clock";
import LegendTable from "../LegendTable/legendTable";
import style from "./header.module.css"
const Head = observer(() => {
    const legend = () => {
            return <LegendTable />
    }
    return (
        <header>
            <Clock />
            <p className={style.title}>Fraud Dashboard</p>
            {legend()}
        </header>
    )
})

export default Head;