import styles from "../styles/sidebar.module.scss";

export default function index() {
    return(
        <div className={styles.menu}>
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