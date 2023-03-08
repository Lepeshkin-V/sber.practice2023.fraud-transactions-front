import Footer from "../components/Footer/footer";
import Header from "../components/Header/header";
import styles from './layout.module.css'

type props = React.HTMLAttributes<HTMLDivElement>;

const Layout = ({children}:props) => {
    
    return (
        <body className={styles.wrapper}>
            <Header />
            <main>{children}</main>
            <Footer />
        </body>
    );

}

export default Layout;