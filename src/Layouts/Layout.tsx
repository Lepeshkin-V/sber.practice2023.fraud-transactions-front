import Header from "../components/Header/header";
import styles from './layout.module.css'

type props = React.HTMLAttributes<HTMLDivElement>;

const Layout = ({children}:props) => {
    return (
        <div className={styles.wrapper}>
            <Header />
            <main>{children}</main>
        </div>
    );

}

export default Layout;