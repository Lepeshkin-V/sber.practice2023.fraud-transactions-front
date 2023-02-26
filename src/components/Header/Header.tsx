import style from "./header.module.css"
const Head = () => {
    return (
        <header className={style.header}>
            <p className={style.title}>Fraud Dashboard</p>
        </header>
    )
}

export default Head;