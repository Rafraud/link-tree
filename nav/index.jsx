import styles from "../styles/sidebar.module.scss";

export default function index() {
    return(
        <div className={`flex items-center w-full ${styles.menu}`}>
            <div className={styles.body}>
                <div className={styles.nav}>
                    <div className={styles.header}>
                        <p>Contact</p>
                        {/* Contact form here */}
                    </div>
                </div>
            </div>
        </div>
    )
}